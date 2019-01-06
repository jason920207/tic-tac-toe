/**
 * @Author: xiaojiezhang
 * @Date:   2019-01-04T19:57:56-05:00
 * @Last modified by:   xiaojiezhang
 * @Last modified time: 2019-01-06T10:41:59-05:00
 */
const store = require('../store')
const help = require('../help')

const onSignInSuccess = response => {
  console.log(response)
  $('#User-form2').modal('hide')
  store.user2 = response.user
  store.user2.score = 0
  $('#player2-header').html(`<h3>Player 2: ${store.user2.email}</h3>`)
  help.User2SignInSuccess()
}

const onSignInFail = err => {
  console.log(err)
}

const onSignOutSuccess = response => {
  $('#User2-info').html('')
  help.User2SignOut()
}

const onSignOutFail = err => {
  console.log(err)
}

const onJoinSuccess = response => {
  console.log('Join Success')
}

const onJoinFail = response => {
  console.log('Join Fail')
}

module.exports = {
  onSignInSuccess,
  onSignInFail,
  onSignOutSuccess,
  onSignOutFail,
  onJoinSuccess,
  onJoinFail
}
