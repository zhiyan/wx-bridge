# 微信桥组件 1.0.0

### 使用

页面:
var __window.__WX_AUTH____ = {
	nonceStr: 'xxx',
	appId: 'xxx',
	signature: 'xxx',
	timestamp: 'xxx'
}

js:
import wxBridge from 'libs/wx-bridge'
wxBridge(options)


### options 参数(可选)
 * appId: (必填) String, 公众号的唯一标识
 * timestamp: (必填) String, 生成签名的时间戳
 * nonceStr: (必填) String, 生成签名的时间戳
 * signature: (必填) String, 签名
 * jsApiList: (可选) Array, 调用接口列表，默认 ['onMenuShareTimeline', 'onMenuShareAppMessage', 'onMenuShareQQ']
 * title: (可选) String, 分享标题，默认doucment.title
 * desc: (可选) String, 分享描述，默认空
 * shareUrl: (可选) String, 分享链接, 默认当前链接
 * imgUrl: (可选) String, 分享图片，默认空