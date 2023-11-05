import React, {FC} from 'react';
import  './Buttons.css'
import {Button} from "../Button/Button";

type ButtonsPropsType = {
    count: number
    minCount: number
    maxCount: number
    editing: boolean
    incCount: () => void
    resetCount: () => void
}

export const Buttons: FC<ButtonsPropsType> = ({count, minCount, maxCount, editing, incCount, resetCount}) => {

    return (
        <div className="btn-group">
            <Button title='Inc' disabled={editing || count===maxCount} callback={incCount}/>
            <Button title='Reset' disabled={editing || count===minCount} callback={resetCount}/>
        </div>
    );
};