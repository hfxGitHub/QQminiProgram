const app = getApp()

Page({
    data: {
        logoUrl: '/static/img/2-1-1.svg',
        date: '2019-11-7 23:59',
        status: 'loading',
        list: [{
            url: '/static/img/111.png',
            title: '“英雄联盟”第一届比赛开始啦！',
            auto: '“电子竞技协会'
        }, {
            url: '/static/img/111.png',
            title: '“英雄联盟”第一届比赛开始啦！aaaaaaaa',
            auto: '电子竞技协会'
        }, {
            url: '/static/img/111.png',
            title: '“英雄联盟”第一届比赛开始啦！',
            auto: '电子竞技协会'
        }, {
            url: '/static/img/adasd.jpg',
            title: '“英雄联盟”第一届比赛开始啦！“英雄联盟”第一届比赛开始啦！“英雄联盟”第一届比赛开始啦！“英雄联盟”第一届比赛开始啦！“英雄联盟”第一届比赛开始啦！',
            auto: '电子竞技协会'
        }]
    },
    onLoad() {
        let that = this
        setTimeout(() => {
            this.setData({
                status: 'success'
            })
        }, 500)
    },
    //立即参加事件
    join() {

    },
    //重新请求数据
    again() {

    }
})