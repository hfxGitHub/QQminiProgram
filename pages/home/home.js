const app = getApp()
let localUlr = app.globalData.localUrl
Page({
    data: {
        Gamma: 0,
        left: 0,
        bannerUrl: localUlr + '/api/getBanners',
        activityUrl: localUlr + '/api/queryActivityList',
        activeUrl: localUlr + '/api/queryActivityList',
        timer: 3000,
        Index: 0,
        banner: [],
        logoSrc: '/static/img/1-1-4.svg',
        turn: '/static/img/turn.svg',
        whiteTurn: '/static/img/0000.svg',
        activeList: [],
        activityList: []
    },
    onLoad() {
        let that = this
        let { activityUrl, bannerUrl, activeUrl } = this.data
        //获取校园活动数据
        qq.request({
            url: activityUrl,
            method: 'post',
            data: {
                page_num: 1,
                page_count: 10
            },
            header: {
                'content-type': 'application/x-www-form-urlencoded'
            },
            success(res) {
                console.log(res)
                let { data, result } = res.data
                if(result) {
                    data = data.map(item => {
                        let { date_start, date_end, id, name, tag, association, poster } = item
                        return {
                            data_start: date_start,
                            data_end: date_end,
                            tag,
                            content: name,
                            title: association.name,
                            imgUrl: localUlr + poster[0],
                            logoUrl: association.icon || '/static/img/社团默认.svg',
                            url: '/pages/introduction/introduction?id=' + association.id,
                            link: '/pages/Content/content?id=' + id
                        }
                    })
                    that.setData({
                        activityList: [...that.data.activityList, ...data]
                    })
                }
            }
        })

        //获取热门活动集合
        qq.request({
            url: activeUrl,
            method: 'post',
            data: {
                page_num: 1,
                page_count: 5
            },
            header: {
                'content-type': 'application/x-www-form-urlencoded'
            },
            success(res) {
                let { data, result } = res.data
                console.log(res)
                if(result) {
                    data = data.map(item => {
                        let { id, name, poster, association } = item
                        return {
                            url: '/pages/introduction/introduction?id=' + association.id,
                            link: '/pages/Content/content?id=' + id,
                            logoUrl: association.icon || '/static/img/社团默认.svg',
                            imgUrl: localUlr + poster[0],
                            title: association.name,
                            content: name
                        }
                    })
                    that.setData({
                        activeList: data,
                        left: 0
                    }, () => {
                        /*//获取到数据后开始监听陀螺仪
                        qq.startGyroscope({
                            interval: 'ui'
                        })

                        qq.onGyroscopeChange(res => {
                            let { x, y, z } = res
                            let { left, Y } = that.data
                            if(y > 5 && Math.abs(Y - y) > 3) {
                                that.setData({
                                    left: left + 10,
                                    Y: y,
                                })
                            } else if(y < 5 && Math.abs(Y - y) > 3) {
                                that.setData({
                                    left: left - 10,
                                    Y: y,
                                })
                            } else {
                                
                            }
                        })*/
                        /*qq.startDeviceMotionListening({
                            interval: 'ui'
                        })
                        qq.onDeviceMotionChange(res => {
                            let { left, Gamma } = that.data
                            let { gamma } = res
                            console.log(gamma)
                            if(Gamma - gamma > 0.1) {
                                that.setData({
                                    left: left + 20,
                                    Gamma: gamma
                                })
                            } else if( Gamma - gamma < -0.1 ) {
                                that.setData({
                                    left: left - 20,
                                    Gamma: gamma
                                })
                            }
                        })*/
                    })
                }
            }
        })


        //获取首页轮播图
        qq.request({
            url: bannerUrl,
            method: 'post',
            success(res) {
                let { data, result } = res.data
                console.log(res)
                if(result) {
                    that.setData({
                        banner: data
                    })
                }
            }
        })
    },
    onShow(e) {
        let detail
        if(e) {
            detail = e.detail
            let { current } = detail
            this.setData({
                Index: current
            })
        }
    },
    //页面卸载时触发
    onUnload() {
        //停止监听陀螺仪
        qq.stopGyroscope()
    },
    //监听用户滑动事件
    onPageScroll(e) {
        let { scrollTop } = e;
        this.setData({
            left: scrollTop
        })
    }
})