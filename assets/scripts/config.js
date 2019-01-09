/**
 * @Author: xiaojiezhang
 * @Date:   2019-01-03T09:18:51-05:00
 * @Last modified by:   xiaojiezhang
 * @Last modified time: 2019-01-09T09:16:27-05:00
 */

'use strict'

let apiUrl
const apiUrls = {
  development: 'https://tic-tac-toe-wdi.herokuapp.com/',
  production: 'https://aqueous-atoll-85096.herokuapp.com'
}

if (window.location.hostname === 'localhost') {
  apiUrl = apiUrls.development
} else {
  apiUrl = apiUrls.production
}

module.exports = {
  apiUrl
}
