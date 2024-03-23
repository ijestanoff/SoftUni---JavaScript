import { editItem, getItemsById } from '../data/events.js';
import { html, page, render } from '../lib.js';
import { createSubmitHandler } from '../util.js';

export async function showEditView(ctx) {
    const id = ctx.params.id;
    const item = await getItemsById(id);
    render(editTemplate(item));
}

//
const editTemplate = (item) => html`
<section id="edit">
    <div class="form">
    <h2>Edit Event</h2>
    <form @submit=${createSubmitHandler(onEdit)} data-id=${item._id} class="edit-form">
        <input
        type="text"
        name="name"
        id="name"
        placeholder="Event"
        .value = ${item.name}
        />
        <input
        type="text"
        name="imageUrl"
        id="event-image"
        placeholder="Event Image"
        .value = ${item.imageUrl}
        />
        <input
        type="text"
        name="category"
        id="event-category"
        placeholder="Category"
        .value = ${item.category}
        />
        <textarea
        id="event-description"
        name="description"
        placeholder="Description"
        rows="5"
        cols="50"
        .value = ${item.description}
        ></textarea>
        <label for="date-and-time">Event Time:</label>
        <input
        type="text"
        name="date"
        id="date"
        placeholder="When?"
        .value = ${item.date}
    />

        <button type="submit">Edit</button>
    </form>
    </div>
</section>`;

////name,imageUrl, category,description, date
async function onEdit({ name, imageUrl, category, description, date }, event) {
    if (!name || !imageUrl || !category || !description || !date) {
        return alert('All fields are required!');
    }
    const id = event.dataset.id;
    await editItem(id, name, imageUrl, category, description, date);
    page.redirect(`/catalog/${id}`);
}

/*<section id="edit">
    <div class="form">
    <h2>Edit Fact</h2>
    <form @submit=${createSubmitHandler(onEdit)} class="edit-form" data-id=${item._id}>
        <input
        type="text"
        name="category"
        id="category"
        placeholder="Category"
        .value = ${item.category}
    />
    <input
        type="text"
        name="image-url"
        id="image-url"
        placeholder="Image URL"
        .value = ${item.imageUrl}
    />
    <textarea
    id="description"
    name="description"
    placeholder="Description"
    rows="10"
    cols="50"
    .value = ${item.description}
    ></textarea>
    <textarea
    id="additional-info"
    name="additional-info"
    placeholder="Additional Info"
    rows="10"
    cols="50"
    .value = ${item.moreInfo}
    ></textarea>
        <button type="submit">Post</button>
    </form>
    </div>
</section>*/