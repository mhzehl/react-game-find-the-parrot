import API from '../../middleware/api'
const api = new API()
const games = api.service('games')

export default (game, user) => {
  const newPlayersArray = game.players.push(user._id)
  console.log(user)
  console.log('JoinGame api: ', newPlayersArray)
  api.app.authenticate()
    .then(() => {
      games.patch(game._id, { players: newPlayersArray })
    })
    .catch((error) => {
      console.error(error)
    })

  return { type: 'JOINED_GAME' }
}
