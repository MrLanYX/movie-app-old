<template  lang="wxml">
    <view>
        <swiper :indicator-dots="true">
            <swiper-item>
                A
            </swiper-item>
            <swiper-item>
                B
            </swiper-item>
        </swiper>
    </view>
</template>

<script>
    export default {
        name: '',
        components: {
        },
        props: {

        },
        data() {
            return {
            };
        },
        computed: {

        },
        watch: {

        },
        created() {

        },
        mounted() {

        },
        methods: {
            change(e) {
                this.current = e.detail.current;
            }
        },
    };
</script>

<style lang="scss">
    swiper {
		width: 750rpx;
		height: 300rpx;
    }
    image {
        height: 100%;
    }
</style>