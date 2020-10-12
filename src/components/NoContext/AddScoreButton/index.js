import React from 'react'

const AddScoreButton = ({ name, addPoints }) => (
  <button type="button" onClick={() => addPoints(name)}>
    +
  </button>
)

export default AddScoreButton
