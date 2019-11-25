const app = getApp()
Page({
    data: {
        baseUrl:'http://173.82.115.226:8080/api',
        choseId:'',
        _nowImg:0,
        toHome:'../home/home',
        imgUrls:[
            'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574183365280&di=42d1ef360de91c9b1c993e249b4ffd11&imgtype=0&src=http%3A%2F%2Fimg66.hbzhan.com%2F9%2F20170208%2F636221461533481693811.png',
            'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574252408321&di=19d25d101524cb81d21ef52d0266bb15&imgtype=0&src=http%3A%2F%2Fwww.coolzou.com%2Fphoto%2F2011%2F12%2F22%2Fsite_538.jpg',
            'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574252408321&di=19d25d101524cb81d21ef52d0266bb15&imgtype=0&src=http%3A%2F%2Fwww.coolzou.com%2Fphoto%2F2011%2F12%2F22%2Fsite_538.jpg'
        ],//bannar图的链接数组
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
            associationName:'暂无更多信息~',
            associationImgUrl:'',
            associationImgUrl:'',
            id: '',

        },
        Number:'',
        groupId:'',
    },
    onReady: function () {
        this.animation = qq.createAnimation({
            "duration":300,
        })
        this.setData({
            bottomBtnHeight:125 / 750 * qq.getSystemInfoSync().windowWidth
        })
        const that = this;
        var pages = getCurrentPages();
        var cuurrentPage = pages[pages.length-1];
        var option = cuurrentPage.options;
        this.setData({
            choseId:option.id,
        })  
        qq.request({
            url:that.data.baseUrl + '/queryActivity?activity_id='+this.data.choseId,
            method:'POST',
            success(res){
                var data = res.data.data;
                console.log(data);
                for(var i = 0;i<data.poster.length;i++){
                    data.poster[i] = that.data.baseUrl+data.poster[i];
                }
                that.setData({
                    activityName:data.name==undefined?'暂无更多信息~':data.name,
                    data_start:(data.date_start==undefined?'暂无更多信息':data.date_start)+'~'+(data.date_end==undefined?'':data.date_end),
                    association:data.association==undefined?'暂无更多信息~':data.association,
                    contentImgUrls:data.poster==undefined?[]:data.poster,
                    groupId:data.qq_group==undefined?'':data.qq_group,
                })
            }
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
            urls: this.data.imgUrls,
            success: (result)=>{
            },
            fail: ()=>{},
            complete: ()=>{}
        });
    },
    onTapPoster: function (ev) {
        qq.previewImage({
            current: ev.target.dataset.imgsrc,
            urls: this.data.contentImgUrls,
            success: (result)=>{
            },
            fail: ()=>{},
            complete: ()=>{}
        });
    }
})