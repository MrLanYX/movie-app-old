<template xlang="wxml">
    <view class="content">
        <view>
            <input value="" placeholder="请输入搜索的内容" />
        </view>
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
};
</script>

<style lang="scss">
.content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
me-bottom-nav {
    position: fixed;
    left: 0;
    bottom: 0;
}
</style>
