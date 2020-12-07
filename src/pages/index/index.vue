<template lang="wxml">
	<view class="content">
		<me-banner></me-banner>
        <me-gongge v-for="(item,index) in fenleis" :name="item.name" :goto="item.goto" :content="item.list" :key="index"></me-gongge>
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
                    goto: "url", // 更多去往的地址
                    list: [
                        // 九宫格主题内容
                        {
                            img: require("@/static/gongge/1.jpg"),
                            listname: "被众神捡到的男孩第一季",
                            jishu: "10",
                        },
                        {
                            img: require("@/static/gongge/2.jpg"),
                            listname: "成神之日",
                            jishu: "9",
                        },
                        {
                            img: require("@/static/gongge/3.jpg"),
                            listname: "魔法科高校的劣等生来访者篇",
                            jishu: "9",
                        },
                        {
                            img: require("@/static/gongge/4.jpg"),
                            listname: "樱与抱月第一季",
                            jishu: "9",
                        },
                        {
                            img: require("@/static/gongge/5.jpg"),
                            listname: "One Room第三季",
                            jishu: "9",
                        },
                        {
                            img: require("@/static/gongge/6.jpg"),
                            listname: "西顿学园第一季",
                            jishu: "13",
                        },
                        {
                            img: require("@/static/gongge/7.jpg"),
                            listname: "辉夜姬想让人告白 天才们的恋爱头脑战第二季",
                            jishu: "12",
                        },
                        {
                            img: require("@/static/gongge/8.jpg"),
                            listname: "宇崎酱想要玩耍第一季",
                            jishu: "12",
                        },
                        {
                            img: require("@/static/gongge/9.jpg"),
                            listname: "我的青春恋爱物语果然有问题第三季",
                            jishu: "12",
                        },
                    ],
                },
                {
                    name: "电影", // 名字
                    goto: "url", // 更多去往的地址
                    list: [
                        // 九宫格主题内容
                        {
                            img: require("@/static/gongge/1.jpg"),
                            listname: "被众神捡到的男孩第一季",
                            jishu: "10",
                        },
                        {
                            img: require("@/static/gongge/2.jpg"),
                            listname: "成神之日",
                            jishu: "9",
                        },
                        {
                            img: require("@/static/gongge/3.jpg"),
                            listname: "魔法科高校的劣等生",
                            jishu: "9",
                        },
                        {
                            img: require("@/static/gongge/4.jpg"),
                            listname: "樱与抱月第一季",
                            jishu: "9",
                        },
                        {
                            img: require("@/static/gongge/5.jpg"),
                            listname: "One Room第三季",
                            jishu: "9",
                        },
                        {
                            img: require("@/static/gongge/6.jpg"),
                            listname: "西顿学园第一季",
                            jishu: "13",
                        },
                        {
                            img: require("@/static/gongge/7.jpg"),
                            listname: "辉夜姬想让人告白 天才们的恋爱头脑战第二季",
                            jishu: "12",
                        },
                        {
                            img: require("@/static/gongge/8.jpg"),
                            listname: "宇崎酱想要玩耍第一季",
                            jishu: "12",
                        },
                        {
                            img: require("@/static/gongge/9.jpg"),
                            listname: "我的青春恋爱物语果然有问题第三季",
                            jishu: "12",
                        },
                    ],
                },
            ],
        };
    },
    onLoad() {},
    methods: {},
    created() {},
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
me-banner,
me-gongge {
    padding-top: 5px;
    margin-bottom: 15px;
    background-color: #fff;
}
</style>
