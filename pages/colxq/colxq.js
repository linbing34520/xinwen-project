
const utils = require('../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    content: {},
    token: "",
    newId: "",
    lovecolor: "black",
    lovetxt: "点击收藏"
  },

  golove: function () {
    var that = this;
    wx.request({
      url: 'http://www.young1024.com:2019/collected',
      data: {
        token: that.data.token,
        newId: that.data.newId,
        type: "2"
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      method: 'post',
      dataType: 'json',
      responseType: 'text',
      success: function (res) {
        let status = res.data.data.isCollect;
        if (status) {
          that.setData({
            lovecolor: "red",
            lovetxt: "取消收藏"
          })
        } else {
          that.setData({
            lovecolor: "black",
            lovetxt: "点击收藏"
          })
        }
      },
      fail: function (res) { },
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this
    wx.showLoading({
      title: '玩命事加载中',
    });
    let newid = options.id;
    console.log(newid);
    wx.getStorage({
      key: "user",
      success: function (res) {
        var token = res.data
        that.setData({
          token: token
        });
        wx.request({
          url: 'http://www.young1024.com:2019/collected',
          data: {
            token: token,
            newId: newid,
            type: "1"
          },
          header: {
            'content-type': 'application/x-www-form-urlencoded'
          },
          method: 'post',
          dataType: 'json',
          responseType: 'text',
          success: function (res) {
            let status = res.data.data.isCollect;
            if (status) {
              that.setData({
                lovecolor: "red",
                lovetxt: "取消收藏"
              })
            } else {
              that.setData({
                lovecolor: "black",
                lovetxt: "点击收藏"
              })
            }
          },
          fail: function (res) { },
        })
      }
    });
    wx.request({
      url: 'http://www.young1024.com:2019/details',
      data: {
        newId: newid
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      method: 'post',
      dataType: 'json',
      responseType: 'text',
      success: function (res) {
        console.log(res.data.data);
        const content = res.data.data;
        content.postTime = utils.formatTime(new Date(parseInt(content.postTime)));

        that.setData({
          content: content,
          newId: content._id
        })
      },
      fail: function (res) { },
      complete: () => wx.hideLoading()
    });


  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})