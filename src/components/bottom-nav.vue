<template xlang="wxml">
    <view class="bottom-nav">
        <view class="bg">
            <view class="l">
                <view class="jiao"></view>
                <view class="li1" @click="change(0)">
                    <image v-if="!flag[0]" src="@/static/icon/search.svg" />
                    <image v-if="flag[0]" src="@/static/icon/search_fill.svg" />
                    <text :class="{ open: flag[0] }">搜索</text>
                </view>
                <view class="li2" @click="change(1)">
                    <image v-if="!flag[1]" src="@/static/icon/manage.svg" />
                    <image v-if="flag[1]" src="@/static/icon/manage_fill.svg" />
                    <text :class="{ open: flag[1] }">分类</text>
                </view>
            </view>
            <view class="r">
                <view class="jiao"></view>
                <view class="li4" @click="change(3)">
                    <image v-if="!flag[3]" src="@/static/icon/collection.svg" />
                    <image
                        v-if="flag[3]"
                        src="@/static/icon/collection_fill.svg"
                    />
                    <text :class="{ open: flag[3]}">收藏</text>
                </view>
                <view class="li5">
                    <image v-if="!flag[4]" src="@/static/icon/mine.svg" />
                    <image v-if="flag[4]" src="@/static/icon/mine_fill.svg" />
                    <text :class="{ open: flag[4] }">我的</text>
                </view>
            </view>
        </view>
        <view class="li3">
            <image v-if="!flag[3]" src="@/static/icon/homepage.svg" />
            <image v-if="flag[3]" src="@/static/icon/homepage_fill.svg" />
        </view>
    </view>
</template>

<script>
export default {
    name: "",
    components: {},
    props: {
        target: Number,
    },
    data() {
        return {
            flag: [false, false, true, false, false],
        };
    },
    computed: {},
    watch: {},
    created() {
        // 判断谁处于选中状态
        // if (this.target == 1) console.log(1);
        // if (this.target == 2) console.log(2);
        // if (this.target == 3) console.log(3);
    },
    mounted() {},
    methods: {
        change: function (index) {
            for (let i = 0; i < this.flag.length; i++) {
                this.flag[i]=false
            }
            this.flag[index] = true;
            console.log(this.flag);
        },
    },
};
</script>

<style lang="scss">
.bottom-nav {
    width: 750rpx;
    height: 98rpx;
    position: relative;
    .bg {
        width: 100%;
        height: 100%;
        .l,
        .r {
            width: 375rpx;
            height: 100%;
            float: left;
            background-color: #fff;
            border-top: 1px solid #ccc;
            display: flex;
            position: relative;
            .jiao {
                position: absolute;
                top: 0;
                width: 68rpx;
                height: 75rpx;
                background-color: #fff;
            }
            .li1,
            .li2,
            .li4,
            .li5 {
                width: 50%;
                height: 100%;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                justify-content: center;
                image {
                    width: 60rpx;
                    height: 60rpx;
                }
                text {
                    font-size: 12px;
                    color: #555;
                    margin-top: -10rpx;
                }
            }
        }
        .l {
            .jiao {
                right: 0;
                border-radius: 0 0 0 100%;
                border-left: 1px solid #ccc;
                border-bottom: 1px solid #ccc;
            }
            padding-right: 75rpx;
        }
        .r {
            .jiao {
                left: 0;
                border-radius: 0 0 100% 0;
                border-right: 1px solid #ccc;
                border-bottom: 1px solid #ccc;
            }
            padding-left: 75rpx;
        }
    }
    .li3 {
        position: absolute;
        top: -52rpx;
        left: 316rpx;
        width: 120rpx;
        height: 120rpx;
        border-radius: 50%;
        // box-shadow: inset 0 0 10px 10px #55555510;
        background-color: rgb(255, 136, 25);
        // background-image: url("./../static/btn-bg.jpg");
        // animation: animate 60s linear infinite alternate;
        display: flex;
        justify-content: center;
        align-items: center;
        image {
            width: 80rpx;
            height: 80rpx;
        }
    }
    @keyframes animate {
        0% {
            background-position: 0% 0%;
        }
        25% {
            background-position: 100% 0%;
        }
        50% {
            background-position: 100% 100%;
        }
        75% {
            background-position: 0% 100%;
        }
        100% {
            background-position: 0% 0%;
        }
    }
}
.open {
    color: rgb(245, 112, 23) !important;
}
</style>
