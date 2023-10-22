import React, {ChangeEvent, useState} from 'react';

export const Input = () => {

    const [value, setValue] = useState<string>('')

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }

    return (
        <input type="number" value={value} onChange={onChangeHandler} />
    );
};