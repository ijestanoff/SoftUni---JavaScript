import { editFact, getFactsById } from '../data/events.js';
import { html, page, render } from '../lib.js';
import { createSubmitHandler } from '../util.js';

export async function showEditView(ctx) {
    const id = ctx.params.id;
    const fact = await getFactsById(id);
    render(editTemplate(fact));
}

const editTemplate = (fact) =>html`
<section id="edit">
    <div class="form">
    <h2>Edit Fact</h2>
    <form @submit=${createSubmitHandler(onEdit)} class="edit-form" data-id=${fact._id}>
        <input
        type="text"
        name="category"
        id="category"
        placeholder="Category"
        .value = ${fact.category}
    />
    <input
        type="text"
        name="image-url"
        id="image-url"
        placeholder="Image URL"
        .value = ${fact.imageUrl}
    />
    <textarea
    id="description"
    name="description"
    placeholder="Description"
    rows="10"
    cols="50"
    .value = ${fact.description}
    ></textarea>
    <textarea
    id="additional-info"
    name="additional-info"
    placeholder="Additional Info"
    rows="10"
    cols="50"
    .value = ${fact.moreInfo}
    ></textarea>
        <button type="submit">Post</button>
    </form>
    </div>
</section>`;

async function onEdit(data, event) {
    const category = data.category;
    const imageUrl = data['image-url'];
    const description = data.description;
    const moreInfo = data['additional-info'];
    if (!category || !imageUrl || !description || !moreInfo ) {
        return alert('All fields are required!');
    }
    const id = event.dataset.id;
    await editFact(id, category, imageUrl, description, moreInfo);
    page.redirect(`/catalog/${id}`);
}