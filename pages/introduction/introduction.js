Page({
    data:{
        baseUrl:'http://173.82.115.226:8080',
        choseId:'',
        toContent: '/pages/Content/content',
        toHome: '/pages/home/home',
        text:"协会介绍",
        src:"1.png",
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
    onReady: function () {
        this.animation = qq.createAnimation({
            "duration":300,
        })
        this.setData({
            backImgHeight:425 / 750 * qq.getSystemInfoSync().windowWidth
        })
        const that =this;
        var pages = getCurrentPages();
        var cuurrentPage = pages[pages.length-1];
        var option = cuurrentPage.options;
        this.setData({
            choseId:option.id,
        })          
        qq.request({
            url: this.data.baseUrl + '/api/queryAssociation?association_id='+this.data.choseId,
            method:'POST',
            success(res){
                var data = res.data.data;
                var str = data.brand_activity.replace(/\n/g,"|-&");
                var acticityData = str.split("|-&");
                that.setData({
                    AssociationName:data.name==undefined?'暂无更多信息~':data.name,
                    AssociationSlogan:data.introduction==undefined?'暂无更多信息~':data.introduction,
                    TimeContent:data.create_date==undefined?'暂无更多信息~':data.create_date,
                    belongToContent:data.affiliated_unit==undefined?'暂无更多信息~':data.affiliated_unit,
                    aimToContent:data.purpose==undefined?'暂无更多信息~':data.purpose,
                    backgroundImg:that.data.baseUrl+data.img_bg,
                    famousActivityContent:acticityData,
                })
            }
        })
        qq.request({
            url: this.data.baseUrl + '/api/association/queryActivityList?id=' + this.data.choseId + '&page_num=1&page_count=10',
            method:'POST',
            success(res){
                var data = res.data.data;
                for(var i = 0;i<data.length;i++){
                    data[i].file = that.data.baseUrl + data[i].file;
                    for(var j = 0;j<data[i].poster.length;j++){
                        data[i].poster[j] = that.data.baseUrl + data[i].poster[j];
                    }
                }
                that.setData({      
                    acticityData:data,
                    noActicity:data.length==0?true:false,
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
        qq.navigateBack({
            url:'../index/index',
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