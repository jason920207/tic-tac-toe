/**
 * @Author: xiaojiezhang
 * @Date:   2019-01-04T19:57:47-05:00
 * @Last modified by:   xiaojiezhang
 * @Last modified time: 2019-01-08T13:18:58-05:00
 */
const store = require('../store')
const config = require('../config')

const signin = data => {
  return $.ajax({
    url: config.apiUrl + '/sign-in',
    method: 'POST',
    data
  })
}

const signout = () => {
  return $.ajax({
    url: config.apiUrl + '/sign-out',
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user2.token
    }
  })
}

const join = (id) => {
  return $.ajax({
    url: config.apiUrl + `/games/${id}`,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user2.token
    }
  })
}

module.exports = {
  signin,
  signout,
  join
}
