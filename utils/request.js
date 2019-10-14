import CONFIG from './config.js'
const request = ({
  url,
  data = {},
  method = 'POST'
}) => {
  return new Promise((resolve, reject) => {
    wx.request({
      url: `${CONFIG.BASE_URL}/${url}`,
      data,
      method,
      success(res) {
        wx.showToast({
          title: 'success',
        })
        resolve(res)
      },
      fail(error) {
        wx.showToast({
          title: 'fail',
        })
        reject(error)
      }
    })
  })
}
export default request