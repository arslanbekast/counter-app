import React, {useState} from 'react';
import './Counter.css'
import {Scoreboard} from "../Scoreboard/Scoreboard";
import {Buttons} from "../Buttons/Buttons";
import {Button} from "../Button/Button";

export const Counter = () => {

    const minCount: number = 0;
    const maxCount: number = 5;

    const [count, setCount] = useState<number>(0)

    const incCount = () => count < maxCount && setCount(prevCount => prevCount + 1)
    const resetCount = () => setCount(minCount)

    return (
        <div className="counterBox">

            <div className="settings">
                <div className='valuesBox'>
                    <div className="valueBox">
                        <span>Max value:</span>
                        <input type="number" />
                    </div>
                    <div className="valueBox">
                        <span>Min value:</span>
                        <input type="number" />
                    </div>
                </div>
                <div className="btn-group">
                    <Button title='Set' callback={()=>{}}/>
                </div>
            </div>


            <div className='counter'>
                <Scoreboard count={count} maxCount={maxCount}/>
                <Buttons count={count}
                         minCount={minCount}
                         maxCount={maxCount}
                         incCount={incCount}
                         resetCount={resetCount}/>
            </div>
        </div>

    );
};