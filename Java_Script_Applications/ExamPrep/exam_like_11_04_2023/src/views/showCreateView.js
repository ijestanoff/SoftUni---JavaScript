import { createItem } from '../data/events.js';
import { render, html, page } from '../lib.js';
import { createSubmitHandler } from '../util.js';

export function showCreateView() {
    render(createTemplate());
}

//
const createTemplate = () => html`
<section id="create">
    <div class="form">
    <h2>Add Event</h2>
    <form @submit=${createSubmitHandler(onCreate)} class="create-form">
        <input
        type="text"
        name="name"
        id="name"
        placeholder="Event"
        />
        <input
        type="text"
        name="imageUrl"
        id="event-image"
        placeholder="Event Image URL"
        />
        <input
        type="text"
        name="category"
        id="event-category"
        placeholder="Category"
        />
        <textarea
        id="event-description"
        name="description"
        placeholder="Description"
        rows="5"
        cols="50"
        ></textarea>
        <input
        type="text"
        name="date"
        id="date"
        placeholder="When?"
    />

        <button type="submit">Add</button>
    </form>
    </div>
</section>`;

//name,imageUrl, category,description, date
async function onCreate(data) {
    const name = data.name;
    const imageUrl = data.imageUrl;
    const category = data.category;
    const description = data.description;
    const date = data.date;
    if (!name || !imageUrl || !category || !description || !date) {
        return alert('All fields are required!');
    }
    await createItem(name, imageUrl, category, description, date);

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