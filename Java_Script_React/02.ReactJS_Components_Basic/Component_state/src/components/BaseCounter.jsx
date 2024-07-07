import { useState } from 'react';

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

    return (
        <>
            <h2>Counter</h2>

            <p>{count}</p>

            <button onClick={incrementButtonClickHAndler}>+</button>
            <button onClick={resetButtonClickHandler}>0</button>
            <button onClick={decrementButtonClickHandler}>-</button>
        </>
    );
}