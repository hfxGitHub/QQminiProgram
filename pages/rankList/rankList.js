const app = getApp()
let localUlr = app.globalData.localUrl
Page({
    data: {
        index: 1,
        rankList: localUlr + '/api/hot/activity/getList',
        loadingUrl: '/static/img/undraw_loading_frh4-2.svg',
        logoUrl: '/static/img/2-1-1.svg',
        errorUrl: '/static/img/error.svg',
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
        let { rankList, index } = this.data
        qq.request({
            url: rankList,
            method: 'post',
            data: {
                page_num: index,
                page_count: 5
            },
            header: {
                'content-type': 'application/x-www-form-urlencoded'
            },
            success(res) {
                let { data, result } = res.data
                console.log(result, res)
            }
        })
        this.setData({
            status: 'error'
        })
        
    },
    //立即参加事件
    join() {

    },
    //重新请求数据
    again() {

    }
})