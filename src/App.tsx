import React, {useState} from 'react';
import './App.css';
import {Counter} from "./components/Counter/Counter";
import {Settings} from "./components/Settings/Settings";

function App() {

    const minCount: number = 0;
    const maxCount: number = 5;

    const [count, setCount] = useState<number>(0)

    const incCount = () => count < maxCount && setCount(prevCount => prevCount + 1)
    const resetCount = () => setCount(minCount)

    return (
        <div className="App">
            <Settings/>
            <Counter count={count}
                     minCount={minCount}
                     maxCount={maxCount}
                     incCount={incCount}
                     resetCount={resetCount}/>
        </div>
    );
}

export default App;
