const app = getApp()

Page({
    data: {
        timer: 3000,
        Index: 0,
        banner: [{
            src: '/static/img/adasd.jpg'
        }, {
            src: '/static/img/adasd.jpg'
        }, {
            src: '/static/img/adasd.jpg'
        }],
        logoSrc: '/static/img/1-1-4.svg',
        turn: '/static/img/turn.svg',
        whiteTurn: '/static/img/0000.svg',
        activeList: [{
            url: '/pages/introduction/introduction',
            link: '/pages/Content/content',
            logoUrl: '/static/img/adasd.jpg',
            imgUrl: '/static/img/111.png',
            title: '“承诺自然”环',
            content: '“承诺自然”一期核心成员招募，欢迎小伙伴加入'
        }, {
            url: '/pages/introduction/introduction',
            link: '/pages/Content/content',
            logoUrl: '/static/img/adasd.jpg',
            imgUrl: '/static/img/111.png',
            title: '“承诺自然”环境保护协会',
            content: '“承诺自然”一期核心成员招募，欢迎小伙伴加入'
        }, {
            url: '/pages/introduction/introduction',
            link: '/pages/Content/content',
            logoUrl: '/static/img/adasd.jpg',
            imgUrl: '/static/img/111.png',
            title: '“承诺自然”环境保护协会',
            content: '“承诺自然”一期核心成员招募，欢迎小伙伴加入'
        }, {
            url: '/pages/introduction/introduction',
            link: '/pages/Content/content',
            logoUrl: '/static/img/adasd.jpg',
            imgUrl: '/static/img/111.png',
            title: '“承诺自然”环境保护协会',
            content: '“承诺自然”一期核心成员招募，欢迎小伙伴加入'
        }],
        activityList: [{
            url: '/pages/introduction/introduction',
            link: '/pages/Content/content',
            logoUrl: '/static/img/adasd.jpg',
            title: '“承诺自然”环境保护协会',
            imgUrl: '/static/img/111.png',
            content: '“承诺自然”一期核心成员招募，欢迎小伙伴加入',
            tag: ['校级社团', '综测加分'],
            data_start: '2019-10-1',
            data_end: '2019-11-16'
        }, {
            url: '/pages/introduction/introduction',
            link: '/pages/Content/content',
            logoUrl: '/static/img/adasd.jpg',
            title: '“承诺自然”环',
            imgUrl: '/static/img/111.png',
            content: '“承诺自然”一期核心成员招募，欢迎小伙伴加入',
            tag: ['为什么', '综测加分'],
            data_start: '2019-10-1',
            data_end: '2019-11-16'
        }, {
            url: '/pages/introduction/introduction',
            link: '/pages/Content/content',
            logoUrl: '/static/img/adasd.jpg',
            title: '“承诺自然”环境保护协会',
            imgUrl: '/static/img/111.png',
            content: '“承诺自然”一期核心成员招募，欢迎小伙伴加入',
            tag: ['校园', 'qqq'],
            data_start: '2019-10-1',
            data_end: '2019-11-16'
        }]
    },
    onLoad() {
        
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
    }
})