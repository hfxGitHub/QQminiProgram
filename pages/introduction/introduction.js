Page({
    data:{
        baseUrl:'http://173.82.115.226:8080/api/',
        toContent: '/pages/Content/content',
        toHome: '/pages/home/home',
        text:"协会介绍",
        src:"1.png",
        _active:1,
        animation:{},
        scrollTop:false,
        backImgHeight:0,
        AssociationName:"",
        AssociationSlogan:"",
        TimeContent:"",
        belongToContent:"",
        aimToContent:"",
        famousActivityContent:[],
        
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
        qq.request({
            url: this.data.baseUrl + 'queryAssociation?association_id=3',
            method:'POST',
            success(res){
                var data = res.data.data;
                that.data.famousActivityContent.push(data.brand_activity)
                that.setData({
                    AssociationName:data.name,
                    AssociationSlogan:data.introduction,
                    TimeContent:data.create_date,
                    belongToContent:data.affiliated_unit.present,
                    aimToContent:data.purpose,
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