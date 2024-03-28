import { getItemsById, getLikes, getUserLikes, likeItem } from '../data/events.js';
import { html, page, render } from '../lib.js';
import { getUserData } from '../util.js';

export async function showDetailsView(ctx) {
    const id = ctx.params.id;
    const item = await getItemsById(id);

    const user = getUserData();
    const hasUser = !!user;
    const isOwner = hasUser && user._id == item._ownerId;
    const likes = await getLikes(id);
    let alreadyLiked = false;
    if (hasUser) {
        const userLikes = await getUserLikes(id, user._id);
        if (userLikes == 1) {
            alreadyLiked = true;
        }
    }
    render(detailsTemplate(item, hasUser, isOwner, likes, alreadyLiked));
}

const detailsTemplate = (item, hasUser, isOwner, likes, alreadyLiked) => html`
<section id="details">
    <div id="details-wrapper">
        <img
            id="details-img"
            src=${item.imageUrl}
            alt="example1"
        />
        <p id="details-title">${item.name}</p>
        <p id="details-category">
            Category: <span id="categories">${item.category}</span>
        </p>
        <p id="details-price">
            Price: <span id="price-number">${item.price}</span>$
        </p>
        <div id="info-wrapper">
            <div id="details-description">
            <h4>Bought: <span id="buys">${likes}</span> times.</h4>
            <span>${item.description}</span>
            </div>
        </div>

        <!--Edit and Delete are only for creator-->
        <div id="action-buttons">
        ${isOwner ? html`
            <a href="/edit/${item._id}" id="edit-btn">Edit</a>
            <a href="/delete/${item._id}" id="delete-btn">Delete</a>
        `: hasUser && !alreadyLiked ? html`<a @click=${(e) => onLike(e, item._id)} href="" id="buy-btn">Buy</a>` : null}
        </div>
    </div>
</section>`;

async function onLike(e, id) {
    await likeItem(id);
    page.redirect(`/catalog/${id}`);
}