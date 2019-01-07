/**
 * @Author: xiaojiezhang
 * @Date:   2019-01-04T19:57:56-05:00
 * @Last modified by:   xiaojiezhang
 * @Last modified time: 2019-01-07T12:04:37-05:00
 */
const store = require('../store')
const help = require('../help')

const onSignInSuccess = response => {
  console.log(response)
  $('#User-form2').modal('hide')
  store.user2 = response.user
  store.user2.score = 0
  $('#player2-header').html(`<h3>Player 2: ${store.user2.email}</h3>`)
  $('#user2-score').text(`${store.user2.score}`)
  help.User2SignInSuccess()
}

const onSignInFail = err => {
  console.log(err)
}

const onSignOutSuccess = response => {
  help.User2SignOut()
  store.user2 = null
}

const onSignOutFail = err => {
  console.log(err)
}

const onJoinSuccess = response => {
  help.User2JoinInSuccess()
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
