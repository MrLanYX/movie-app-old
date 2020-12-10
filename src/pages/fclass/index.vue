<template xlang="wxml">
    <view class="content">
        <view
            class="item-box"
            v-for="item in fclass"
            :key="item"
        >
            <image
                class="item-box-image"
                :src="item.url"
            />
            <text class="item-box-texts">{{item.name}}</text>
            <text class="item-box-text">{{item.jishu}}</text>
        </view>

        <uni-drawer ref="draw">
            <view style="padding:30rpx;">
                <view class="uni-title">抽屉式导航</view>
            </view>
        </uni-drawer>
        <view
            class="draw"
            @click="show"
        >
            <text class="draw-text">选择\n分类</text>
        </view>
    </view>
</template>

<script>
import uniDrawer from "@dcloudio/uni-ui/lib/uni-drawer/uni-drawer.vue";

export default {
    name: "",
    components: {
        uniDrawer,
    },
    props: {},
    data() {
        return {
            action: "acg",
            page: 1,
            year: 2020,
            area: "all",
            class: 0,
            fclass: [],
        };
    },
    computed: {},
    watch: {},
    created() {
        this.searchClass();
    },
    mounted() {},
    methods: {
        // 分类搜索
        searchClass: function () {
            var that = this;
            uni.request({
                url: "http://129.204.87.3:8877/getsortdata_all_z.php",
                data: {
                    action: "acg",
                    page: 1,
                    year: 2020,
                    area: "all",
                    class: 0,
                    dect: "",
                    id: "",
                },
                success: (res) => {
                    // 分割处理数据
                    var liebiao = res.data.split("data-original");
                    for (let index = 1; index < liebiao.length; index++) {
                        var datamessage = liebiao[index].split('"');
                        that.fclass.push({
                            url: datamessage[1],
                            name: datamessage[5],
                            jishu: datamessage[14].split("<")[0].split(">")[1],
                        });
                    }
                },
            });
        },
        // 显示抽屉
        show() {
            this.$refs.draw.open();
        },
        hide() {
            this.$refs.draw.close();
        },
    },
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
    // flex-direction: column;
    flex-wrap: wrap;
    justify-content: flex-start;
    padding-bottom: 80px;
    .item-box {
        width: 30%;
        height: 400rpx;
        background-color: #fff;
        margin-right: 2.5%;
        margin-top: 2.5%;
        border-radius: 6px;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        overflow: hidden;
        .item-box-image {
            width: 100%;
            flex-grow: 1;
            margin-bottom: 5px;
        }
        .item-box-texts {
            align-items: flex-end;
        }
        .item-box-text {
            align-items: flex-end;
            color: #1ca591;
        }
    }
    .item-box:nth-child(3n + 1) {
        margin-left: 2.5%;
    }
    .draw {
        position: fixed;
        right: 60px;
        top: 60px;
        width: 60px;
        height: 60px;
        background-color: #1ca591;
        border-radius: 50%;
        padding-top: 10px;
        box-shadow: 0 5px 10px #aaa;
        .draw-text {
            display: block;
            margin: auto;
            line-height: 20px;
            font-weight: bolder;
            color: #fff;
            text-align: center;
        }
    }
}
</style>
