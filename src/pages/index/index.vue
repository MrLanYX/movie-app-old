<template lang="wxml">
	<view class="content">
		<me-banner></me-banner>
	</view>
</template>

<script>
import meBanner from "@/components/banner.vue";
export default {
    components: {
        meBanner,
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
	margin: 10px 0;
	background-color: #fff;
}
</style>
