import { getMyPost } from '../data/events.js';
import { html, render } from '../lib.js';
import { getUserData } from '../util.js';

export async function showMyPostView (ctx) {
    const userData = getUserData();
    const items = await getMyPost(userData._id);
    render(myPostTemplate(items));
}

const myPostTemplate = (items) =>html`
<section id="my-posts-page">
    <h1 class="title">My Posts</h1>
    <div class="my-posts">
        ${items.length? items.map(post) : null}
    </div>
    ${items.length? null : html`<h1 class="title no-posts-title">You have no posts yet!</h1>`}
</section>`;

const post = (item) =>html`
<div class="post">
    <h2 class="post-title">${item.title}</h2>
    <img class="post-image" src=${item.imageUrl} alt="Material Image">
    <div class="btn-wrapper">
        <a href="/catalog/${item._id}" class="details-btn btn">Details</a>
    </div>
</div>`;