import Vue from 'vue'
import App from './App.vue';

Vue.config.productionTip = false

// 定义全局播放方法
Vue.prototype.goplay = function (e, name) {
  var goid = 0
  // 搜索页面跳转来的播放
  if (e.split("/")[2]) {
    goid = e.split("/")[2]
  } else {
    goid = e
  }
  uni.navigateTo({
    url: "./../play/index?id=" + goid + "&name=" + name,
  });
}

App.mpType = 'app'

const app = new Vue({
  ...App
})
app.$mount()
