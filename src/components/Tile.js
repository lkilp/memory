import React from 'react';
import './Tile.scss';

const Tile = (props) => {
    const frontStyle = {
        backgroundImage: `url('${props.tile.image}')`,
    };

    return (
        <div className='Tile' onClick={() => props.onClick(props.tile)}>
            {!props.removed && (props.flipped
                ? <div className='front' style={frontStyle}></div>
                : <div className='back'></div>)} 
        </div>
    )
}

export default Tile;