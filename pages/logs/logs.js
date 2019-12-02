//logs.js
const util = require('../../utils/util.js')
const tmp = require('../includes/require.js')
Page({
  data: {
    logs: [],
    username:'',
    password:'',
    tishi:'',
    token:'',
  },
  //事件处理函数
  gosiginview: function() {
    wx.navigateTo({
      url: '../sigin/sigin',
    })
  },
  textchange (e){
    this.setData({
      
      [e.target.dataset.type]:e.detail.value
    });
  },
  loginquset: function() {
    var that = this
     wx.request({
       url: 'http://www.young1024.com:2019/login',
       data: {
         username:this.data.username,
         password: this.data.password
       },
       header: {
         'content-type': 'application/x-www-form-urlencoded'
       },
       method: 'post',
       dataType: 'json',
       responseType: 'text',
       success: function(res) {
         console.log(res);
         that.setData({
           tishi:res.data.msg,
           token:res.data.token
         });
         if (res.statusCode === 200 && res.data.code == '4') {
           wx.switchTab({
             url: '../index/index',
           })
              wx.setStorage({
                key: 'user',
                data: res.data.token,
                success: function(res) {},
                fail: function(res) {},
              })
         }
       },
       fail: function(res) {},
     })
  },
  onLoad: function() {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return util.formatTime(new Date(log))
      })
    });
    
  },
  onPullDownRefresh: function() {
    console.log('哈哈')
  },
  download() {
    
  }
})