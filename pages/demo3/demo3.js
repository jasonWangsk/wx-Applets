// pages/demo3/demo3.js
Page({

  /**
   * 页面的初始数据 -可写可不写
   */
  data: {
    name:"pp",
    content:"",
    wth:100,
    bgcolor:"pink"


  },
  //按钮 设置内容
  butTap: function(){
    this.setData({content:"哈哈哈哈哈",
    bgcolor:"orange",
    wth:300,

  })

  },

  // 绑定触发事件 res为回调函数
  myTap: function(res){
    console.log("点击--绑定事件",res)
    console.log(res.currentTarget.dataset)
    // 定义变量
    var name=res.currentTarget.dataset.name
    console.log(name)
    // 重新赋值 this代表整个page对象
    this.setData({name:name})

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log("监听页面加载")

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log("监听页面初次渲染完成")


  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log("监听页面显示")

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log("监听页面隐藏")

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
    console.log("监听用户下拉动作")

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.log("页面上拉触底事件的处理函数")

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    console.log("用户点击右上角分享")

  }
})