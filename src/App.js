import { useState } from 'react';
import './App.css';
import { GameContext, gameObject } from './store/GameContext';
import CardDisplay from './components/CardDisplay';

function App() {

  const [game, setGame] = useState(gameObject);

  return (
    <GameContext.Provider value={{game, setGame}}>
        <div className="App-header">
        <CardDisplay/>
       </div>

    </GameContext.Provider>
  );
}

export default App;
