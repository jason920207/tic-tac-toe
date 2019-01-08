/**
 * @Author: xiaojiezhang
 * @Date:   2019-01-04T12:08:30-05:00
 * @Last modified by:   xiaojiezhang
 * @Last modified time: 2019-01-08T13:18:50-05:00
 */
const store = require('../store')
const config = require('../config')

const getgame = () => {
  return $.ajax({
    url: config.apiUrl + '/games?over=true',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user1.token
    }
  })
}

const getunovergame = () => {
  return $.ajax({
    url: config.apiUrl + '/games?over=false',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user1.token
    }
  })
}

const creategame = () => {
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user1.token
    }
  })
}

const showgame = id => {
  return $.ajax({
    url: config.apiUrl + `/games/${id}`,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user1.token
    }
  })
}

const update = (id, index, value, over) => {
  return $.ajax({
    url: config.apiUrl + `/games/${id}`,
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
  update,
  getunovergame
}
