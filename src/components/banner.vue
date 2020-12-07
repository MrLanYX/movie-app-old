<template xlang="wxml">
    <!-- 通用式排行榜banner图 -->
    <!-- 一二式左右划分 -->
    <view>
        <uni-swiper-dot
            :info="info"
            :current="current"
            mode="round"
            :dotsStyles="dotsStyles"
        >
            <swiper @change="change" autoplay="true">
                <swiper-item v-for="(item,index) in info" :key="index">
                    <view class="big l item">
                        <image :src="item.banner1" mode="center" />
                        <text>123</text>
                    </view>
                    <view class="big r">
                        <view class="small item">
                            <image :src="item.banner2" mode="center" />
                            <text>123</text>
                        </view>
                        <view class="small item">
                            <image :src="item.banner3" mode="center" />
                            <text>123</text>
                        </view>
                    </view>
                </swiper-item>
            </swiper>
        </uni-swiper-dot>
    </view>
</template>

<script>
import uniSwiperDot from "@dcloudio/uni-ui/lib/uni-swiper-dot/uni-swiper-dot.vue";

export default {
    name: "",
    components: {
        uniSwiperDot,
    },
    props: {},
    data() {
        return {
            info: [
                // 轮播图数据
                {
                    banner1: "./../static/banner.jpg",
                    banner2: "./../static/banner.jpg",
                    banner3: "./../static/banner.jpg",
                },
                {
                    banner1: "./../static/banner.jpg",
                    banner2: "./../static/banner.jpg",
                    banner3: "./../static/banner.jpg",
                },
                {
                    banner1: "./../static/banner.jpg",
                    banner2: "./../static/banner.jpg",
                    banner3: "./../static/banner.jpg",
                },
            ],
            current: 0, // 当前轮播图序号
            dotsStyles: {
                // 指示点样式
                backgroundColor: "rgba(255, 255, 255, .4)", // 未选择颜色
                border: 0, // 未选择边框
                selectedBackgroundColor: "#f5f5f5", // 选中颜色
                selectedBorder: 0, // 选中时边框
                bottom: 4, // 距离底部距离
            },
        };
    },
    computed: {},
    watch: {},
    created() {},
    mounted() {},
    methods: {
        change(e) {
            this.current = e.detail.current;
        },
    },
};
</script>

<style lang="scss">
swiper {
    width: 750rpx;
    height: 300rpx;
}
swiper-item {
    display: flex;
    image {
        width: 100%;
        height: 100%;
    }
}
.big {
    border: 1px solid #ccc;
    height: 100%;
}
.l {
    width: 500rpx;
}
.r {
    width: 250rpx;
    .small {
        width: 100%;
        height: 50%;
    }
    .small:first-child {
        border-bottom: 1px solid #ccc;
    }
}
.item {
    position: relative;
    text {
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 30px;
        line-height: 30px;
        background-color: rgba(0, 0, 0, 0.3);
        color: #fff;
    }
}
</style>
