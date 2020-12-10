<template xlang="wxml">
    <view class="content">
        <view class="item-box">
            <image
                class="item-box-image"
                src=""
            />
            <text class="item-box-texts">
                名字
            </text>
            <text class="item-box-texts">
                更新至：
                <text class="item-box-text">12</text>
            </text>
        </view>
    </view>
</template>

<script>
import uniDrawer from "@dcloudio/uni-ui/lib/uni-drawer/uni-drawer.vue";

export default {
    name: "",
    components: {
        uniDrawer,
    },
    props: {},
    data() {
        return {
            fclass: [],
        };
    },
    computed: {},
    watch: {},
    created() {},
    mounted() {},
    methods: {
        // 分类搜索
        // ("http://129.204.87.3:8877/getsortdata_all_z.php", {
	    //             action: fj_action_,
	    //             page: fj_page_,
	    //             year:fj_year,
	    //             area:fj_area,
	    //             class:fj_class,
	    //             dect:dect,
	    //             id:fj_id_
	    //  },
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
        .item-box-image {
            width: 100%;
            flex-grow: 1;
            margin-bottom: 5px;
        }
        .item-box-texts {
            align-items: flex-end;
            .item-box-text {
                color: #1ca591;
            }
        }
    }
    .item-box:nth-child(3n + 1) {
        margin-left: 2.5%;
    }
}
</style>
