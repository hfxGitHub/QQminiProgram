const app = getApp()
let localUlr = app.globalData.localUrl
Page({
    data:{
        choseId:'',
        toHome: '/pages/home/home',
        _active:1,
        animation:{},
        scrollTop:false,
        backImgHeight:0,
        AssociationName:"暂无更多信息~",
        AssociationSlogan:"暂无更多信息~",
        TimeContent:"暂无更多信息~",
        belongToContent:"暂无更多信息~",
        aimToContent:"暂无更多信息~",
        famousActivityContent:['暂无更多信息~'],
        backgroundImg:"",
        acticityData:[],
        noActicity:1,
        // 左右滑动
        touchDot:0,
        nth:0,
    },
    onLoad: function (e) {
        this.animation = qq.createAnimation({
            "duration":300,
        })
        this.setData({
            backImgHeight:425 / 750 * qq.getSystemInfoSync().windowWidth,
        })
        const that =this;
        this.setData({
            choseId:e.id==undefined?e.introductionid:e.id,
        })          
        let token = qq.getStorageSync('token')  
        qq.request({
            url: localUlr + '/api/queryAssociation?association_id='+this.data.choseId + '&token=' + token,
            method:'GET',
            success(res){
                var data = res.data.data;
                var str,acticityData
                if(data.brand_activity) {
                    str = data.brand_activity.replace(/\n/g,"|-&");
                    acticityData = str.split("|-&");
                }
                that.setData({
                    AssociationName:data.name==undefined?'暂无更多信息~':data.name,
                    AssociationSlogan:data.introduction==undefined?'暂无更多信息~':data.introduction,
                    TimeContent:data.create_date==undefined?'暂无更多信息~':data.create_date,
                    belongToContent:data.affiliated_unit==undefined?'暂无更多信息~':data.affiliated_unit,
                    aimToContent:data.purpose==undefined?'暂无更多信息~':data.purpose,
                    backgroundImg:localUlr+data.img_bg,
                    famousActivityContent:acticityData ? acticityData : ['暂无更多信息'],
                })
            }
        })
        qq.request({
            url: localUlr + '/api/association/queryActivityList?id=' + this.data.choseId + '&page_num=1&page_count=10' + '&token=' + token,
            method:'POST',
            success(res){
                var data = res.data.data;
                data.reverse()
                for(var i = 0;i<data.length;i++){
                    data[i].file = localUlr + data[i].file;
                    for(var j = 0;j<data[i].poster.length;j++){
                        data[i].poster[j] = localUlr + data[i].poster[j];
                    }
                }
                that.setData({      
                    acticityData:data,
                    noActicity:data.length==0?true:false,
                })                
            }
        })
        qq.showShareMenu({
            showShareItems: ['qq', 'qzone', 'wechatFriends', 'wechatMoment'],
            withShareTicket:true,
          })
    },
    onShareAppMessage:function () {
        return({
            title:this.data.AssociationName,
            imageUrl:this.data.backgroundImg,
            path:'/pages/introduction/introduction?introductionid=' + this.data.choseId,
            fail: res => {
                qq.showToast({
                    title:'出错啦，请重试呦~',
                    icon:'none',
                })
            }
        })
    },
    onPageScroll: function (ev) {
        if(ev.scrollTop>this.data.backImgHeight){
            this.setData({scrollTop:true})
        }else{this.setData({scrollTop:false})}
    },
    changeIntroduction: function () {
        this.animation.translate(0,0).step();
        this.setData({
            animation:this.animation.export(),
            _active:1,
            nth:0,
        })
    },
    changeLatest: function () {
        this.animation.translate(375/750*qq.getSystemInfoSync().windowWidth,0).step()
        this.setData({
            animation:this.animation.export(),
            _active:2,
            nth:1,
        })
    },
    backHomePage: function () {
        qq.reLaunch({
            url:'../home/home',
        })
    },

    // 左右滑动切换界面交互
    touchStart: function (e) {
        const that = this;
        this.setData({
            touchDot:e.touches[0].pageX,
        })
    },
    touchMove: function (e) {
        var touchMove = e.touches[0].pageX;
        if(touchMove - this.data.touchDot <= -50 && this.data.nth!=1){
            this.animation.translate(375/750*qq.getSystemInfoSync().windowWidth,0).step()
            this.setData({
                animation:this.animation.export(),
                _active:2,
                nth:1,
            })
        }
        if(touchMove - this.data.touchDot >= 50 && this.data.nth!=0){
            this.animation.translate(0,0).step();
            this.setData({
                animation:this.animation.export(),
                _active:1,
                nth:0,
            })
        }
    }
})