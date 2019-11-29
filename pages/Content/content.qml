<view class="main">
    <swiper
    indicator-dots="{{indicatorDots}}" 
    indicator-color="grey"                   
    indicator-active-color="#FFFFFF" 
    circular="true" 
    autoplay="{{autoplay}}" 
    interval="{{interval}}" 
    duration="{{duration}}"
    >
        <block>
            <swiper-item qq:for="{{contentImgUrls}}" qq:key="{{index}}">
                <image src="{{item}}" data-imgsrc="{{item}}" mode="aspectFill" bindtap="onTapBanarImg"/>
            </swiper-item>
        </block>
    </swiper>
    <view class="activityTitle">
        <view class="activityName">
            <view style="width:8rpx;height:32rpx;margin-top:3rpx;background:rgba(199, 13, 58, 1)"></view>
            <text class="activityNameText">{{activityName}}</text>
        </view>
        <view class="NumberSort">
            <view class="bigNumber">{{Number}}</view>
            <view class="nowNumber">当前排行</view>
        </view>
        <view class="IdCard">
            <image class='IdImg' src="{{association.icon}}"/>
            <navigator url="/pages/introduction/introduction?id={{association.id}}">
                <view style="min-width:100rpx;padding-right:15rpx;height:44rpx;background:rgba(199, 13, 58, 1);display:flex;">
                    <text class="IdName">{{association.name}}</text>
                    <image src="/static/img/0000.svg" style="height:14rpx;width:10.7rpx;margin-top:15rpx;margin-left:2rpx;"></image>
                </view>
            </navigator>
        </view>
        <view class="deadLine">{{data_start}}</view>
        <view class="Tips">
            <text class="TipsContent" qq:for="{{tag}}" qq:key="{{index}}">{{item.name}}</text>
        </view>
    </view>

    <view class="activityContent">
        <view>
            <image src="{{imgUrls}}" data-imgsrc="{{imgUrls}}" mode="widthFix" style="width:100%;"></image>
        </view>
    </view>
    
    <view class="joinBtn {{fixedBtn==1?'fixedOnBottom':''}}">
        <view class="backHomeBtn" bindtap="backHome">
            <text class="backHomeBtnContent">精彩首页</text>
        </view>
        <button hidden="{{!isStudent}}" class="joinNowContent"  bindtap="viewActivityGroup" open-type="openGroupProfile" group-id="957361810" >立即参加</button>
        <button hidden="{{isStudent}}" class="joinNowContent" bindtap="backIndex">立即参加</button>
    </view>
</view>