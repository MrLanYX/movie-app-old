Component({
  data: {
    selected: 2,
    color: "#7A7E83",
    selectedColor: "#ff9234",
    list: [{
      pagePath: "/pages/search/index",
      iconPath: "/static/icon/search.png",
      selectedIconPath: "/static/icon/search_fill.png",
      text: "搜索"
    },
    {
      pagePath: "/pages/fclass/index",
      iconPath: "/static/icon/manage.png",
      selectedIconPath: "/static/icon/manage_fill.png",
      text: "分类"
    },
    {
      pagePath: "/pages/index/index",
      iconPath: "/static/icon/homepage.png",
      selectedIconPath: "/static/icon/homepage_fill.png",
      text: "首页"
    },
    {
      pagePath: "/pages/collection/index",
      iconPath: "/static/icon/collection.png",
      selectedIconPath: "/static/icon/collection_fill.png",
      text: "收藏"
    },
    {
      pagePath: "/pages/me/index",
      iconPath: "/static/icon/mine.png",
      selectedIconPath: "/static/icon/mine_fill.png",
      text: "我的"
    }]
  },
  attached() {
  },
  methods: {
    switchTab(e) {
      const data = e.currentTarget.dataset
      const url = data.path
      wx.switchTab({ url })
      this.setData({
        selected: data.index
      })
    }
  }
})