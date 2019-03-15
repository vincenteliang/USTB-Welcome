Page({
  data: {
    current: 'homepage'
  },

  goTo1 () {
    this.setData({
      current: 'homepage'
    });
  },
  goTo2() {
    this.setData({
      current: 'group'
    });
  },
  goTo3() {
    this.setData({
      current: 'remind'
    });
  },
  goTo4() {
    this.setData({
      current: 'mine'
    });
  },
});