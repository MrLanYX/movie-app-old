<template xlang="wxml">
    <view class="content">
    </view>
</template>

<script>

export default {
    name: "",
    components: {
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
                selected: 1,
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
</style>
