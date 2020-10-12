import React from 'react'
import AddScoreButton from '../AddScoreButton'

const ScoreBoard = ({ players, addPoints }) => (
  <table style={{ width: '400px' }}>
    <thead>
      <tr>
        <td>position</td>
        <td>name</td>
        <td>points</td>
        <td>add?</td>
      </tr>
    </thead>
    <tbody>
      {players
        .sort(
          (currentPlayer, lastPlayer) =>
            lastPlayer.points - currentPlayer.points
        )
        .map(({ name, points }, index) => (
          <tr key={name}>
            <td>{index + 1}</td>
            <td>{name}</td>
            <td>{points}</td>
            <td>
              <AddScoreButton name={name} addPoints={addPoints} />
            </td>
          </tr>
        ))}
    </tbody>
  </table>
)

export default ScoreBoard
