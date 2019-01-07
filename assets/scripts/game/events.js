/**
 * @Author: xiaojiezhang
 * @Date:   2019-01-04T12:08:35-05:00
 * @Last modified by:   xiaojiezhang
 * @Last modified time: 2019-01-07T09:07:14-05:00
 */
const api = require('./api')
const ui = require('./ui')
const store = require('../store')
const help = require('../help')
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
}

const onResetGame = () => {
  api.creategame()
    .then(ui.onCreateGameSuccess)
    .catch(ui.onCreateGameFail)
}

const onShowGame = event => {
  const id = store.game.id
  api.showgame(id)
    .then(ui.onShowGameSuccess)
    .catch(ui.onShowGameFail)
}

const onUpdate = event => {
  const Userid = store.game.id
  const index = event.target.id
  const symbol = store.symbol
  store.index = index

  if (symbol === 'x') {
    $('#y-turn').addClass('btn-success')
    $('#x-turn').removeClass('btn-info')
  } else {
    $('#y-turn').removeClass('btn-success')
    $('#x-turn').addClass('btn-info')
  }

  if (index !== '') {
    if ($(`#${index}`).html() === '') {
      help.ClickSuccess()
      store.Cells[`${index}`] = symbol
      console.log(store.Cells)
      ui.Win()
      api.update(Userid, index, symbol, store.isover)
        .then(ui.onUpdateSuccess)
        .catch(ui.onUpdateFail)
    }
  } else {
    help.ClickWarning()
  }
}

module.exports = {
  onGetGame,
  onCreateGame,
  onShowGame,
  onUpdate,
  onResetGame
}
