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
<section id="details">
    <div id="details-wrapper">
    <div>
        <img id="details-img" src=${item.imageUrl} alt="example1" />
        <p id="details-title">${item.item}</p>
    </div>
    <div id="info-wrapper">
        <div id="details-description">
        <p class="details-price">Price: €${item.price}</p>
        <p class="details-availability">${item.availability}</p>
        <p class="type">Type: ${item.type}</p>
        <p id="item-description">${item.description}</p>
        </div>

        ${isOwner ? html`
        <div id="action-buttons">
            <a href="/edit/${item._id}" id="edit-btn">Edit</a>
            <a href="/delete/${item._id}" id="delete-btn">Delete</a>
        </div>`:null}

    </div>
    </div>
</section>`;