<template xlang="wxml">
    <view class="content">
        <view class="c-top">
            <uni-segmented-control
                :current="current"
                :values="items"
                @clickItem="onClickItem"
                style-type="button"
                active-color="#ff9234"
            ></uni-segmented-control>
        </view>

        <view class="c-main">
            <view
                class="c-box"
                v-if="current == 0"
                scroll-y="true"
            >
                <view class="c-item" v-for="i in 10" :key="i">
                    <image class="c-item-image" />
                    <text class="c-item-text">11</text>
                </view>
            </view>
            <scroll-view
                class="c-box"
                v-if="current == 1"
            >
                2
            </scroll-view>
        </view>
    </view>
</template>

<script>
import uniSegmentedControl from "@dcloudio/uni-ui/lib/uni-segmented-control/uni-segmented-control.vue";

export default {
    name: "",
    components: {
        uniSegmentedControl,
    },
    props: {},
    data() {
        return {
            items: ["我的收藏", "浏览历史"],
            current: 0,
        };
    },
    computed: {},
    watch: {},
    created() {},
    mounted() {},
    methods: {
        onClickItem(e) {
            if (this.current !== e.currentIndex) {
                this.current = e.currentIndex;
            }
        },
    },
    onShow() {
        if (
            typeof this.$mp.page.getTabBar === "function" &&
            this.$mp.page.getTabBar()
        ) {
            this.$mp.page.getTabBar().setData({
                selected: 3,
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
.c-top {
    margin-top: 15px;
    .segmented-control__item {
        padding: 0 15px;
    }
}
.c-main {
    width: 100vw;
    height: 85vh;
    padding: 15px;
    .c-box {
        width: 100%;
        height: 100%;
        overflow: scroll;
        display: flex;
        flex-flow: row wrap;
        align-content: flex-start;
        .c-item {
            width: 31%;
            height: 300rpx;
            background-color: #fff;
            margin-left: 3%;
            margin-top: 3%;
            border-radius: 6px;
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            overflow: hidden;
            .c-item-image {
                width: 100%;
                flex-grow: 1;
                margin-bottom: 5px;
            }
            .c-item-texts {
                align-items: flex-end;
                height: 32px;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
            }
        }
        .c-item:nth-child(3n + 1) {
            margin-left: 0;
        }
        .c-item:nth-child(-n+3){
            margin-top: 0;
        }
    }
}
</style>
