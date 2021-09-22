import GlobalData from "./global-data";
import Wx from "../common-wx/wx";
import {Api} from "../network/api";
const fetch = require('../utils/fetch');

const switchUrl = [
    '/pages/index/index',
    '/pages/category/category',
    '/pages/shoppingcart/tabBarCart',
    '/pages/usercenter/usercenter'
];

const RouterMapping = {
    Message: {
        path: '/pages/usercenter/message',
        Auth: true
    },
    AreaList: {
        path: '/pages/index/areaList'
    },
    Authorization: {
        path: '/pages/authorization/authorization',
        Auth: false
    },
    Login: {
        path: '/pages/login/login',
        Auth: false
    },
    Register: {
        path: '/pages/register/register',
        Auth: false
    },
    Account: {
        path: '/pages/account/account',
        Auth: true
    },
    AccountName: {
        path: '/pages/account/accountName',
        Auth: true
    },
    ForgetPwd: {
        path: '/pages/account/forgetPwd',
        Auth: false
    },
    UpdatePwd: {
        path: '/pages/account/updatePwd',
        Auth: true
    },
    UpdatePayPwd: {
        path: '/pages/account/payPassword',
        Auth: true
    },
    BindNewMobile: {
        path: '/pages/account/phoneValid',
        Auth: true
    },
    AddressList: {
        path: '/pages/account/addressList',
        Auth: true
    },
    EditAddress: {
        path: '/pages/account/editAddress',
        Auth: true
    },
    UserCoupon: {
        path: '/pages/usercenter/userCoupon',
        Auth: true
    },
    CouponDetail: {
        path: '/pages/usercenter/couponDetail',
        Auth: true
    },
    CouponCode: {
        path: '/pages/usercenter/couponCode',
        Auth: true
    },
    OrderList: {
        path: '/pages/order/orderList',
        Auth: true
    },
    CancelOrder: {
        path: '/pages/order/cancelOrder',
        Auth: true
    },
    OrderDetail: {
        path: '/pages/order/orderDetails',
        Auth: true
    },
    ServiceType: {
        path: '/pages/order/serviceType',
        Auth: true
    },
    CheckLogistics: {
        path: '/pages/order/checkLogistics',
        Auth: true
    },
    BackOrderList: {
        path: '/pages/order/backOrderList',
        Auth: true
    },
    UserPoints: {
        path: '/pages/usercenter/userPoints',
        Auth: true
    },
    Pay: {
        path: '/pages/order/orderPay',
        Auth: true
    },
    PaySuccess: {
        path: '/pages/order/orderPaySuccess',
        Auth: true
    },
    UserRedenvelope: {
        path: '/pages/usercenter/userRedenvelope',
        Auth: true
    },
    RedenvelopeDetail: {
        path: '/pages/usercenter/redenvelopeDetail',
        Auth: true
    },
    UserSign: {
        path: '/pages/usercenter/userSign',
        Auth: true
    },
    SignRule: {
        path: '/pages/usercenter/signRule',
        Auth: true
    },
    Predeposit: {
        path: '/pages/usercenter/predeposit',
        Auth: true
    },
    ApplyRefund: {
        path: '/pages/order/applyRefund',
        Auth: true
    },
    ApplyReturn: {
        path: '/pages/order/applyReturn',
        Auth: true
    },
    ViewEvaluation: {
        path: '/pages/order/viewEvaluation',
        Auth: true
    },
    ToEvaluation: {
        path: '/pages/order/toEvaluation',
        Auth: true
    },
    InvoiceDetail: {
        path: '/pages/order/invoiceDetail',
        Auth: true
    },
    FillLogistics: {
        path: '/pages/order/fillLogistics',
        Auth: true
    },
    BackOrderDetail: {
        path: '/pages/order/backOrderDetail',
        Auth: true
    },
    UserCollection: {
        path: '/pages/usercenter/userCollection',
        Auth: true
    },
    UserBrowser: {
        path: '/pages/usercenter/userBrowser',
        Auth: false
    },
    SpuList: {
        path: '/pages/spu/spuList',
        Auth: false
    },
    FilterMask: {
        path: '/pages/spu/filterMask',
        Auth: false
    },
    FilterMaskCheck: {
        path: '/pages/spu/filterMaskCheck',
        Auth: false
    },
    Search: {
        path: '/pages/spu/search',
        Auth: false
    },
    Coupon: {
        path: '/pages/marketing/coupon',
        Auth: false
    },
    Redenvelope: {
        path: '/pages/marketing/redenvelope',
        Auth: false
    },
    PanicMarketing: {
        path: '/pages/marketing/panicMarketing',
        Auth: false
    },
    Settlement: {
        path: '/pages/settlement/settlementnew',
        Auth: true
    },
    GoodList: {
        path: '/pages/settlement/goodlist',
        Auth: true
    },
    CouponList: {
        path: '/pages/settlement/couponlist',
        Auth: true
    },
    Invoice: {
        path: '/pages/invoice/invoice',
        Auth: true
    },
    SettlementAddress: {
        path: '/pages/settlement/addressList',
        Auth: true
    },
    SettlementFreight: {
        path: '/pageextend/settlementfreight/settlementFreight',
        Auth: true
    },
    OrderNoPaySuccess: {
        path: '/pages/order/orderNoPaySuccess',
        Auth: true
    },
    Cart: {
        path: '/pages/shoppingcart/noTabBarCart',
        Auth: false
    },
    changePurchase: {
        path: '/pages/shoppingcart/changePurchase',
        Auth: false
    },
    PresaleMarketing: {
        path: '/pages/marketing/presaleMarketing',
        Auth: false
    },
    SkuDetail: {
        path: '/pages/skudetail/skuDetail',
        Auth: false
    },
    SkuDetailAddress: {
        path: '/pages/skudetail/address',
        Auth: false
    },
    SkuDetailCoupon: {
        path: '/pages/skudetail/coupon',
        Auth: false
    },
    SkuDetailPreSaleRule: {
        path: '/pages/skudetail/preSaleRule',
        Auth: false
    },
    SkuEvaluates: {
        path: '/pages/skudetail/skuEvaluates',
        Auth: false
    },
    404: {
        path: '/pages/skudetail/404',
        Auth: false
    },
    Thematic: {
        path: '/pages/thematic/thematic',
        Auth: false
    },
    Subject: {
        path: '/pages/subject/subject',
        Auth: false
    },
    StoreDetail: {
        path: '/pages/storedetail/storeDetail',
        Auth: false
    },
    StoreIndex: {
        path: '/pages/index/storeIndex',
        Auth: false
    },
    StoreList: {
        path: '/pages/store/searchStoreList',
        Auth: false
    },
    StoreCategory: {
        path: '/pages/store/storeCategory',
        Auth: false
    },
    PointMall: {
        path: '/pages/pointmall/pointmall',
        Auth: false
    },
    PointSkuDetail: {
        path: '/pages/pointskudetail/pointskudetail',
        Auth: false
    },
    PointSkuSubmitOrder: {
        path: '/pages/pointskusubmitorder/pointskusubmitorder',
        Auth: true
    },
    PointOrderNoPaySuccess: {
        path: '/pages/order/PointOrderNoPaySuccess',
        Auth: true
    },
    PointOrderList: {
        path: '/pages/order/pointOrderList',
        Auth: true
    },
    PointOrderDetail: {
        path: '/pages/order/pointOrderDetail',
        Auth: true
    },
    LiveList: {
        path: '/pages/live/liveList',
        Auth: true
    },
	Live: {
	    path: '/pages/live/live',
	    Auth: true
	},
	LiveFactory: {
	    path: '/pages/live/liveFactory',
	    Auth: true
	},
    StorePanicMarketing: {
        path: '/pages/marketing/storepanicMarketing',
        Auth: false
    },
    UserAttention: {
        path: '/pages/usercenter/userAttention',
        Auth: true
    },
	Authentication:{ //认证页
		path: '/pages/authentication/authentication',
		Auth: true
	},
	AuthResult:{ //认证提交结果页
		path: '/pages/authentication/authResult',
		Auth: true
	},
    WEB_VIEW: {// 通用webview页面
        path: '/pages/webview/webview',
        Auth: false
    }
}

class Router {

    static async navTo(sceneName, params) {
        let pages = getCurrentPages();
        let jumpMethod = 'navigateTo';
        if (pages.length >= 9) {
            jumpMethod = 'redirectTo'
        }
        // 路由地址
        const url = params ? RouterMapping[sceneName].path + params : RouterMapping[sceneName].path;
        // 需要登录 并且没有登录 则跳转到登录页面
        if (RouterMapping[sceneName].Auth && !GlobalData.getInstance().isLink) {
            wx[jumpMethod]({
                url: RouterMapping.Login.path + '?returnUrl=' + encodeURIComponent(url)
            })
        } else {
			// 认证拦截
			if(url.includes("spuList") || url.includes('search') || url.includes('skuDetail')){
				const StoreAuthState = await fetch(Api.GetStoreAuthByCustomerId)
				if(StoreAuthState!=2){
					wx.showModal({
					  title: '认证提示',
					  content: '店铺认证后方可浏览商详，查看价格，进行采购哟！',
					  confirmText:'去认证',
					  success (res) {
						if (res.confirm) {
						  Router.navTo('Authentication','?status='+StoreAuthState);
						}
					  }
					})
					return
				}
			}
            // 不需要登录 直接跳转
            wx[jumpMethod]({
                url: url
            })
        }
    }

    static navigateBack(timeOut = 0, delta = 1){
        setTimeout(function () {
            wx.navigateBack({
                delta: delta
            })
        }, timeOut)
    }

    static redirectTo(sceneName, params = ''){
        let url = RouterMapping[sceneName].path + params;
        // 需要登录 并且没有登录 则跳转到登录页面
        if (RouterMapping[sceneName].Auth && !GlobalData.getInstance().isLink) {
            Wx.redirect(RouterMapping.Login.path + '?returnUrl=' + encodeURIComponent(url))
        } else {
            // 不需要登录 直接跳转
            Wx.redirect(url)
        }
    }

    static toLogin(returnUrl = ''){
        let pages = getCurrentPages();
        if (pages[pages.length - 1].route.indexOf('pages/login/login') < 0) {
            wx.navigateTo({
                url: RouterMapping.Login.path + '?returnUrl=' + encodeURIComponent(returnUrl)
            })
        }
    }

    static returnRoute(queryParams = {}){
        if (!!queryParams.returnUrl) {
            let returnUrl = decodeURIComponent(queryParams.returnUrl);
            if (switchUrl.indexOf(returnUrl) > -1) {
                wx.switchTab({
                    url: returnUrl
                })
            } else {
                Wx.redirect(returnUrl)
            }
        } else {
            Router.navigateBack()
        }
    }
}

export default Router
