Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentIndexNav:0,
    NavList:[],
    swiperList:[],
    videoList:[]
  },

  getVideosList(){
    let then =this;
    wx.request({
      url: 'http://mock-api.com/mnEe4VnJ.mock/videoList',
      success(res){
        console.log(res.data.data.videoList);
        
          then.setData({
            videoList:res.data.data.videoList
          })
      }
    })
  },
// 获取轮播图
  getSwiperList(){
    let then=this;
    wx.request({
      url: 'http://mock-api.com/mnEe4VnJ.mock/swiperList',
      success(res){
        console.log(res);
        if(res.data.code===0){
          then.setData({
            swiperList:res.data.data.swiperList
          })
        }
      }
    })
  },

  activeNav(e){
    let then=this;
    then.setData({
      currentIndexNav:e.target.dataset.index
    })
  },

  //请求滚动导航栏
  getNavList(){
    let then=this;
    wx.request({
      url: 'http://mock-api.com/mnEe4VnJ.mock/navList',
      success(res){
        if(res.data.code==0){
          then.setData({
            NavList:res.data.data.navList
          })
        }
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getNavList();
    this.getSwiperList();
    this.getVideosList();
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