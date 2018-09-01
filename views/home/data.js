var data = {
  errCode: '0000',
  errMsg: '',
  data: {
    name: 'home',
    modules: [{
        type: 'slider',
        data: [{
          img: 'http://pckkf7npd.bkt.clouddn.com/thumbnail/%E6%B6%9B%E5%A3%B0%20%20%E6%9E%97%E3%A6%B2thumbnail.jpg',
          link: '../active/active',
          selected: true
        }, {
          img: 'http://pckkf7npd.bkt.clouddn.com/thumbnail/%E9%87%8D%E5%B1%B1%E5%A4%8D%E5%B2%AD%20%20%E5%B0%B9%E5%A4%A7%E5%93%B2%20%20thumbnail.jpg',
          link: '../active/active',
          selected: false
        }, {
          img: 'http://pckkf7npd.bkt.clouddn.com/thumbnail/%E9%87%91%E5%88%9A%E5%B1%B1%20%20%E4%BF%9E%E9%95%BF%20%20%20thumbnail.jpg',
          link: '../active/active',
          selected: false
        }]
      },
      {
        type: 'category',
        data: [{
            id: 1,
            title: '极品推荐', //标题
            avatar: 'http://pckkf7npd.bkt.clouddn.com/category/%E6%9E%81%E5%93%81%E6%8E%A8%E8%8D%90.png' //图标
          },
          {
            id: 2,
            title: '山水风景',
            avatar: 'http://pckkf7npd.bkt.clouddn.com/category/%E5%B1%B1%E6%B0%B4%E9%A3%8E%E6%99%AF.png'
          },
          {
            id: 3,
            title: '花鸟家禽',
            avatar: 'http://pckkf7npd.bkt.clouddn.com/category/%E8%8A%B1%E9%B8%9F%E5%AE%B6%E7%A6%BD.png'
          },
          {
            id: 4,
            title: '飞禽猛兽',
            avatar: 'http://pckkf7npd.bkt.clouddn.com/category/%E9%A3%9E%E7%A6%BD%E7%8C%9B%E5%85%BD.png'
          },
          {
            id: 5,
            title: '民俗民风',
            avatar: 'http://pckkf7npd.bkt.clouddn.com/category/%E6%B0%91%E4%BF%97%E6%B0%91%E9%A3%8E.png'
          },
          {
            id: 6,
            title: '人物肖像',
            avatar: 'http://pckkf7npd.bkt.clouddn.com/category/%E4%BA%BA%E7%89%A9%E8%82%96%E5%83%8F.png'
          },
          {
            id: 7,
            title: '水墨画',
            avatar: 'http://pckkf7npd.bkt.clouddn.com/category/%E6%B0%B4%E5%A2%A8%E7%94%BB.png'
          },
          {
            id: 8,
            title: '静物',
            avatar: 'http://pckkf7npd.bkt.clouddn.com/category/%E9%9D%99%E7%89%A9.png'
          }
        ]
      },
      {
        type: 'title',
        data: {
          title: '热销油画',
          subTitle: 'HOT OIL PAINTING'
        }
      },
      {
        type: 'commodity-list',
        data: [{
          img: 'http://pckkf7npd.bkt.clouddn.com/thumbnail/%E9%97%B2%E4%BA%91%E9%87%8E%E9%B9%A4%20%20%E9%87%91%E6%AD%A3%E6%B3%B0thumnail.jpg',
          title: '闲云野鹤  金正泰',
          price: '8000.00',
          skuId: 123,
          storeId: 456,
          originPrice: '9000.00',
          link: '../details/details?sku=123'
        }, {
          img: 'http://pckkf7npd.bkt.clouddn.com/thumbnail/%E5%8D%88%E5%90%8E%E7%9A%84%E9%98%B3%E5%85%89%20%20%E9%87%91%E6%AD%A3%E8%B5%ABthumbnail.jpg',
          title: '午后的阳光  金正赫午后的阳光  金正赫午后的阳光  金正赫',
          price: '1650.00',
          originPrice: '2250.00',
          sku: '',
          link: '../details/details?sku=456'
        }, {
          img: 'http://pckkf7npd.bkt.clouddn.com/thumbnail/%E9%9B%AA%E5%B1%B1%E7%80%91%E5%B8%83%20%20%E5%B0%B9%E5%A4%A7%E5%93%B2thumbnail.jpg',
          title: '雪山瀑布  尹大哲',
          price: '2500.00',
          originPrice: '3000.00',
          link: '../details/details?sku=789'
        }, {
          img: 'http://pckkf7npd.bkt.clouddn.com/thumbnail/%E8%8D%A3%E5%BD%92%E6%95%85%E9%87%8C%20%E4%BD%9A%E5%90%8Dthumbnail.jpg',
          title: '荣归故里 佚名',
          price: '9900.00',
          originPrice: '12600.00',
          link: '../details/details?sku=789'
        }, {
          img: 'http://pckkf7npd.bkt.clouddn.com/thumbnail/%E8%AF%BB%E6%8A%A5%20%20%20%E4%B8%A5%E5%AD%9D%E6%B9%9Ethumbnail.jpg',
          title: '读报   严孝湞',
          price: '1990.00',
          originPrice: '6000.00',
          link: '../details/details?sku=789'
        }, {
          img: 'http://pckkf7npd.bkt.clouddn.com/thumbnail/%E5%A9%9A%E7%BA%A6%20%20%E9%87%91%E4%BA%91%20thumbnail.jpg',
          title: '婚约  金云',
          price: '3890.00',
          originPrice: '9450.00',
          link: '../details/details?sku=789'
        }]
      }
    ]
  }
}

module.exports = data;