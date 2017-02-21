import API from '../../middleware/api'
const api = new API()
const games = api.service('games')
import { history } from '../../store'

export default (game, user) => {
  const players = game.players

  console.log('JoinGame api: ', game._id )
  api.app.authenticate()
    .then(() => {
      games.update(game._id, { ...players[user._id] })
      .then(() => {
        history.push('/games/' + game._id)
      })
      .catch((error) => {
        console.error(error)
      })
    })
    .catch((error) => {
      console.error(error)
    })

  return { type: 'JOINED_GAME' }
}
