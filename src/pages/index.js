import React, { useState } from 'react'
import AddPlayer from '../components/AddPlayer'

import ScoreBoard from '../components/ScoreBoard'
import ScoreBoardContext from '../context/Scoreboard'

const initialPlayers = [
  { name: `King Boo`, points: 0 },
  { name: `Dry Bones`, points: 0 },
  { name: `Bowser Jr.`, points: 0 },
  { name: `Inklings`, points: 0 },
  { name: `Gold Mario`, points: 0 },
]

export default function Home() {
  const [players, setPlayers] = useState(initialPlayers)

  const addPlayer = name => setPlayers([...players, { name, points: 0 }])

  const addPoints = name => {
    const currentPlayer = players.find(player => player.name === name)
    currentPlayer.points += 15
    setPlayers([...players])
  }

  return (
    <ScoreBoardContext.Provider
      value={{ players, setPlayers, addPlayer, addPoints }}
    >
      <h1>ScoreBoard</h1>

      <ScoreBoard />

      <AddPlayer />
    </ScoreBoardContext.Provider>
  )
}
