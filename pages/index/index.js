//index.js
//获取应用实例
const app = getApp()
let localUlr = app.globalData.localUrl
Page({
	data: {
		idIsFocus: false,
		passWdIsFocus: false,
		codeIsFocus: false,
		login: false,
		logoSrc: '/static/img/0-1-1.svg',
		logo2Src: '/static/img/0-1-2.svg',
		loadingSrc: '/static/img/loading.gif',
		verCode: ''
	},
	onLoad() {
		let that = this;
		let token = qq.getStorageSync('token')
		//获取验证码
		qq.request({
			url: localUlr + '/api/studentCertify/preLogin',
			data: {
				token,
				client: 'qq' 
			},
			success(res) {
				let { result, captcha } = res.data
				if(result && typeof captcha !== 'undefined') {
					captcha = captcha.replace(/[\r\n]/g,"")
					let base64Data = 'data:image/jpg;base64,' + captcha
					that.setData({
						verCode: base64Data
					})
				}
			}
		})
	},
	submit(e) {
		let token = qq.getStorageSync('token')
		var that = this;
		qq.showLoading({
			title: '登录中',
			mask:true
		})
		let {
			id,
			passwd,
			verCode,
		} = e.detail.value
		qq.request({
			url: localUlr + '/api/studentCertify/login',
			method: 'get',
			data: {
				username: id,
				password: passwd,
				captcha: verCode,
				token
			},
			success(res) {
				qq.hideLoading()
				let {
					result,
					id,
					username,
					nickname,
					permission
				} = res.data
				if (result) {
					qq.showToast({
						title: '登录成功',
						icon: 'success',
						duration: 2000
					})
					app.globalData.id = id
					qq.navigateBack({
						delta: 1
					})
				} else {
					//弹出密码错误消息
					qq.showToast({
						title: '账号或密码错误',
						icon: 'none',
						duration: 2000
					})
					//如果密码错误重新申请验证码
					let token = qq.getStorageSync('token')
					//获取验证码
					qq.request({
						url: localUlr + '/api/studentCertify/preLogin',
						data: {
							token,
							client: 'qq' 
						},
						success(res) {
							let { result, captcha } = res.data
							if(result && typeof captcha !== 'undefined') {
								captcha = captcha.replace(/[\r\n]/g,"")
								let base64Data = 'data:image/jpg;base64,' + captcha
								that.setData({
									verCode: base64Data
								})
							}
						}
					})
				}
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
	againVerCode() {
		let that = this
		let token = qq.getStorageSync('token')
		//获取验证码
		qq.request({
			url: localUlr + '/api/studentCertify/preLogin',
			data: {
				token,
				client: 'qq' 
			},
			success(res) {
				let { result, captcha } = res.data
				if(result && typeof captcha !== 'undefined') {
					captcha = captcha.replace(/[\r\n]/g,"")
					let base64Data = 'data:image/jpg;base64,' + captcha
					that.setData({
						verCode: base64Data
					})
				}
			}
		})
	},
	//学号聚焦时触发
	idFocus() {
		this.setData({
			idIsFocus: true
		})
	},
	idBlur(e) {
		let val = e.detail.value
		if (val === '') {
			this.setData({
				idIsFocus: false
			})
		}
	},
	//密码
	passWdFocus() {
		this.setData({
			passWdIsFocus: true
		})
	},
	passWdBlur(e) {
		let val = e.detail.value
		if (val === '') {
			this.setData({
				passWdIsFocus: false
			})
		}
	},
	//验证码
	codeFocus() {
		this.setData({
			codeIsFocus: true
		})
	},
	codeBlur(e) {
		let val = e.detail.value
		if (val === '') {
			this.setData({
				codeIsFocus: false
			})
		}
	}
})

