import { del, get, post, put } from './request.js';

const endpoints = {
    dashboard: '/data/movies',
    create: '/data/movies',
    details: '/data/movies/',
    likeItem: '/data/likes',
    getLikes: (movieId) => `/data/likes?where=movieId%3D%22${movieId}%22&distinct=_ownerId&count `,
    getUserLikes: (movieId, userId) => `/data/likes?where=movieId%3D%22${movieId}%22%20and%20_ownerId%3D%22${userId}%22`
};

export async function getAllItems() {
    return get(endpoints.dashboard);
}

export async function getItemsById(id) {
    return get(endpoints.details + id);
}

export async function createItem(title, description, img) {
    return post(endpoints.create, { title, description, img });
}

export async function editItem(id, title, description, img) {
    return put(endpoints.details + id, { title, description, img });
}

export async function deleteItem(id) {
    return del(endpoints.details + id);
}

export async function likeItem(movieId) {
    return post(endpoints.likeItem, { movieId }); 
}

export async function getLikes(itemId) {
    return get(endpoints.getLikes(itemId));
}

export async function getUserLikes(itemId, userId) {
    return get(endpoints.getUserLikes(itemId, userId));
}
