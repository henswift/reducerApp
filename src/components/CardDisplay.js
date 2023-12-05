import React, { useContext } from 'react'
import { GameContext } from '../store/GameContext'

function CardDisplay() {
const {game} = useContext (GameContext)
console.log(game)
  return (
    <div>
        CardDisplay
    </div>
  )
}

export default CardDisplay