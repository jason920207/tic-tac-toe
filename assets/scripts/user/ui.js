/**
 * @Author: xiaojiezhang
 * @Date:   2019-01-03T20:12:37-05:00
 * @Last modified by:   xiaojiezhang
 * @Last modified time: 2019-01-09T14:33:41-05:00
 */
const store = require('../store')
const help = require('../help')
const game = require('../game/events')

const onSignUpSuccess = response => {
  $('#signupModalLongTitle').html('Sign Up')
  $('#exampleModalLong').modal('hide')
  help.ResetForm()
}

const onSignUpFail = () => {
  $('#signupModalLongTitle').html('<a class="btn btn-danger">Please Check Your Email and Password</a>')
  help.ResetForm()
}

const onSignInSuccess = response => {
  help.ResetForm()
  $('#signinModalLongTitle').html('Sign In')
  $('#exampleModalLong1').modal('hide')
  store.user1 = response.user
  store.user1.score = 0
  help.tooltipChange(`Welcome ${store.user1.email} To Play Tic-Tac-Toe`)
  $('#player1-header').html(`<h3>Player 1: ${store.user1.email}</h3>`)
  $('#user1-score').text(`${store.user1.score}`)
  help.onSignIn()
  game.onResetGame()
  // const UserInfo = (`
  //   <h3>Player 1</h3>
  //   <h4>id: ${store.user.id}</h4>
  //   <h4>email: ${store.user.email}</h4>
  //   `)
  // $('#User1-Info').html(UserInfo)
}

const onSignInFail = () => {
  $('#signinModalLongTitle').html('<a class="btn btn-danger">Please Check Your Email and Password</a>')
  help.ResetForm()
}

const onSignOutSuccess = response => {
  store.user1 = null
  store.user2 = null
  help.onSignOut()
}

const onSignOutFail = err => {
  help.tooltipChange('SignOut Fail')
}

const onChangePasswordSuccess = response => {
  $('#ChangepasswordModalLongTitle').html('Change Password')
  $('#content').html('Change Password Success')
  $('#ModalChangePassword').modal('hide')
  help.ResetForm()
}

const onChangePasswordFail = () => {
  $('#ChangepasswordModalLongTitle').html('<a class="btn btn-danger">Password is not match</a>')
  help.ResetForm()
}

module.exports = {
  onSignUpSuccess,
  onSignUpFail,
  onSignInSuccess,
  onSignInFail,
  onSignOutSuccess,
  onSignOutFail,
  onChangePasswordSuccess,
  onChangePasswordFail
}
