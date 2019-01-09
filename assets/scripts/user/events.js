/**
 * @Author: xiaojiezhang
 * @Date:   2019-01-03T20:12:08-05:00
 * @Last modified by:   xiaojiezhang
 * @Last modified time: 2019-01-09T14:33:21-05:00
 */
const ui = require('./ui')
const api = require('./api')
const getFormFields = require('../../../lib/get-form-fields')
const help = require('../help')
const onSignUp = event => {
  help.ResetTitle()
  event.preventDefault()
  const data = getFormFields(event.target)
  api.signup(data)
    .then(ui.onSignUpSuccess)
    .catch(ui.onSignUpFail)
}

const onSignIn = event => {
  help.ResetTitle()
  event.preventDefault()
  const data = getFormFields(event.target)
  api.signin(data)
    .then(ui.onSignInSuccess)
    .catch(ui.onSignInFail)
}

const onSignOut = event => {
  help.ResetTitle()
  event.preventDefault()
  api.signout()
    .then(ui.onSignOutSuccess)
    .catch(ui.onSignOutFail)
}

const onChangePassword = event => {
  help.ResetTitle()
  event.preventDefault()
  const data = getFormFields(event.target)
  api.changepassword(data)
    .then(ui.onChangePasswordSuccess)
    .catch(ui.onChangePasswordFail)
}

module.exports = {
  onSignUp,
  onSignIn,
  onSignOut,
  onChangePassword
}
