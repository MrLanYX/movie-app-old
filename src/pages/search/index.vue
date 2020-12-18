<template xlang="wxml">
    <view class="content">
        <view class="search-top">
            <uni-nav-bar
                right-text="搜索"
                @clickRight="searchItem"
            >
                <input
                    class="search-top-input"
                    placeholder="请输入搜索的内容"
                    slot="default"
                    v-model="search"
                    confirm-type="搜索"
                    @confirm="searchItem"
                />
            </uni-nav-bar>
        </view>
        <!-- 搜索框为空时显示历史记录 -->
        <view
            v-show="!search"
            class="search-flag"
        >
            <view class="search-main-a">
                <view class="search-main-top">
                    <text>历史记录</text>
                    <view @click="delAllHistory">
                        <text>删除</text>
                        <uni-icons
                            type="trash"
                            color="#777"
                        />
                    </view>
                </view>
                <view class="search-main-lists">
                    <text
                        v-for="(item,index) in lists"
                        class="search-main-list"
                        :key="index"
                        @click="searchOne(item)"
                        @longpress="delOne(index)"
                    >{{ item }}</text>
                    <!-- 历史记录为空并且搜索框为空显示文本历史记录为空 -->
                    <view
                        v-show="tishiflag"
                        style="width:100%;padding-top:100px"
                    >
                        <text class="history-tishi-text">您还没有历史记录!\n长按可删除单个历史记录</text>
                    </view>
                </view>
            </view>
        </view>

        <!-- 搜索出的结果 -->
        <view
            v-show="search"
            class="item-flag"
        >
            <view class="item-box">
                <view
                    class="item-box-lists"
                    v-for="item in items"
                    :key="item"
                    :class="{noshow:!item.url}"
                >
                    <image
                        class="item-img"
                        :src="item.thumb"
                    />
                    <view class="item-text">
                        <text class="item-name">{{item.title}}</text>
                        <text class="item-year">年份：<text class="a">{{item.time}}</text></text>
                        <text class="item-jishu">更新至：<text class="a">{{item.lianzaijs}}</text></text>
                        <text class="item-area">地区：<text class="a">{{item.area}}</text></text>
                        <text
                            class="item-go"
                            @click="goplay(item.url,item.title,item.thumb)"
                        >立即观看</text>
                    </view>
                </view>
            </view>
        </view>
    </view>
</template>

<script>
import uniNavBar from "@dcloudio/uni-ui/lib/uni-nav-bar/uni-nav-bar.vue";
import uniIcons from "@dcloudio/uni-ui/lib/uni-icons/uni-icons.vue";

export default {
    name: "",
    components: {
        uniNavBar,
        uniIcons,
    },
    props: {},
    data() {
        return {
            search: "",
            tishiflag: false,
            lists: [],
            items: [
                {
                    url: false,
                    thumb: "",
                    title: "资源名字",
                    time: "年份",
                    catid: "4",
                    star: "演员",
                    lianzaijs: "集数",
                    beizhu: "备注",
                    alias_full: "别名",
                    area: "地区",
                    sort: "",
                },
            ],
            kong: [
                {
                    url: false,
                    thumb: "",
                    title: "资源名字",
                    time: "年份",
                    catid: "4",
                    star: "演员",
                    lianzaijs: "集数",
                    beizhu: "备注",
                    alias_full: "别名",
                    area: "地区",
                    sort: "",
                },
            ],
        };
    },
    computed: {},
    watch: {
        // 历史记录变化就执行显示判断
        lists() {
            var that = this;
            this.tishiflagshow();
            // 历史记录有变化就存入缓存新的记录
            uni.setStorage({
                key: "searchHistory",
                data: that.lists,
                success: function () {
                    console.log("成功修改搜索历史缓存");
                },
            });
        },
        // 搜索框为空重新清空原有搜索结果
        search() {
            if (!this.search) {
                console.log("kongle");
                this.items = this.kong;
            }
        },
    },
    created() {
    },
    mounted() {},
    methods: {
        // 删除全部历史记录
        delAllHistory: function () {
            var that = this;
            wx.showModal({
                title: "清除所有历史记录",
                content: "确认删除吗？",
                success(res) {
                    if (res.confirm) {
                        console.log("用户点击确定");
                        that.lists = [];
                    } else {
                        console.log("用户点击取消");
                    }
                },
            });
        },
        // 判断提示是否应该显示
        tishiflagshow: function () {
            if (this.lists.length == 0) {
                this.tishiflag = true;
            } else {
                this.tishiflag = false;
            }
        },
        // 搜索内容反馈结果
        searchItem: function () {
            var that = this;
            // 判断是否记录存在
            if (that.lists.indexOf(that.search) < 0) {
                that.lists.unshift(that.search);
            } else {
                that.lists.splice(that.lists.indexOf(that.search), 1);
                that.lists.unshift(that.search);
            }
            uni.request({
                url: "http://106.53.243.44:8877/ssszz.php", //仅为示例，并非真实接口地址。
                data: {
                    top: "10",
                    q: that.search,
                    dect: "0",
                },
                success: (res) => {
                    console.log(res);
                    if (res.data.length == 0) {
                        that.items = that.kong;
                        uni.showToast({
                            icon: "none",
                            title: "没有搜索结果",
                            duration: 2000,
                        });
                    } else {
                        that.items = res.data;
                    }
                },
            });
        },
        // 点击单个历史记录搜索
        searchOne: function (obj) {
            this.search = obj;
            this.searchItem();
        },
        // 长按删除单个
        delOne: function (index) {
            var that = this;
            uni.showToast({
                icon: "none",
                title: "（已删除）" + that.lists[index],
                duration: 2000,
            });
            this.lists.splice(index, 1);
        },
        // 获取本地的搜索记录
        getSearchHistory: function () {
            var that = this;
            console.log("获取搜索历史");
            uni.getStorage({
                key: "searchHistory",
                success: function (res) {
                    console.log(res.data);
                    that.lists = res.data;
                },
                fail: function (err) {
                    console.log(err);
                    that.lists = [];
                },
            });
        },
    },
    onShow() {
        if (
            typeof this.$mp.page.getTabBar === "function" &&
            this.$mp.page.getTabBar()
        ) {
            this.$mp.page.getTabBar().setData({
                selected: 0,
            });
        }
        this.tishiflagshow();
        this.getSearchHistory();
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
.search-top {
    width: 750rpx;
    .search-top-input {
        width: 600rpx;
        margin-left: -100rpx;
        padding: 5px;
        padding-left: 15px;
        background-color: #f5f5f5;
        border-radius: 1.4rem;
    }
}
.search-flag {
    width: calc(100vw - 30px);
    height: calc(100vh - 59px - 80rpx);
    margin: 15px;
    .search-main-a {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        .search-main-top {
            width: 100%;
            display: flex;
            justify-content: space-between;
            margin-top: 5px;
        }
        .search-main-lists {
            flex: 1;
            margin-top: 10px;
            overflow: scroll;
            display: flex;
            flex-flow: row wrap;
            align-content: flex-start;
            .search-main-list {
                display: inline-block;
                height: 1.8rem;
                line-height: 1.8rem;
                border-radius: 1.8rem;
                color: #000;
                padding: 0 10px;
                background-color: #fff;
                border: 1px solid #999;
                margin-right: 10px;
                margin-bottom: 10px;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
            }
            .history-tishi-text {
                display: inline-block;
                width: 100%;
                color: #777;
                text-align: center;
            }
        }
    }
}
.item-flag {
    width: 100%;
    height: calc(100vh - 44px - 80rpx);
    .item-box {
        width: 100%;
        height: 100%;
        overflow: scroll;
        .item-box-lists {
            width: calc(100% - 30px);
            height: 300rpx;
            margin: auto;
            margin-top: 15px;
            padding: 0 10px;
            background-color: #fff;
            border-radius: 10px;
            box-shadow: 0 0 4px #ccc;
            overflow: hidden;
            display: flex;
            .item-img {
                min-width: 215rpx;
                height: 100%;
                margin-right: 15px;
                border: 1px solid #ccc;
            }
            .item-text {
                flex: 1;
                padding: 15px 0;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                .item-name {
                    width: 400rpx;
                    font-size: larger;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                }
                .item-go {
                    align-self: flex-end;
                    display: inline-block;
                    height: 1.8rem;
                    line-height: 1.8rem;
                    padding: 0 10px;
                    border-radius: 1.8rem;
                    margin-right: 10px;
                    color: #fff;
                    background-color: #ff9234;
                }
                .a {
                    color: #35d0ba;
                }
            }
        }
    }
}
.noshow {
    display: none !important;
}
</style>
