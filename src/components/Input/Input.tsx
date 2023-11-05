import React, {ChangeEvent, FC, useEffect, useState} from 'react';

type InputPropsType = {
    error: boolean
    defaultValue: number
    setEditing: (editing: boolean) => void
    callback: (number: number) => void
}

export const Input: FC<InputPropsType> = ({error, defaultValue, setEditing, callback}) => {

    // const [value, setValue] = useState<string>(String(defaultValue))

   /* useEffect(() => {
        callback(+value)
    }, [value])*/

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
       // setValue(e.currentTarget.value)
        callback(+e.currentTarget.value)
        setEditing(true)
    }

    const errorInputStyle = {
        border: "2px solid red",
        backgroundColor: "#ff8a8a"
    }

    return (
        <input type="number" style={error ? errorInputStyle : {}} value={defaultValue} onChange={onChangeHandler} />
    );
};