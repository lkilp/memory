import React from 'react';
import Moment from 'react-moment';
import StarRatingComponent from 'react-star-rating-component';


const EndGame = (props) => {
    const { started, ended, difficulty } = props;

    const rating = () => {
        const seconds = (ended - started) / 1000;
        const stepsMap = {
            easy: [10,20,30,40],
            medium: [20,30,40,50],
            hard: [30,40,50,60],

        }
        const steps = stepsMap[difficulty];
        for(let i=0; i<steps.length; i++) {
            if(seconds < steps[i]) {
                return 5-i;
            }
        }
        return 1;
      }

    return (
        <div className='EndGame'>
            <div className='filter'>
                <h1>You have won!</h1>
                <h3>Your time <Moment duration={started}></Moment></h3>
                <div className='rating'><StarRatingComponent
                    name=''
                    editing={false}
                    renderStarIcon={() => <span>★</span>}
                    starCount={5}
                    value={rating()}
                />
                </div>
                <button onClick={props.onPlayAgain}>PLAY AGAIN?</button> 
            </div>
        </div>
    )
}

export default EndGame;