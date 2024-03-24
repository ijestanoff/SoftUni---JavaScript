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

// ${isOwner ? html`
//     <a href="/edit/${item._id}" id="edit-btn">Edit</a>
//     <a href="/delete/${item._id}" id="delete-btn">Delete</a>
// `: hasUser && !alreadyLiked ? html`<a @click=${(e) => onLike(e, item._id)} href="" id="like-btn">Like</a>` : null}

//singer, album, imageUrl, release, label, sales
const detailsTemplate = (item, hasUser, isOwner, likes, alreadyLiked) => html`
<section id="details">
    <div id="details-wrapper">
        <p id="details-title">Album Details</p>
        <div id="img-wrapper">
        <img src=${item.imageUrl} />
        </div>
        <div id="info-wrapper">
        <p><strong>Band:</strong><span id="details-singer">${item.singer}</span></p>
        <p>
            <strong>Album name:</strong><span id="details-album">${item.album}</span>
        </p>
        <p><strong>Release date:</strong><span id="details-release">${item.release}</span></p>
        <p><strong>Label:</strong><span id="details-label">${item.label}</span></p>
        <p><strong>Sales:</strong><span id="details-sales">${item.sales}</span></p>
        </div>
        <div id="likes">Likes: <span id="likes-count">${likes}</span></div>

        <div id="action-buttons">
        ${isOwner ? html`
            <a href="/edit/${item._id}" id="edit-btn">Edit</a>
            <a href="/delete/${item._id}" id="delete-btn">Delete</a>
        `: hasUser && !alreadyLiked ? html`<a @click=${(e) => onLike(e, item._id)} href="" id="like-btn">Like</a>` : null}

        <!--Edit and Delete are only for creator-->
        
        <!-- <a href="" id="like-btn">Like</a>
        <a href="" id="edit-btn">Edit</a>
        <a href="" id="delete-btn">Delete</a> -->
        </div>

    </div>
</section>`;

async function onLike(e, id) {
    await likeItem(id);
    page.redirect(`/catalog/${id}`);
}

/*<section id="details">
    <div id="details-wrapper">
        <img id="details-img" src=${item.imageUrl} alt="example1" />
        <p id="details-category">${item.category}</p>
        <div id="info-wrapper">
            <div id="details-description">
                <p id="description">${item.description}</p>
                <p id ="more-info">${item.moreInfo}</p>
            </div>

            <h3>Likes:<span id="likes">${likes}</span></h3>

            <!--Edit and Delete are only for creator-->
            <div id="action-buttons">
            ${isOwner ? html`
                <a href="/edit/${item._id}" id="edit-btn">Edit</a>
                <a href="/delete/${item._id}" id="delete-btn">Delete</a>
            `: hasUser && !alreadyLiked ? html`<a @click=${(e) => onLike(e, item._id)} href="" id="like-btn">Like</a>` : null}
                    <!--Bonus - Only for logged-in users ( not authors )-->
                <!-- <a href="" id="like-btn">Like</a> -->
            </div>
        </div>
    </div>
</section>*/