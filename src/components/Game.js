import React, { useState } from 'react';
import getTotalTiles from '../utils/get-total-tiles.js';
import './Game.scss';
import Tile from './Tile';
import images from './images';
import TimeCounter from './TimeCounter.js';

const shuffleTiles = (tiles) => {
    return tiles.slice().sort((a,b) => 0.5 - Math.random())
}

const createTiles = (difficulty) => {
    let tiles = [];
    const totalTiles = getTotalTiles(difficulty);
    const totalPairs = totalTiles / 2;
    for (let i = 0; i < totalPairs; i++) {
        const image = images[i];
        for (let j = 0; j < 2; j++) {
            tiles.push({ pairId: i, image });
        }
    }
    tiles = shuffleTiles(tiles);
    return tiles;
}

const Game = (props) => {
    const { difficulty, onFinish, started } = props;
    const [tiles] = useState(createTiles(difficulty));

    const [flipped,setFlipped] = useState([]);
    const [removed,setRemoved] = useState([]);


    const onTileClick = (tile) => {
        if(flipped.length === 0) {
            // we had no clicks yet, so just add it to the flipped array
            setFlipped([ tile ]);
        }
        else if(flipped.length === 1) {
            // we already had one click
            const previousTile = flipped[0];
            if(tile === previousTile) {
                // clicked same tile: don't do anything
                return;
            } else {
                // two different tiles, show flipped:
                setFlipped([ previousTile, tile ]);
                setTimeout(() => {
                    // judgement time:
                    if(previousTile.pairId === tile.pairId) {
                        // match!
                        setRemoved([ ...removed, previousTile, tile ]);
                        if (removed.length+2 === tiles.length) {
                            onFinish(); 
                        }
                    }
                    setFlipped([]);   
                },500);
            }
        }
    }

    return (
        <div className={`Game ${difficulty} filter`}>
            <TimeCounter started={started} />
            <div className='container'>
                {tiles.map((tile, i) =>
                <Tile
                    key={i}
                    tile={tile}
                    flipped={flipped.includes(tile)}
                    removed={removed.includes(tile)}
                    onClick={onTileClick}/>
            )}
            </div>
            
        </div>
    )
}


export default Game;

