import { useState } from 'react';
import './App.css';
import { GameContext, gameObject } from './store/GameContext';
import CardDisplay from './components/CardDisplay';
import ChildCard from './components/ChildCard';

function App() {

  const [game, setGame] = useState(gameObject);

  return (
    <GameContext.Provider value={{game, setGame}}>
        <div className="App-header">
        <CardDisplay/>
        <ChildCard/>
       </div>

    </GameContext.Provider>
  );
}

export default App;
