import { useState } from 'react';
import './App.scss';
import Game from './components/Game';
import PickDifficulty from './components/PickDifficulty';
import EndGame from './components/EndGame';

function App() {

  const [state, setState] = useState('pick');
  const [ended, setEnded] = useState(null);
  const [difficulty,setDifficulty] = useState(null);
  const [started,setStarted] = useState(null);

  const pickDifficulty = (difficulty) => {
      setDifficulty(difficulty);
      setState('play');
      setStarted(new Date());
    }

  const onFinish = () => {
    setEnded(new Date());
    setState('won');
  }

  const newGame = () => {
      setState('pick');
  }
  return (
    <div className="App">
      { state === 'pick' && <PickDifficulty pickDifficulty={pickDifficulty}/>}
      { state === 'play' && <Game difficulty={difficulty} started={started} onFinish={onFinish} /> }
      { state === 'won' && <EndGame started={started} ended={ended} difficulty={difficulty} onPlayAgain={newGame}/>}
    </div>
  );
}

export default App;
