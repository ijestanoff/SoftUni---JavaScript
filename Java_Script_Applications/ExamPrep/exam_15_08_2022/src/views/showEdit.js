import { editItem, getItemById } from '../data/events.js';
import { html, page, render } from '../lib.js';
import { createSubmitHandler } from '../util.js';

export async function showEditView(ctx) {
    const id = ctx.params.id;
    const item = await getItemById(id);
    render(editTemplate(item));
}

const editTemplate = (item) => html`
<section id="edit">
    <div class="form">
    <h2>Edit item</h2>
    <form @submit=${createSubmitHandler(onEdit)} data-id=${item._id} class="edit-form">
        <input
        type="text"
        name="brand"
        id="shoe-brand"
        placeholder="Brand"
        .value=${item.brand}
        />
        <input
        type="text"
        name="model"
        id="shoe-model"
        placeholder="Model"
        .value=${item.model}
        />
        <input
        type="text"
        name="imageUrl"
        id="shoe-img"
        placeholder="Image url"
        .value=${item.imageUrl}
        />
        <input
        type="text"
        name="release"
        id="shoe-release"
        placeholder="Release date"
        .value=${item.release}
        />
        <input
        type="text"
        name="designer"
        id="shoe-designer"
        placeholder="Designer"
        .value=${item.designer}
        />
        <input
        type="text"
        name="value"
        id="shoe-value"
        placeholder="Value"
        .value=${item.value}
        />
        <button type="submit">post</button>
    </form>
    </div>
</section>`;

async function onEdit({brand, model, imageUrl, release, designer, value }, event) {
    if (!brand || !imageUrl || !model || !release || !designer || !value ) {
        return alert('All fields are required!');
    }
    const id = event.dataset.id;
    await editItem(id, brand, model, imageUrl, release, designer, value);
    page.redirect(`/catalog/${id}`);
}