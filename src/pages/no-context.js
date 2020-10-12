import React, { useState } from 'react'
import AddPlayer from '../components/NoContext/AddPlayer'
import ScoreBoard from '../components/NoContext/ScoreBoard'

const NoContext = () => {
  const [players, setPlayers] = useState([
    { name: `King Boo`, points: 0 },
    { name: `Dry Bones`, points: 0 },
    { name: `Bowser Jr.`, points: 0 },
    { name: `Inklings`, points: 0 },
    { name: `Gold Mario`, points: 0 },
  ])

  const addPlayer = name => setPlayers([...players, { name, points: 0 }])

  const addPoints = name => {
    const currentPlayer = players.find(player => player.name === name)
    currentPlayer.points += 15
    setPlayers([...players])
  }

  return (
    <div>
      <h1>ScoreBoard</h1>
      <ScoreBoard players={players} addPoints={addPoints} />
      <AddPlayer addPlayer={addPlayer} />
    </div>
  )
}
export default NoContext
