<template xlang="wxml">
    <view class="content">
        <text class="top-name">{{name}}</text>
        <video
            :src="playing"
            class="play"
            page-gesture="true"
        />
        <view class="xuan">
            <text class="playname">线路</text>
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
export default {
    name: "",
    components: {},
    props: {},
    data() {
        return {
            playid: 54383, // 资源号
            playing: "",
            name: "",
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
    },
    onShow() {},
    onLoad(obj) {
        // 获取视频线路地址
        var that = this;
        that.name = obj.name;
        that.playid = obj.id;
        var url = "http://t.mtyee.com/ne2/s" + that.playid + ".js";
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
        width: 100%;
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
