// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    videoInfo:[],
    otherList:[],
    commentData:null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      let videoID=options.id;
      this.getVideo(videoID);
     this.getotherList();
     this.getCommentList(videoID);
  },
// 获取视频
  getVideo(videoID){
    let then=this;
    wx.request({
      url: 'https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/videoDetail?id='+videoID,
      success(res){
        if(res.data.code==0){
            then.setData({
              videoInfo:res.data.data.videoInfo
            })
        }
      }
    })
  },
  getotherList(){
    let then=this;
    wx.request({
      url: 'http://mock-api.com/mnEe4VnJ.mock/otherList',
      success(res){
        if(res.data.code===0){
          then.setData({
            otherList:res.data.data.otherList
          })
        }
      }
    })
  },
  getCommentList(videoID){
    let then=this;
    wx.request({
      url: 'http://mock-api.com/mnEe4VnJ.mock/commentList?id='+videoID,
      success(res){
        if(res.data.code===0){
          console.log(res.data.data.commentData);
          then.setData({
            commentData:res.data.data.commentData
          })
        }
      }
    })
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