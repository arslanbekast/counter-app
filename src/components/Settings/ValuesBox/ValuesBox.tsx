import React, {FC} from 'react';
import {ValueBox} from "../ValueBox/ValueBox";
import './ValuesBox.css'
import {useDispatch} from "react-redux";
import {changeEditingAC, changeMaxCountAC, changeMinCountAC} from "../../../state/reducer";

type ValuesBoxPropsType = {
    minCount: number
    maxCount: number
    // setMinCount: (minCount: number) => void
    // setMaxCount: (maxCount: number) => void
    // setEditing: (editing: boolean) => void
}

export const ValuesBox: FC<ValuesBoxPropsType> = ({minCount, maxCount}) => {

    const dispatch = useDispatch()

    const changeMinCount = (minCount: number) => {
        dispatch(changeMinCountAC(minCount))
    }

    const changeMaxCount = (maxCount: number) => {
        dispatch(changeMaxCountAC(maxCount))
    }

    const changeEditing = (editing: boolean) => {
        dispatch(changeEditingAC(editing))
    }

    return (
        <div className='valuesBox'>
            <ValueBox title="Max value:"
                      defaultValue={maxCount}
                      error={maxCount < 0 || minCount >= maxCount}
                      setEditing={changeEditing}
                      callback={changeMaxCount}/>

            <ValueBox title="Start value:"
                      defaultValue={minCount}
                      error={minCount < 0 || minCount >= maxCount}
                      setEditing={changeEditing}
                      callback={changeMinCount}/>
        </div>
    );
};