import React, {FC} from 'react';
import './ValueBox.css'
import {Input} from "../../Input/Input";

type ValueBoxPropsType = {
    title: string
    defaultValue: number
    error: boolean
    setEditing: (editing: boolean) => void
    callback: (number: number) => void
}

export const ValueBox: FC<ValueBoxPropsType> = ({title, defaultValue, error, setEditing, callback}) => {
    console.log('Default value: '+defaultValue)
    return (
        <div className="valueBox">
            <span>{title}</span>
            <Input defaultValue={defaultValue} error={error} setEditing={setEditing} callback={callback}/>
        </div>
    );
};