/**
 * @Author: xiaojiezhang
 * @Date:   2019-01-03T20:13:04-05:00
 * @Last modified by:   xiaojiezhang
 * @Last modified time: 2019-01-08T13:15:12-05:00
 */
const store = require('../store')
const config = require('../config')

const signup = data => {
  return $.ajax({
    url: config.apiUrl + '/sign-up',
    method: 'POST',
    data
  })
}

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
      Authorization: 'Token token=' + store.user1.token
    }
  })
}

const changepassword = (data) => {
  return $.ajax({
    url: config.apiUrl + '/change-password',
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user1.token
    },
    data
  })
}


module.exports = {
  signup,
  signin,
  signout,
  changepassword
}
