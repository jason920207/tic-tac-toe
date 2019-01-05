/**
 * @Author: xiaojiezhang
 * @Date:   2019-01-04T08:51:48-05:00
 * @Last modified by:   xiaojiezhang
 * @Last modified time: 2019-01-05T07:28:35-05:00
 */
// hide sign up/ sign in botton when sign in
const onSignIn = () => {
  $('#SignInButton').css('display', 'none')
  $('#SignUpButton').css('display', 'none')
  $('#sign-out').css('display', 'block')
  $('#ChangePassword').css('display', 'block')
  $('#checkbox').css('display', 'block')
  $('#User2').css('display', 'block')
}

const onSignOut = () => {
  $('#SignInButton').css('display', 'block')
  $('#SignUpButton').css('display', 'block')
  $('#sign-out').css('display', 'none')
  $('#ChangePassword').css('display', 'none')
  $('#checkbox').css('display', 'none')
  $('#User2').css('display', 'none')
}

const User2SignIn = () => {
  $('#SignInButton2').css('display', 'none')
  $('#User2-Signout').css('display', 'block')
  $('#Join').css('display', 'block')
}

const User2SignOut = () => {
  $('#SignInButton2').css('display', 'block')
  $('#User2-Signout').css('display', 'none')
  $('#Join').css('display', 'none')
}

module.exports = {
  onSignIn,
  onSignOut,
  User2SignIn,
  User2SignOut
}
