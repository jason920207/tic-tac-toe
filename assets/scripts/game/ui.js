/**
 * @Author: xiaojiezhang
 * @Date:   2019-01-04T12:08:39-05:00
 * @Last modified by:   xiaojiezhang
 * @Last modified time: 2019-01-07T22:22:20-05:00
 */

const Gameevents = require('./events')
const store = require('../store')
const help = require('../help')
const api = require('./api')

const onGetGameSuccess = response => {
  const games = response.games
  console.log(games)
  OnResetStatus()
  $('#status-title').text('Game History(over)')
  games.forEach(function (game) {
    showgame(game)
  })
}

const onGetGameFail = err => {
  console.log(err)
}

const onCreateGameSuccess = response => {
  store.isover = false
  store.game = response.game
  store.Cells= ['','','','','','','','','']
  $('.square').html('')
  help.tooltipChange('Create Success')
  $('#box').css('display', 'block')
  $('#result').css('display', 'none')
  $('#x-turn').removeClass('btn-info')
  $('#y-turn').removeClass('btn-success')
}

const onCreateGameFail = err => {
  console.log(err)
}

const onShowGameSuccess = response => {
  store.game = response.game
  console.log(response.game)
  OnResetStatus()
  // show the game
  $('#showgameModal').modal('hide')
  const GameHTML = (`
    <h6>${store.game.id}</h6>
    `)
  const User1ID = (`
    <h6>${store.game.player_x.id}</h6>
    `)
  const User1Email = (`
    <h6>${store.game.player_x.email}</h6>
    `)
  if (store.game.player_o) {
    const User2ID = (`
      <h6>${store.game.player_o.id}</h6>
      `)
    const User2Email = (`
      <h6>${store.game.player_o.email}</h6>
      `)
    $('#showgameuser2-id').append(User2ID)
    $('#showgameuser2-email').append(User2Email)
  } else {
    const User2HTML = (`
      <h6>None</h6>
      `)
    $('#showgameuser2-id').append(User2HTML)
    $('#showgameuser2-email').append(User2HTML)
  }
  $('#showgame-content1').append(GameHTML)
  $('#showgameuser1-id').append(User1ID)
  $('#showgameuser1-email').append(User1Email)

  //
  console.log(store.game.id)
  console.log(store.game.cells)
  recordonboard()
  countsymbol()
}

const recordonboard = () => {
  for (let i = 0;i < 9;i++){
    if (store.game.cells[i] === 'x') {
      $(`#${i}`).html($('<img>', {class:'theImg', src: 'assets/image/x.png'}))
    } else if (store.game.cells[i] === 'o') {
      $(`#${i}`).html($('<img>', {class:'theImg', src: 'assets/image/o.png'}))
    } else {
      $(`#${i}`).html('')
    }
  }
}


const countsymbol = () => {
  let countx = 0
  let counto = 0
  for (let i = 0; i < 9; i++) {
    if (store.game.cells[i] === 'x') {
      countx += 1
    } else if (store.game.cells[i] === 'o') {
      counto += 1
    }
  }
  store.symbol = countx > counto ? 'o' : 'x'
}

const onShowGameFail = err => {
  console.log(err)
}

const onUpdateSuccess = response => {
  store.game = response.game
  console.log(response)
  console.log('update success')
  const symbol = store.symbol

  if (symbol === 'x') {
    $(`#${store.index}`).prepend($('<img>', {class:'theImg', src: 'assets/image/x.png'}))
  } else {
    $(`#${store.index}`).prepend($('<img>', {class:'theImg', src: 'assets/image/o.png'}))
  }
  store.symbol = flip(symbol)
  help.tooltipChange('Success')
}

const flip = data => {
  if (data === 'x') {
    return 'o'
  } else {
    return 'x'
  }
}

const onUpdateFail = err => {
  console.log(err)
  $('#tooltip').removeClass('btn-info')
  $('#tooltip').addClass('btn-danger')
  help.tooltipChange('Please Create Game First')
}

const Win = () => {
  const data = store.game
  console.log(data)
  const cells = store.Cells
  if (XWin(cells) === true) {
    store.user1.score += 1
    ShowWin()
    $('#result').html("<a class='btn btn-danger w-100 h-100' id='result-content'>X Win</a>")
    $('#user1-score').text(`${store.user1.score}`)
    store.isover = true

    return true
  } else if (OWin(cells) === true) {
    store.user2.score += 1
    ShowWin()
    $('#result').html("<a class='btn btn-danger  w-100 h-100' id='result-content'>Y Win</a>")
    $('#user2-score').text(`${store.user2.score}`)
    store.isover = true
    return true
  } else {
    if (draw(cells) === true) {
      ShowWin()
      $('#result').html("<a class='btn btn-danger w-100 h-100' id='result-content'>DRAW</a>")
      store.isover = true
      return true
    }
  }
  return false
}

const ShowWin = () => {
  $('#tooltip').html('Retry? Create new Game')
  $('#box').css('display', 'none')
  $('#result').css('display', 'block')
}

const XWin = (cells) => {
  if (cells[0] === 'x' && cells[1] === 'x' && cells[2] === 'x') {
    return true
  } else if (cells[3] === 'x' && cells[4] === 'x' && cells[5] === 'x') {
    return true
  } else if (cells[6] === 'x' && cells[7] === 'x' && cells[8] === 'x') {
    return true
  } else if (cells[0] === 'x' && cells[3] === 'x' && cells[6] === 'x') {
    return true
  } else if (cells[1] === 'x' && cells[4] === 'x' && cells[7] === 'x') {
    return true
  } else if (cells[2] === 'x' && cells[5] === 'x' && cells[8] === 'x') {
    return true
  } else if (cells[0] === 'x' && cells[4] === 'x' && cells[8] === 'x') {
    return true
  } else if (cells[2] === 'x' && cells[4] === 'x' && cells[6] === 'x') {
    return true
  }

  return false
}

const OWin = cells => {
  if (cells[0] === 'o' && cells[1] === 'o' && cells[2] === 'o') {
    return true
  } else if (cells[3] === 'o' && cells[4] === 'o' && cells[5] === 'o') {
    return true
  } else if (cells[6] === 'o' && cells[7] === 'o' && cells[8] === 'o') {
    return true
  } else if (cells[0] === 'o' && cells[3] === 'o' && cells[6] === 'o') {
    return true
  } else if (cells[1] === 'o' && cells[4] === 'o' && cells[7] === 'o') {
    return true
  } else if (cells[2] === 'o' && cells[5] === 'o' && cells[8] === 'o') {
    return true
  } else if (cells[0] === 'o' && cells[4] === 'o' && cells[8] === 'o') {
    return true
  } else if (cells[2] === 'o' && cells[4] === 'o' && cells[6] === 'o') {
    return true
  }

  return false
}

const draw = cells => {
  if (cells[0] !== "" && cells[1] !== "" && cells[2] !== "" && cells[3] !== "" &&
   cells[4] !== "" && cells[5] !== "" && cells[6] !== "" && cells[7] !== "" &&
  cells[8] !== "") {
    return true
  }

  return false
}

// reset Status
const OnResetStatus = () => {
  $('#status-content1').html('')
  $('#user1-id').html('')
  $('#user1-email').html('')
  $('#user2-id').html('')
  $('#user2-email').html('')
  $('#status-content1').append('<a><i class="fas fa-gamepad"></i> Game ID</a>')
  $('#user1-id').append('<a><i class="fas fa-user-secret"></i>Player1</a>')
  $('#user1-email').append('<a><i class="fas fa-user-secret"></i>Player1</a>')
  $('#user2-id').append('<a><i class="fas fa-user-ninja"></i>Player2</a>')
  $('#user2-email').append('<a><i class="fas fa-user-secret"></i>Player1</a>')
}


const showgame = (game) => {
  const GameHTML = (`
    <h6>${game.id}</h6>
    `)
  const User1ID = (`
    <h6>${game.player_x.id}</h6>
    `)
  const User1Email = (`
    <h6>${game.player_x.email}</h6>
    `)
  if (game.player_o) {
    const User2ID = (`
      <h6>${game.player_o.id}</h6>
      `)
    const User2Email = (`
      <h6>${game.player_o.email}</h6>
      `)
    $('#user2-id').append(User2ID)
    $('#user2-email').append(User2Email)
  } else {
    const User2HTML = (`
      <h6>None</h6>
      `)
    $('#user2-id').append(User2HTML)
    $('#user2-email').append(User2HTML)
  }
  $('#status-content1').append(GameHTML)
  $('#user1-id').append(User1ID)
  $('#user1-email').append(User1Email)
}

const getunovergamesuccess = response => {
  const games = response.games
  console.log(games)
  OnResetStatus()
  $('#status-title').text('Game History(unover)')
  games.forEach(function (game) {
    showgame(game)
  })
}


module.exports = {
  onGetGameSuccess,
  onGetGameFail,
  onCreateGameSuccess,
  onCreateGameFail,
  onShowGameSuccess,
  onShowGameFail,
  onUpdateSuccess,
  onUpdateFail,
  Win,
  getunovergamesuccess
}
