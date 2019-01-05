/**
 * @Author: xiaojiezhang
 * @Date:   2019-01-04T19:57:47-05:00
 * @Last modified by:   xiaojiezhang
 * @Last modified time: 2019-01-04T22:18:02-05:00
 */
const store = require('../store')

const signin = data => {
  return $.ajax({
    url: 'https://tic-tac-toe-wdi.herokuapp.com/sign-in',
    method: 'POST',
    data
  })
}

const signout = () => {
  return $.ajax({
    url: 'https://tic-tac-toe-wdi.herokuapp.com/sign-out',
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user2.token
    }
  })
}

module.exports = {
  signin,
  signout
}
