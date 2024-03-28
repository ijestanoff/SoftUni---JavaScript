import { html } from './app.js';
import { api } from './requester.js';
import { createSubmitHandler } from './viewHome.js';

const postUrl = 'http://localhost:3030/jsonstore/collections/myboard/posts/';
const commentUrl = 'http://localhost:3030/jsonstore/collections/myboard/comments/';

let id = null;
let context = null;
export async function showTopic(ctx) {
    context = ctx;
    id = ctx.params.id;
    const data = await api.get(postUrl + id);
    const dataComments = await api.get(commentUrl + id);
    let comments;
    if (dataComments.statusText == 'No Content') {
        comments = null;
    } else {
        comments = Object.values(dataComments);
    }
    context.render(topicTemplate(data, comments));
}

async function onComment({ postText, username }) {
    await api.post(commentUrl + id, { postText, username });
    document.querySelector('form').reset();
    showTopic(context);
}

const userComment = (item) => html`
<div id="user-comment">
    <div class="topic-name-wrapper">
        <div class="topic-name">
            <p><strong>${item.username}</strong> commented on <time>3/15/2021, 12:39:02 AM</time></p>
            <div class="post-content">
                <p>${item.postText}</p>
            </div>
        </div>
    </div>
</div>`;

const topicTemplate = (data, comments) => html`
<div class="theme-content">
    <div class="theme-title">
        <div class="theme-name-wrapper">
            <div class="theme-name">
                <h2>${data.title}</h2>
            </div>
        </div>
    </div>
    <!-- comment  -->

    <div class="comment">
        <div class="header">
            <img src="/static/profile.png" alt="avatar">
            <p><span>${data.username}</span> posted on <time>2020-10-10 12:08:28</time></p>
            <p class="post-content">${data.content}</p>
        </div>
        ${comments? comments.map(item => userComment(item)):''}
    </div>

    <div class="answer-comment">
        <p><span>currentUser</span> comment:</p>
        <div class="answer">
            <form @submit=${createSubmitHandler(onComment)}>
                <textarea name="postText" id="comment" cols="30" rows="10"></textarea>
                <div>
                    <label for="username">Username <span class="red">*</span></label>
                    <input type="text" name="username" id="username">
                </div>
                <button>Post</button>
            </form>
        </div>
    </div>
</div>`;