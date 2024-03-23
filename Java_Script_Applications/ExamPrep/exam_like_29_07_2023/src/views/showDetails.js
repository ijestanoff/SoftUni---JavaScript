import { getFactsById, getLikes, getUserLikes, likeFact } from '../data/events.js';
import { html, page, render } from '../lib.js';
import { getUserData } from '../util.js';

export async function showDetailsView(ctx) {
    const id = ctx.params.id;
    const fact = await getFactsById(id);

    const user = getUserData();
    const hasUser = !!user;
    const isOwner = hasUser && user._id == fact._ownerId;
    const likes = await getLikes(id);
    let alreadyLiked = false;
    if (hasUser) {
        const userLikes = await getUserLikes(id, user._id);
        if (userLikes == 1) {
            alreadyLiked = true;
        }
    }
    render(detailsTemplate(fact, hasUser, isOwner, likes, alreadyLiked));
}

const detailsTemplate = (fact, hasUser, isOwner, likes, alreadyLiked) => html`
<section id="details">
    <div id="details-wrapper">
        <img id="details-img" src=${fact.imageUrl} alt="example1" />
        <p id="details-category">${fact.category}</p>
        <div id="info-wrapper">
            <div id="details-description">
                <p id="description">${fact.description}</p>
                <p id ="more-info">${fact.moreInfo}</p>
            </div>

            <h3>Likes:<span id="likes">${likes}</span></h3>

            <!--Edit and Delete are only for creator-->
            <div id="action-buttons">
            ${isOwner ? html`
                <a href="/edit/${fact._id}" id="edit-btn">Edit</a>
                <a href="/delete/${fact._id}" id="delete-btn">Delete</a>
            `: hasUser && !alreadyLiked ? html`<a @click=${(e) => onLike(e, fact._id)} href="" id="like-btn">Like</a>` : null}
                    <!--Bonus - Only for logged-in users ( not authors )-->
                <!-- <a href="" id="like-btn">Like</a> -->
            </div>
        </div>
    </div>
</section>`;

async function onLike(e, id) {
    debugger
    await likeFact(id);
    page.redirect(`/catalog/${id}`);
}