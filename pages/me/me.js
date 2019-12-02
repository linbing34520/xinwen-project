// pages/me/me.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      token:"",
      name:"",
      avtor:""
  },
  mycolview: function() {
    wx.navigateTo({
      url: '../mycol/mycol',
    })
  },
  logoutview: function() {
    var that = this;
    wx.request({
      url: 'http://www.young1024.com:2019/logout',
      data: {
        token:that.data.token
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      method: 'post',
      dataType: 'json',
      responseType: 'text',
      success: function(res) {
        console.log(res)
      },
      fail: function(res) {},
    })
    wx.removeStorage({
      key: 'user',
      success: function(res) {
        console.log(res)
      },
    });
    wx.navigateTo({
      url: '../logs/logs',
    })

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this
      wx.getStorage({
        key: 'user',
        success: function(res) {
          var token = res.data
          that.setData({
            token: token
          });
          wx.request({
            url: 'http://www.young1024.com:2019/login/status',
            data: {
              token:token
            },
            header: {
              'content-type': 'application/x-www-form-urlencoded'
            },
            method: 'post',
            dataType: 'json',
            responseType: 'text',
            success: function(res) {
              console.log(res.data.data);
              that.setData({
                name: res.data.data.username,
                avtor: res.data.data.imgname
              })
            },
            fail: function(res) {},
          })
        },
      })
      
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})