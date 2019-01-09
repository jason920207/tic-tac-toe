/**
 * @Author: xiaojiezhang
 * @Date:   2019-01-04T12:08:35-05:00
 * @Last modified by:   xiaojiezhang
 * @Last modified time: 2019-01-09T13:56:16-05:00
 */
const api = require('./api')
const ui = require('./ui')
const store = require('../store')
const help = require('../help')
const getFormFields = require('../../../lib/get-form-fields')

const onGetGame = event => {
  help.ResetTitle()
  event.preventDefault()
  api.getgame()
    .then(ui.onGetGameSuccess)
    .catch(ui.onGetGameFail)
}

const onShowUnoverGame = event => {
  help.ResetTitle()
  api.getunovergame()
    .then(ui.getunovergamesuccess)
    .catch(ui.onGetGameFail)
}

const onCreateGame = event => {
  help.ResetTitle()
  event.preventDefault()
  api.creategame()
    .then(ui.onCreateGameSuccess)
    .catch(ui.onCreateGameFail)
}

const onResetGame = () => {
  help.ResetTitle()
  api.creategame()
    .then(ui.onCreateGameSuccess)
    .catch(ui.onCreateGameFail)
}

const onShowGame = event => {
  help.ResetTitle()
  event.preventDefault()
  const data = getFormFields(event.target)

  api.showgame(data.game.id)
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
  onResetGame,
  onShowUnoverGame
}
