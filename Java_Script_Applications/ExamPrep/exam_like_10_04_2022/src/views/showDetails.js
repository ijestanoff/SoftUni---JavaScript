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



//title, description, imageUrl, address, phone
const detailsTemplate = (item, hasUser, isOwner, likes, alreadyLiked) => html`
<section id="details-page">
    <h1 class="title">Post Details</h1>
    <div id="container">
        <div id="details">
            <div class="image-wrapper">
                <img src=${item.imageUrl} alt="Material Image" class="post-image">
            </div>
            <div class="info">
                <h2 class="title post-title">${item.title}</h2>
                <p class="post-description">Description: ${item.description}</p>
                <p class="post-address">Address: ${item.address}</p>
                <p class="post-number">Phone number: ${item.phone}</p>
                <p class="donate-Item">Donate Materials: ${likes}</p>

                <div class="btns">
                    ${isOwner ? html`
                        <a href="/edit/${item._id}" class="edit-btn btn">Edit</a>
                        <a href="/delete/${item._id}" class="delete-btn btn">Delete</a>
                    `: hasUser && !alreadyLiked ? html`<a @click=${(e) => onLike(e, item._id)} href="" class="donate-btn btn">Donate</a>` : null}
                </div>
            </div>
        </div>
    </div>
</section>`;

async function onLike(e, id) {
    await likeItem(id);
    page.redirect(`/catalog/${id}`);
}