<view class="container">
    <view class="swiperContainer">
        <swiper class="swiperWrapper"
            previous-margin="107rpx"
            next-margin="107rpx"
            circular
            autoplay
            interval="{{timer}}"
            bindchange="onShow"
        >

            <swiper-item class="imgContainer" qq:for="{{banner}}" qq:key="{{item.id}}">
                <navigator url="{{item.url}}">
                    <image src="{{item.img}}" class="{{Index === index? 'slide-image slide-show':'slide-image'}}"/>
                </navigator>
            </swiper-item>
        </swiper>
    </view>
    <view class="opinionWrapper">
        <view class="opinionContainer">
            <view class="opinionContainerLogoWrapper">
                <image class="opinionContainerLogo" src="/static/img/advice.png" />
            </view>
            <text class="opinionContainerText">了解蜂拥更多信息、提供意见反馈</text>
            <button 
                open-type="openGroupProfile" 
                group-id="695628567"
                class="opinionContainerBtn"
            >立即加入</button>
        </view>
    </view>
    <view class="middleTitle">
        <view class="middleLeft">
            <text class="middleLeftTitle">热门活动</text>
            <image class="middleLeftLogo" src="{{logoSrc}}"></image>
        </view>
        <navigator class="middleRight" url="/pages/rankList/rankList">
            <text class="middleRightTitle">查看热榜</text>
            <image class="middleLeftTurn" src="{{turn}}"></image>
        </navigator>
    </view>
    <view class="scrollContainer">
        <scroll-view class="scrollWrapper" scroll-with-animation scroll-x="true" scroll-left="{{left}}">
            <view class="scrollItem" qq:for="{{activeList}}" qq:key="{{index}}">
                <view class="schoolActiveHead">
                    <view class="schoolActiveHeadLeft">
                        <image class="schoolActiveHeadLeftLogo" src="{{item.logoUrl}}"></image>
                    </view>
                    <navigator class="schoolActiveHeadRight" url="{{item.url}}">
                        <text>{{item.title}}</text>
                        <image class="schoolActiveHeadRightTurn"  src="{{whiteTurn}}"></image>
                    </navigator>
                </view>
                <navigator url="{{item.link}}">
                    <view class="scrollItemImgWrapper">
                        <image class="scrollItemImg" src="{{item.imgUrl}}" />
                    </view>
                    <view class="itemContent">
                        {{item.content}}
                    </view>
                </navigator>
            </view>
        </scroll-view>
    </view>
    <view class="schoolActiveWrapper">
        <view class="schoolActiveWrapperTitle">校园活动</view>
        <view class="schoolActiveContainer">
            <view class="schoolActiveContainerItem" qq:for="{{activityList}}" qq:key="{{index}}">
                <view class="schoolActiveHead">
                    <view class="schoolActiveHeadLeft">
                        <image class="schoolActiveHeadLeftLogo" src="{{item.logoUrl}}"></image>
                    </view>
                    <navigator class="schoolActiveHeadRight" url="{{item.url}}">
                        <text class="schoolActiveHeadRightTitle">{{item.title}}</text>
                        <image class="schoolActiveHeadRightTurn"  src="{{whiteTurn}}"></image>
                    </navigator>
                </view>
                <navigator  class="schoolActiveContentWrapper" url="{{item.link}}">
                    <view class="schoolActiveContentWrapperRight">
                        <image class="schoolActiveContentWrapperRightImg" src="{{item.imgUrl}}"></image>
                    </view>
                    <view class="schoolActiveContentWrapperLeft">
                        <view class="schoolActiveContentWrapperLeftTitle">{{item.content}}</view>
                        <view class="schoolActiveContentWrapperLeftTagWrapper">
                            <view class="schoolActiveContentWrapperLeftTagItem" qq:key="{{index}}" qq:for="{{item.tag}}">
                                {{item}}
                            </view>
                        </view>
                        <view class="schoolActiveContentWrapperLeftTimerWrapper">
                            <view class="schoolActiveContentWrapperLeftTimer">
                                {{item.data_start}}~{{item.data_end}}
                            </view>
                        </view>
                    </view>
                </navigator>
            </view>
        </view>
    </view>
    <view class="end">
        ————— <text class="ending">ending</text> —————
    </view>
</view>