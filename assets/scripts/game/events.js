/**
 * @Author: xiaojiezhang
 * @Date:   2019-01-04T12:08:35-05:00
 * @Last modified by:   xiaojiezhang
 * @Last modified time: 2019-01-05T22:13:42-05:00
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

const onShowGame = event => {
  const id = store.game.id
  api.showgame(id)
    .then(ui.onShowGameSuccess)
    .catch(ui.onShowGameFail)
}

const onUpdate = event => {
  const Userid = store.game.id
  const index = event.target.id
  const over = store.isover
  const symbol = store.symbol
  store.index = index
  if (index !== '') {
    if ($(`#${index}`).html() === '') {
      help.ClickSuccess()
      api.update(Userid, index, symbol, over)
        .then(ui.onUpdateSuccess)
        .then((response) => {
          if (response) {
            store.isover = true
          }
        })
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
  onUpdate
}
