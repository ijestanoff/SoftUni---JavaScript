import { getItemById } from '../data/events.js';
import { html, page, render } from '../lib.js';
import { getUserData } from '../util.js';

export async function showDetailsView(ctx) {
    const id = ctx.params.id;
    const item = await getItemById(id);

    const user = getUserData();
    const isOwner = !!user && user._id == item._ownerId;
    render(detailsTemplate(item, isOwner));
}

const detailsTemplate = (item, isOwner) => html`
<section id="meme-details">
    <h1>Meme Title: ${item.title}</h1>

    <div class="meme-details">
        <div class="meme-img">
            <img alt="meme-alt" src=${item.imageUrl}>
        </div>
        <div class="meme-description">
            <h2>Meme Description</h2>
            <p>${item.description}</p>
            ${isOwner ? html`
            <div id="action-buttons">
                <a class="button warning" href="/edit/${item._id}">Edit</a>
                <a class="button danger" href="/delete/${item._id}">Delete</a>
            </div>`:null}
        </div>
    </div>
</section>`;