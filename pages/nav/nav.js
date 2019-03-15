// pages/nav/nav.js
var detailList = require('../data.js')

Page({
  data: {
    topScrollView: [{
      id: 1,
      text: '院系',
      bindtap: 'a',
      width: '13.5vw',
      hidden: false
    }, {
      id: 2,
      text: '教学楼',
      bindtap: 'b',
      width: '18vw',
      hidden: true
    }, {
      id: 3,
      text: '宿舍',
      bindtap: 'c',
      width: '13.5vw',
      hidden: true
    }, {
      id: 4,
      text: '餐饮',
      bindtap: 'd',
      width: '13.5vw',
      hidden: true
    }, {
      id: 5,
      text: '场馆',
      bindtap: 'e',
      width: '',
      hidden: true
    }, {
      id: 6,
      text: '校门',
      bindtap: 'f',
      width: '13.5vw',
      hidden: true
    }, {
      id: 7,
      text: '服务',
      bindtap: 'g',
      width: '13.5vw',
      hidden: true
    }, ],
    a: 0,
    b: 1,
    c: 1,
    d: 1,
    e: 1,
    f: 1,
    g: 1,
    latitude: 39.9913500000,
    longitude: 116.3607200000,
    list: [],
    scrolls: [],
    screenHeight: 1205,
    points: [],
    markers: [],
    current: 'tab1',
    current_scroll: 'tab1'
  },

  scrollOnTab: function(event) {
    var id = event.currentTarget.dataset.id;
    var self = this;
    self.setData({
      list: detailList.listData[id - 1].list,
      markers: detailList.listData[id - 1].markers,
      points: detailList.listData[id - 1].points
    });
    console.log(self.list)
  },

  onReady: function(e) {
    // 使用 wx.createMapContext 获取 map 上下文
    var self = this;
    self.mapCtx = wx.createMapContext('map')
    self.setData({
      list: detailList.listData[0].list,
      // scrolls: detailList.listData,
      markers: detailList.listData[0].markers,
      points: detailList.listData[0].points
    });
    console.log(self.list)
  },

  onLoad: function() {
    var height = 1205
    wx.getSystemInfo({
      success: function(res) {
        height = (res.screenHeight * 2) * 0.9
      },
    })

    this.setData({
      screenHeight: height
    });
  },

  goToDetail: function(event) {
    var id = event.currentTarget.dataset.id;
    wx.navigateTo({
      url: '/pages/detail/detail?id=' + id,
    })
  },

  goToNav: function(event) {
    wx.openLocation({
      latitude: event.currentTarget.dataset.latitude,
      longitude: event.currentTarget.dataset.longitude,
      scale: 18,
      name: event.currentTarget.dataset.name,
    })
  },

  tapTop: function(id) {
    this.setData({
      // topScrollView[id]
    })
  },

  a: function() {
    this.setData({
      a: 0,
      b: 1,
      c: 1,
      d: 1,
      e: 1,
      f: 1,
      g: 1,
      list: detailList.listData[0].list,
      markers: detailList.listData[0].markers,
      points: detailList.listData[0].points
    })
  },
  b: function() {
    this.setData({
      a: 1,
      b: 0,
      c: 1,
      d: 1,
      e: 1,
      f: 1,
      g: 1,
      list: detailList.listData[1].list,
      markers: detailList.listData[1].markers,
      points: detailList.listData[1].points
    })
  },
  c: function() {
    this.setData({
      a: 1,
      b: 1,
      c: 0,
      d: 1,
      e: 1,
      f: 1,
      g: 1,
      list: detailList.listData[2].list,
      markers: detailList.listData[2].markers,
      points: detailList.listData[2].points
    })
  },
  d: function() {
    this.setData({
      a: 1,
      b: 1,
      c: 1,
      d: 0,
      e: 1,
      f: 1,
      g: 1,
      list: detailList.listData[3].list,
      markers: detailList.listData[3].markers,
      points: detailList.listData[3].points
    })
  },
  e: function() {
    this.setData({
      a: 1,
      b: 1,
      c: 1,
      d: 1,
      e: 0,
      f: 1,
      g: 1,
      list: detailList.listData[4].list,
      markers: detailList.listData[4].markers,
      points: detailList.listData[4].points
    })
  },
  f: function() {
    this.setData({
      a: 1,
      b: 1,
      c: 1,
      d: 1,
      e: 1,
      f: 0,
      g: 1,
      list: detailList.listData[5].list,
      markers: detailList.listData[5].markers,
      points: detailList.listData[5].points
    })
  },
  g: function() {
    this.setData({
      a: 1,
      b: 1,
      c: 1,
      d: 1,
      e: 1,
      f: 1,
      g: 0,
      list: detailList.listData[6].list,
      markers: detailList.listData[6].markers,
      points: detailList.listData[6].points
    })
  },

  handleChange({
    detail
  }) {
    this.setData({
      current: detail.key
    });
  },

  handleChangeScroll({
    detail
  }) {
    this.setData({
      current_scroll: detail.key
    });
  }
  // getMyLocation: function(options) {
  //   var latitude = 0
  //   var longitude = 0
  //   console.log(longitude)
  //   console.log(latitude)
  //   wx.getLocation({
  //     type: 'wgs84',
  //     success: function(res) {
  //       latitude = res.latitude
  //       longitude = res.longitude
  //       console.log(longitude)
  //       console.log(latitude)
  //     }
  //   })
  //   this.setData({
  //     latitude: latitude,
  //     longitude: longitude,
  //   })
  //   console.log(longitude)
  //   console.log(latitude)
  // },
})