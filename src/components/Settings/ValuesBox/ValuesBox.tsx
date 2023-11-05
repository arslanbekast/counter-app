import React, {FC} from 'react';
import {ValueBox} from "../ValueBox/ValueBox";
import './ValuesBox.css'

type ValuesBoxPropsType = {
    minCount: number
    maxCount: number
    setMinCount: (minCount: number) => void
    setMaxCount: (maxCount: number) => void
    setEditing: (editing: boolean) => void
}

export const ValuesBox: FC<ValuesBoxPropsType> = ({minCount, maxCount, setMinCount, setMaxCount, setEditing}) => {
    console.log('Min count: '+minCount)
    console.log('Max count: '+maxCount)
    return (
        <div className='valuesBox'>
            <ValueBox title="Max value:"
                      defaultValue={maxCount}
                      error={maxCount < 0 || minCount >= maxCount}
                      setEditing={setEditing}
                      callback={setMaxCount}/>

            <ValueBox title="Start value:"
                      defaultValue={minCount}
                      error={minCount < 0 || minCount >= maxCount}
                      setEditing={setEditing}
                      callback={setMinCount}/>
        </div>
    );
};