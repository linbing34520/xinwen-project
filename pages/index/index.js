//index.js
//获取应用实例
// const {request} =  getApp().globalData;
const utils = require('../../utils/util.js')
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    content: {},
    _page: 1,
    type: "旅游",
    fontone: "24rpx",
    fonttwo: "32rpx"
  },
  seachview: function() {
    wx.navigateTo({
      url: '../seach/seach',
    })
  },
  //事件处理函数
  kejiview: function() {
    var that = this;
    that.setData({
      _page: 1
    })
    wx.showLoading({
      title: '玩命事加载中',
    })
    wx.request({
      url: 'http://www.young1024.com:2019/list',
      data: {
        'type': '科技',
        'page': 1
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
          type: res.data.data[0].className
        })
      },
      fail: function(res) {},
      complete: () => wx.hideLoading()
    })
  },
  lyouview: function(e) {
    var that = this;
    that.setData({
      _page: 1
    })
    wx.showLoading({
      title: '玩命事加载中',
    })
    wx.request({
      url: 'http://www.young1024.com:2019/list',
      data: {
        'type': '旅游',
        'page': 1
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
          type: res.data.data[0].className,
          state: e.currentTarget.dataset.key
        })
      },
      fail: function(res) {},
      complete: () => wx.hideLoading()
    })
  },
  cjview: function() {
    var that = this;
    that.setData({
      _page: 1
    })
    wx.showLoading({
      title: '玩命事加载中',
    })
    wx.request({
      url: 'http://www.young1024.com:2019/list',
      data: {
        'type': '财经',
        'page': 1
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
          type: res.data.data[0].className
        })
      },
      fail: function(res) {},
      complete: () => wx.hideLoading()
    })
  },
  junsview: function() {
    var that = this;
    that.setData({
      _page: 1
    })
    wx.showLoading({
      title: '玩命事加载中',
    })
    wx.request({
      url: 'http://www.young1024.com:2019/list',
      data: {
        'type': '军事',
        'page': 1
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
          type: res.data.data[0].className
        })
      },
      fail: function(res) {},
      complete: () => wx.hideLoading()
    })
  },
  tyuview: function() {
    var that = this;
    that.setData({
      _page:1
    })
    wx.showLoading({
      title: '玩命事加载中',
    })
    wx.request({
      url: 'http://www.young1024.com:2019/list',
      data: {
        'type': '体育',
        'page': 1
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
          type: res.data.data[0].className
        })
      },
      fail: function(res) {},
      complete: () => wx.hideLoading()
    })
  },
  onLoad: function() {
    var that = this;
    wx.showLoading({
      title: '玩命事加载中',
    })
    wx.request({
      url: 'http://www.young1024.com:2019/list',
      data: {
        'type': '旅游',
        'page': that.data._page
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
          type: res.data.data[0].className
        })
      },
      fail: function(res) {},
      complete: () => wx.hideLoading()
    });
    wx.getStorage({
      key: "user",
      success: function(res) {
        console.log(res)
      },
      fail: function(res) {
        wx.navigateTo({
          url: '../logs/logs',
        })
      },
    });
  },
  onPullDownRefresh: function() {

  },
  //页面上拉处理函数
  onReachBottom: function() {
    var that = this;
    wx.showLoading({
      title: '玩命事加载中',
    })
    var pages = that.data._page;
    that.setData({
      _page: pages+1
    });
    wx.request({
      url: 'http://www.young1024.com:2019/list',
      data: {
        type:that.data.type,
        page: that.data._page,
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      method: 'post',
      dataType: 'json',
      responseType: 'text',
      success: function(res) {
        console.log(res);
        let content = res.data.data;
        for (let i in content) {
          content[i].postTime = utils.formatTime(new Date(parseInt(content[i].postTime)));
        }
        that.setData({
          content: that.data._page===1?content:that.data.content.concat(content)
        })
      },
      fail: function(res) {},
      complete: () => wx.hideLoading()
    })
  },
  download() {

  }

})