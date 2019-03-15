Page({
  data: {
    screenHeight: 1205
  },
  onLoad: function() {
    var height = 1205
    wx.getSystemInfo({
      success: function(res) {
        
        height = (res.screenHeight * 2) - 130
      },
    })
    this.setData({
      screenHeight: height
    });
    console.log(height)
  },
})