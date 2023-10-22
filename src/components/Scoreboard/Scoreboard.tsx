import React, {FC} from 'react';
import './Soreboard.css'

type ScoreboardPropsType = {
    count: number
    maxCount: number
}

export const Scoreboard: FC<ScoreboardPropsType> = ({count, maxCount}) => {
    return (
        <span className={count < maxCount ? 'scoreboard' : 'scoreboard limitCount'}>
            {count}
        </span>
    );
};