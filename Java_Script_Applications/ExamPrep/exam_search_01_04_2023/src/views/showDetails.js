import { getFruitById } from '../data/events.js';
import { html, render } from '../lib.js';
import { getUserData } from '../util.js';

export async function showDetailsView(ctx) {
    const id = ctx.params.id;
    const fruit = await getFruitById(id);

    const user = getUserData();
    const isOwner = !!user && user._id == fruit._ownerId;
    render(detailsTemplate(fruit, isOwner));
}

const detailsTemplate = (fruit, isOwner) => html`
<section id="details">
    <div id="details-wrapper">
        <img id="details-img" src=${fruit.imageUrl} alt="example1" />
        <p id="details-title">${fruit.name}</p>
        <div id="info-wrapper">
            <div id="details-description">
                <p>${fruit.description}</p>
                <p id="nutrition">Nutrition</p>
                <p id = "details-nutrition">${fruit.nutrition}</p>
            </div>
            <!--Edit and Delete are only for creator-->
            ${isOwner ? html`
            <div id="action-buttons">
                <a href="/edit/${fruit._id}" id="edit-btn">Edit</a>
                <a href="/delete/${fruit._id}" id="delete-btn">Delete</a>
            </div>`:null}
        </div>
    </div>
</section>`;