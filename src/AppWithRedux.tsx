import React, {useEffect, useState} from 'react';
import './App.css';
import {Counter} from "./components/Counter/Counter";
import {Settings} from "./components/Settings/Settings";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "./state/store";
import {changeCountAC, changeEditingAC, changeMinCountAC} from "./state/reducer";

function AppWithRedux() {

    const minCount = useSelector<AppRootStateType, number>(state => state.minCount)
    const maxCount = useSelector<AppRootStateType, number>(state => state.maxCount)
    const count = useSelector<AppRootStateType, number>(state => state.count)
    const editing = useSelector<AppRootStateType, boolean>(state => state.editing)


    const dispatch = useDispatch();

    const incCount = () => count < maxCount && dispatch(changeCountAC(count + 1))
    const resetCount = () => dispatch(changeCountAC(minCount))

    const setToLocalStorage = () => {
        localStorage.setItem("minCount", JSON.stringify(minCount))
        localStorage.setItem("maxCount", JSON.stringify(maxCount))
    }

    const saveSettings = () => {
        setToLocalStorage();
        dispatch(changeEditingAC(false))
        dispatch(changeCountAC(minCount));
    }

    const error = minCount < 0 || maxCount < 0 || minCount >= maxCount
    console.log(error)
    return (
        <div className="App">
            <Settings minCount={minCount}
                      maxCount={maxCount}
                      error={error}
                      editing={editing}
                      saveSettings={saveSettings}/>

            <Counter count={count}
                     minCount={minCount}
                     maxCount={maxCount}
                     editing={editing}
                     error={error}
                     incCount={incCount}
                     resetCount={resetCount}/>
        </div>
    );
}

export default AppWithRedux;
