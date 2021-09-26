// pages/logs/index.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        user: {
            user_logo: '',
            user_name: '用户名',
            level: 99,
            maxLevel: 1000,
            vip_level: 2,
            wallet: {
               price: '0.00' ,
               integral: 0,
               coupon: 0
            }
        },
        vip_options: {
            1: '青铜会员',
            2: '白银会员',
            3: '黄金会员',
            4: '铂金会员',
            5: '钻石会员'
        },
        vip_serve:['购物返积分', '肉禽品类券', '周二会员日']
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})