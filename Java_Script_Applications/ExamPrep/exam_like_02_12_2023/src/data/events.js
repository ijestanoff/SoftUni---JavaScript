import { del, get, post, put } from './request.js';

const endpoints = {
    dashboard: '/data/characters?sortBy=_createdOn%20desc',
    create: '/data/characters',
    details: '/data/characters/',
    likePost: '/data/useful',
    getLikes: (characterId) => `/data/useful?where=characterId%3D%22${characterId}%22&distinct=_ownerId&count`,
    getUserLikes: (characterId, userId) => `/data/useful?where=characterId%3D%22${characterId}%22%20and%20_ownerId%3D%22${userId}%22&count`
};

export async function getAllCharacters() {
    return get(endpoints.dashboard);
}

export async function getCharactersById(id) {
    return get(endpoints.details + id);
}

export async function createCharacter(category, imageUrl, description, moreInfo) {
    return post(endpoints.create, { category, imageUrl, description, moreInfo });
}

export async function editCharacter(id, category, imageUrl, description, moreInfo) {
    return put(endpoints.details + id, { category, imageUrl, description, moreInfo });
}

export async function deleteCharacter(id) {
    return del(endpoints.details + id);
}

export async function likePost(characterId) {
    return post(endpoints.likePost, { characterId });
}

export async function getLikes(characterId) {
    return get(endpoints.getLikes(characterId));
}

export async function getUserLikes(characterId, userId) {
    return get(endpoints.getUserLikes(characterId, userId));
}
