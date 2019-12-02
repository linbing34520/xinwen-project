// pages/mycol/mycol.js
const utils = require('../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    token: "",
    content: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this;
    wx.getStorage({
      key: "user",
      success: function(res) {
        var token = res.data
        that.setData({
          token: token
        });
        wx.request({
          url: 'http://www.young1024.com:2019/collectList',
          data: {
            token: token
          },
          header: {
            'content-type': 'application/x-www-form-urlencoded'
          },
          method: 'post',
          dataType: 'json',
          responseType: 'text',
          success: function(res) {
            console.log(res.data.data);
            const content = res.data.data;
            for (let i in content){
            content[i].newId.postTime = utils.formatTime(new Date(parseInt(content[i].newId.postTime)));
            }
            that.setData({
              content: content,
            })
          },
          fail: function(res) {},
        })

      }
    });
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