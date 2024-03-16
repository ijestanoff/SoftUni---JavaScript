import { get } from '../data/request.js';
import { html, render } from '../lit.js';

export async function showDetails (movieId) {
    displayDetails({
        title: '',
        img: '',
        description: ''
    });

    const movie = await getMovieById(movieId);
    displayDetails(movie);
}

async function getMovieById(id) {
    const url = `http://localhost:3030/data/movies/${id}`;
    return get(url);
}

const displayTemplate = (movie) => html`
<h1>${movie.title}</h1>
<img src=${movie.img}>
<p>${movie.description}</p>`;

function displayDetails(movie) {
    render(displayTemplate(movie));
}