import React, { useContext } from 'react'
import ScoreBoardContext from '../../context/Scoreboard'

const AddScoreButton = ({ name }) => {
  const { addPoints } = useContext(ScoreBoardContext)
  return (
    <button type="button" onClick={() => addPoints(name)}>
      +
    </button>
  )
}

export default AddScoreButton
