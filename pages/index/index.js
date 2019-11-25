//index.js
//获取应用实例
const app = getApp()
let localUlr = app.globalData.localUrl
Page({
  data: {
    url: localUlr + '/api/login',
    login: false,
    logoSrc: '/static/img/0-1-1.svg',
    logo2Src: '/static/img/0-1-2.svg',
    loadingSrc: '/static/img/loading.gif'
  },
  onLoad() {
    //获取密码缓存
    const res = qq.getStorageInfoSync()
    //获取验证码
    /*qq.request({
      url: 'http://cas.swust.edu.cn/authserver/captcha',
      success(res) {
        console.log(res)
      }
    })*/
  },
  submit(e) {
    console.log(e.detail.value)
    /*this.setData({
      login: true
    })*/
    /*qq.reLaunch({
      //url: '../rankList/rankList',
      url: '/pages/rankList/rankList'
    })*/

  }
})
