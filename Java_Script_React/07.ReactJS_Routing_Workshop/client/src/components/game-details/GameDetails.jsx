import { useEffect, useState } from 'react';
import gamesAPI from '../../api/games-api';
import { useParams } from 'react-router-dom';
import commentsApi from '../../api/comments-api';

export default function GameDetails() {
    const [game, setGame] = useState({});
    const [username, setUserName] = useState('');
    const [comment, setComment] = useState('');
    const { gameId } = useParams();

    useEffect(() => {
        (async () => {
            console.log('middle');
            const result = await gamesAPI.getOne(gameId);
            console.log(result);

            setGame(result);
        })();
    }, []);

    const commentSubmitHandler = async (e) => {
        e.preventDefault();

        const newComment = await commentsApi.create(gameId, username, comment);

        // TODO: this should be refactored
        setGame(prevState => ({
            ...prevState,
            comments: {
                ...prevState.comments,
                [newComment._id]: newComment,
            }
        }));

        setUserName('');
        setComment('');
    };

    return (
        <section id="game-details">
            <h1>Game Details</h1>
            <div className="info-section">

                <div className="game-header">
                    <img className="game-img" src={game.imageUrl} />
                    <h1>{game.title}</h1>
                    <span className="levels">MaxLevel: {game.maxLevel}</span>
                    <p className="type">{game.category}</p>
                </div>

                <p className="text">{game.summary}</p>

                {/* <!-- Bonus ( for Guests and Users ) --> */}
                <div className="details-comments">
                    <h2>Comments:</h2>
                    <ul>
                        {Object.keys(game.comments || {}).length > 0
                            ? Object.values(game.comments).map(comment => (
                                <li className="comment" key={comment._id}>
                                    <p>{comment.username}: {comment.text}</p>
                                </li>
                            ))
                            : <p className="no-comment">No comments.</p>
                        }
                    </ul>
                </div>

                {/* <!-- Edit/Delete buttons ( Only for creator of this game )  --> */}
                {/* <div className="buttons">
                    <a href="#" className="button">Edit</a>
                    <a href="#" className="button">Delete</a>
                </div> */}
            </div>

            {/* <!-- Bonus --> */}
            {/* <!-- Add Comment ( Only for logged-in users, which is not creators of the current game ) --> */}
            <article className="create-comment">
                <label>Add new comment:</label>
                <form className="form" onSubmit={commentSubmitHandler}>
                    <input
                        type="text"
                        placeholder="Pesho"
                        name="username"
                        onChange={(e) => setUserName(e.target.value)}
                        value={username}
                    />
                    <textarea
                        name="comment"
                        placeholder="Comment......"
                        onChange={(e) => setComment(e.target.value)}
                        value={comment}
                    ></textarea>
                    <input className="btn submit" type="submit" value="Add Comment" />
                </form>
            </article>
        </section>
    );
}