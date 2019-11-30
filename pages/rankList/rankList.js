const app = getApp()
let localUlr = app.globalData.localUrl
Page({
    data: {
        rankWrapper: false,
        index: 1,
        rankList: localUlr + '/api/hot/activity/getList',
        loadingUrl: '/static/img/undraw_loading_frh4-2.svg',
        logoUrl: '/static/img/2-1-1.svg',
        errorUrl: '/static/img/error.svg',
        date: '2019-11-7 23:59',
        status: 'loading',
        list: [],
        isAll: false
    },
    onLoad() {
        let token = qq.getStorageSync('token')
        let that = this
        let { rankList, index } = this.data
        qq.request({
            url: rankList,
            method: 'post',
            data: {
                page_num: index,
                page_count: 5,
                token
            },
            header: {
                'content-type': 'application/x-www-form-urlencoded'
            },
            success(res) {
                let { data, result } = res.data
                let { list } = that.data
                if(result) {
                    let List = data.map(item => {
                        return {
                            url: localUlr + item.poster[0],
                            title: item.name,
                            auto: item.association.name,
                            link: '/pages/Content/content?id=' + item.id
                        }
                    })
                    that.setData({
                        status: 'success',
                        list: [...list, ...List],
                        rankWrapper: List.length !== 0
                    })
                } else {
                    that.setData({
                        status: 'error'
                    })
                }
            },
            fail() {
                that.setData({
                    status: 'error'
                })
            }
        })
        qq.showShareMenu({
            showShareItems: ['qq', 'qzone', 'wechatFriends', 'wechatMoment'],
            withShareTicket:true,
          })
    },
    onShareAppMessage() {
        return({
            title:'蜂拥-校园社团show',
            imageUrl:'/static/img/cardImg.jpg'
        })
    },
    //立即参加事件
    join(e) {
        let url = e.currentTarget.dataset.link
        qq.redirectTo({
            url
        })
    },
    onReachBottom() {
        if(isAll) {
            return
        }
        qq.showLoading({
            title: '加载中',
        })
        let token = qq.getStorageSync('token')
        let that = this
        let { rankList, index } = this.data
        index++
        qq.request({
            url: rankList,
            method: 'post',
            data: {
                page_num: index,
                page_count: 5,
                token
            },
            header: {
                'content-type': 'application/x-www-form-urlencoded'
            },
            success(res) {
                qq.hideLoading()
                let { data, result } = res.data
                let { list } = that.data
                if(result) {
                    if(data.length === 0) {
                        that.setData({
                            isAll: true
                        })
                        return
                    }
                    data.reverse()
                    let List = data.map(item => {
                        return {
                            url: item.poster[0],
                            title: item.name,
                            auto: 'aaa',
                            link: '/pages/Content/content?id=' + item.id
                        }
                    })
                    that.setData({
                        status: 'success',
                        list: [...list, ...List],
                        rankWrapper: List.length !== 0
                    })
                } else {
                    that.setData({
                        status: 'error',
                        index
                    })
                }
            },
            fail() {
                qq.hideLoading()
                that.setData({
                    status: 'error'
                })
            }
        })
    },
    //重新请求数据
    again() {

    }
})