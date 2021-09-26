const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}


const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

function getAuth(options) {
  options = Object.assign({
      auth: '',
      title: '',
      content: '',
      showModal: true
  }, options);
  return new Promise((resolve, reject) => {
      wx.getSetting({
          success: res => {
              console.log('1-sucess', res);
              if (typeof res.authSetting[options.auth] === 'undefined') {
                  // 首次授权
                  resolve();
              } else if (!res.authSetting[options.auth]) {
                  if (options.showModal) {
                      wx.showModal({
                          title: options.title,
                          content: options.content,
                          success: res => {
                              if (res.confirm) {
                                  wx.openSetting({
                                      success: res => {
                                          if (res.authSetting[options.auth]) {
                                              // 同意授权成功
                                              resolve();
                                          } else {
                                              console.log('1-3');
                                              reject();
                                          }
                                      },
                                      fail: res => {
                                          console.log('openSetting-fail', res);
                                      }
                                  });
                              } else {
                                  console.log('2-3');
                                  reject();
                              }
                          },
                          fail: reject
                      });
                  } else {
                      console.log('3-3');
                      reject();
                  }
              } else {
                  // 已授权过
                  console.log('已授权过');
                  resolve();
              }
          },
          fail: reject
      });
  });
}
//分组
const groupBy = (list, fn) => {
    const groups = {};
    list.forEach(function (o) {
        const group = fn(o);
        groups[group] = groups[group] || [];
        groups[group].push(o);
    });
    // return Object.keys(groups).map(function (group) {
    //     return groups[group];
    // });
    return groups;
}
module.exports = {
  formatTime: formatTime,
  getAuth: getAuth,
  groupBy
}
