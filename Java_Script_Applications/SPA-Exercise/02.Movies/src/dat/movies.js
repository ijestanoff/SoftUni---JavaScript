import { del, get } from './request.js';

const host = 'http://localhost:3030/data';

export async function getMovies() {
    return get(host + '/movies');
}

export async function deleteMovies(movieId) {
    del(host + '/movies/' + movieId);
}