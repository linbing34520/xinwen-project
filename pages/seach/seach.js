const utils = require('../../utils/util.js')
Page({
  data: {
    inputShowed: false,
    inputVal: "",
    content: {},
  },
  
  showInput: function () {   
    this.setData({
      inputShowed: true
    });
  },
  hideInput: function () {
    
    this.setData({
      inputVal: "",
      inputShowed: false
    });
  },
  clearInput: function () {
    this.setData({
      inputVal: ""
    });
  },
  inputTyping: function (e) {
    this.setData({
      inputVal: e.detail.value
    });
  },
  textChange(e) {
    console.log(e.detail.value);
    this.setData({
      inputVal: e.detail.value
    });
  },
  doseach: function (e) {
    var that = this
    that.setData({
      inputVal: e.detail.value
    });
    wx.showLoading({
      title: '玩命加载中',
    })
    wx.request({
      url: 'http://www.young1024.com:2019/search',
      data: {
        key: that.data.inputVal,
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      method: 'post',
      dataType: 'json',
      responseType: 'text',
      success: function(res) {
        console.log(res.data.data);
        let content = res.data.data;
        for (let i in content) {
          content[i].postTime = utils.formatTime(new Date(parseInt(content[i].postTime)));
        }
        that.setData({
          content: content,
        })
      },
      fail: function(res) {},
      complete: () => wx.hideLoading()
    })
  },
  seachm:function() {
    var that = this 
    wx.showLoading({
      title: '玩命加载中',
    })
    wx.request({
      url: 'http://www.young1024.com:2019/search',
      data: {
        key: that.data.inputVal,
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      method: 'post',
      dataType: 'json',
      responseType: 'text',
      success: function (res) {
        console.log(res.data.data);
        let content = res.data.data;
        for (let i in content) {
          content[i].postTime = utils.formatTime(new Date(parseInt(content[i].postTime)));
        }
        that.setData({
          content: content,
        })
      },
      fail: function (res) { },
      complete: () => wx.hideLoading()
    })
  }
  
});