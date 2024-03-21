import { getCarById } from '../data/events.js';
import { html, render } from '../lib.js';
import { getUserData } from '../util.js';

export async function showDetailsView(ctx) {
    const id = ctx.params.id;
    const car = await getCarById(id);

    const user = getUserData();
    const hasUser = !!user;
    const isOwner = hasUser && user._id == car._ownerId;
    render(detailsTemplate(car, hasUser, isOwner));
}

const detailsTemplate = (car, hasUser, isOwner) => html`
<section id="details">
    <div id="details-wrapper">
        <img id="details-img" src=${car.imageUrl} alt="example1" />
        <p id="details-title">${car.model}</p>
        <div id="info-wrapper">
            <div id="details-description">
                <p class="price">Price: €${car.price}</p>
                <p class="weight">Weight: ${car.weight} kg</p>
                <p class="top-speed">Top Speed: ${car.speed} kph</p>
                <p id="car-description">${car.about}</p>
            </div>
            <!--Edit and Delete are only for creator-->
            ${isOwner ? html`<div id="action-buttons">
                <a href="/edit/${car._id}" id="edit-btn">Edit</a>
                <a href="/delete/${car._id}" id="delete-btn">Delete</a>
            </div>`: null}
        </div>
    </div>
</section>`;