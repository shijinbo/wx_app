class GlobalData {

    isIphoneX = false
    isLink = false
    token = ''
    isTokenRefresh = false
    storelogo = ''
    num = null
    tabbarData = null
    tabbarToHome = false
    address =  {
        provinceId: 0,
        cityId: 0,
        districtId: 0
    }
    key = ''
	hasUnionId = false
	anchorid = ""
	nickName = ""
	userName = ""
	customerId = ""

    //单例模式
    static getInstance() {
        if (!this.instance) {
            this.instance = new GlobalData()
        }
        return this.instance
    }

    checkIsIphoneX() {
        try {
            let res = wx.getSystemInfoSync();
            this.isIphoneX = res.model.indexOf('iPhone X') > -1;
        } catch (e) {
            console.log('checkIsIphoneX:', e)
        }
    }
}

export default GlobalData
