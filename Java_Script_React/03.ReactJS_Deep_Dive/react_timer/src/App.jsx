import { useState } from 'react';
import './App.css';
import FancyTimer from './components/FancyTimer';
import Timer from './components/Timer';

function App() {
    const [showTimer, setShowTimer] = useState(true);
    return (
        <>
            <Timer />

            {showTimer && (
                <>
                    <FancyTimer />
                    <button onClick={() => setShowTimer(false)}>TurnOff</button>
                </>
            )}
        </>
    );
}

export default App;