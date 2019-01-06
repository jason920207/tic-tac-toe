/**
 * @Author: xiaojiezhang
 * @Date:   2019-01-04T19:57:56-05:00
 * @Last modified by:   xiaojiezhang
 * @Last modified time: 2019-01-05T19:04:42-05:00
 */
const store = require('../store')
const help = require('../help')

const onSignInSuccess = response => {
  console.log(response)
  $('#User-form2').modal('hide')
  store.user2 = response.user
  // const UserInfo = (`
  //  <h3>Player 2</h3>
  //  <h4>id: ${store.user2.id}</h4>
  //  <h4>email: ${store.user2.email}</h4>
  //  `)
  // $('#User2-info').html(UserInfo)
  help.User2SignInSuccess()
}

const onSignInFail = err => {
  console.log(err)
}

const onSignOutSuccess = response => {
  $('#User2-info').html('')
  help.User2SignOut()
}

const onSignOutFail = err => {
  console.log(err)
}

const onJoinSuccess = response => {
  console.log('Join Success')
}

const onJoinFail = response => {
  console.log('Join Fail')
}

module.exports = {
  onSignInSuccess,
  onSignInFail,
  onSignOutSuccess,
  onSignOutFail,
  onJoinSuccess,
  onJoinFail
}
