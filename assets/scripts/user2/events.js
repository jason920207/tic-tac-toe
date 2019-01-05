/**
 * @Author: xiaojiezhang
 * @Date:   2019-01-04T19:54:36-05:00
 * @Last modified by:   xiaojiezhang
 * @Last modified time: 2019-01-05T07:29:31-05:00
 */

const api = require('./api')
const ui = require('./ui')
const getFormFields = require('../../../lib/get-form-fields')

const onSignIn = event => {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log(data)
  api.signin(data)
    .then(ui.onSignInSuccess)
    .catch(ui.onSignInFail)
}

const onSignOut = event => {
  api.signout()
    .then(ui.onSignOutSuccess)
    .catch(ui.onSignOutFail)
}

module.exports = {
  onSignIn,
  onSignOut
}
