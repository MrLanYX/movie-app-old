<template xlang="wxml">
    <view class="content">
        <view class="me-top">
            <image
                class="me-top-img"
                src="@/static/banner.jpg"
            />
            <text class="me-top-text">用户名</text>
        </view>
        <view class="me-string">
            <view class="me-string-item">
                <text class="me-item-text">我的收藏</text>
                <uni-icons
                    type="arrowright"
                    size="16"
                ></uni-icons>
            </view>
            <view class="me-string-item">
                <text class="me-item-text">浏览历史</text>
                <uni-icons
                    type="arrowright"
                    size="16"
                ></uni-icons>
            </view>
            <view class="me-string-item">
                <text class="me-item-text">清除全部收藏</text>
                <uni-icons
                    type="arrowright"
                    size="16"
                ></uni-icons>
            </view>
            <view class="me-string-item">
                <text class="me-item-text">清除全部浏览记录</text>
                <uni-icons
                    type="arrowright"
                    size="16"
                ></uni-icons>
            </view>
            <view class="me-string-item">
                <text class="me-item-text">清除搜索记录</text>
                <uni-icons
                    type="arrowright"
                    size="16"
                ></uni-icons>
            </view>
            <view class="me-string-item">
                <text class="me-item-text">清除全部缓存</text>
                <uni-icons
                    type="arrowright"
                    size="16"
                ></uni-icons>
            </view>
            <view class="me-string-item">
                <text class="me-item-text">联系作者我</text>
                <uni-icons
                    type="arrowright"
                    size="16"
                ></uni-icons>
            </view>
        </view>
    </view>
</template>

<script>
import uniIcons from "@dcloudio/uni-ui/lib//uni-icons/uni-icons.vue";

export default {
    name: "",
    components: {
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
                selected: 4,
            });
        }
    },
    onLoad() {
        wx.setNavigationBarColor({
            frontColor: "#ffffff",
            backgroundColor: "#35d0ba",
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
.me-top {
    width: 750rpx;
    height: 500rpx;
    background-color: #35d0ba;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-bottom: 40px;
    .me-top-img {
        width: 250rpx;
        height: 250rpx;
        border-radius: 50%;
        margin-bottom: 30rpx;
    }
    .me-top-text {
        font-size: 24px;
        text-align: center;
        color: #fff;
    }
}
.me-string {
    width: 680rpx;
    border-bottom: 1px solid #eee;
    border-radius: 10px;
    background-color: #fff;
    margin-top: -40px;
    padding: 20px;
    box-shadow: 0 0 15px #ccc;
    .me-string-item {
        width: 100%;
        padding-bottom: 10px;
        border-bottom: 1px solid #ccc;
        margin-bottom: 10px;
        display: flex;
        justify-content: space-between;
    }
    .me-string-item:last-child {
        padding: 0;
        border: 0;
        margin: 0;
    }
}
</style>
