/**
 * @Author: xiaojiezhang
 * @Date:   2019-01-04T19:57:56-05:00
 * @Last modified by:   xiaojiezhang
 * @Last modified time: 2019-01-09T11:30:46-05:00
 */
const store = require('../store')
const help = require('../help')

const onSignInSuccess = response => {
  help.ResetForm()
  $('#User-form2').modal('hide')
  store.user2 = response.user
  store.user2.score = 0
  $('#player2-header').html(`<h3>Player 2: ${store.user2.email}</h3>`)
  $('#user2-score').text(`${store.user2.score}`)
  help.User2SignInSuccess()
}

const onSignInFail = () => {
  help.tooltipChange('User2 Sign in Fail')
  help.ResetForm()
}

const onSignOutSuccess = response => {
  help.User2SignOut()
  store.user2 = null
  $('#player2-header').html('')
  $('#user2-score').text('0')
  $('#user1-score').text('0')
}

const onSignOutFail = () => {
  help.tooltipChange('User 2 Sign Out Fail')
}

const onJoinSuccess = response => {
  help.User2JoinInSuccess()
  help.ResetForm()
}

const onJoinFail = response => {
  $('#signinModalLongTitle').html('<a class="btn btn-danger">Please Check Your Email and Password</a>')
  help.ResetForm()
}

module.exports = {
  onSignInSuccess,
  onSignInFail,
  onSignOutSuccess,
  onSignOutFail,
  onJoinSuccess,
  onJoinFail
}
