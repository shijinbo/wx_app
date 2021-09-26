import Wx from "../common-wx/wx";
import {Api} from "../network/api";

module.exports = filePath => {
    return new Promise((resolve, reject) => {
        wx.uploadFile({
            url: Api.UploadToUpYun,
            filePath: filePath,
            name: 'image',
            success: function (res) {
                if (res.statusCode === 200) {
                    resolve(res.data.replace(/"/g, ''))
                } else {
                    Wx.showToastError('上传失败');
                    reject()
                }
            }
        })
    });
};
