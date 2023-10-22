import React, {FC} from 'react';
import  './Buttons.css'
import {Button} from "../Button/Button";

type ButtonsPropsType = {
    count: number
    minCount: number
    maxCount: number
    incCount: () => void
    resetCount: () => void
}

export const Buttons: FC<ButtonsPropsType> = ({count, minCount, maxCount, incCount, resetCount}) => {

    return (
        <div className="btn-group">
            <Button title='Inc' disabled={count===maxCount} callback={incCount}/>
            <Button title='Reset' disabled={count===minCount} callback={resetCount}/>
        </div>
    );
};