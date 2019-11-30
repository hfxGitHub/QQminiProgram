const app = getApp()
let localUlr = app.globalData.localUrl
let id = app.globalData.id

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
        activityList: [],
        activityIndex: 1,
        isAll: false
    },
    onLoad(e) {
        let that = this;
		let p = new Promise((resp, rej) => {
            qq.showLoading({
                title: '请稍等呦~',
                mask:true,

            })
			qq.login({
				success(res) {
					//如果token不存在或者过期就请求token
					if (res.code) {
						qq.request({
							url: localUlr + '/api/login',
							data: {
								code: res.code,
								client: 'qq'
							},
							success(res) {
								let { result, token } = res.data
								let User = res.data.user
								let id = User.user_id
								if (result) {
									qq.setStorageSync("token", token)
									qq.setStorageSync("id", id)
								}
								resp(token)
								let { user } = res.data
								if(e){
									if(e.introductionid){
										qq.redirectTo({
											url: '/pages/introduction/introduction?id='+e.introductionid
										})
										return;
									}
									if(e.contentid){
										qq.redirectTo({
											url: '/pages/Content/conetent?id='+e.contentid
										})
										return;
									}
								}
							}
						})
					}
				}
			})
		})
        p.then(res => {
            let token = qq.getStorageSync('token')
            let { activityUrl, bannerUrl, activeUrl, activityIndex } = this.data
            //获取校园活动数据
            qq.request({
                url: activityUrl,
                method: 'post',
                data: {
                    page_num: activityIndex,
                    page_count: 10,
                    token
                },
                header: {
                    'content-type': 'application/x-www-form-urlencoded'
                },
                success(res) {
                    qq.hideLoading();
                    let { data, result } = res.data
                    if(result) {
                        data.reverse()
                        data = data.map(item => {
                            let { date_start, date_end, id, name, tag, association, poster } = item
                            tag = tag.map(v => v.name)
                            let logo = localUlr + association.icon
                            return {
                                data_start: date_start,
                                data_end: date_end,
                                tag,
                                content: name,
                                title: association.name,
                                imgUrl: localUlr + poster[0],
                                logoUrl: logo === localUlr || /heic$/i.test(logo) ? '/static/img/default.svg' : logo,
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
                    page_count: 5,
                    token
                },
                header: {
                    'content-type': 'application/x-www-form-urlencoded'
                },
                success(res) {
                    let { data, result } = res.data
                    if(result) {
                        data.reverse()
                        data = data.map(item => {
                            let { id, name, poster, association } = item
                            let icon =  localUlr + association.icon
                            return {
                                url: '/pages/introduction/introduction?id=' + association.id,
                                link: '/pages/Content/content?id=' + id,
                                logoUrl: icon === '' || /heic$/i.test(icon) ? '/static/img/default.svg' : icon,
                                imgUrl: localUlr + poster[0],
                                title: association.name,
                                content: name
                            }
                        })
                        that.setData({
                            activeList: data,
                            left: 0
                        })
                    }
                }
            })

            //获取首页轮播图
            qq.request({
                url: bannerUrl,
                method: 'get',
                data: {
                    token
                },
                success(res) {
                    let { data, result } = res.data
                    
                    if(result) {
                        data = data.map(item => {
                            item.img = localUlr + item.img
                            return item
                        })
                        that.setData({
                            banner: data
                        })
                    }
                }
            })
            qq.showShareMenu({
                showShareItems: ['qq', 'qzone', 'wechatFriends', 'wechatMoment'],
                withShareTicket:true,
            })
        })
    },
    onShareAppMessage() {
        return({
            title:'蜂拥-校园社团show',
            imageUrl:'/static/img/cardImg.jpg'
        })
    },
    onReachBottom() {
        if(this.data.isAll) {
            return
        } 
        let token = qq.getStorageSync('token')
        qq.showLoading({
            title: '加载中',
        })
        let { activityIndex, activityUrl } = this.data
        let that = this
        activityIndex++
        qq.request({
            url: activityUrl,
            method: 'post',
            data: {
                page_num: activityIndex,
                page_count: 10,
                token
            },
            header: {
                'content-type': 'application/x-www-form-urlencoded'
            },
            success(res) {
                let { data, result } = res.data
                if(result) {
                    data.reverse()
                    if(data.length === 0) {
                        qq.hideLoading()
                        that.setData({
                            isAll: true
                        })
                        return 
                    }
                    data = data.map(item => {
                        let { date_start, date_end, id, name, tag, association, poster } = item
                        tag = tag.map(v => v.name)
                        let logo = localUlr + association.icon
                        
                        return {
                            data_start: date_start,
                            data_end: date_end,
                            tag,
                            content: name,
                            title: association.name,
                            imgUrl: localUlr + poster[0],
                            logoUrl: logo === localUlr || /heic$/i.test(logo) ? '/static/img/default.svg' : logo,
                            url: '/pages/introduction/introduction?id=' + association.id,
                            link: '/pages/Content/content?id=' + id
                        }
                    })
                    qq.hideLoading()
                    that.setData({
                        activityList: [...that.data.activityList, ...data],
                        activityIndex
                    })
                }
            },
            fail(res) {
                qq.showToast({
                    title: '出错了',
                    icon: 'none',
                    duration: 2000
                  })
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