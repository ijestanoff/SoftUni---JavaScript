import { getAllComments, getItemsById, postComment } from '../data/events.js';
import { html, page, render } from '../lib.js';
import { createSubmitHandler, getUserData } from '../util.js';

export async function showDetailsView(ctx) {
    const id = ctx.params.id;
    const user = getUserData();
    const hasUser = !!user;


    const item = await getItemsById(id);
    const comments = await getAllComments(id);

    const isOwner = hasUser && user._id == item._ownerId;
    render(detailsTemplate(item, hasUser, isOwner, comments));
}

const detailsTemplate = (item, hasUser, isOwner, comments) => html`
<section id="game-details">
    <h1>Game Details</h1>
    <div class="info-section">
        <div class="game-header">
            <img class="game-img" src="images/MineCraft.png" />
            <h1>${item.title}</h1>
            <span class="levels">MaxLevel: ${item.maxLevel}</span>
            <p class="type">${item.category}</p>
        </div>

        <p class="text">${item.summary}</p>

        <div class="details-comments">
            <h2>Comments:</h2>
            <ul>
                ${comments.length ? comments.map(commentTemp) : null}                
            </ul>
            ${comments.length ? null : html`<p class="no-comment">No comments.</p>`}
        </div>

        ${isOwner ? html`
        <div class="buttons">
            <a href="/edit/${item._id}" class="button">Edit</a>
            <a href="/delete/${item._id}" class="button">Delete</a>
        </div>
        `: null}

    </div>

    ${hasUser && !isOwner ? html`
    <article class="create-comment">
        <label>Add new comment:</label>
        <form @submit=${createSubmitHandler(onComment)} class="form" data-id=${item._id}>
            <textarea name="comment" placeholder="Comment......" id="textClear"></textarea>
            <input class="btn submit" type="submit" value="Add Comment">
        </form>
    </article>`: null}

</section>`;

const commentTemp = (comment) => html`
<li class="comment">
    <p>Content: ${comment.comment}</p>
</li>`;

async function onComment({ comment }, event) {
    const gameId = event.dataset.id;
    await postComment(gameId, comment);
    document.querySelector('#textClear').value = '';
    page.redirect(`/catalog/${gameId}`);
}