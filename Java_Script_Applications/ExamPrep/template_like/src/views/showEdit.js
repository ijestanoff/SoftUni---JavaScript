import { editItem, getItemsById } from '../data/events.js';
import { html, page, render } from '../lib.js';
import { createSubmitHandler } from '../util.js';

export async function showEditView(ctx) {
    const id = ctx.params.id;
    const item = await getItemsById(id);
    render(editTemplate(item));
}

//@submit=${createSubmitHandler(onEdit)} data-id=${item._id}
//.value = ${item.category}
const editTemplate = (item) =>html`
`;

async function onEdit(data, event) {
    const category = data.category;
    const imageUrl = data['image-url'];
    const description = data.description;
    const moreInfo = data['additional-info'];
    if (!category || !imageUrl || !description || !moreInfo ) {
        return alert('All fields are required!');
    }
    const id = event.dataset.id;
    await editItem(id, category, imageUrl, description, moreInfo);
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