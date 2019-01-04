/**
 * @Author: xiaojiezhang
 * @Date:   2019-01-04T12:08:35-05:00
 * @Last modified by:   xiaojiezhang
 * @Last modified time: 2019-01-04T16:35:00-05:00
 */
const api = require('./api')
const ui = require('./ui')
const store = require('../store')
// const getFormFields = require('../../../lib/get-form-fields')


const onGetGame = event => {
  event.preventDefault()
  api.getgame()
    .then(ui.onGetGameSuccess)
    .catch(ui.onGetGameFail)
}

const onCreateGame = event => {
  event.preventDefault()
  api.creategame()
    .then(ui.onCreateGameSuccess)
    .catch(ui.onCreateGameFail)
  store.symbol = 'x'
  store.isover = false
}

const onShowGame = event => {
  const id = store.game.id
  api.showgame(id)
    .then(ui.onShowGameSuccess)
    .catch(ui.onShowGameFail)
}

const onUpdate = event => {
  console.log(event.target.id)
  const Userid = store.game.id
  const index = event.target.id
  const over = store.isover
  const symbol = store.symbol
  console.log(symbol)
  $(`#${index}`).html(symbol)
  api.update(Userid, index, symbol, over)
    .then(ui.onUpdateSuccess)
    .then(() => {
      store.isover = true
    })
    .catch(ui.onUpdateFail)
  store.symbol = flip(symbol)
}

const flip = data => {
  if (data === 'x') {
    return 'o'
  } else {
    return 'x'
  }
}
module.exports = {
  onGetGame,
  onCreateGame,
  onShowGame,
  onUpdate
}
