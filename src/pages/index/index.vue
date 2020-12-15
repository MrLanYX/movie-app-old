<template lang="wxml">
	<view class="content">
		<me-banner></me-banner>
        <me-gongge v-for="(item,index) in fenleis" :name="item.name" :goto="item.goto" :content="item.list" :key="index"></me-gongge>
        <view class="bottom"></view>
	</view>
</template>

<script>
import meBanner from "@/components/banner.vue";
import meGongge from "@/components/3X3.vue";
export default {
    components: {
        meBanner,
        meGongge,
    },
    data() {
        return {
            fenleis: [
                // 第一个宫格图区块
                {
                    name: "动漫", // 名字
                    goto: "acg", // 更多去往的地址
                    list: [
                        // 九宫格主题内容
                    ],
                },
                {
                    name: "电影", // 名字
                    goto: "mov", // 更多去往的地址
                    list: [
                        // 九宫格主题内容
                    ],
                },
                {
                    name: "电视剧", // 名字
                    goto: "tv", // 更多去往的地址
                    list: [
                        // 九宫格主题内容
                    ],
                },
                {
                    name: "综艺", // 名字
                    goto: "zongyi", // 更多去往的地址
                    list: [
                        // 九宫格主题内容
                    ],
                },
            ],
        };
    },
    onLoad() {},
    methods: {
        qinqiu: function (e, i) {
            var that = this;
            uni.request({
                url: "http://129.204.87.3:8877/getsortdata_all_z.php",
                data: {
                    action: e,
                    page: 1,
                    year: 0,
                    area: "all",
                    class: 0,
                    dect: "",
                    id: "",
                },
                success: (res) => {
                    var liebiao = res.data.split('<li class="mb">');
                    for (let index = 1; index < 10; index++) {
                        var datamessage = liebiao[index].split('"');
                        // 防止集数为空
                        var ji = datamessage[24].split("<")[0].split(">")[1];
                        ji = ji ? ji : "全一集";
                        that.fenleis[i].list.push({
                            id: datamessage[3].split("/")[2],
                            listname: datamessage[5],
                            img: datamessage[13],
                            jishu: ji,
                        });
                    }
                },
            });
        },
    },
    created() {
        this.qinqiu("acg", 0);
        this.qinqiu("mov", 1);
        this.qinqiu("tv", 2);
        this.qinqiu("zongyi", 3);
        console.log(this.fenleis);
    },
    onShow() {
        if (
            typeof this.$mp.page.getTabBar === "function" &&
            this.$mp.page.getTabBar()
        ) {
            this.$mp.page.getTabBar().setData({
                selected: 2,
            });
        }
    },
};
</script>

<style lang="scss">
page {
    width: 100vw;
    height: 100vh;
    background-color: #f5f5f5;
}
.content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.bottom {
    height: 140rpx;
}
me-banner,
me-gongge {
    padding-top: 5px;
    margin-bottom: 15px;
    background-color: #fff;
}
</style>
