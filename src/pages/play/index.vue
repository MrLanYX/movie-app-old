<template xlang="wxml">
    <view class="content">
        <text class="top-name">{{cun.name}}</text>
        <video
            :src="playing"
            class="play"
            page-gesture="true"
        />
        <view class="xuan">
            <text class="playname">线路</text>
            <uni-fav
                :checked="checked"
                @click="shoucang"
                bg-color-checked="#ff9423"
            ></uni-fav>
        </view>
        <view class="xuan">
            <text
                class="playit"
                v-for="(xian,index) in playiturl"
                :key="index"
                @click="changeXian(index)"
                :class="{open:playxian==index}"
            >线路{{xian.id}}</text>
        </view>
        <view class="xuan">
            <text class="playname">选集</text>
        </view>
        <view class="xuan">
            <text
                class="playit"
                v-for="(jishu,index) in playiturl[playxian].url"
                :key="index"
                @click="changeJishu(index)"
                :class="{open:playjishu==index}"
            >第{{index+1}}集</text>
        </view>
        <view style="height:40px"></view>
    </view>
</template>

<script>
import uniFav from "@dcloudio/uni-ui/lib/uni-fav/uni-fav.vue";

export default {
    name: "",
    components: {
        uniFav,
    },
    props: {},
    data() {
        return {
            cun: {
                playid: 0, // 资源号
                name: "", // 名字
                img: "", // 图片地址
            },
            playing: "",
            playxian: 0, // 选择播放线路
            playjishu: 0, // 选择播放集数
            playiturl: [
                {
                    id: 0,
                    url: [],
                },
            ],
            playiturlkong: [
                {
                    id: 0,
                    url: [],
                },
                {
                    id: 0,
                    url: [],
                },
                {
                    id: 0,
                    url: [],
                },
                {
                    id: 0,
                    url: [],
                },
                {
                    id: 0,
                    url: [],
                },
            ],
            checked: false, // 收藏
        };
    },
    computed: {},
    watch: {},
    created() {},
    mounted() {},
    methods: {
        // 改播放线路
        changeXian: function (index) {
            console.log(index);
            this.playxian = index;
            this.player();
        },
        // 改播放集数
        changeJishu: function (index) {
            console.log(index);
            this.playjishu = index;
            this.player();
        },
        // 真正播放地址更改
        player: function () {
            console.log(this.playiturl[this.playxian].url[this.playjishu]);
            this.playing = this.playiturl[this.playxian].url[this.playjishu];
        },
        // 每次播放记录历史记录
        setPlayHistory: function () {
            var that = this;
            var obj = "";
            // 先获取原先播放记录
            uni.getStorage({
                key: "playHistory",
                success: function (res) {
                    console.log("有数据");
                    // 取出数据
                    obj = res.data;
                    // 判断历史记录是否原有记录
                    for (const key in obj) {
                        if (Object.hasOwnProperty.call(obj, key)) {
                            if (obj[key].playid == that.cun.playid) {
                                obj.splice(key, 1);
                            }
                        }
                    }
                    // 加入新数据
                    obj.unshift(that.cun);
                    // 加工好要存的数据 请求存入缓存
                    uni.setStorage({
                        key: "playHistory",
                        data: obj,
                        success: function () {
                            console.log("成功将记录存入");
                        },
                    });
                },
                fail: function () {
                    console.log("没数据");
                    uni.setStorage({
                        key: "playHistory",
                        data: [that.cun],
                        success: function () {
                            console.log("成功将记录存入");
                        },
                    });
                },
            });
        },
        // 收藏按钮
        shoucang: function () {
            // this.checked=!this.checked
            var that = this;
            if (this.checked) {
                // 如果判断已收藏
                uni.getStorage({
                    key: "collection",
                    success: function (res) {
                        for (let index = 0; index < res.data.length; index++) {
                            if (that.cun.id == res.data[index].id) {
                                var arr = res.data;
                                arr.splice(index, 1);
                                uni.setStorage({
                                    key: "collection",
                                    data: arr,
                                    success: function (res) {},
                                });
                                console.log("取消收藏");
                                that.checked = false;
                                break
                            }
                        }
                    },
                });
            } else {
                // 没有收藏准备收藏
                uni.getStorage({
                    key: "collection",
                    success: function (res) {
                        var arr = res.data;
                        console.log(arr);
                        arr.unshift(that.cun);
                        uni.setStorage({
                            key: "collection",
                            data: arr,
                            success: function (res) {},
                        });
                        console.log("增加收藏");
                        that.checked = true;
                    },
                });
            }
        },
        // 判断按钮状态
        btnflag: function () {
            var that = this;
            uni.getStorage({
                key: "collection",
                success: function (res) {
                    console.log("有数据");
                    for (let index = 0; index < res.data.length; index++) {
                        if (that.cun.playid == res.data[index].playid) {
                            console.log("判断有收藏");
                            that.checked = true;
                            break
                        } else {
                            console.log("判断为没有收藏");
                            that.checked = false;
                        }
                    }
                },
                fail: function () {
                    console.log("没数据");
                    uni.setStorage({
                        key: "collection",
                        data: [],
                        success: function (res) {},
                    });
                    console.log("判断收藏为空");
                    that.checked = false;
                },
            });
        },
    },
    onShow() {
        this.setPlayHistory();
        this.btnflag();
        console.log(1111);
    },
    onLoad(obj) {
        // 获取视频线路地址
        var that = this;
        that.cun.img = obj.img;
        that.cun.name = obj.name;
        that.cun.playid = obj.id;
        var url = "http://t.mtyee.com/ne2/s" + that.cun.playid + ".js";
        uni.request({
            url: url,
            success: (res) => {
                that.playiturl = that.playiturlkong; // 先清空用于存储的数据
                var data = res.data.split(";"); // 分割返回数据
                var i = 0; // 申明第一条线路对应数组第一位 后自加
                var patt = /(?<=").*?(?=")/; // 双引号正则规则
                // 遍历全部
                for (const key in data) {
                    // 判断是否为私有属性
                    if (data.hasOwnProperty(key)) {
                        // 判断是否有“”
                        if (patt.test(data[key])) {
                            // 分割“”提取地址
                            var itemoneurl = patt
                                .exec(data[key])[0]
                                .split(",")[0];
                            // console.log(itemoneurl);
                            // 判断地址格式是否为http
                            if (/http/.test(itemoneurl)) {
                                // 添加到data中
                                that.playiturl[i].url.push(itemoneurl);
                            }
                            // 目前不想解析非http的视频地址 直接不赋值进去
                            // else {
                            //     // 格式错误给空
                            //     that.playiturl[i].url.push(null);
                            // }
                        }
                        // 遇到每条线路的结束点
                        if (/_ed/.test(data[key])) {
                            that.playiturl[i].id = i + 1; // 添加线路标号
                            i++; // 线路号自加
                        }
                    }
                }
                // 去除多余的空线路
                for (const key in that.playiturl) {
                    if (that.playiturl.hasOwnProperty(key)) {
                        if (that.playiturl[key].id == 0) {
                            that.playiturl.splice(key);
                        }
                    }
                }
                console.log(that.playiturl);
            },
        });
    },
};
</script>

<style lang="scss">
.content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.top-name {
    max-width: 700rpx;
    height: 40px;
    line-height: 40px;
    font-size: larger;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.play {
    width: calc(750rpx - 30px);
}
.xuan {
    width: 100%;
    height: 100%;
    padding: 0 15px;
    margin-top: 15px;
    display: flex;
    flex-flow: row wrap;
    align-content: flex-start;
    .playname {
        width: 80%;
    }
    .playit {
        width: 20%;
        height: 2.2rem;
        line-height: 2.2rem;
        color: #777;
        text-align: center;
        border-radius: 6px;
        border: 1px solid #cccccc50;
    }
    .open {
        border: 1px solid #ff9234;
        color: #ff9234;
    }
}
</style>
