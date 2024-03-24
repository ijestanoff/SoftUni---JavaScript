import { editItem, getItemsById } from '../data/events.js';
import { html, page, render } from '../lib.js';
import { createSubmitHandler } from '../util.js';

export async function showEditView(ctx) {
    const id = ctx.params.id;
    const item = await getItemsById(id);
    render(editTemplate(item));
}

//
//

//title,imageUrl, category, description, requirements, salary
const editTemplate = (item) =>html`
 <section id="edit">
    <div class="form">
    <h2>Edit Offer</h2>
    <form @submit=${createSubmitHandler(onEdit)} data-id=${item._id} class="edit-form">
        <input
        type="text"
        name="title"
        id="job-title"
        placeholder="Title"
        .value = ${item.title}
        />
        <input
        type="text"
        name="imageUrl"
        id="job-logo"
        placeholder="Company logo url"
        .value = ${item.imageUrl}
        />
        <input
        type="text"
        name="category"
        id="job-category"
        placeholder="Category"
        .value = ${item.category}
        />
        <textarea
        id="job-description"
        name="description"
        placeholder="Description"
        rows="4"
        cols="50"
        .value = ${item.description}
        ></textarea>
        <textarea
        id="job-requirements"
        name="requirements"
        placeholder="Requirements"
        rows="4"
        cols="50"
        .value = ${item.requirements}
        ></textarea>
        <input
        type="text"
        name="salary"
        id="job-salary"
        placeholder="Salary"
        .value = ${item.salary}
        />

        <button type="submit">post</button>
    </form>
    </div>
</section>`;



async function onEdit({title,imageUrl, category, description, requirements, salary}, event) {
    if (!category || !imageUrl || !description || !title || !requirements || !salary ) {
        return alert('All fields are required!');
    }
    const id = event.dataset.id;
    await editItem(id, title,imageUrl, category, description, requirements, salary);
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