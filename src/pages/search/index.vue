<template xlang="wxml">
    <view class="content">
        <view class="search-top">
            <uni-nav-bar right-text="搜索">
                <input
                    class="search-top-input"
                    placeholder="请输入搜索的内容"
                    slot="default"
                />
            </uni-nav-bar>
        </view>
        <view class="search-main">
            <view v-show="true">
                <view class="search-main-top">
                    <text>历史记录</text>
                    <view>
                        <text>删除</text>
                        <uni-icons type="trash" color="#777" />
                    </view>
                </view>
                <view class="search-main-lists">
                    <text
                        v-for="item in lists"
                        class="search-main-list"
                        :key="item"
                        >{{ item }}</text
                    >
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
            lists: [
                "进击的巨人 最终季",
                "Re：从零开始的异世界生活 第二季",
                "咒术回战",
                "某科学的超电磁炮T",
                "辉夜大小姐想让我告白？～天才们的恋爱头脑战～",
                "鬼灭之刃 剧场版 无限列车篇",
                "魔女之旅",
                "紫罗兰永恒花园外传：永远与自动手记人偶",
                "在魔王城说晚安",
                "命运之夜——天之杯Ⅲ：春之歌",
                "异度侵入 ID:INVADED",
                "名侦探柯南",
                "总之就是非常可爱",
                "约战狂三外传",
                "哆啦A梦",
                "路人女主的养成方法 Fine",
                "航海王",
                "地缚少年花子君",
                "我的青春恋爱物语果然有问题。完",
                "刀剑神域 爱丽丝篇 异界战争 -终章-",
                "成神之日",
                "岸边露伴一动不动",
                "紫罗兰永恒花园 剧场版",
                "海绵宝宝",
                "全员恶玉",
                "樱与抱月",
                "公主连结Re:Dive",
                "Love Live！虹咲学园学园偶像同好会",
                "瑞克和莫蒂",
                "高达创形者 再起 第二季",
                "别对映像研出手！",
                "BanG Dream! 梦想协奏曲 第三季",
                "请问您今天要来点兔子吗？BLOOM",
                "One Room 第三季",
                "大欺诈师",
                "来自深渊 深沉灵魂的黎明",
                "催眠麦克风-Division Rap Battle- Rhyme Anima",
                "蜡笔小新",
                "租借女友",
                "宝石商人理查德的谜鉴定",
                "排球少年！！第四季",
                "齐木楠雄的灾难 始动篇",
                "数码宝贝：最后的进化",
                "半妖的夜叉姬",
                "达尔文游戏",
                "因为太怕痛就全点防御力了",
                "龙与魔女 / BURN THE WITCH",
                "博人传 火影忍者新时代",
                "阿松 第三季",
                "寒蝉鸣泣之时·业",
                "富豪刑警 Balance:UNLIMITED",
                "IDOLiSH-偶像星愿- Second BEAT!",
                "魔法纪录 魔法少女小圆外传",
                "黑色四叶草",
                "动物新世代 / BNA",
                "黄金神威 第三季",
                "神之塔",
                "忧国的莫里亚蒂",
                "转生成为了只有乙女游戏破灭Flag的邪恶大小姐",
                "白箱 剧场版",
                "BanG Dream! 少女乐团派对！☆PICO～大份～",
                "虚构推理",
                "精灵宝可梦 旅途",
                "无能力者娜娜",
                "邪神与厨二病少女 第二季",
                "数码宝贝：",
                "昨日之歌",
                "爱书的下克上：为了成为图书管理员不择手段！ 第二部",
                "格莱普尼尔",
                "魔王学院的不适任者～史上最强的魔王始祖，转生就读子孙们的学校～",
                "宇崎学妹想要玩！",
                "没落要塞 / DECA-DENCE",
                "入间同学入魔了",
                "放学后海堤日记",
                "在地下城寻求邂逅是否搞错了什么 第三季",
                "A!满开剧团",
                "攻壳机动队 SAC_",
                "隐瞒之事",
                "大贵族",
                "理科生坠入情网，故尝试证明。",
                "炎炎消防队 贰之章",
                "恋爱小行星",
                "游戏王SEVENS",
                "房间露营△",
                "被神捡到的男人",
                "异兽魔都",
                "心理测量者：第一监视者",
                "神推偶像登上武道馆我就死而无憾",
                "ARGONAVIS from BanG Dream! 梦想协奏曲",
                "海兽之子",
                "暗黑破坏神在身边。",
                "水果篮子 第二季",
                "食戟之灵 豪之皿",
                "高校之神",
                "魔法科高校的劣等生 来访者篇",
                "文豪与炼金术师 ～审判的齿轮～",
                "你与我最后的战场，亦或是世界起始的圣战",
                "阿尔蒂",
                "听我的电波吧",
            ],
        };
    },
    computed: {},
    watch: {},
    created() {},
    mounted() {},
    methods: {},
    onShow() {
        if (
            typeof this.$mp.page.getTabBar === "function" &&
            this.$mp.page.getTabBar()
        ) {
            this.$mp.page.getTabBar().setData({
                selected: 0,
            });
        }
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
.search-main {
    width: 100%;
    height: calc(100vh - 44px - 80rpx);
    padding: 15px;
    padding-bottom: 0;
    color: #777;
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
        }
    }
}
</style>
