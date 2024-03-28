import { getItemById } from '../data/events.js';
import { html, render } from '../lib.js';
import { getUserData } from '../util.js';

export async function showDetailsView(ctx) {
    const id = ctx.params.id;
    const item = await getItemById(id);

    const user = getUserData();
    const isOwner = !!user && user._id == item._ownerId;
    render(detailsTemplate(item, isOwner));
}

const detailsTemplate = (item, isOwner) => html`
<section id="detailsPage">
    <div class="wrapper">
        <div class="albumCover">
            <img src=${item.imgUrl}>
        </div>
        <div class="albumInfo">
            <div class="albumText">

                <h1>Name: ${item.name}</h1>
                <h3>Artist: ${item.artist}</h3>
                <h4>Genre: ${item.genre}</h4>
                <h4>Price: $${item.price}</h4>
                <h4>Date: ${item.releaseDate}</h4>
                <p>Description: ${item.description}</p>
            </div>

            ${isOwner ? html`
                <div class="actionBtn">
                    <a href="/edit/${item._id}" class="edit">Edit</a>
                    <a href="/delete/${item._id}" class="remove">Delete</a>
                </div>`:null}
        </div>
    </div>
</section>`;