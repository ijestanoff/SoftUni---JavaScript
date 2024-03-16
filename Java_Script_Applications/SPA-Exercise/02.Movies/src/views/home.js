import { html, render } from '../lit.js';
import { visit } from '../nav.js';
import { getMovies } from '../dat/movies.js';

const homeTemplate = (movies, num) => html`
<section id="home-page" class="view-section">
    <div class="jumbotron jumbotron-fluid text-light" style="background-color: #343a40">
        <img src="https://slicksmovieblog.files.wordpress.com/2014/08/cropped-movie-banner-e1408372575210.jpg"
            class="img-fluid" alt="Responsive image" style="width: 150%; height: 200px" />
        <h1 class="display-4">Movies</h1>
        <p class="lead">
            Unlimited movies, TV shows, and more. Watch anywhere. Cancel
            anytime.
        </p>
    </div>

    <h1 class="text-center">Movies</h1>

    <section id="add-movie-button" class="user">
        <a @click=${(event) => onAddMovie(event)} href="#" class="btn btn-warning">Add Movie</a>
    </section>

    <section id="movie">
        <div class="mt-3">
            <div class="row d-flex d-wrap">
                <ul id="movies-list" class="card-deck d-flex justify-content-center">
                    <!-- list item example -->
                    ${movies.map(moviePreview)}
                </ul>
            </div>
        </div>

        

    </section>
</section>
`;

{/* <span class="enrolled-span">Liked ${num}</span>
        <div class="container">
            <a @click=${() => onLike(movies)} class="btn btn-primary like-btn" href="#">Like</a>
        </div> */}

//<span class="enrolled-span">Liked 6</span>
//<a class="btn btn-primary like-btn" href="#">Like</a>
//<p>Like</p>
//

const moviePreview = movie => html`
<li class="card mb-4">
    <img class="card-img-top" src=${movie.img}
        alt="Card image cap" width="400" />
    <div class="card-body">
        <h4 class="card-title">${movie.title}</h4>
        <a href="/details/${movie._id}">
        </a>
    </div>
    <div class="card-footer">
        <button @click=${(event) => onClick(movie._id, event)} type="button" class="btn btn-info">Details</button>
    </div>
</li>
`;

function onAddMovie(event) {
    event.preventDefault();
    visit('Create');
}

function onClick(id, event) {
    event.preventDefault();
    visit('Details', id);
}

export async function showHome() {
    const movies = await getMovies();
    render(homeTemplate(movies,5));
}

function onLike(movies) {
    render(homeTemplate(movies,6));
}