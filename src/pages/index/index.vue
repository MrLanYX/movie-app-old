<template lang="wxml">
	<view class="content">
		<me-banner></me-banner>
        <me-gongge :name="'名字'"></me-gongge>
	</view>
</template>

<script>
import meBanner from "@/components/banner.vue";
import meGongge from "@/components/3X3.vue";
export default {
    components: {
        meBanner,
        meGongge
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
