import { html } from './app_.js';
import { api } from './requester.js';

const postUrl = 'http://localhost:3030/jsonstore/collections/myboard/posts';

let context = null;
export async function viewHome(ctx) {
    context = ctx;
    const data = await api.get(postUrl);
    context.render(homeTemplate(Object.values(data)));
}

async function onCreate(e) {
    //{ topicName, username, postText }
    e.preventDefault();
    const form = e.target.parentElement.parentElement;
    const topicName = form.elements.topicName.value;
    const username = form.elements.username.value;
    const postText = form.elements.postText.value;
    //debugger
    if (!topicName || !username || !postText) {
        return alert('All imputs are requared!');
    }
    await api.post(postUrl, { topicName, username, postText });
    onCancel();
    context.goTo('/');
}

function onCancel(e) {
    e?.preventDefault();
    const formRef = document.querySelector('form');
    formRef.reset();
}

const homeTemplate = (items) => html`
<div class="new-topic-border">
    <div class="header-background">
        <span>New Topic</span>
    </div>
    <form>
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
            <button @click=${onCancel} class="cancel">Cancel</button>
            <button @click=${onCreate} class="public">Post</button>
        </div>
    </form>
</div>

<div class="topic-title">
    <!-- topic component  -->
    <div class="topic-container">
        ${items.map(item => showTopic(item))}
    </div>
</div>
`;

const showTopic = (item) => html`
<div class="topic-name-wrapper">
    <div class="topic-name">
        <a href=/topic/${item._id} class="normal">
            <h2 data-id=${item._id}>${item.topicName}</h2>
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

function onTopic(e) {
    //@click=${onTopic}
    const id = e.target.dataset.id;
}

export function createSubmitHandler(callback) {
    return function (event) {
        event.preventDefault();

        const formData = new FormData(event.target);
        const entries = [...formData.entries()].map(([k, v]) => [k, v.trim()]);

        callback(Object.fromEntries(entries));
    };
}