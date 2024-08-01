import requester from './requester';

const BASE_URL = 'http://localhost:3030/data/comments';

const create = async (gameId, text) => await requester.post(BASE_URL, {gameId, text});

const getAll = async (gameId) => {
    const params = new URLSearchParams({
        where: `gameId="${gameId}"`,
        load: 'author=_ownerId:users',
    });
    const result = await requester.get(`${BASE_URL}?${params.toString()}`);

    console.log(result);

    return result;
};

const commentsAPI = {
    create,
    getAll,
};

export default commentsAPI;