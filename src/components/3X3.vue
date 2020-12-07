<template xlang="wxml">
    <!-- 三成三的九宫格 -->
    <view class="gg">
        <view class="gg-top">
            <text>{{name}}</text>
            <button size="mini">更多>></button>
        </view>
        <view class="gg-main">
            <uni-grid v-for="i in 3" column="3" highlight="true" :key="i">
                <uni-grid-item v-for="j in 3" :key="j">
                    <text>{{3*i+j+1}}</text>
                </uni-grid-item>
            </uni-grid>
        </view>
    </view>
</template>

<script>
import uniGrid from "@dcloudio/uni-ui/lib/uni-grid/uni-grid.vue";
import uniGridItem from "@dcloudio/uni-ui/lib/uni-grid-item/uni-grid-item.vue";

export default {
    name: "",
    components: {
        uniGrid,
        uniGridItem,
    },
    props: {
        name:String
    },
    data() {
        return {};
    },
    computed: {},
    watch: {},
    created() {},
    mounted() {},
    methods: {},
};
</script>

<style lang="scss">
.gg {
    width: calc(750rpx - 30px);
    height: 100px;
    margin: 0 15px;
    .gg-top {
        width: 100%;
        height: 32px;
        margin-bottom: 10px;
        display: flex;
        justify-content: space-between;
        text {
            width: 85%;
            line-height: 32px;
            font-size: 24px;
        }
        button {
            width: 15%;
            padding: 0 0.3em;
        }
    }
    .gg-main {
        width: 100%;
    }
}
uni-grid-item {
    view {
        // 固定单格宽高比
        // 近似16：9
        padding-bottom: 177%; 
    }
}
</style>
