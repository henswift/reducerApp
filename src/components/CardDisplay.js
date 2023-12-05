import React, { useContext } from 'react'
import { GameContext } from '../store/GameContext'

function CardDisplay() {
const {game} = useContext (GameContext)
const {shuffledCards, setShuffledCards = useState({});


}, []
  return (
    <div>
        {game}
    </div>
  )
}

export default CardDisplay