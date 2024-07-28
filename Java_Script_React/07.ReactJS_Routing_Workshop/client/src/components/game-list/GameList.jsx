import { useEffect, useState } from 'react';

import gamesAPI from '../../api/games-api';

import { useGetAllGames } from '../../hooks/useGames';
import GameListItem from './game-list-item/GameListItem';

export default function GameList() {
    const [games] = useGetAllGames();

    return (
        <section id="catalog-page">
            <h1>All Games</h1>

            {games.length > 0
                ? games.map(game => <GameListItem {...game} key={game._id} />)
                : <h3 className="no-articles">No games yet</h3>
            }
        </section>
    );
}