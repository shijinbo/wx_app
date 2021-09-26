module.exports = (url, req) => {
    const token = wx.getStorageSync('token') ||'';

    let request = {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': token
        },
        data
    }
}