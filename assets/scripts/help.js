/**
 * @Author: xiaojiezhang
 * @Date:   2019-01-04T08:51:48-05:00
 * @Last modified by:   xiaojiezhang
 * @Last modified time: 2019-01-04T08:58:32-05:00
 */
// hide sign up/ sign in botton when sign in
const onSignIn = () => {
  $('#SignInButton').css('display', 'none')
  $('#SignUpButton').css('display', 'none')
  $('#sign-out').css('display', 'block')
}

module.exports = {
  onSignIn
}
