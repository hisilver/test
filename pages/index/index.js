// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    username: "nianbaby",
    job: "happy",
    tel: "666",
    addr: "China",
    img: null,
    pictures: ['pages/images/wait.png',
      'pages/images/left.png',
      'pages/images/right.png'
    ],
  },
  bindViewTap:function(){
    var that=this;
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success:function(res) {
        // tempFilePath可以作为img标签的src属性显示图片
        const tempFilePaths = res.tempFilePaths;
        that.setData({
          img:tempFilePaths
        })
      }
    })
  },
  // bindViewTap: function () {
  //   var that = this;
  //   wx.chooseImage({
  //     // 设置最多可以选择的图片张数，默认9,如果我们设置了多张,那么接收时//就不在是单个变量了,
  //     count: 1,
  //     sizeType: ['original','compressed'], // original 原图，compressed 压缩图，默认二者都有
  //     sourceType: ['album', 'camera'], // album 从相册选图，camera 使用相机，默认二者都有
  //     success: function (res) {
  //       // 获取成功,将获取到的地址赋值给临时变量
  //       const tempFilePaths = res.tempFilePaths;
  //       that.setData({
  //         //将临时变量赋值给已经在data中定义好的变量
  //         img: tempFilePaths
  //       })
  //     }
  //   })
  // },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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