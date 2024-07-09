import './App.css';
import { useState } from 'react';

function App() {
    const [movies, setMovies] = useState([
        'The Matrix',
        'Man of Steel',
        'The Case for Crist',
        'Lord of the Rings',
    ]);
    const [cnt, setCnt] = useState(0);

    const buttonClickHandler = () => {
        setMovies((oldMovies) => {
            const newMovies = [...oldMovies];
            newMovies[3] = 'Harry Potter';
            newMovies.push('Avengers');
            return newMovies;
        });
    };

    return (
        <>
            <h1>Movies</h1>

            {/* <ul>
                <li>{movies[0]}</li>
                <li>{movies[1]}</li>
                <li>{movies[2]}</li>
            </ul> */}

            <ul>
                {movies.map(movie => <li key={movie}>{movie}</li>)}
            </ul>

            <button onClick={buttonClickHandler}>Change</button>

        </>
    );
}

export default App;