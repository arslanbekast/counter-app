import React, {FC} from 'react';
import './Soreboard.css'

type ScoreboardPropsType = {
    count: number
    maxCount: number
    editing: boolean
    error: boolean
}

export const Scoreboard: FC<ScoreboardPropsType> = ({count, maxCount, editing, error}) => {

    const editingMessage = <span style={{fontSize: "14px"}}>Enter values and press 'Set'</span>;
    const editingErrorMessage = <span style={{fontSize: "14px", color: "red"}}>Incorrect value</span>;

    return (
        <span className={count < maxCount ? 'scoreboard' : 'scoreboard limitCount'}>
            {error
                ? editingErrorMessage
                : editing
                ? editingMessage
                : count}
        </span>
    );
};