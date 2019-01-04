/**
 * @Author: xiaojiezhang
 * @Date:   2019-01-03T09:18:51-05:00
 * @Last modified by:   xiaojiezhang
 * @Last modified time: 2019-01-03T21:46:13-05:00
 */

'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const events = require('./user/events')

$(() => {
  // your JS code goes here
  $('#sign-up').on('submit', events.onSignUp)
  $('#sign-in').on('submit', events.onSignIn)
  $('#sign-out').on('click', events.onSignOut)
})
