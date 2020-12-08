<template xlang="wxml">
    <view class="content">
        <!-- <me-bottom-nav :target="1"></me-bottom-nav> -->
    </view>
</template>

<script>
// import meBottomNav from "@/components/bottom-nav.vue";

export default {
    name: "",
    components: {
        // meBottomNav,
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
</style>
