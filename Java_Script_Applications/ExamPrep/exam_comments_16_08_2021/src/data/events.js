import { del, get, post, put } from './request.js';

const endpoints = {
    dashboard: '/data/games?sortBy=_createdOn%20desc',
    newGames: '/data/games?sortBy=_createdOn%20desc&distinct=category',
    create: '/data/games',
    details: '/data/games/',
    createComment: '/data/comments',
    getComments: (gameId) => `/data/comments?where=gameId%3D%22${gameId}%22`,
};

export async function getAllComments(gameId) {
    return get(endpoints.getComments(gameId));
}

export async function postComment(gameId, comment) {
    post(endpoints.createComment, { gameId, comment });
}

export async function getAllItems() {
    return get(endpoints.dashboard);
}

export async function getNewItems() {
    return get(endpoints.newGames);
}

export async function getItemsById(id) {
    return get(endpoints.details + id);
}

export async function createItem(title, category, maxLevel, imageUrl, summary) {
    return post(endpoints.create, { title, category, maxLevel, imageUrl, summary });
}

export async function editItem(id, title, category, maxLevel, imageUrl, summary) {
    return put(endpoints.details + id, { title, category, maxLevel, imageUrl, summary });
}

export async function deleteItem(id) {
    return del(endpoints.details + id);
}