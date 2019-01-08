/**
 * @Author: xiaojiezhang
 * @Date:   2019-01-03T20:12:37-05:00
 * @Last modified by:   xiaojiezhang
 * @Last modified time: 2019-01-07T21:32:51-05:00
 */
const store = require('../store')
const help = require('../help')
const game = require('../game/events')

const onSignUpSuccess = response => {
  $('#exampleModalLong').modal('hide')
}

const onSignUpFail = err => {
  console.log(err)
}

const onSignInSuccess = response => {
  console.log(response)
  $('#exampleModalLong1').modal('hide')
  store.user1 = response.user
  store.user1.score = 0
  help.tooltipChange('Welcome To Play Tic-Tac-Toe')
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

const onSignInFail = err => {
  console.log(err)
}

const onSignOutSuccess = response => {
  store.user1 = null
  store.user2 = null
  help.onSignOut()
}

const onSignOutFail = err => {
  console.log(err)
}

const onChangePasswordSuccess = response => {
  $('#content').html("Change Password Success")
  $('#ModalChangePassword').modal('hide')
}

const onChangePasswordFail = err => {
  console.log(err)
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
