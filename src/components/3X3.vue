<template xlang="wxml">
    <!-- 三成三的九宫格 -->
    <view class="gg">
        <view class="gg-top">
            <text>{{ name }}</text>
            <button
                size="mini"
                @click="tiao"
            >更多>></button>
        </view>
        <view class="gg-main">
            <view
                class="gg-row"
                v-for="i in 3"
                column="3"
                highlight="true"
                :key="i"
            >
                <view
                    class="gg-col"
                    v-for="j in 3"
                    :key="j"
                    @click="jisuan(i,j)"
                >
                    <image :src="content[3 * i + j].img" />
                    <text>{{ content[3 * i + j].listname }}\n</text>
                    <text>
                        更至：
                        <text>{{ content[3 * i + j].jishu }}</text>
                    </text>
                </view>
            </view>
        </view>
    </view>
</template>

<script>
export default {
    name: "",
    components: {},
    props: {
        name: String,
        goto: String,
        content: Array,
    },
    data() {
        return {
            arr: [[], [], []],
        };
    },
    computed: {},
    watch: {},
    created() {},
    mounted() {},
    methods: {
        tiao: function () {
            getApp().globalData.text = this.goto;
            uni.switchTab({
                url: "./../fclass/index",
            });
        },
        // 计算点击目标的数组下标
        jisuan:function(i,j){
            var x=3 * i + j
            this.goplay(this.content[x].id,this.content[x].listname)
        }
    },
};
</script>

<style lang="scss">
.gg {
    width: calc(750rpx - 30px);
    margin: 0 15px;
    .gg-top {
        width: 100%;
        height: 32px;
        margin-bottom: 10px;
        display: flex;
        justify-content: space-between;
        text {
            width: 85%;
            line-height: 32px;
            font-size: 18px;
        }
        button {
            width: 15%;
            padding: 0 0.3em;
        }
    }
    .gg-main {
        width: 100%;
        height: calc(1333rpx - 53px); // 保证宽高比
        .gg-row {
            width: 100%;
            height: 33.3%;
            display: flex;
            .gg-col {
                width: 33.3%;
                height: 100%;
                padding: 5px;
                display: flex;
                flex-direction: column;
                justify-content: flex-end;
                image {
                    width: 100%;
                    flex-grow: 1;
                }
                text {
                    width: 100%;
                    height: 32px;
                    font-size: 14px;
                    // align-items: flex-end;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    text {
                        font-size: 12px;
                        color: #1ca591;
                    }
                }
            }
        }
    }
}
// .gg-col {
//     width: 100%;
//     padding: 5px;
//     image {
//         width: 100%;
//         height: 177%;
//     }
//     text {
//         font-size: 14px;
//         text {
//             font-size: 12px;
//             color: #1ca591;
//         }
//     }
// }
</style>
