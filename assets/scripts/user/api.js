/**
 * @Author: xiaojiezhang
 * @Date:   2019-01-03T20:13:04-05:00
 * @Last modified by:   xiaojiezhang
 * @Last modified time: 2019-01-03T21:50:48-05:00
 */
const store = require('../store')

const signup = data => {
  return $.ajax({
    url: 'https://tic-tac-toe-wdi.herokuapp.com/sign-up',
    method: 'POST',
    data
  })
}

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
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  signup,
  signin,
  signout
}
