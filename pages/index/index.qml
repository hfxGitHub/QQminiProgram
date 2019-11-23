<view class="container">
  <view class="loading" qq:if="{{login}}">
    <text class="loadingText">loading</text>
  </view>
  <view class="login">
    <view class="logoWrapper">
      <image src="{{logoSrc}}" class="logo" />
    </view>
    <view class="loginPage">
      <view class="TitleWrapper">
        <text class="shu"></text>
        <text class="Title">一站式服务大厅登录</text>
      </view>
      <form class="form" bindsubmit="submit">
        <view class="id">
          <text>学号</text>
          <input name="id" placeholder="请输入学号" placeholder-class="idPlaceHolder" class="idInput"></input>
          <view class="br"></view>
        </view>
        <view class="passwd">
          <text>密码</text>
          <input name="passwd" password placeholder="请输入密码" placeholder-class="idPlaceHolder" class="idInput"></input>
          <view class="br"></view>
        </view>
        <view class="passwd">
          <view class="left">
            <text>验证码</text>
            <input name="verCode"  placeholder="请输入验证码" placeholder-class="idPlaceHolder" class="idInput"></input>
            <view class="br"></view>
          </view>
          <view class="right">
            
          </view>
        </view>
        <button class="btn" form-type="submit">登录</button>
      </form>
      <view class="onlyLook">
        <navigator class="onlyLookWrapper" url="/pages/home/home">
          <view class="onlyLookBtn">随便看看</view>
        </navigator>
      </view>
    </view>
    <view class="foot">
      <image src="{{logo2Src}}" class="footLogo" />
      <text class="title">西南科技大学   |   蜂拥</text>
    </view>
  </view>
</view>
