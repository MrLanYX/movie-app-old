<template xlang="wxml">
    <view class="content">
        <view
            class="item-box"
            v-for="item in fclass"
            :key="item"
        >
            <image
                class="item-box-image"
                :src="item.url"
            />
            <text class="item-box-texts">{{item.name}}</text>
            <text class="item-box-text">{{item.jishu}}</text>
        </view>

        <uni-drawer ref="draw">
            <scroll-view
                scroll-y="true"
                style="padding:30rpx;height:90%;width:85%"
            >
                <uni-collapse accordion="true">
                    <uni-collapse-item :title="'分类：'+action.wenzi">
                        <view
                            class="fclass-dan"
                            v-for="(item,index) in classA"
                            :key="index"
                            @click="yes(0,item,index)"
                        >
                            {{item.wenzi}}
                        </view>
                    </uni-collapse-item>
                    <uni-collapse-item showAnimation="true" :title="'剧情：'+classs.wenzi">
                        <view
                            class="fclass-dan"
                            hover-class="fclass-dian-anxia"
                            v-for="(item,index) in classB[action.juqinid]"
                            :key="index"
                            @click="yes(1,item)"
                        >
                            {{item.wenzi}}
                        </view>
                    </uni-collapse-item>
                    <uni-collapse-item :title="'年代：'+year">
                        <view
                            class="fclass-dan"
                            v-for="(item,index) in classC"
                            :key="index"
                            @click="yes(2,item)"
                        >
                            {{item}}
                        </view>
                    </uni-collapse-item>
                    <uni-collapse-item :title="'地区：'+area.wenzi">
                        <view
                            class="fclass-dan"
                            v-for="(item,index) in classD"
                            :key="index"
                            @click="yes(3,item)"
                        >
                            {{item.wenzi}}
                        </view>
                    </uni-collapse-item>
                </uni-collapse>
            </scroll-view>
        </uni-drawer>
        <view
            class="draw"
            @click="show"
        >
            <text class="draw-text">选择\n分类</text>
        </view>
    </view>
</template>

<script>
import uniDrawer from "@dcloudio/uni-ui/lib/uni-drawer/uni-drawer.vue";
import uniCollapse from "@dcloudio/uni-ui/lib/uni-collapse/uni-collapse.vue";
import uniCollapseItem from "@dcloudio/uni-ui/lib/uni-collapse-item/uni-collapse-item.vue";

export default {
    name: "",
    components: {
        uniDrawer,
        uniCollapse,
        uniCollapseItem,
    },
    props: {},
    data() {
        return {
            // 准备请求的类型
            action: {
                action: "acg",
                wenzi: "动漫",
                // 当前所处大分区号用于当前区域剧情检索 默认0
                juqinid:0
            },
            // 准备请求的页码
            page: 1,
            // 准备请求的年份
            year: 2020,
            // 准备请求的地区
            area: {
                area: "all",
                wenzi: "全部",
            },
            // 准备请求的剧情
            classs: {
                class:0,
                wenzi:"全部"
            },


            // 请求回拿到的数据
            fclass: [],
            // 类型分类集合
            classA: [
                {
                    action: "acg",
                    wenzi: "动漫",
                },
                {
                    action: "tv",
                    wenzi: "电视剧",
                },
                {
                    action: "mov",
                    wenzi: "电影",
                },
                {
                    action: "zongyi",
                    wenzi: "综艺",
                },
            ],
            // 分类集合 应对四种产生不同结果
            classB: [
                // 动漫区
                [
                    {id:0,wenzi:"全部"},
                    {id:71,wenzi:"搞笑"},
                    {id:72,wenzi:"经典"},
                    {id:73,wenzi:"热血"},
                    {id:74,wenzi:"催泪"},
                    {id:75,wenzi:"治愈"},
                    {id:76,wenzi:"猎奇"},
                    {id:78,wenzi:"励志"},
                    {id:80,wenzi:"战斗"},
                    {id:81,wenzi:"后宫"},
                    {id:82,wenzi:"机战"},
                    {id:84,wenzi:"恋爱"},
                    {id:85,wenzi:"百合"},
                    {id:86,wenzi:"科幻"},
                    {id:88,wenzi:"奇幻"},
                    {id:89,wenzi:"推理"},
                    {id:90,wenzi:"校园"},
                    {id:91,wenzi:"运动"},
                    {id:94,wenzi:"魔法"},
                    {id:95,wenzi:"历史"},
                    {id:101,wenzi:"伪娘"},
                    {id:102,wenzi:"美少女"},
                    {id:103,wenzi:"萝莉"},
                    {id:105,wenzi:"亲子"},
                    {id:107,wenzi:"青春"},
                    {id:108,wenzi:"冒险"},
                    {id:109,wenzi:"竞技"},
                ], 
                // 电视剧区
                [
                    {id:0,wenzi:"全部"},
                    {id:19,wenzi:"古装"},
                    {id:20,wenzi:"言情"},
                    {id:21,wenzi:"武侠"},
                    {id:22,wenzi:"偶像"},
                    {id:23,wenzi:"家庭"},
                    {id:24,wenzi:"青春"},
                    {id:25,wenzi:"都市"},
                    {id:26,wenzi:"爱情"},
                    {id:27,wenzi:"喜剧"},
                    {id:28,wenzi:"战争"},
                    {id:29,wenzi:"军旅"},
                    {id:30,wenzi:"谍战"},
                    {id:31,wenzi:"悬疑"},
                    {id:32,wenzi:"罪案"},
                    {id:33,wenzi:"穿越"},
                    {id:34,wenzi:"宫廷"},
                    {id:35,wenzi:"历史"},
                    {id:36,wenzi:"神话"},
                    {id:37,wenzi:"科幻"},
                    {id:38,wenzi:"年代"},
                    {id:39,wenzi:"农村"},
                    {id:40,wenzi:"商战"},
                    {id:41,wenzi:"剧情"},
                    {id:42,wenzi:"奇幻"},
                ], 
                // 电影区
                [
                    {id:0,wenzi:"全部"},
                    {id:1,wenzi:"喜剧"},
                    {id:2,wenzi:"悲剧"},
                    {id:3,wenzi:"爱情"},
                    {id:4,wenzi:"动作"},
                    {id:5,wenzi:"枪战"},
                    {id:6,wenzi:"犯罪"},
                    {id:7,wenzi:"惊悚"},
                    {id:8,wenzi:"恐怖"},
                    {id:9,wenzi:"悬疑"},
                    {id:10,wenzi:"动画"},
                    {id:11,wenzi:"家庭"},
                    {id:12,wenzi:"奇幻"},
                    {id:13,wenzi:"魔幻"},
                    {id:14,wenzi:"科幻"},
                    {id:15,wenzi:"战争"},
                    {id:16,wenzi:"青春"},
                    {id:17,wenzi:"剧情"},
                ], 
                // 综艺区
                [
                    {id:0,wenzi:"全部"},
                    {id:43,wenzi:"播报"},
                    {id:44,wenzi:"访谈"},
                    {id:45,wenzi:"搞笑"},
                    {id:46,wenzi:"游戏"},
                    {id:47,wenzi:"选秀"},
                    {id:48,wenzi:"时尚"},
                    {id:49,wenzi:"情感"},
                    {id:50,wenzi:"晚会"},
                    {id:51,wenzi:"曲艺"},
                    {id:52,wenzi:"美食"},
                    {id:53,wenzi:"少儿"},
                    {id:54,wenzi:"脱口秀"},
                    {id:55,wenzi:"职场"},
                    {id:56,wenzi:"相亲"},
                    {id:57,wenzi:"音乐"},
                    {id:58,wenzi:"伦理"},
                    {id:59,wenzi:"真人秀"},
                    {id:60,wenzi:"舞蹈"},
                    {id:61,wenzi:"亲子"},
                    {id:62,wenzi:"财经"},
                    {id:63,wenzi:"旅游"},
                    {id:64,wenzi:"益智"},
                    {id:65,wenzi:"竞技"},
                    {id:66,wenzi:"纪实"},
                    {id:67,wenzi:"生活"},
                    {id:68,wenzi:"盛会"},
                    {id:69,wenzi:"歌舞"},
                    {id:70,wenzi:"其它"},
                ]
            ],
            // 年份集合
            classC: [
                2020,
                2019,
                2018,
                2017,
                2016,
                2015,
                2014,
                2013,
                2012,
                2011,
                2010,
            ],
            // 地区集合
            classD: [
                {
                    area: "all",
                    wenzi: "全部",
                },
                {
                    area: "china",
                    wenzi: "中国",
                },
                {
                    area: "hk",
                    wenzi: "香港",
                },
                {
                    area: "tw",
                    wenzi: "台湾",
                },
                {
                    area: "england",
                    wenzi: "英国",
                },
                {
                    area: "american",
                    wenzi: "美国",
                },
                {
                    area: "korea",
                    wenzi: "韩国",
                },
                {
                    area: "thailand",
                    wenzi: "泰国",
                },
                {
                    area: "japan",
                    wenzi: "日本",
                },
            ],
        };
    },
    computed: {},
    watch: {},
    created() {
        this.searchClass();
    },
    mounted() {},
    methods: {
        // 分类搜索
        searchClass: function () {
            var that = this;
            uni.request({
                url: "http://129.204.87.3:8877/getsortdata_all_z.php",
                data: {
                    action: that.action.action,
                    page: that.page,
                    year: that.year,
                    area: that.area.area,
                    class: Number(that.classs.class),
                    dect: "",
                    id: "",
                },
                success: (res) => {
                    // 分割处理数据
                    var liebiao = res.data.split('<li class="mb">');
                    if (that.page==1) {
                        that.fclass=[]
                    }
                    for (let index = 1; index < liebiao.length; index++) {
                        var datamessage = liebiao[index].split('"');
                        that.fclass.push({
                            id:datamessage[3].split("/")[2],
                            name: datamessage[5],
                            url: datamessage[13],
                            jishu: datamessage[24].split("<")[0].split(">")[1],
                        });
                    }
                    console.log("请求成功");
                },
            });
        },
        // 显示抽屉
        show() {
            this.$refs.draw.open();
        },
        hide() {
            this.$refs.draw.close();
        },
        // 点击小分类传修改要传递的数据
        yes:function(i,str,index){
            // 点击属于新请求把page改回1
            this.page=1
            // i=0修改大分类 并且修改剧情循环目标号
            if (i==0) {
                this.action.juqinid=index
                this.action.action=str.action
                this.action.wenzi=str.wenzi
            }
            // i=1修改剧情
            if (i==1) {
                this.classs.class=str.id
                this.classs.wenzi=str.wenzi
            }
            // i=2修改年代
            if (i==2) {
                this.year=str
            }
            // i=3修改地区
            if (i==3) {
                this.area.area=str.area
                this.area.wenzi=str.wenzi
            }
            this.searchClass();
        }
    },
    onShow() {
        if (
            typeof this.$mp.page.getTabBar === "function" &&
            this.$mp.page.getTabBar()
        ) {
            this.$mp.page.getTabBar().setData({
                selected: 1,
            });
        }
    },
};
</script>

<style lang="scss">
.content {
    display: flex;
    // flex-direction: column;
    flex-wrap: wrap;
    justify-content: flex-start;
    padding-bottom: 80px;
    .item-box {
        width: 30%;
        height: 400rpx;
        background-color: #fff;
        margin-right: 2.5%;
        margin-top: 2.5%;
        border-radius: 6px;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        overflow: hidden;
        .item-box-image {
            width: 100%;
            flex-grow: 1;
            margin-bottom: 5px;
        }
        .item-box-texts {
            align-items: flex-end;
        }
        .item-box-text {
            align-items: flex-end;
            color: #1ca591;
        }
    }
    .item-box:nth-child(3n + 1) {
        margin-left: 2.5%;
    }
    .draw {
        position: fixed;
        right: 20px;
        top: 20px;
        width: 60px;
        height: 60px;
        background-color: #1ca591;
        border-radius: 50%;
        padding-top: 10px;
        box-shadow: 0 5px 10px #aaa;
        .draw-text {
            display: block;
            margin: auto;
            line-height: 20px;
            font-weight: bolder;
            color: #fff;
            text-align: center;
        }
    }
}
.fclass-dan {
    margin: 0 30rpx;
    padding: 30rpx 0;
    border-top: 1px solid #ccc;
}
.fclass-dian-anxia{
    background-color: #fff;
}
</style>
