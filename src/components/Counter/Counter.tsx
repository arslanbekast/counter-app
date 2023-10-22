import React, {FC, useState} from 'react';
import './Counter.css'
import {Scoreboard} from "../Scoreboard/Scoreboard";
import {Buttons} from "../Buttons/Buttons";

type CounterPropsType = {
    count: number
    minCount: number
    maxCount: number
    incCount: () => void
    resetCount: () => void
}

export const Counter: FC<CounterPropsType> = ({count, minCount, maxCount, incCount, resetCount}) => {

    return (
        <div className='counter'>
            <Scoreboard count={count} maxCount={maxCount}/>
            <Buttons count={count}
                     minCount={minCount}
                     maxCount={maxCount}
                     incCount={incCount}
                     resetCount={resetCount}/>
        </div>

    );
};