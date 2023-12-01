import React, {FC, useState} from 'react';
import './Counter.css'
import {Scoreboard} from "./Scoreboard/Scoreboard";
import {Buttons} from "./Buttons/Buttons";

type CounterPropsType = {
    count: number
    minCount: number
    maxCount: number
    editing: boolean
    error: boolean
    incCount: () => void
    resetCount: () => void
}

export const Counter: FC<CounterPropsType> = ({count, minCount, maxCount, editing, error, incCount, resetCount}) => {

    return (
        <div className='counter'>
            <Scoreboard count={count} maxCount={maxCount} editing={editing} error={error}/>
            <Buttons count={count}
                     minCount={minCount}
                     maxCount={maxCount}
                     editing={editing}
                     incCount={incCount}
                     resetCount={resetCount}/>
        </div>

    );
};