<template lang="wxml">
	<view class="content">
		<view class="banner">
			<me-banner></me-banner>
		</view>
	</view>
</template>

<script>
	import meBanner from "@/components/banner.vue"
	export default {
		components: {
			meBanner
		},
		data() {
			return {
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style lang="scss">
	page{
		width: 100vw;
		height: 100vh;
	}
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
	.banner{
		background-color: antiquewhite;
	}
</style>
