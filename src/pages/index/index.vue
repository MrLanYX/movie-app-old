<template lang="wxml">
	<view class="content">
		<me-banner></me-banner>
        <gongge></gongge>
	</view>
</template>

<script>
import meBanner from "@/components/banner.vue";
import gongge from "@/components/3X3.vue";
export default {
    components: {
        meBanner,
        gongge
    },
    data() {
        return {};
    },
    onLoad() {},
    methods: {},
};
</script>

<style lang="scss">
page {
    width: 100vw;
    height: 100vh;
    background-color: #f5f5f5;
}
.content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
me-banner{
    margin-bottom: 15px;
	background-color: #fff;
}
</style>
