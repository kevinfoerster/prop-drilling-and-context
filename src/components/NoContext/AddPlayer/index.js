import React, { useContext, useState } from 'react'

const AddPlayer = ({ addPlayer }) => {
  const [playerName, setPlayerName] = useState('')
  return (
    <form
      onSubmit={e => {
        e.preventDefault()
        if (playerName) {
          addPlayer(playerName)
          setPlayerName('')
        } else {
          return false
        }
      }}
    >
      <label htmlFor="name">
        name:
        <input
          id="name"
          name="name"
          type="text"
          value={playerName}
          onChange={e => {
            setPlayerName(e.target.value)
          }}
        />
      </label>
      <input type="submit" disabled={playerName.length === 0} />
    </form>
  )
}

export default AddPlayer
