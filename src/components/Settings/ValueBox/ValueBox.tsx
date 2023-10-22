import React, {FC} from 'react';
import './ValueBox.css'
import {Input} from "../../Input/Input";

type ValueBoxPropsType = {
    title: string
}

export const ValueBox: FC<ValueBoxPropsType> = ({title}) => {
    return (
        <div className="valueBox">
            <span>{title}</span>
            <Input />
        </div>
    );
};