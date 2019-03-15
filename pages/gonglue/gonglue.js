Page({

  data: {
    screenHeight: 1205
  },
  onLoad: function () {
    var height = 1205
    wx.getSystemInfo({
      success: function (res) {
        console.log(res.screenHeight)
        height = (res.screenHeight * 2) - 130
      },
    })
    console.log(height)
    this.setData({
      screenHeight: height
    });
  },
  goTo1: function () {
    wx.navigateTo({
      url: '1/1',
    })
  },
  goTo2: function () {
    wx.navigateTo({
      url: '2/2',
    })
  },
  goTo3: function () {
    wx.navigateTo({
      url: '3/3',
    })
  },
  goTo4: function () {
    wx.navigateTo({
      url: '4/4',
    })
  },
  goTo5: function () {
    wx.navigateTo({
      url: '5/5',
    })
  },
  goTo6: function () {
    wx.navigateTo({
      url: '6/6',
    })
  },
  goTo7: function () {
    wx.navigateTo({
      url: '7/7',
    })
  },
  goTo8: function () {
    wx.navigateTo({
      url: '8/8',
    })
  },
})