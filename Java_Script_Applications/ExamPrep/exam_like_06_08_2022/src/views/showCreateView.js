import { createItem } from '../data/events.js';
import { render, html, page } from '../lib.js';
import { createSubmitHandler } from '../util.js';

export function showCreateView() {
    render(createTemplate());
}

//
//
const createTemplate = () => html`
<section id="create">
    <div class="form">
    <h2>Create Offer</h2>
    <form @submit=${createSubmitHandler(onCreate)} class="create-form">
        <input
        type="text"
        name="title"
        id="job-title"
        placeholder="Title"
        />
        <input
        type="text"
        name="imageUrl"
        id="job-logo"
        placeholder="Company logo url"
        />
        <input
        type="text"
        name="category"
        id="job-category"
        placeholder="Category"
        />
        <textarea
        id="job-description"
        name="description"
        placeholder="Description"
        rows="4"
        cols="50"
        ></textarea>
        <textarea
        id="job-requirements"
        name="requirements"
        placeholder="Requirements"
        rows="4"
        cols="50"
        ></textarea>
        <input
        type="text"
        name="salary"
        id="job-salary"
        placeholder="Salary"
        />

        <button type="submit">post</button>
    </form>
    </div>
</section>
`;

async function onCreate({title,imageUrl, category, description, requirements, salary}) {
    if (!category || !imageUrl || !description || !title || !requirements || !salary ) {
        return alert('All fields are required!');
    }
    await createItem(title,imageUrl, category, description, requirements, salary);

    page.redirect('/catalog');
}

/*<section id="create">
    <div class="form">
    <h2>Add Fact</h2>
    <form @submit=${createSubmitHandler(onCreate)} class="create-form">
        <input
        type="text"
        name="category"
        id="category"
        placeholder="Category"
        />
        <input
        type="text"
        name="image-url"
        id="image-url"
        placeholder="Image URL"
        />
        <textarea
        id="description"
        name="description"
        placeholder="Description"
        rows="10"
        cols="50"
    ></textarea>
    <textarea
        id="additional-info"
        name="additional-info"
        placeholder="Additional Info"
        rows="10"
        cols="50"
    ></textarea>
        <button type="submit">Add Fact</button>
    </form>
    </div>
</section>*/