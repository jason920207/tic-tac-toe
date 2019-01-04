/**
 * @Author: xiaojiezhang
 * @Date:   2019-01-04T12:08:39-05:00
 * @Last modified by:   xiaojiezhang
 * @Last modified time: 2019-01-04T16:32:18-05:00
 */

const Gameevents = require('./events')
const store = require('../store')

const onGetGameSuccess = response => {
  console.log(response)
}

const onGetGameFail = err => {
  console.log(err)
}

const onCreateGameSuccess = response => {
  store.game = response.game
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
  console.log('update success')
  return Win()
}

const onUpdateFail = err => {
  console.log(err)
}

const Win = () => {
  const data = store.game
  const cells = data.cells
  if (XWin(cells)) {
    console.log('XWin')
    return true
  } else if (OWin(cells)) {
    console.log('YWIN')
    return true
  } else {
    if (draw(cells)) {
      console.log('DRAW')
      return true
    }
  }
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
}

const draw = cells => {
    if (cells[0] !== "" && cells[1] !== "" && cells[2] !== "" && cells[3] !== "" &&
   cells[4] !== "" && cells[5] !== "" && cells[6] !== "" && cells[7] !== "" &&
  cells[8] !== ""){
    return true
  }
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
