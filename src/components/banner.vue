<template xlang="wxml">
    <view>
        <uni-swiper-dot :info="info" :current="current" :mode="mode">
            <swiper @change="change">
                <swiper-item v-for="item in info" :key="item">
                    <view class="big l">
                        <text>{{ item.banner1 }}</text>
                    </view>
                    <view class="big r">
                        <view class="small">
                            <text>{{ item.banner2 }}</text>
                        </view>
                        <view class="small">
                            <text>{{ item.banner3 }}</text>
                        </view>
                    </view>
                </swiper-item>
            </swiper>
        </uni-swiper-dot>
    </view>
</template>

<script>
import { uniSwiperDot } from "@dcloudio/uni-ui";
export default {
    name: "",
    components: {
        uniSwiperDot,
    },
    props: {},
    data() {
        return {
            info: [
                {
                    banner1: "内容 A1",
                    banner2: "内容 A2",
                    banner3: "内容 A3",
                },
                {
                    banner1: "内容 B1",
                    banner2: "内容 B2",
                    banner3: "内容 B3",
                },
                {
                    banner1: "内容 C1",
                    banner2: "内容 C2",
                    banner3: "内容 C3",
                },
            ],
            current: 0,
            mode: "round",
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
}
.big {
    height: 100%;
}
.l {
    width: 500rpx;
}
.r {
    width: 250rpx;
    .small {
        height: 50%;
    }
}
</style>
