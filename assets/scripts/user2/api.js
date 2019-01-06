/**
 * @Author: xiaojiezhang
 * @Date:   2019-01-04T19:57:47-05:00
 * @Last modified by:   xiaojiezhang
 * @Last modified time: 2019-01-05T08:10:49-05:00
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

const join = (id) => {
  return $.ajax({
    url: `https://tic-tac-toe-wdi.herokuapp.com/games/${id}`,
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
