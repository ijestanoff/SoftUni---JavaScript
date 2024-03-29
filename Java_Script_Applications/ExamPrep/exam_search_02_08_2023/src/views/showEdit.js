import { editMotorcycles, getMotorcycleById } from '../data/events.js';
import { html, page, render } from '../lib.js';
import { createSubmitHandler } from '../util.js';

export async function showEditView(ctx) {
    const id = ctx.params.id;
    const motor = await getMotorcycleById(id);
    render(editTemplate(motor));
}

const editTemplate = (motor) => html`
<section id="edit">
    <h2>Edit Motorcycle</h2>
    <div class="form">
        <h2>Edit Motorcycle</h2>
        <form @submit=${createSubmitHandler(onEdit)} class="edit-form" data-id=${motor._id}>
            <input
                type="text"
                name="model"
                id="model"
                placeholder="Model"
                .value=${motor.model}
            />
            <input
                type="text"
                name="imageUrl"
                id="moto-image"
                placeholder="Moto Image"
                .value=${motor.imageUrl}
            />
            <input
                type="number"
                name="year"
                id="year"
                placeholder="Year"
                .value=${motor.year}
            />
            <input
                type="number"
                name="mileage"
                id="mileage"
                placeholder="mileage"
                .value=${motor.mileage}
            />
            <input
                type="number"
                name="contact"
                id="contact"
                placeholder="contact"
                .value=${motor.contact}
            />
            <textarea
                id="about"
                name="about"
                placeholder="about"
                rows="10"
                cols="50"
                .value=${motor.about}>
            </textarea>
            <button type="submit">Edit Motorcycle</button>
        </form>
    </div>
</section>`;

async function onEdit({ model, imageUrl, year, mileage, contact, about }, event) {
    if (!model || !imageUrl || !year || !mileage || !contact || !about) {
        return alert('All fields are required!');
    }
    const id = event.dataset.id;
    await editMotorcycles(id, model, imageUrl, year, mileage, contact, about);
    page.redirect(`/catalog/${id}`);
}