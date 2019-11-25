<view class="container">
    <view class="head">
        <view class="left">
            <view class="title">排行榜</view>
            <view class="date">数据更新于{{date}}</view>
        </view>
        <view class="right">
            <image class="rightLogo" src="{{logoUrl}}"></image>
        </view>
    </view>
    <view class="loadingWrapper" qq:if="{{ status === 'loading' }}">
        <view class="loading">
            <image class="drawImg" src="/static/img/test.svg" />
            <image class="loadingImg" src="{{loadingUrl}}" />
        </view>
    </view>
    <view class="loadingWrapper" qq:if="{{ status === 'error' }}">
        <view class="loading">
            <image class="loadingImg" src="{{errorUrl}}" />
        </view>
    </view>
    <view class="rank" qq:else="{{ status === 'success' }}">
        <view class="rankWrapper">
            <view qq:for="{{list}}" class="wrapper" qq:key="{{index}}">
                <view class="content">
                    <view class="contentLeft">
                        <view class="index">{{index+1}}</view>
                        <view class="cir"></view>
                        <image class="contentImg" src="{{item.url}}" />
                    </view>
                    <view class="contentRight">
                        <view class="contentTitle">{{item.title}}</view>
                        <view class="contentDown">
                            {{item.auto}}
                            <button class="joinIn" bindtap="join">立即参加</button>
                        </view>
                    </view>
                </view>
                <view class="br"></view>
            </view>
        </view>
    </view>
</view>