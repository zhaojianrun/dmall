var handle, events, _fn,
  utils = require('../../common/utils/utils'),
  serviceItems = require('../../service/items/items.js'),
  serviceCart = require('../../service/cart/cart.js'),
  data = require('./data.js'),
  _fn;

handle = {
  render: function(callerPage) {
    _fn.init(callerPage);
    data.data.searchBox = {
      tapEvent: 'sortGotoSearch',
      autoFocus: false,
      showInput: false
    }
    callerPage.setData({
      currentView: 'sort',
      currentData: data.data
    });
    // 选中第几个tab
    _fn.select(1, callerPage);
  },
  //选中值为id的分类
  selectCategory(id) {
    _fn.select(id, this);
  }
};

events = {
  /**
   * 变更分类
   */
  sortChangeSort: function(e) {
    var currentTarget = e.currentTarget,
      index = currentTarget.dataset.sortIndex;
    _fn.select(index, this);
  },
  sortGotoSearch: function(e) {
    wx.navigateTo({
      url: '../search/search?autofocus=true'
    });
  },
  sortClickProxy: function(e) {
    var target = e.target,
      event = target.dataset.event;
    if (typeof _fn[event] == 'function') {
      _fn[event](e, this);
    }
  }
}

_fn = {
  init: function(callerPage) {
    if (callerPage.initedSort) {
      return;
    }
    utils.mix(callerPage, events);
    callerPage.initedSort = true;
  },
  /**
   * 选中id为index的分类
   */
  select: function(index, callerPage) {
    var sortList = callerPage.data.currentData.sortList,
      i, s;

    for (i = 0; i < sortList.length;++i) {
      s = sortList[i]; 
      s.selected = s.id == index ? true : false;
    }
    // 设置翻页
    callerPage.setData(callerPage.data);


    serviceItems.search({
      sortId: sortList.filter(item=>item.id==index).id
    }, function(res) {
      var item = res.data.list.shift();
      res.data.list.push(item);

      callerPage.setData({
        'currentData.itemList': res.data,
        'currentData.itemList.showAddCart': true
      });
    });
  },
  addCart: function(e, callerPage) {
    var dataset = e.currentTarget.dataset,
      self = callerPage;

    serviceCart.add(dataset.storeId, dataset.skuId, 1, function(res) {
      self.setData({
        'cart.num': res.data.num
      });
    });
  }
}

module.exports = handle;