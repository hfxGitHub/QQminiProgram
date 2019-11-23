const app = getApp()
Page({
    data: {
        _nowImg:0,
        toHome:'../home/home',
        imgUrls:[
            'http://173.82.115.226:8080/api/upload/27/87/27878049d3b3784f1137d4fd6543caa1.jpg',
            'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574183365280&di=42d1ef360de91c9b1c993e249b4ffd11&imgtype=0&src=http%3A%2F%2Fimg66.hbzhan.com%2F9%2F20170208%2F636221461533481693811.png',
            'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574252408321&di=19d25d101524cb81d21ef52d0266bb15&imgtype=0&src=http%3A%2F%2Fwww.coolzou.com%2Fphoto%2F2011%2F12%2F22%2Fsite_538.jpg',
            'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574252408321&di=19d25d101524cb81d21ef52d0266bb15&imgtype=0&src=http%3A%2F%2Fwww.coolzou.com%2Fphoto%2F2011%2F12%2F22%2Fsite_538.jpg'
        ],
        contentImgUrls:[
            'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574410751611&di=245f91d18dbb14213718f1318fdc30a9&imgtype=0&src=http%3A%2F%2Famuseum.cdstm.cn%2FAMuseum%2Fzhiwu%2Fstatic%2Fuploadfile%2F20061227161453156.jpg',
            'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574410751611&di=245f91d18dbb14213718f1318fdc30a9&imgtype=0&src=http%3A%2F%2Famuseum.cdstm.cn%2FAMuseum%2Fzhiwu%2Fstatic%2Fuploadfile%2F20061227161453156.jpg',
            'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574410751611&di=245f91d18dbb14213718f1318fdc30a9&imgtype=0&src=http%3A%2F%2Famuseum.cdstm.cn%2FAMuseum%2Fzhiwu%2Fstatic%2Fuploadfile%2F20061227161453156.jpg',
            'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574410751611&di=245f91d18dbb14213718f1318fdc30a9&imgtype=0&src=http%3A%2F%2Famuseum.cdstm.cn%2FAMuseum%2Fzhiwu%2Fstatic%2Fuploadfile%2F20061227161453156.jpg',
        ],
        toIntroduction: '/pages/introduction/introduction',
        indicatorDots: true, //是否显示面板指示点
        autoplay: true, //是否自动切换
        interval: 2000, //自动切换时间间隔,2s
        duration: 300,
        animation:{},
        fixedBtn:false,
        IdImg:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574252408321&di=19d25d101524cb81d21ef52d0266bb15&imgtype=0&src=http%3A%2F%2Fwww.coolzou.com%2Fphoto%2F2011%2F12%2F22%2Fsite_538.jpg',
    },
    onReady: function () {
        this.animation = qq.createAnimation({
            "duration":300,
        })
        this.setData({
            bottomBtnHeight:125 / 750 * qq.getSystemInfoSync().windowWidth
        })
    },
    onPageScroll: function (ev) {
        if(ev.scrollTop > 10) {
            this.setData({
                fixedBtn:true,
            })
        }else{
            this.setData({
                fixedBtn:false,
            })
        }
    },
})