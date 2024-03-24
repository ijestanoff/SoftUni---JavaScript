import { createItem } from '../data/events.js';
import { render, html, page } from '../lib.js';
import { createSubmitHandler } from '../util.js';

export function showCreateView() {
    render(createTemplate());
}

const createTemplate = () => html`
<section id="create-page" class="create">
    <form @submit=${createSubmitHandler(onCreate)} id="create-form" action="" method="">
        <fieldset>
            <legend>Add new Book</legend>
            <p class="field">
                <label for="title">Title</label>
                <span class="input">
                    <input type="text" name="title" id="title" placeholder="Title">
                </span>
            </p>
            <p class="field">
                <label for="description">Description</label>
                <span class="input">
                    <textarea name="description" id="description" placeholder="Description"></textarea>
                </span>
            </p>
            <p class="field">
                <label for="image">Image</label>
                <span class="input">
                    <input type="text" name="imageUrl" id="image" placeholder="Image">
                </span>
            </p>
            <p class="field">
                <label for="type">Type</label>
                <span class="input">
                    <select id="type" name="type">
                        <option value="Fiction">Fiction</option>
                        <option value="Romance">Romance</option>
                        <option value="Mistery">Mistery</option>
                        <option value="Classic">Clasic</option>
                        <option value="Other">Other</option>
                    </select>
                </span>
            </p>
            <input class="button submit" type="submit" value="Add Book">
        </fieldset>
    </form>
</section>`;

//title, description, imageUrl, type
async function onCreate({title, description, imageUrl, type}) {
    if (!title || !imageUrl || !description || !type ) {
        return alert('All fields are required!');
    }
    await createItem(title, description, imageUrl, type);

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