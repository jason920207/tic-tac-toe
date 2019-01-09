/**
 * @Author: xiaojiezhang
 * @Date:   2019-01-04T08:51:48-05:00
 * @Last modified by:   xiaojiezhang
 * @Last modified time: 2019-01-09T11:47:51-05:00
 */
// hide sign up/ sign in botton when sign in
const onSignIn = () => {
  $('#sign-component').css('display', 'none')
  $('#signout-component').css('display', 'block')
  $('#User1').css('display', 'block')
  $('#User1-Info').css('display', 'block')
  $('#checkbox').css('display', 'block')

  $('#User2').css('display', 'block')
  $('#User2-info').css('display', 'block')
  $('#result').css('display', 'none')
  $('#carouselExampleControls').css('display', 'none')
}

const onSignOut = () => {
  $('#sign-component').css('display', 'block')
  $('#signout-component').css('display', 'none')
  $('#checkbox').css('display', 'none')

  $('#User1-Info').css('display', 'none')
  $('#User1').css('display', 'none')
  $('#User2').css('display', 'none')
  $('#User2-info').css('display', 'none')
  $('#carouselExampleControls').css('display', 'block')
}

const User2SignInSuccess = () => {
  $('#SignInButton2').css('display', 'none')
  $('#User2-Signout').css('display', 'inline')
  $('#Join').css('display', 'inline')
  tooltipChange('User2 SignIn Success')
}

const User2JoinInSuccess = () => {
  $('#Join').css('display', 'none')
  console.log('success')
  tooltipChange('User2 Join Success')
}

const tooltipChange = (string) => {
  $('#tooltip').text(`${string}`)
}

const User2SignOut = () => {
  $('#SignInButton2').css('display', 'block')
  $('#User2-Signout').css('display', 'none')
  $('#Join').css('display', 'none')
  tooltipChange('User2 Log Out Success')
}

const ClickWarning = () => {
  $('#tooltip').removeClass('btn-info')
  $('#tooltip').addClass('btn-danger')
  $('#tooltip').html('Please Don\'t click again')
}

const ClickSuccess = () => {
  $('#tooltip').removeClass('btn-danger')
  $('#tooltip').addClass('btn-info')
}

const ResetForm = () => {
  $('input').val('')
}

const ResetTitle = () => {
  $('#ChangepasswordModalLongTitle').html('Change Password')
  $('#signinModalLongTitle').html('Sign In')
  $('#checkUser2info').html('Sign In')
}

module.exports = {
  onSignIn,
  onSignOut,
  User2SignInSuccess,
  User2SignOut,
  ClickWarning,
  ClickSuccess,
  User2JoinInSuccess,
  tooltipChange,
  ResetForm,
  ResetTitle
}
