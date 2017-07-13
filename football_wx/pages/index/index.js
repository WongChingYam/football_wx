//index.js
//获取应用实例
var app = getApp()
Page({
  onLoad(options) {
    this.setData({
      userName: options.userName
    })
  },
  data: {
    currentTab:0,
    currentSel:0,
    userName:'',
    list:[{
      img:'/imgs/pic.png',
      title:'小丸子啊小丸子！'
    }, 
    {
      img: '/imgs/pic1.png',
      title: '萌萌哒小丸子啊萌萌哒！'
    }, 
    {
      img: '/imgs/pic2.png',
      title: '小丸子啊小丸子！'
    }, 
    {
      img: '/imgs/pic3.png',
      title: '小丸子啊萌萌哒小丸子！'
    },
    {
      img: '/imgs/pic.png',
      title: '小丸子啊小丸子！'
    },
    {
      img: '/imgs/pic1.png',
      title: '萌萌哒小丸子啊萌萌哒！'
    },
    {
      img: '/imgs/pic2.png',
      title: '小丸子啊小丸子！'
    },
    {
      img: '/imgs/pic3.png',
      title: '小丸子啊萌萌哒小丸子！'
    }],
    list1: [{
      img: '/imgs/pic1-1.jpg',
      title: '徐云龙争顶'
    },
    {
      img: '/imgs/pic1-2.jpg',
      title: '马季奇向裁判示意对手拉扯武磊进球后脚抽筋'
    },
    {
      img: '/imgs/pic1-1.jpg',
      title: '徐云龙争顶'
    },
    {
      img: '/imgs/pic1-2.jpg',
      title: '马季奇向裁判示意对手拉扯武磊进球后脚抽筋'
    },
    {
      img: '/imgs/pic1-1.jpg',
      title: '徐云龙争顶'
    },
    {
      img: '/imgs/pic1-2.jpg',
      title: '马季奇向裁判示意对手拉扯武磊进球后脚抽筋'
    },
    {
      img: '/imgs/pic1-1.jpg',
      title: '徐云龙争顶'
    },
    {
      img: '/imgs/pic1-2.jpg',
      title: '马季奇向裁判示意对手拉扯武磊进球后脚抽筋'
    }],
    focusList:[{
      img:'/imgs/t.png',
      name:'我叫小萌',
      info:'我是小萌我怕谁！哈哈哈！',
      goodNum:382344,
      articleImg: '/imgs/t1.png', 
      articleInfo: '小丸子啊小丸子！'
    }, 
    {
      img: '/imgs/t.png',
      name: '我叫小萌',
      info: '我是小萌我怕谁！哈哈哈！',
      goodNum: 382344,
      articleImg: '/imgs/t1.png',
      articleInfo: '小丸子啊小丸子！'
    },
    {
      img: '/imgs/t.png',
      name: '我叫小萌',
      info: '我是小萌我怕谁！哈哈哈！',
      goodNum: 382344,
      articleImg: '/imgs/t1.png',
      articleInfo: '小丸子啊小丸子！'
    }]
  },
  changeNav(e){
    this.setData({
      currentTab:e.target.dataset.current-0
    })
  },
  changeContent(e){
    // console.log(e.detail.current)
    this.setData({
      currentTab: e.detail.current - 0
    })
  },
  changeSel(e){
    this.setData({
      currentSel: e.target.dataset.current - 0
    })
  }
})
