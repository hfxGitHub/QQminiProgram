<view class="content">
    <view class="backgroundIMG">
        <view class="wrap">
            <view class="wrap-mask">
            </view>
        </view>
    </view>
    <navigator url="{{toHome}}">
        <cover-view class="backHome" bindtap="backHomePage">
            <cover-image class="backImg" src="back.png"></cover-image>
            <button class="backHomeContent" hover-class="none">前往首页</button>
        </cover-view>
    </navigator>
    <cover-view class="associationTitle">
        <cover-view class="associationName">{{AssociationName}}</cover-view>
        <cover-view class="associationSlogan">{{AssociationSlogan}}</cover-view>
    </cover-view>
    <view hidden="{{scrollTop==1?flase:true}}" style="width:100%;height:120rpx;"></view>
    <view class="{{scrollTop==1?'onTop':''}}" id="introductionTab">
        <view class="introductionBtn {{_active==1?'active':'disable'}}" bindtap="changeIntroduction"><text style="display:block;line-height:107rpx;width:100%;text-align:center;">协会介绍</text></view>
        <view class="lastesBtn {{_active==2?'active':'disable'}}" bindtap="changeLatest"><text style="display:block;line-height:107rpx;width:100%;text-align:center;">近期活动</text></view>
    </view>
    <view style="width:100%;height:13rpx;background:white;" class="{{scrollTop==1?'onTopSlider':''}}">
        <view class="moveSlider" animation="{{animation}}"></view>
    </view>
    <view class="introductionContent"  bindtouchstart="touchStart" bindtouchmove="touchMove">
        <view class="brief" id="brief" hidden="{{_active==1?false:true}}">
            <view class="briefContent">
                <view class="createTime">成立时间</view>
                <view class="TimeContent">{{TimeContent}}</view>
                <view class="createTime">挂靠单位</view>
                <view class="belongTo">{{belongToContent}}</view>
                <view class="createTime">建设宗旨</view>
                <view class="aimTo">{{aimToContent}}</view>
                <view class="createTime">品牌活动</view>
                <view class="famousActivity" qq:for="{{famousActivityContent}}" qq:key="{{index}}">
                    <text class="activityContent">{{item.value}}</text>
                </view>
            </view>
        </view>
        <view class="latestActivity" id="latestActivity" hidden="{{_active==1?true:false}}">
            <navigator url="{{toContent}}">
                <view class="latestActivityContent">
                    <image class="latestActivityImg"
                        src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574183365280&di=42d1ef360de91c9b1c993e249b4ffd11&imgtype=0&src=http%3A%2F%2Fimg66.hbzhan.com%2F9%2F20170208%2F636221461533481693811.png"></image>
                    <view class="activityText">
                        <text class="latestActivityTitle">“承诺自然”一期核心成员招募，欢迎小伙伴加入</text>
                        <text class="latestActivityTip">十佳社团</text>
                        <text class="latestActivityTip">综测加分</text>
                        <text class="latestActivityTip">校级社团</text>
                        <text class="latestActivityTime">2019.11.19</text>
                    </view>
                </view>
            </navigator>
            <navigator url="{{toContent}}">
                <view class="latestActivityContent">
                    <image class="latestActivityImg"
                        src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574183365280&di=42d1ef360de91c9b1c993e249b4ffd11&imgtype=0&src=http%3A%2F%2Fimg66.hbzhan.com%2F9%2F20170208%2F636221461533481693811.png"></image>
                    <view class="activityText">
                        <text class="latestActivityTitle">“承诺自然”一期核心成员招募，欢迎小伙伴加入</text>
                        <text class="latestActivityTip">十佳社团</text>
                        <text class="latestActivityTip">综测加分</text>
                        <text class="latestActivityTip">校级社团</text>
                        <text class="latestActivityTime">2019.11.19</text>
                    </view>
                </view>
            </navigator>
            <navigator url="{{toContent}}">
                <view class="latestActivityContent">
                    <image class="latestActivityImg"
                        src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574183365280&di=42d1ef360de91c9b1c993e249b4ffd11&imgtype=0&src=http%3A%2F%2Fimg66.hbzhan.com%2F9%2F20170208%2F636221461533481693811.png"></image>
                    <view class="activityText">
                        <text class="latestActivityTitle">“承诺自然”一期核心成员招募，欢迎小伙伴加入</text>
                        <text class="latestActivityTip">十佳社团</text>
                        <text class="latestActivityTip">综测加分</text>
                        <text class="latestActivityTip">校级社团</text>
                        <text class="latestActivityTime">2019.11.19</text>
                    </view>
                </view>
            </navigator>
            <navigator url="{{toContent}}">
                <view class="latestActivityContent">
                    <image class="latestActivityImg"
                        src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574183365280&di=42d1ef360de91c9b1c993e249b4ffd11&imgtype=0&src=http%3A%2F%2Fimg66.hbzhan.com%2F9%2F20170208%2F636221461533481693811.png"></image>
                    <view class="activityText">
                        <text class="latestActivityTitle">“承诺自然”一期核心成员招募，欢迎小伙伴加入</text>
                        <text class="latestActivityTip">十佳社团</text>
                        <text class="latestActivityTip">综测加分</text>
                        <text class="latestActivityTip">校级社团</text>
                        <text class="latestActivityTime">2019.11.19</text>
                    </view>
                </view>
            </navigator>
            <navigator url="{{toContent}}">
                <view class="latestActivityContent">
                    <image class="latestActivityImg"
                        src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574183365280&di=42d1ef360de91c9b1c993e249b4ffd11&imgtype=0&src=http%3A%2F%2Fimg66.hbzhan.com%2F9%2F20170208%2F636221461533481693811.png"></image>
                    <view class="activityText">
                        <text class="latestActivityTitle">“承诺自然”一期核心成员招募，欢迎小伙伴加入</text>
                        <text class="latestActivityTip">十佳社团</text>
                        <text class="latestActivityTip">综测加分</text>
                        <text class="latestActivityTip">校级社团</text>
                        <text class="latestActivityTime">2019.11.19</text>
                    </view>
                </view>
            </navigator>
            <navigator url="{{toContent}}">
                <view class="latestActivityContent">
                    <image class="latestActivityImg"
                        src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574183365280&di=42d1ef360de91c9b1c993e249b4ffd11&imgtype=0&src=http%3A%2F%2Fimg66.hbzhan.com%2F9%2F20170208%2F636221461533481693811.png"></image>
                    <view class="activityText">
                        <text class="latestActivityTitle">“承诺自然”一期核心成员招募，欢迎小伙伴加入</text>
                        <text class="latestActivityTip">十佳社团</text>
                        <text class="latestActivityTip">综测加分</text>
                        <text class="latestActivityTip">校级社团</text>
                        <text class="latestActivityTime">2019.11.19</text>
                    </view>
                </view>
            </navigator>
            <navigator url="{{toContent}}">
                <view class="latestActivityContent">
                    <image class="latestActivityImg"
                        src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574183365280&di=42d1ef360de91c9b1c993e249b4ffd11&imgtype=0&src=http%3A%2F%2Fimg66.hbzhan.com%2F9%2F20170208%2F636221461533481693811.png"></image>
                    <view class="activityText">
                        <text class="latestActivityTitle">“承诺自然”一期核心成员招募，欢迎小伙伴加入</text>
                        <text class="latestActivityTip">十佳社团</text>
                        <text class="latestActivityTip">综测加分</text>
                        <text class="latestActivityTip">校级社团</text>
                        <text class="latestActivityTime">2019.11.19</text>
                    </view>
                </view>
            </navigator>
            <navigator url="{{toContent}}">
                <view class="latestActivityContent">
                    <image class="latestActivityImg"
                        src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574183365280&di=42d1ef360de91c9b1c993e249b4ffd11&imgtype=0&src=http%3A%2F%2Fimg66.hbzhan.com%2F9%2F20170208%2F636221461533481693811.png"></image>
                    <view class="activityText">
                        <text class="latestActivityTitle">“承诺自然”一期核心成员招募，欢迎小伙伴加入</text>
                        <text class="latestActivityTip">十佳社团</text>
                        <text class="latestActivityTip">综测加分</text>
                        <text class="latestActivityTip">校级社团</text>
                        <text class="latestActivityTime">2019.11.19</text>
                    </view>
                </view>
            </navigator>
        </view>
       
       <view class="end">
            ————— <text class="ending">ending</text> —————
        </view>
    </view>
</view>