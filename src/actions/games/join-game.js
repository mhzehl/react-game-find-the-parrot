import API from '../../middleware/api'
const api = new API()
const games = api.service('games')

export default (game, user) => {
  const players = game.players

  console.log('JoinGame api: ', game.players )
  api.app.authenticate()
    .then(() => {
      games.update(game._id, { ...players[user._id] })
    })
    .catch((error) => {
      console.error(error)
    })

  return { type: 'JOINED_GAME' }
}
