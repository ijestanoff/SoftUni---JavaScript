import { getCharactersById, getLikes, getUserLikes, likePost } from '../data/events.js';
import { html, page, render } from '../lib.js';
import { getUserData } from '../util.js';

export async function showDetailsView(ctx) {
    const id = ctx.params.id;
    const character = await getCharactersById(id);

    const user = getUserData();
    const hasUser = !!user;
    const isOwner = hasUser && user._id == character._ownerId;
    const likes = await getLikes(id);
    let alreadyLiked = false;
    if (hasUser) {
        const userLikes = await getUserLikes(id, user._id);
        if (userLikes == 1) {
            alreadyLiked = true;
        }
    }
    render(detailsTemplate(character, hasUser, isOwner, likes, alreadyLiked));
}

const detailsTemplate = (char, hasUser, isOwner, likes, alreadyLiked) => html`
<section id="details">
    <div id="details-wrapper">
        <img id="details-img" src=${char.imageUrl} alt="example1" />
        <div>
            <p id="details-category">${char.category}</p>
            <div id="info-wrapper">
                <div id="details-description">
                    <p id="description">${char.description}</p>
                    <p id ="more-info">${char.moreInfo}</p>
                </div>
            </div>
            <h3>Is This Useful:<span id="likes">${likes}</span></h3>

            <div id="action-buttons">
                ${isOwner ? html`
                    <a href="/edit/${char._id}" id="edit-btn">Edit</a>
                    <a href="/delete/${char._id}" id="delete-btn">Delete</a>
                `: hasUser && !alreadyLiked ? html`<a @click=${(e) => onLike(e, char._id)} href="" id="like-btn">Like</a>` : null}
            </div>
        </div>
    </div>
</section>`;

async function onLike(e, id) {
    await likePost(id);
    page.redirect(`/catalog/${id}`);
}