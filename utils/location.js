import Wx from "../common-wx/wx";

const tag = 'Location---'
const myAmapFile = require('../utils/amap-wx')
const authName = 'scope.userLocation'
const title = '定位授权'
const content = '请授权地址定位'
const key = '45452af0786e1b66461368aad3758436'

class Location {

    /**
     *
     * @returns {Promise<unknown>}
     */
    static _auth() {
        return new Promise((resolve, reject) => {
            wx.getSetting({
                success: res => {
                    console.log(tag, res)
                    if (typeof res.authSetting[authName] === 'undefined') {
                        // 首次授权
                        resolve();
                    } else if (!res.authSetting[authName]) {
                        Wx.showModal(title, content, () => {
                            Wx.openSetting(authName, () => {
                                // 同意授权成功
                                resolve();
                            }, (res) => {
                                reject(res);
                            })
                        }, () => {
                            reject()
                        })
                    } else {
                        // 已授权过
                        resolve();
                    }
                },
                fail: (e) => {
                    reject(e)
                }
            });
        });
    }

    static regions() {
        return new Promise((resolve, reject) => {
            Location._auth().then(() => {
                const myAmapFun = new myAmapFile.AMapWX({
                    key
                });
                myAmapFun.getRegeo({
                    success: (res) => {
                        resolve(res)
                    },
                    fail: (info) => {
                        reject(info)
                    }
                })
            }).catch(() => {
                reject('用户点击取消授权')
            })
        })
    }

    static dealAddressList(addressList) {
        addressList.forEach(address => {
            address.address = address.address.replace(/,/g, '');
        });
        return addressList;
    }
}

export {
    Location
}
