/**
 * @Author: xiaojiezhang
 * @Date:   2019-01-03T20:12:37-05:00
 * @Last modified by:   xiaojiezhang
 * @Last modified time: 2019-01-04T14:29:30-05:00
 */
const store = require('../store')
const help = require('../help')

const onSignUpSuccess = response => {
  $('#content').html("Sign up Success")
  $('#exampleModalLong').modal('hide')
}

const onSignUpFail = err => {
  console.log(err)
}

const onSignInSuccess = response => {
  console.log(response)
  $('#content').html("Sign in Success")
  $('#exampleModalLong1').modal('hide')
  store.user = response.user
  const UserInfo = (`
    <h3>Player 1</h3>
    <h4>id: ${store.user.id}</h4>
    <h4>email: ${store.user.email}</h4>
    `)
  $('#User1').html(UserInfo)
  help.onSignIn()
}

const onSignInFail = err => {
  console.log(err)
}

const onSignOutSuccess = response => {
  $('#content').html("Sign Out Success")
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
