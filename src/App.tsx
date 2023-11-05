import React, {useEffect, useState} from 'react';
import './App.css';
import {Counter} from "./components/Counter/Counter";
import {Settings} from "./components/Settings/Settings";

function App() {
    const minLocalStorageValue = localStorage.getItem('minCount')
    const maxLocalStorageValue = localStorage.getItem('maxCount')
    const [minCount, setMinCount] = useState<number>(minLocalStorageValue ? +minLocalStorageValue : 0 )
    const [maxCount, setMaxCount] = useState<number>(maxLocalStorageValue ? +maxLocalStorageValue : 5)
    const [count, setCount] = useState<number>(minCount)

    const [editing, setEditing] = useState<boolean>(false)

  /*  useEffect(() => {

        let newMinCount = localStorage.getItem('minCount')

        if (newMinCount) {
            setMinCount(+newMinCount)
            setCount(+newMinCount)
        }

        let newMaxCount = localStorage.getItem('maxCount')
        if (newMaxCount) {
            setMaxCount(+newMaxCount)
        }

    }, [])*/

    const incCount = () => count < maxCount && setCount(prevCount => prevCount + 1)
    const resetCount = () => setCount(minCount)

    const setToLocalStorage = () => {
        localStorage.setItem("minCount", JSON.stringify(minCount))
        localStorage.setItem("maxCount", JSON.stringify(maxCount))
    }

    const saveSettings = () => {
        setToLocalStorage();
        setEditing(false);
        setCount(minCount);
    }

    const error = minCount < 0 || maxCount < 0 || minCount >= maxCount

    return (
        <div className="App">
            <Settings minCount={minCount}
                      maxCount={maxCount}
                      error={error}
                      editing={editing}
                      setEditing={setEditing}
                      setMinCount={setMinCount}
                      setMaxCount={setMaxCount}
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

export default App;
