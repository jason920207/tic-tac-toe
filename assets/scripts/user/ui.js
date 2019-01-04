/**
 * @Author: xiaojiezhang
 * @Date:   2019-01-03T20:12:37-05:00
 * @Last modified by:   xiaojiezhang
 * @Last modified time: 2019-01-03T21:51:40-05:00
 */
const store = require('../store')

const onSignUpSuccess = response => {
  console.log('sign up success')
}

const onSignUpFail = err => {
  console.log(err)
}

const onSignInSuccess = response => {
  console.log(response)
  store.user = response.user
}

const onSignInFail = err => {
  console.log(err)
}

const onSignOutSuccess = response => {
  console.log('Sign out Success')
}

const onSignOutFail = err => {
  console.log(err)
}

module.exports = {
  onSignUpSuccess,
  onSignUpFail,
  onSignInSuccess,
  onSignInFail,
  onSignOutSuccess,
  onSignOutFail
}
