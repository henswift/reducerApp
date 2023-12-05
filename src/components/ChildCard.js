import React, { useContext } from 'react'
import { GameContext } from '../store/GameContext'

function ChildCard() {
const {game} = useContext (GameContext)
console.log(game)
  return (
    <div>
        Card 2
    </div>
  )
}

export default ChildCard