var data;
data = {
  shipment: {
    type: [{
      text: '云强博纳自营配送',
      type: 1,
      selected: true
    }, {
      text: '极速快递',
      type: 2,
      selected: false
    }, {
      text: '普通快递',
      type: 3,
      selected: false
    }],
    time: [{
      text: '明天上午（周日） 08:00-12:00',
      timeType: 2,
      selected: true
    }, {
      text: '明天下午（周日） 14:00-22:00',
      timeType: 1,
      selected: false
    }, {
      text: '后天上午（周一） 08:00-12:00',
      timeType: 3,
      selected: false
    }, {
      text: '后天下午（周一） 14:00-22:00',
      timeType: 4,
      selected: false
    }]
  },


  payment: [{
    iconClass: 'onlinepayment',
    text: '在线支付',
    selected: false
  }, {
    iconClass: 'offlinepayment',
    text: '货到付款',
    selected: true
  }],
  remarks: {
    text: ''
  },

  orderInfo: {
    list: [{
      name: '商品金额',
      price: '¥15750.00'
    }, {
      name: '促销优惠',
      price: '¥50.00'
    }, {
      name: '基础运费',
      price: '¥15.00'
    }],
    all: '¥15750.00'
  },

  products: [{
    name: '闲云野鹤  金正泰',
    num: 1,
    price: '¥9760.00'
  }, {
    name: '万里河山',
    num: 1,
    price: '¥5990.00'
  }],
  totalPrice: '15750.00'
};
module.exports = data;