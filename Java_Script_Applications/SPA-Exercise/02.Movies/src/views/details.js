import { deleteMovies } from '../dat/movies.js';
import { get, post } from '../dat/request.js';
import { html, render } from '../lit.js';
import { visit } from '../nav.js';
import { getUserData } from '../util.js';

export async function showDetails(movieId) {
    const movie = await getMovieById(movieId);
    displayDetails(movie);
}

async function getMovieById(id) {
    const url = `http://localhost:3030/data/movies/${id}`;
    return await get(url);
}

async function displayDetails(movie) {
    const userId = getUserData()?._id;
    let alredyLiked = false;
    //let numberLikes = -1;
    if (userId) {
        const userLikeUrl = `http://localhost:3030/data/likes?where=movieId%3D%22${movie._id}%22%20and%20_ownerId%3D%22${userId}%22`;
        const userLikes = await get(userLikeUrl);
        if (userLikes.length) { //user already liked
            alredyLiked = true;
        }
    }
    const likeUrl = `http://localhost:3030/data/likes?where=movieId%3D%22${movie._id}%22&distinct=_ownerId&count`;
    const numberLikes = await get(likeUrl);
    const isLogeIn = !!userId;
    const isOwner = movie._ownerId == getUserData()?._id;
    render(displayTemplate(movie, isOwner, isLogeIn, numberLikes, alredyLiked));
    debugger
}

function createControls(isOwner, alredyLiked, isLogeIn, movie) {
    if (isOwner) {
        return html`<a @click=${(event) => onDeleteMovie(event, movie._id)} class="btn btn-danger" href="#">Delete</a>
        <a @click=${(event) => onEditMovie(event, movie)} class="btn btn-warning" href="#">Edit</a>`;
    } else if (isLogeIn && alredyLiked == false) {
        return html`<a @click=${(event) => onLikeMovie(event, movie)} class="btn btn-primary like-btn" href="#">Like</a>`;
    }
}

const displayTemplate = (movie, isOwner, isLogeIn, numberLikes, alredyLiked) => html`
<section id="movie-example" class="view-section">
    <div class="container">
        <div class="row bg-light text-dark">
            <h1>Movie title: ${movie.title}</h1>
           
            <div class="col-md-8">
                <img class="img-thumbnail" src=${movie.img}
                alt="Movie" />
            </div>
            <div class="col-md-4 text-center">
                <h3 class="my-3">Movie Description</h3>
                <p>${movie.description}</p>
                ${createControls(isOwner, alredyLiked, isLogeIn, movie)}
                <span class="enrolled-span">Liked ${numberLikes}</span>
                <p>Like</p>
            </div>           
        </div>
    </div>
</section>
`;


function onDeleteMovie(event, movieId) {
    event.preventDefault();
    deleteMovies(movieId);
    visit('Movies');
}

function onEditMovie(event, movie) {
    event.preventDefault();
    visit('Edit', movie);
}

async function onLikeMovie(event, movie) {
    event.preventDefault();
    const url = 'http://localhost:3030/data/likes';
    const data = { movieId: movie._id };
    await post(url, data);

    const likeUrl = `http://localhost:3030/data/likes?where=movieId%3D%22${movie._id}%22&distinct=_ownerId&count`;
    const numberLikes = await get(likeUrl);
    render(displayTemplate(movie, false, false, numberLikes));
}