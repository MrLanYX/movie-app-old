<template xlang="wxml">
    <!-- 三成三的九宫格 -->
    <view class="main">
        <view>
            <text>name</text>
            <button>更多</button>
        </view>
        <view>
            <uni-grid v-for="i in 3" :column="3" :show-border="false" :square="false" :key="i">
                <uni-grid-item v-for="j in 3" :key="j">
                    <text class="text">文本</text>
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
    props: {},
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
.main {
    width: 100%;
}
</style>
