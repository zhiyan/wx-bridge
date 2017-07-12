'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function () {
	var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : window.__WX_AUTH__ || {};

	if (!/MicroMessenger/.test(window.navigator.userAgent)) {
		return false;
	}
	var script = document.createElement('script');
	script.async = 'async';
	script.src = document.location.protocol + '//res.wx.qq.com/open/js/jweixin-1.2.0.js';
	document.getElementsByTagName('head')[0].appendChild(script);

	script.onload = function () {
		if (typeof wx !== 'undefined') {

			if (dev) {
				wx.ready = function (cb) {
					return cb();
				};
			}

			config.api = config.api || ['onMenuShareTimeline', 'onMenuShareAppMessage', 'onMenuShareQQ'];

			// 默认值
			config.imgUrl = config.imgUrl || window.location.protocol + '//img4.bitautoimg.com/jinrong/newmweb/images/pic300.jpg';
			config.shareUrl = config.shareUrl || window.location.href;
			config.desc = config.desc || '';
			config.title = config.title || document.title;

			wx.config({
				// 开启调试模式,调用的所有api的返回值会在客户端alert出来,若要查看传入的参数,可以在pc端打开,参数信息会通过log打出,仅在pc端时才会打印。
				debug: config.debug || (dev ? true : false),

				// 必填,公众号的唯一标识
				appId: config.appid || config.appId || '',

				// 必填,生成签名的时间戳
				timestamp: config.timestamp || '',

				// 必填,生成签名的随机串
				nonceStr: config.nonceStr || '',

				// 必填,签名,见附录1
				signature: config.signature || '',

				// 必填,需要使用的JS接口列表
				jsApiList: [].concat(config.api)
			});

			wx.ready(function () {
				// wx.checkJsApi({
				//    jsApiList: config.api
				//  })
				config.api.forEach(function (key) {
					wx[key](configBuilder[key](config));
				});
			});
		}
	};
};

var configBuilder = {
	onMenuShareTimeline: function onMenuShareTimeline(config) {
		return {
			title: config.title,
			desc: config.desc,
			link: config.shareUrl,
			imgUrl: config.imgUrl
		};
	},
	onMenuShareAppMessage: function onMenuShareAppMessage(config) {
		return {
			title: config.title,
			desc: config.desc,
			link: config.shareUrl,
			imgUrl: config.imgUrl
		};
	},
	onMenuShareQQ: function onMenuShareQQ(config) {
		return {
			title: config.title,
			desc: config.desc,
			link: config.shareUrl,
			imgUrl: config.imgUrl
		};
	}
};
