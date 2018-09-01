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
        type: 'module-1',
        data: [{
          img: 'http://img.dmall.com/20161206/0ec7c6eb-b60a-42d4-acdb-d47ad7844a13_360x360H',
          title: 'Mixxtail魅夜 专业鸡尾酒 蓝色幻想鸡尾酒（露酒）310ml',
          price: '8.00',
          skuId: 123,
          storeId: 456,
          originPrice: '9.00',
          link: '../details/details?sku=123'
        }, {
          img: 'http://img.dmall.com/20161112/06aacf18-237a-4b70-a238-e64c235007e7_360x360H',
          title: '曼可顿面包 香蕉牛奶味 68g',
          price: '1.65',
          originPrice: '2.25',
          sku: '',
          link: '../details/details?sku=456'
        }, {
          img: 'http://img.dmall.com/20161112/fe0bc645-e1e5-48ef-a792-44a81a2ef66e_360x360H',
          title: '康师傅蜂蜜绿茶 500ml',
          price: '2.50',
          originPrice: '3.00',
          link: '../details/details?sku=789'
        }, {
          img: 'http://img.dmall.com/20161112/283de793-f07b-474c-b766-ba1bc2bfa34f_360x360H',
          title: '金锣玉米热狗肠 40g*10',
          price: '9.90',
          originPrice: '12.60',
          link: '../details/details?sku=789'
        }, {
          img: 'http://img.dmall.com/20161215/de13f732-009a-4bb5-9b01-27613592d0dd_360x360H',
          title: '旺仔优酪乳 132g*16/箱',
          price: '19.90',
          originPrice: '60.00',
          link: '../details/details?sku=789'
        }, {
          img: 'http://img.dmall.com/20161213/b467ed5e-996f-4840-8c3a-600c6dfda9a9_360x360H',
          title: '绿伞去污超人洗衣液 3kg',
          price: '38.90',
          originPrice: '19.45',
          link: '../details/details?sku=789'
        }]
      }
    ]
  }
}

module.exports = data;