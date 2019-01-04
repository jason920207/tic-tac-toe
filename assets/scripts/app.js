/**
 * @Author: xiaojiezhang
 * @Date:   2019-01-03T09:18:51-05:00
 * @Last modified by:   xiaojiezhang
 * @Last modified time: 2019-01-04T16:19:29-05:00
 */

'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const Userevents = require('./user/events')
const Gameevents = require('./game/events')
const Control = require('./control/control')

$(() => {
  // your JS code goes here
  //User
  $('#sign-up').on('submit', Userevents.onSignUp)
  $('#sign-in').on('submit', Userevents.onSignIn)
  $('#sign-out').on('click', Userevents.onSignOut)
  $('#change-password').on('submit', Userevents.onChangePassword)

  //Game
  $('#Getgame').on('click', Gameevents.onGetGame)
  $('#CreateGame').on('click', Gameevents.onCreateGame)
  $('#Showgame').on('click', Gameevents.onShowGame)
  $('.square').one('click', Gameevents.onUpdate)
})
