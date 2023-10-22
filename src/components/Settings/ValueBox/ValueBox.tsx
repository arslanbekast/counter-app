import React, {FC} from 'react';
import './ValueBox.css'

type ValueBoxPropsType = {
    title: string
}

export const ValueBox: FC<ValueBoxPropsType> = ({title}) => {
    return (
        <div className="valueBox">
            <span>{title}</span>
            <input type="number" />
        </div>
    );
};