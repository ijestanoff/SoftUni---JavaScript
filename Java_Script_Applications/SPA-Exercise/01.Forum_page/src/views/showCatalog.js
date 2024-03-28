import { page, render } from '../lib.js';
import { createItem, getAllItems } from '../data/events.js';
import { html } from '../lib.js';
import { createSubmitHandler } from '../util.js';

export async function showCatalog() {
    const result = await getAllItems();
    const items = Object.values(result);
    render(catalogTemplate(items));
}

const catalogTemplate = (items) => html`
<div class="new-topic-border">
    <div class="header-background">
        <span>New Topic</span>
    </div>
    <form @submit=${createSubmitHandler(onCreate)}>
        <div class="new-topic-title">
            <label for="topicName">Title <span class="red">*</span></label>
            <input type="text" name="topicName" id="topicName">
        </div>
        <div class="new-topic-title">
            <label for="username">Username <span class="red">*</span></label>
            <input type="text" name="username" id="username">
        </div>
        <div class="new-topic-content">
            <label for="postText">Post <span class="red">*</span></label>
            <textarea type="text" name="postText" id="postText" rows="8" class="height"></textarea>
        </div>
        <div class="new-topic-buttons">
            <button class="cancel">Cancel</button>
            <button class="public">Post</button>
        </div>
    </form>
</div>

<div class="topic-title">
    <div class="topic-container">
        ${items.map(itemTemplate)}
    </div>
</div>`;

const itemTemplate = (item) => html`
<div class="topic-name-wrapper">
    <div class="topic-name">
        <a href=/topic/${item._id} class="normal">
            <h2 data-id=${item._id}>${item.title}</h2>
        </a>
        <div class="columns">
            <div>
                <p>Date: <time>2020-10-10T12:08:28.451Z</time></p>
                <div class="nick-name">
                    <p>Username: <span>${item.username}</span></p>
                </div>
            </div>
        </div>
    </div>
</div>`;

async function onCreate({ topicName, username, postText }, e) {
    if (e.submitter.classList.value == 'cancel') {
        e.target.reset();
    } else {
        if (!topicName || !username || !postText) {
            return alert('All fields are required!');
        }
        await createItem(topicName, username, postText);
        e.target.reset();
        page.redirect('/catalog');
    }
}