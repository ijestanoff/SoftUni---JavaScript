import { del, get, post, put } from './request.js';

const endpoints = {
    dashboard: '/data/cars?sortBy=_createdOn%20desc',
    create: '/data/cars',
    details: '/data/cars/',
    myListing: (userId) =>`/data/cars?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`,
    searchApi: (query) => `/data/cars?where=year%3D${query}`
};

//brand, model, description, year, imageUrl, price

export async function getMyListings(userId) {
    return get(endpoints.myListing(userId));
}

export async function getAllItems() {
    return get(endpoints.dashboard);
}

export async function myListing(userId) {
    return get (endpoints.myListing(userId));
}

export async function getItemById(id) {
    return get(endpoints.details + id);
}

export async function searchItems(search){
    return get(endpoints.searchApi(search));
}

export async function createItem(brand, model, description, year, imageUrl, price) {
    return post(endpoints.create, { brand, model, description, year, imageUrl, price });
}

export async function editItem(id,brand, model, description, year, imageUrl, price) {
    return put(endpoints.details + id, { brand, model, description, year, imageUrl, price });
}

export async function deleteItem(id) {
    return del(endpoints.details + id);
}