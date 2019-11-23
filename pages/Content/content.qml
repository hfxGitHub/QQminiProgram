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
        <block wx:for="{{imgUrls}}" wx:key="unique2">
            <swiper-item>
                <image src="{{item}}" />
            </swiper-item>
        </block>
    </swiper>
    <view class="activityTitle">
        <view class="activityName">
            <view style="width:8rpx;height:32rpx;margin-top:3rpx;background:rgba(199, 13, 58, 1)"></view>
            <text class="activityNameText">京东少东家第一届王者荣耀挑战赛西南赛区</text>
        </view>
        <view class="NumberSort">
            <view class="bigNumber">4</view>
            <view class="nowNumber">当前排行</view>
        </view>
        <view class="IdCard">
            <image class='IdImg' src="{{IdImg}}"/>
            <navigator url="{{toIntroduction}}">
                <view style="width:296rpx;height:44rpx;background:rgba(199, 13, 58, 1);display:flex;">
                    <text class="IdName">“承诺自然”环境保护协会</text>
                    <image src="/static/img/0000.svg" style="height:14rpx;width:10.7rpx;margin-top:14rpx;margin-left:2rpx;"></image>
                </view>
            </navigator>
        </view>
        <view class="deadLine">2019.10.1～2019.11.17</view>
        <view class="Tips">
            <text class="TipsContent">十佳社团</text>
            <text class="TipsContent">十佳社团</text>
            <text class="TipsContent">十佳社团</text>
        </view>
    </view>

    <view class="activityContent">
        <view qq:for="{{contentImgUrls}}" qq:key="{{index}}">
            <image src="{{item}}" mode="scaleToFill" style="width:100%;"></image>
        </view>
    </view>
    
    <view class="joinBtn {{fixedBtn==1?'fixedOnBottom':''}}">
        <navigator url="{{toHome}}">
            <view class="backHomeBtn">
                <text class="backHomeBtnContent">精彩首页</text>
            </view>
        </navigator>
        <button class="joinNowContent" open-type="openGroupProfile" group-id="620033746">立即参加</button>
    </view>
</view>