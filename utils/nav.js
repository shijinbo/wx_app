function setNav(ctx, topTitle = '', navColor = '#6838FA', titleColor = '#ffffff') {
    ctx.selectComponent('#comp-nav-dynamic').setOptions({
        navBackgroundInit: navColor, // 导航栏背景颜色-初始值
        titleColorInit: titleColor, // 文本颜色-初始值 16进制
        titleTextInit: topTitle, // 标题文字-初始值
        historyShow: true, // 历史图标是否显示
        homeShow: false, // home图标是否显示
        homeJudgeStack: false, // home图标显示是否判断页面栈
        homePath: '/pages/home/index', // home页面路径
        homeColorInit: 'white', // home图标颜色-初始值 white / black
    })
    ctx.setData({
        navHeight: ctx.selectComponent('#comp-nav-dynamic').getNavHeight(),
    });
}

export {
    setNav
}
