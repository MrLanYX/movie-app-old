<template xlang="wxml">
    <view class="content">
        <view class="search-top">
            <uni-nav-bar right-text="搜索">
                <input
                    class="search-top-input"
                    placeholder="请输入搜索的内容"
                    slot="default"
                />
            </uni-nav-bar>
        </view>
        <view class="search-main">
            <view class="search-main-top">
                <text>历史记录</text>
                <view>
                    <text>删除</text>
                    <uni-icons type="trash" color="#777" />
                </view>
            </view>
            <view class="search-main-lists">
                <text class="search-main-list">名字一</text>
                <text class="search-main-list">随时随地</text>
                <text class="search-main-list">士大夫发射点发</text>
                <text class="search-main-list">名字一撒旦发射点发顺丰发</text>
                <text class="search-main-list">名字一</text>
                <text class="search-main-list">名字一是多少</text>
                <text class="search-main-list">名沙发沙发字一</text>
                <text class="search-main-list">名字</text>
                <text class="search-main-list">名字是谁冯绍峰一</text>
                <text class="search-main-list">名字深度一</text>
                <text class="search-main-list">名字都是一</text>
                <text class="search-main-list">名字</text>
                <text class="search-main-list">名字一</text>
                <text class="search-main-list">随时随地</text>
                <text class="search-main-list">士大夫发射点发</text>
                <text class="search-main-list">名字一撒旦发射点发顺丰发</text>
                <text class="search-main-list">名字一</text>
                <text class="search-main-list">名字一是多少</text>
                <text class="search-main-list">名沙发沙发字一</text>
                <text class="search-main-list">名字</text>
                <text class="search-main-list">名字是谁冯绍峰一</text>
                <text class="search-main-list">名字深度一</text>
                <text class="search-main-list">名字都是一</text>
                <text class="search-main-list">名字</text>
                <text class="search-main-list">名字一</text>
                <text class="search-main-list">随时随地</text>
                <text class="search-main-list">士大夫发射点发</text>
                <text class="search-main-list">名字一撒旦发射点发顺丰发</text>
                <text class="search-main-list">名字一</text>
                <text class="search-main-list">名字一是多少</text>
                <text class="search-main-list">名沙发沙发字一</text>
                <text class="search-main-list">名字</text>
                <text class="search-main-list">名字是谁冯绍峰一</text>
                <text class="search-main-list">名字深度一</text>
                <text class="search-main-list">名字都是一</text>
                <text class="search-main-list">名字</text>
                <text class="search-main-list">名字一</text>
                <text class="search-main-list">随时随地</text>
                <text class="search-main-list">士大夫发射点发</text>
                <text class="search-main-list">名字一撒旦发射点发顺丰发</text>
                <text class="search-main-list">名字一</text>
                <text class="search-main-list">名字一是多少</text>
                <text class="search-main-list">名沙发沙发字一</text>
                <text class="search-main-list">名字</text>
                <text class="search-main-list">名字是谁冯绍峰一</text>
                <text class="search-main-list">名字深度一</text>
                <text class="search-main-list">名字都是一</text>
                <text class="search-main-list">名字</text>
            </view>
        </view>
    </view>
</template>

<script>
import uniNavBar from "@dcloudio/uni-ui/lib/uni-nav-bar/uni-nav-bar.vue";
import uniIcons from "@dcloudio/uni-ui/lib/uni-icons/uni-icons.vue";

export default {
    name: "",
    components: {
        uniNavBar,
        uniIcons,
    },
    props: {},
    data() {
        return {};
    },
    computed: {},
    watch: {},
    created() {},
    mounted() {},
    methods: {},
    onShow() {
        if (
            typeof this.$mp.page.getTabBar === "function" &&
            this.$mp.page.getTabBar()
        ) {
            this.$mp.page.getTabBar().setData({
                selected: 0,
            });
        }
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
.search-top {
    width: 750rpx;
    .search-top-input {
        width: 600rpx;
        margin-left: -100rpx;
        padding: 5px;
        padding-left: 15px;
        background-color: #f5f5f5;
        border-radius: 1.4rem;
    }
}
.search-main {
    width: 100%;
    height: calc(100vh - 44px - 80rpx);
    padding: 15px;
    color: #777;
    display: flex;
    flex-direction: column;
    .search-main-top {
        width: 100%;
        display: flex;
        justify-content: space-between;
        margin-top: 5px;
    }
    .search-main-lists {
        flex: 1;
        margin-top: 10px;
        overflow: scroll;
        display: flex;
        flex-flow: row wrap;
        align-content: flex-start;
        .search-main-list {
            display: inline-block;
            height: 1.8rem;
            line-height: 1.8rem;
            border-radius: 1.8rem;
            color: #000;
            padding: 0 10px;
            background-color: #fff;
            border: 1px solid #999;
            margin-right: 10px;
            margin-bottom: 10px;
        }
    }
}
</style>
