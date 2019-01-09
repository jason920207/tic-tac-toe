/**
 * @Author: xiaojiezhang
 * @Date:   2019-01-04T19:54:36-05:00
 * @Last modified by:   xiaojiezhang
 * @Last modified time: 2019-01-09T11:46:14-05:00
 */

const api = require('./api')
const ui = require('./ui')
const getFormFields = require('../../../lib/get-form-fields')
const store = require('../store')
const help = require('../help')
const onSignIn = event => {
  help.ResetTitle()
  event.preventDefault()
  const data = getFormFields(event.target)
  if (data.credentials.email === store.user1.email){
    $('#checkUser2info').html('<a class="btn btn-warning">User 2 is the same as User1</a>')
  } else {
    api.signin(data)
      .then(ui.onSignInSuccess)
      .catch(ui.onSignInFail)
    onJoin()
  }
}

const onSignOut = event => {
  help.ResetTitle()
  api.signout()
    .then(ui.onSignOutSuccess)
    .catch(ui.onSignOutFail)
}

const onJoin = () => {
  help.ResetTitle()
  if (store.game.id) {
    const gameid = store.game.id
    api.join(gameid)
      .then(ui.onJoinSuccess)
      .catch(ui.onJoinFail)
  } else {
    console.log('please Create Game')
  }
}

module.exports = {
  onSignIn,
  onSignOut,
  onJoin
}
