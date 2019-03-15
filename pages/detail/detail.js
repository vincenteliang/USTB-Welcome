// pages/detail/detail.js
var detailList = require('../data.js')

Page({
  data: {
    id: 0,
    latitude: 39.9913500000,
    longitude: 116.3607200000,
    detail: [],
    screenHeight: 1205
  },

  onLoad: function(options) {
    var id = options.id;
    this.setData({
      id: id,
      detail: detailList.listData[parseInt(id / 100 - 1)].list[id % 100],
    });
  },
  onShow: function () {
    var height = 1205
    wx.getSystemInfo({
      success: function (res) {
        
        height = (res.screenHeight * 2) - 130
      },
    })
    
    this.setData({
      screenHeight: height
    });
  },
  goToNav: function () {
    var id = this.data.id;
    wx.openLocation({
      latitude: detailList.listData[parseInt(id / 100 - 1)].list[id % 100].latitude,
      longitude: detailList.listData[parseInt(id / 100 - 1)].list[id % 100].longitude,
      scale: 18,
      name: detailList.listData[parseInt(id / 100 - 1)].list[id % 100].title,
    })
  },

})

