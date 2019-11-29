<view class="content">
    <image src="{{backgroundImg}}" mode="scaleToFill" style="width:750rpx;height:425rpx;"></image>
    <view class="backgroundIMG">
        <view class="wrap">
            <view class="wrap-mask">
            </view>
        </view>
    </view>
    <view class="backHome" bindtap="backHomePage">
        <image class="backImg" src="../../static/img/0000.svg"></image>
        <text class="backHomeContent">前往首页</text>
    </view>
    <view class="associationTitle">
        <view class="associationName">{{AssociationName}}</view>
        <view class="associationSlogan">{{AssociationSlogan}}</view>
    </view>
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
                <view class="famousActivity" wx:for="{{famousActivityContent}}" wx:key="unique2">
                    <text class="activityContent">{{item}}</text>
                </view>
            </view>
        </view>
        <view class="latestActivity" id="latestActivity" hidden="{{_active==1?true:false}}">
            <view class="errorView" hidden="{{noActicity==1?false:true}}">
                <image src="../../static/img/erroractivity.svg" style="width:468rpx;height:324rpx;margin-bottom:22rpx;margin-left:109rpx;"></image>
                <text style="display:block;text-align:center;font-size:22rpx;color:#A2A2A2;">暂无更多活动呦~</text>
            </view>
            <navigator url="../Content/content?id={{item.id}}" wx:for="{{acticityData}}" wx:key="unique2">
                <view class="latestActivityContent">
                    <image class="latestActivityImg"
                        src="{{item.poster[0]}}" mode="aspectFill"></image>
                    <view class="activityText">
                        <text class="latestActivityTitle">{{item.name}}</text>
                        <view>
                            <text class="latestActivityTip" wx:for="{{item.tag}}" wx:key="unique2">{{item.name}}</text>
                        </view>
                        <text class="latestActivityTime">{{item.date_start}}~{{item.date_end}}</text>
                    </view>
                </view>
            </navigator>
        </view>
       <view class="end">
            ————— <text class="ending">ending</text> —————
        </view>
    </view>
</view>