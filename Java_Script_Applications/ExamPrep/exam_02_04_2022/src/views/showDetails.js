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
<section id="detailsPage">
    <div class="details">
        <div class="animalPic">
            <img src=${item.image}>
        </div>
        <div>
            <div class="animalInfo">
                <h1>Name: ${item.name}</h1>
                <h3>Breed: ${item.breed}</h3>
                <h4>Age: ${item.age} years</h4>
                <h4>Weight: ${item.weight}kg</h4>
                <h4 class="donation">Donation: ${likes*100}$</h4>
            </div>

            <div class="actionBtn">
             ${isOwner ? html`
                <a href="/edit/${item._id}" class="edit">Edit</a>
                <a href="/delete/${item._id}" class="remove">Delete</a>
            `: hasUser && !alreadyLiked ? html`<a @click=${(e) => onLike(e, item._id)} href="" class="donate">Donate</a>` : null}
            </div>
        </div>
    </div>
</section>`;

async function onLike(e, id) {
    await likeItem(id);
    page.redirect(`/catalog/${id}`);
}