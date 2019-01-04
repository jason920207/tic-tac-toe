/**
 * @Author: xiaojiezhang
 * @Date:   2019-01-03T20:12:08-05:00
 * @Last modified by:   xiaojiezhang
 * @Last modified time: 2019-01-04T08:59:29-05:00
 */
const ui = require('./ui')
const api = require('./api')
const getFormFields = require('../../../lib/get-form-fields')
const help = require('../help')

const onSignUp = event => {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.signup(data)
    .then(ui.onSignUpSuccess)
    .catch(ui.onSignUpFail)
  $('#exampleModalLong').modal('hide')
}

const onSignIn = event => {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.signin(data)
    .then(ui.onSignInSuccess)
    .catch(ui.onSignInFail)

  $('#exampleModalLong1').modal('hide')
  help.onSignIn()
}

const onSignOut = event => {
  event.preventDefault()
  api.signout()
    .then(ui.onSignOutSuccess)
    .catch(ui.onSignOutFail)
}
module.exports = {
  onSignUp,
  onSignIn,
  onSignOut
}
