import { useEffect, useState } from 'react';
import gamesAPI from '../api/games-api';

export function useGetAllGames() {
    const [games, setGames] = useState([]);

    useEffect(() => {
        gamesAPI.getAll()
            .then(result => setGames(result));
    }, []);

    return [games, setGames];
}

export function useGetOneGames(gameId) {
    const [game, setGame] = useState({
        title: '',
        category: '',
        maxLevel: '',
        imageUrl: '',
        summary: '',
    });

    useEffect(() => {
        gamesAPI.getOne(gameId)
            .then(result => setGame(result));
    }, [gameId]);

    // useEffect(() => {
    //     (async () => {
    //         const result = await gamesAPI.getOne(gameId);

    //         setGame(result);
    //     })();
    // }, []);

    return [
        game,
        setGame,
    ];
}

export function useCreateGame () {
    const gameCreateHandler = (gameData) => gamesAPI.create(gameData);

    return gameCreateHandler;
}