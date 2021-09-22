import GlobalData from "./global-data";
import Wx from "../common-wx/wx";
import ECache from "./cache";
import User from "../models/user";

const assign = require('./object-assign.js');

// 异步请求
module.exports = (url, req) => {
  const token = wx.getStorageSync('token') || ''
  // 默认请求参数
  let request = {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token
    },
    data: {}
  };


  //对header做单独合并
  if (req && req.headers) {
    const mergeHeader = assign({}, request.headers, req.headers);
    request.headers = mergeHeader;
    delete req.headers;
  }

  //merge
  const merge = assign({}, request, req);
  //去掉url中可能存在的//
  url = url.replace(/([^:])\/\//, '$1/');

  // 发送异步请求
  return new Promise((resolve, reject) => {
    wx.request({
      url: url,
      data: merge.data,
      method: merge.method,
      header: merge.headers,
      success: function (res) {
        // 请求成功
        if (res.statusCode === 200) {
          resolve(res.data);
        } else if (res.statusCode === 401) {
          // 没有权限
          // 跳转到登录页面
          // const app = getApp();
          if (!GlobalData.getInstance().isLink) {
            GlobalData.getInstance().isLink = false
            Wx.setStorage(ECache.LINK, false)
            // 请求token
            User.getToken().then(r => {
              console.log('r: ',r)
              // 从新发送上次请求
            })
          }

        } else {
          reject(res.data);
        }
      },
      fail: function (error) {
        reject(error);
      }
    })
  });
};

