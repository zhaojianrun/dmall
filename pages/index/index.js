var home = require('../../views/home/home.js'),
  sort = require('../../views/sort/sort.js'),
  cart = require('../../views/cart/cart.js'),
  mine = require('../../views/mine/mine.js'),
  about = require('../../views/about/about.js'),
  serviceCart = require('../../service/cart/cart'),
  views,
  _fn;

views = {
  home: home,
  sort: sort,
  cart: cart,
  mine: mine
}

Page({
  data: {
    currentData: home,
    cart: {
      num: 1
    },
    currentView: '',
    tabs: [{
        text: '首页',
        className: 'home',
        view: 'home'
      }, {
        text: '分类',
        className: 'sort',
        view: 'sort'
      }, {
        text: '购物车',
        className: 'cart',
        view: 'cart'
      }, {
        text: '我的',
        className: 'mine',
        view: 'mine'
      },
      {
        text: '关于',
        className: 'about',
        view: 'about'
      }
    ]
  },
  onReady: function() {
    _fn.selectView.call(this, 'home');
  },

  onShow: function() {
    // 每次显示都刷新一次购物车
    // 这样保证在商详添加后在首页也能显示
    var self = this;
    serviceCart.get(function(res) {
      self.setData({
        'cart.num': res.data.num
      });
    });
  },
  /**
   * 导航到对应的油画分类
   */
  goToPaintingList(e) {
    // 请求数据，渲染对应页面
    let currentView = 'sort';
    this.setData({
      currentView
    });
    _fn.selectView.call(this, currentView);
    sort.selectCategory.call(this, e.currentTarget.dataset.id);
  },
  changeTab: function(e) {
    var currentTarget = e.currentTarget,
      view = currentTarget.dataset.view;

    if (!view) {
      return;
    }

    // 请求数据，渲染对应页面
    this.setData({
      currentView: view
    });
    _fn.selectView.call(this, view);

  },
  clickProxy: function(e) {
    var cTarget = e.currentTarget,
      dataset = cTarget.dataset;
    if (views[dataset.view] && typeof views[dataset.view][dataset.func] == 'function') {
      views[dataset.view][dataset.func](this, e);
    }
  }
});

_fn = {
  selectView: function(view) {
    var view = views[view];
    if (!view) {
      return;
    }
    view.render(this);
  }
}