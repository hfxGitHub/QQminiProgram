const app = getApp()
let localUlr = app.globalData.localUrl
Page({
    data: {
        choseId:'',
        _nowImg:0,
        toHome:'../home/home',
        imgUrls:[],//bannar图的链接数组
        contentImgUrls:[],//海报的链接数组
        indicatorDots: true, //是否显示面板指示点
        autoplay: true, //是否自动切换
        interval: 2000, //自动切换时间间隔,2s
        duration: 300,
        animation:{},
        fixedBtn:false,
        activityName:'暂无更多信息~',
        data_start:'暂无更多信息~',
        tag:[],
        association:{
            name:'暂无更多信息呦~'
        },
        Number:'?',
        groupId:'',
        isStudent:false,
        list:[],
    },
    onLoad: function (e) {
        qq.showLoading({
            title: '请稍等呦~',
        })
        let token = qq.getStorageSync('token') 
        const that = this;
        qq.request({
            url: localUlr +  '/api/studentCertify',
            method:'GET',
            data: {
                token
            },
            success(res) {
                if(res.data.result) {
                    that.setData({
                        isStudent:true,
                    })
                }
            }
        })
        this.animation = qq.createAnimation({
            "duration":300,
        })
        this.setData({
            bottomBtnHeight:125 / 750 * qq.getSystemInfoSync().windowWidth
        })
        this.setData({
            choseId:e.id==undefined?e.contentid:e.id,
        })
        qq.request({
            url:localUlr + '/api/queryActivity?activity_id='+this.data.choseId + '&token=' + token,
            method:'GET',
            success(res){
                var data = res.data.data;
                for(var i = 0;i<data.poster.length;i++){
                    data.poster[i] = localUlr+data.poster[i];
                }
                data.association.icon=localUlr+data.association.icon;
                if(/heic$/i.test(data.association.icon)) {
                    data.association.icon = '/static/img/default.svg'
                }
                that.setData({
                    activityName:data.name==undefined?'暂无更多信息~':data.name,
                    data_start:(data.date_start==undefined?'暂无更多信息':data.date_start)+'~'+(data.date_end==undefined?'':data.date_end),
                    association:data.association==undefined?'暂无更多信息~':data.association,
                    contentImgUrls:data.poster==undefined?[]:data.poster,
                    // groupId:data.qq_group==undefined?'':data.qq_group,
                    tag:data.tag,
                    imgUrls:localUlr+data.file,
                })
                qq.hideLoading()
            }
        })
        qq.request({
            url: localUlr + '/api/hot/activity/getList',
            method: 'GET',
            data: {
                page_num: 1,
                page_count: 10,
                token
            },
            header: {
                'content-type': 'application/x-www-form-urlencoded'
            },
            success(res) {
                let { data, result } = res.data
                if(result) {
                    let hotNumber;
                    data.map((item,index) => {
                        if(item.id == that.data.choseId){
                            hotNumber = index + 1;
                        }
                    })
                    that.setData({
                        Number:hotNumber==undefined?'?':hotNumber,
                    })
                }
            }
        })
        qq.showShareMenu({
            showShareItems: ['qq', 'qzone', 'wechatFriends', 'wechatMoment'],
            withShareTicket:true,
          })
    },
    onShareAppMessage:function () {
        return({
            title:this.data.activityName,
            imageUrl:this.data.contentImgUrls[0],
            path:'/pages/Content/content?contentid='+this.data.choseId,
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
    onTapBanarImg: function (ev) {
        qq.previewImage({
            current: ev.target.dataset.imgsrc,
            urls: this.data.contentImgUrls,
            success: (result)=>{
            },
            fail: ()=>{},
            complete: ()=>{}
        });
    },
    onTapPoster: function (ev) {
        qq.previewImage({
            current: ev.target.dataset.imgsrc,
            urls: [],
            success: (result)=>{
            },
            fail: ()=>{},
            complete: ()=>{}
        });
    },
    viewActivityGroup: function (e) {
        let token = qq.getStorageSync("token");
        let id = qq.getStorageSync('id') 
        qq.request({
            url:localUlr+'/api/hot/activity/viewActivityGroup',
            method:'GET',
            data:{
                activity_id:this.data.choseId,
                user_id: id,
                token:token,
            },
            success(res){
            }
        })
    },
    backIndex() {
        qq.showToast({
            title:'请先认证学生身份呦~',
            icon:'none',
        })
        qq.redirectTo({
            url:'../index/index'
        })
    },
    backHome() {
        qq.reLaunch({
            url:'../home/home',
        })
    }
})