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
<section id="movie-example" class="view-section">
    <div class="container">
        <div class="row bg-light text-dark">
        <h1>Movie title: ${item.title}</h1>
            <div class="col-md-8">
                <img class="img-thumbnail" src=${item.img} alt="Movie" />
            </div>
            <div class="col-md-4 text-center">
                <h3 class="my-3">Movie Description</h3>
                <p>${item.description}</p>
                ${isOwner ? html`
                     <a class="btn btn-danger" href="/delete/${item._id}">Delete</a>
                     <a class="btn btn-warning" href="/edit/${item._id}">Edit</a>
                `: hasUser && !alreadyLiked ? html`<a class="btn btn-primary" @click=${(e) => onLike(e, item._id)} href="">Like</a>` : null}
                <span class="enrolled-span">Liked ${likes}</span>
            </div>
        </div>
    </div>
</section>`;

async function onLike(e, id) {
    await likeItem(id);
    page.redirect(`/catalog/${id}`);
}