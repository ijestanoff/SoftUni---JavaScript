import { useState } from 'react';
import './Counter.css';
import KillCounter from './KillCounter';

export default function Counter() {
    const [count, setCount] = useState(0);

    const incrementButtonClickHAndler = () => {
        setCount(oldState => oldState + 1);
        console.log(count);
    };

    const resetButtonClickHandler = () => {
        setCount(0);
    };

    const decrementButtonClickHandler = () => {
        setCount(oldState => oldState - 1);
    };

    let countText = `Positive ${count}`;
    //let color = 'green';
    //let counterClassName = 'positive-text';
    if (count < 0) {
        countText = `Negative ${count}`;
        //color = 'red';
        //counterClassName = 'negative-text';
    }

    return (
        <>
            <h2>Counter</h2>

            <KillCounter count = {count}/>

            <p  className={count < 0 ? 'negative-text' : 'positive-text'}>{countText}</p>

            <button onClick={decrementButtonClickHandler}>-</button>
            <button onClick={resetButtonClickHandler}>0</button>
            {count < 10 && <button onClick={incrementButtonClickHAndler}>+</button>}
        </>
    );
}