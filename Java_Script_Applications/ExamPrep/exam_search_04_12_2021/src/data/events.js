import { del, get, post, put } from './request.js';

const endpoints = {
    dashboard: '/data/albums?sortBy=_createdOn%20desc&distinct=name',
    create: '/data/albums',
    details: '/data/albums/',
    searchApi: (query) => `/data/albums?where=name%20LIKE%20%22${query}%22`
};

export async function getAllItems() {
    return get(endpoints.dashboard);
}

export async function getItemById(id) {
    return get(endpoints.details + id);
}

export async function searchItems(search){
    return get(endpoints.searchApi(search));
}

export async function createItem(name, imgUrl, price, releaseDate, artist, genre, description) {
    return post(endpoints.create, { name, imgUrl, price, releaseDate, artist, genre, description });
}

export async function editItem(id,name, imgUrl, price, releaseDate, artist, genre, description) {
    return put(endpoints.details + id, { name, imgUrl, price, releaseDate, artist, genre, description });
}

export async function deleteItem(id) {
    return del(endpoints.details + id);
}