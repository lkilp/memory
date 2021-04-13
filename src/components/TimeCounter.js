import React from 'react';
import './TimeCounter.scss';
import Moment from 'react-moment';


const TimeCounter = (props) => {
    return (
        <div className='TimeCounter'>
            <h3>Time <Moment date={props.started} format="mm:ss" durationFromNow interval={1000}></Moment></h3>
        </div>
    )
}

export default TimeCounter;