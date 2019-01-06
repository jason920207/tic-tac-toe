/**
 * @Author: xiaojiezhang
 * @Date:   2019-01-04T08:51:48-05:00
 * @Last modified by:   xiaojiezhang
 * @Last modified time: 2019-01-06T11:00:33-05:00
 */
// hide sign up/ sign in botton when sign in
const onSignIn = () => {
  $('#SignInButton').css('display', 'none')
  $('#SignUpButton').css('display', 'none')
  $('#sign-out').css('display', 'block')
  $('#ChangePassword').css('display', 'block')
  $('#User1').css('display', 'block')
  $('#User1-Info').css('display', 'block')
  $('#checkbox').css('display', 'block')
  $('#Button-Status').css('display', 'block')
  $('#User2').css('display', 'block')
  $('#User2-info').css('display', 'block')
}

const onSignOut = () => {
  $('#SignInButton').css('display', 'block')
  $('#SignUpButton').css('display', 'block')
  $('#sign-out').css('display', 'none')
  $('#ChangePassword').css('display', 'none')
  $('#checkbox').css('display', 'none')
  $('#Button-Status').css('display', 'none')
  $('#User1-Info').css('display', 'none')
  $('#User1').css('display', 'none')
  $('#User2').css('display', 'none')
  $('#User2-info').css('display', 'none')
}

const User2SignInSuccess = () => {
  $('#SignInButton2').css('display', 'none')
  $('#User2-Signout').css('display', 'inline')
  $('#Join').css('display', 'inline')
}

const User2SignOut = () => {
  $('#SignInButton2').css('display', 'block')
  $('#User2-Signout').css('display', 'none')
  $('#Join').css('display', 'none')
}

const ClickWarning = () => {
  $('#tip').removeClass('btn-info')
  $('#tip').addClass('btn-danger')
  $('#tip').html('Please Don\'t click again')
}

const ClickSuccess = () => {
  $('#tip').removeClass('btn-danger')
  $('#tip').addClass('btn-info')
}

module.exports = {
  onSignIn,
  onSignOut,
  User2SignInSuccess,
  User2SignOut,
  ClickWarning,
  ClickSuccess
}
