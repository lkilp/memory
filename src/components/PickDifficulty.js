import React from 'react';

const PickDifficulty = (props) => {
    const {pickDifficulty} = props;

    return (
        <div className='PickDifficulty'>
          <div className='filter'>
            <h1>Memory Game</h1>
            <h3>Pick difficulty:</h3>
            <div className="buttons">
              <button onClick={() => pickDifficulty('easy') }>EASY</button>
              <button onClick={() => pickDifficulty('medium') }>MEDIUM</button>
              <button onClick={() => pickDifficulty('hard') }>HARD</button>
            </div>
          </div>
        </div>
    )
} 

export default PickDifficulty;