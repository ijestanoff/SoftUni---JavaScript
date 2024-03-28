import { get, post, put } from './request.js';

const endpoints = {
    dashboard: '/jsonstore/collections/myboard/posts',
    create: '/jsonstore/collections/myboard/posts/',
    details: '/jsonstore/collections/myboard/comments/',
    searchApi: (search) => `/data/fruits?where=name%20LIKE%20%22${search}%22`
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

export async function createItem(topicName, username, postText) {
    return post(endpoints.create, { title: topicName, username, content: postText });
}

export async function editItem(id,name, imageUrl, description, nutrition) {
    return put(endpoints.details + id, { name, imageUrl, description, nutrition });
}
