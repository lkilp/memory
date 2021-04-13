import React from 'react';

fetch('https://api.pexels.com/v1/search?query=people', {
    mode: 'cors',
    headers: {
        'Content-Type': 'application/json',
        Autorization: '563492ad6f917000010000018f2fcfd8be9f46e3b0d82aa995ae6bed',
    }
}).then(response => response.json())
.then(data => console.log(data));


const ChooseImages = (props) => {
    const { chooseImages } = props;
    return (
        <div className='ChooseImages'>
            <button onClick={() => chooseImages('random') }>RANDOM</button>
        </div>
    )
}

export default ChooseImages;

