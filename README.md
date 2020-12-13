# 微信小程序-全网视频观看

### 创建记录
+ 2020.12.9
    - 搜索页面
+ 2020.12.10
    - 简单创建播放页面（以后修改）
    - 页面传id号到播放页面
    - 通过id号加工js地址（由于并没有提供获取接口的php地址，原采集方式是运行js文件创建数组）
    - uniapp的API请求能够获取到加工后的js文件全部字符串
    - 对返回的字符串分号分割提取获得线路条数、线路所对应的视频地址
    - 但是由于部分视频要拼接!故非http开头 全部不加入
    - 视频地址调整先空下 等再次解析源码
+ 2020.12.11
    - 问题：分类请求返回数据属于标签格式
    - 对标签格式数据分割筛选 让他符合app标签语言
    - data数据分为两种 一个用于提交和显示 一个用于点击传参
    - 采集了原网页应对不同资源有着不同的剧情结果（数据过大微信报错但不影响）
    - 修改了抽屉不能向下滑动的问题（滑动会反应到页面上）
    - 分类点击触发上调整了页面为1重置原有结果 防止每次都push数组
+ 2020.12.13
    - 注册小程序id上线测试版用于好友之间的测试使用

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).