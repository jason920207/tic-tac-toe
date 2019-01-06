/**
 * @Author: xiaojiezhang
 * @Date:   2019-01-04T12:08:30-05:00
 * @Last modified by:   xiaojiezhang
 * @Last modified time: 2019-01-06T10:23:21-05:00
 */
const store = require('../store')

const getgame = () => {
  return $.ajax({
    url: 'https://tic-tac-toe-wdi.herokuapp.com/games?over=true',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user1.token
    }
  })
}

const creategame = () => {
  return $.ajax({
    url: 'https://tic-tac-toe-wdi.herokuapp.com/games',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user1.token
    }
  })
}

const showgame = id => {
  return $.ajax({
    url: `https://tic-tac-toe-wdi.herokuapp.com/games/${id}`,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user1.token
    }
  })
}

const update = (id, index, value, over) => {
  return $.ajax({
    url: `https://tic-tac-toe-wdi.herokuapp.com/games/${id}`,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user1.token
    },
    contentType: 'application/json',
    data: JSON.stringify({
      "game": {
        "cell": {
          "index": index,
          "value": value
        },
        "over": over
      }
    })
  })

}



module.exports = {
  getgame,
  creategame,
  showgame,
  update
}
