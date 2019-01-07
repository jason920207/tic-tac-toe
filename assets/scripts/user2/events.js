/**
 * @Author: xiaojiezhang
 * @Date:   2019-01-04T19:54:36-05:00
 * @Last modified by:   xiaojiezhang
 * @Last modified time: 2019-01-06T16:50:58-05:00
 */

const api = require('./api')
const ui = require('./ui')
const getFormFields = require('../../../lib/get-form-fields')
const store = require('../store')

const onSignIn = event => {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log(data)
  api.signin(data)
    .then(ui.onSignInSuccess)
    .catch(ui.onSignInFail)
  onJoin()
}

const onSignOut = event => {
  api.signout()
    .then(ui.onSignOutSuccess)
    .catch(ui.onSignOutFail)
}

const onJoin = event => {
  if (store.game.id) {
    const gameid = store.game.id
    api.join(gameid)
      .then()
      .catch()
  } else {
    console.log('please Create Game')
  }
}

module.exports = {
  onSignIn,
  onSignOut,
  onJoin
}
