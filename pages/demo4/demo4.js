// pages/demo4/demo4.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    deviceInfo:""

  },
  // 路由 按钮 增加事件 跳转页面
  clickButn:function(){
    wx.navigateTo({
      url: '/pages/demo3/demo3',
    })

  },
  //view 标签实现交互跳转
  viwTap:function(){
    wx.navigateTo({
      url: '/pages/demo3/demo3',
      // 打印回调
      success:res=>{
        console.log(res)
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // loding
    wx.showLoading({
      title: '数据加载中。。。',
    })
    setTimeout(res=>{
      wx.hideLoading(),3000
    })
    // tost
    wx.showToast({
      title: '提交成功',
      icon:""  //none
    })
    console.log("系统信息：",wx.getSystemInfoSync())
    console.log("设备信息：",wx.getSystemInfoSync().model)
    var devName=wx.getSystemInfoSync().model
    this.setData({deviceInfo:devName})

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