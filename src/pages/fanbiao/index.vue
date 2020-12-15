<template xlang="wxml">
    <view>

    </view>
</template>

<script>
export default {
    name: "",
    components: {},
    props: {},
    data() {
        return {};
    },
    computed: {},
    watch: {},
    created() {
        uni.request({
            url: "http://susudm.com/zhougen.php",
            success: (res) => {
                console.log(res.data);
            },
        });
    },
    mounted() {},
    methods: {},
};
</script>

<style lang="scss">
</style>
