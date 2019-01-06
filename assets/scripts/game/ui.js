/**
 * @Author: xiaojiezhang
 * @Date:   2019-01-04T12:08:39-05:00
 * @Last modified by:   xiaojiezhang
 * @Last modified time: 2019-01-06T14:04:26-05:00
 */

const Gameevents = require('./events')
const store = require('../store')

const onGetGameSuccess = response => {
  const games = response.games
  console.log(games)

  $('#status-content1').append('<i class="fas fa-user-secret"></i>')
  $('#status-content2').append('<i class="fas fa-user-secret"></i>')
  games.forEach(function (game) {
    const User1HTML = (`
      <h4>Game ID: ${game.id}</h4>

      `)
    $('#status-content1').append(GameHTML)
    $('#status-content1').append(GameHTML)
  })
}

const onGetGameFail = err => {
  console.log(err)
}

const onCreateGameSuccess = response => {
  store.game = response.game
  $('.square').html('')
  $('#tip').text('Create Success')
  $('#box').css('display', 'block')
  $('#result').css('display', 'none')
}




const onCreateGameFail = err => {
  console.log(err)
}

const onShowGameSuccess = response => {
  const game = response.game
  console.log(game)
  $('#content').html('<ul></ul>')
  game.cells.forEach(function (cell) {
    $('#content').append(`
        <li>${cell}</li>
    `)
  })
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

  return Win()
}

const flip = data => {
  if (data === 'x') {
    return 'o'
  } else {
    return 'x'
  }
}

const onUpdateFail = err => {
    $('#tip').removeClass('btn-info')
    $('#tip').addClass('btn-danger')
    $('#tip').html('Please Create Game First')
}

const Win = () => {
  const data = store.game
  const cells = data.cells
  console.log(XWin(cells))
  console.log(OWin(cells))
  if (XWin(cells) === true) {
    $('#tip').html('Retry? Create new Game')
    $('#box').css('display', 'none')
    $('#result').css('display', 'block')
    $('#result').html("<a class='btn btn-danger w-100 h-100' id='result-content'>X Win</a>")
    return true
  } else if (OWin(cells) === true) {
    $('#tip').html('Retry? Create new Game')
    $('#box').css('display', 'none')
    $('#result').css('display', 'block')
    $('#result').html("<a class='btn btn-danger  w-100 h-100' id='result-content'>Y Win</a>")
    return true
  } else {
    if (draw(cells) === true) {
      $('#tip').html('Retry? Create new Game')
      $('#box').css('display', 'none')
      $('#result').css('display', 'block')
      $('#result').html("<a class='btn btn-danger w-100 h-100' id='result-content'>DRAW</a>")
      return true
    }
  }

  return false
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

module.exports = {
  onGetGameSuccess,
  onGetGameFail,
  onCreateGameSuccess,
  onCreateGameFail,
  onShowGameSuccess,
  onShowGameFail,
  onUpdateSuccess,
  onUpdateFail
}
