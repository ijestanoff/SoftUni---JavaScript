import { getMotorcycleById } from '../data/events.js';
import { html, render } from '../lib.js';
import { getUserData } from '../util.js';

export async function showDetailsView(ctx) {
    const id = ctx.params.id;
    const motor = await getMotorcycleById(id);

    const user = getUserData();
    const isOwner = !!user && user._id == motor._ownerId;
    render(detailsTemplate(motor, isOwner));
}

const detailsTemplate = (motor, isOwner) => html`
<section id="details">
    <div id="details-wrapper">
        <img id="details-img" src=${motor.imageUrl} alt="example1" />
        <p id="details-title">${motor.model}</p>
        <div id="info-wrapper">
            <div id="details-description">
                <p class="year">Year: ${motor.year}</p>
                <p class="mileage">Mileage: ${motor.mileage} km.</p>
                <p class="contact">Contact Number: ${motor.contact}</p>
                <p id = "motorcycle-description">${motor.about}</p>
            </div>
            <!--Edit and Delete are only for creator-->
            ${isOwner ? html`
            <div id="action-buttons">
                <a href="/edit/${motor._id}" id="edit-btn">Edit</a>
                <a href="/delete/${motor._id}" id="delete-btn">Delete</a>
            </div>`:null}
        </div>
    </div>
</section>`;