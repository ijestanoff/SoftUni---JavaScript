import { useEffect, useRef, useState } from 'react';

export default function RefDemo() {
    console.log('Render Refdemo');
    const [counter, setCounter] = useState(0);
    const initialRender = useRef(true);

    useEffect(() => {
        if (initialRender.current) {
            console.log('Initial render');
            initialRender.current = false;
        } else {
            console.log('Update on');
        }
    }, [counter]);
    return (
        <>
            <h1>Counter</h1>
            <p>{counter}</p>
            <button onClick={() => setCounter(c => c + 1)}>+</button>
            <button onClick={() => initialRender.current = true}>Reset</button>
        </>
    );
}