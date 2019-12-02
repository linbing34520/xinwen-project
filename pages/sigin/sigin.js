const util = require('../../utils/util.js')
const app = getApp
Page({
  data: {
    sigin: [],
    username: '',
    password: '',
    tishi:'',
    files: [{
      url: '',
    }]
  },
  gologinview: function() {
    wx.navigateTo({
      url: "/pages/logs/logs",
    })
  },
  //查找节点元素
  showFinddom() {
    const query = wx.createSelectorQuery();
    //定义查找器，查找元素位置
    query.select('#view').boundingClientRect()
    query.exec(ele => {
      //可以获取到top值进行滚动
      console.log(ele)
    });
  },
  //事件处理函数
  textChange(e) {
    console.log(e.detail.value);
    this.setData({
      [e.target.dataset.type]: e.detail.value
    });
  },
  chooseImage: function (e) {
    var that = this;
    wx.chooseImage({
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        that.setData({
          files: that.data.files.concat(res.tempFilePaths)
        });
      }
    })
  },
  previewImage: function (e) {
    wx.previewImage({
      current: e.currentTarget.id, // 当前显示图片的http链接
      urls: this.data.files // 需要预览的图片http链接列表
    })
  },
  selectFile(files) {
    console.log('files', files)
    // 返回false可以阻止某次文件上传
  },
  uplaodFile(files) {
    console.log('upload files', files)
    // 文件上传的函数，返回一个promise
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        reject('some error')
      }, 1000)
    })
  },
  siginquest:function() {
    var that = this
    wx.request({
      url: 'http://www.young1024.com:2019/reg',
      data: {
        username: this.data.username,
        password: this.data.password,
        img:'2.jpg',
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      method: 'post',
      dataType: 'json',
      responseType: 'text',
      success: function (res) {
        console.log(res);
        that.setData({
          tishi: res.data.msg
        });
        if (res.data.msg === '注册成功'){
          wx.navigateTo({
            url: '../logs/logs',
          })
        }
      },
      fail: function (res) { },
    })
  },
  //生命周期函数-监听页面加载
  onLoad: function() {
    this.setData({
      sigin: (wx.getStorageSync('logs') || []).map(sigin => {
        return util.formatTime(new Date(sigin))
      }),
      selectFile: this.selectFile.bind(this),
      uplaodFile: this.uplaodFile.bind(this)
    })
  },
  //生命周期函数-监听页面初次渲染完成
  onReady: function() {

  },
  //生命周期函数-监听页面卸载
  onUnload: function() {

  },
  //页面相关事件函数-监听用户下来动作 
  onPullDownRefresh: function() {

  },
  //页面上拉触底事件处理函数
  onReachBottom: function() {

  }
})