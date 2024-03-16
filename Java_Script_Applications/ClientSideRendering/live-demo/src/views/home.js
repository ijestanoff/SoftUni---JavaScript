import { getMovies } from '../data/movies.js';
import { html, render } from '../lit.js';
import { guestUser, visit } from '../nav.js';


const homeTemplate = (movies) => html`
<h1>Movies home</h1>
<p>Welcome to Movies!</p>
<ul>
    ${movies.map(moviePreview)}
</ul>
`;

const moviePreview = movie => html`
<li>
    <a @click=${(event) => onClick(movie._id, event)} href="/details/${movie._id}">${movie.title}</a>
</li>
`;

function onClick(id, event) {
    event.preventDefault();
    visit('details', id);
}

export async function showHome() {
    const movies = await getMovies();
    render(homeTemplate(movies));
    guestUser();
}