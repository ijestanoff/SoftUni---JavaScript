import { getMyPost } from '../data/events.js';
import { html, render } from '../lib.js';
import { getUserData } from '../util.js';

export async function showMyPostView () {
    const userData = getUserData();
    const items = await getMyPost(userData._id);
    render(myPostTemplate(items, userData.email));
}

const myPostTemplate = (items, email) =>html`
<section id="profilePage">
    <div class="userInfo">
        <div class="avatar">
            <img src="./images/profilePic.png">
        </div>
        <h2>${email}</h2>
    </div>
    <div class="board">
        <!--If there are event-->

        ${items.length? items.map(post) : null}

        <!--If there are no event-->
        <div class="no-events">
            ${items.length? null : html`<p>This user has no events yet!</p>`}
        </div>
    </div>
</section>`;

const post = (item) =>html`
<div class="eventBoard">
    <div class="event-info">
        <img src=${item.imageUrl}>
        <h2>${item.title}</h2>
        <h6>${item.date}</h6>
        <a href="/catalog/${item._id}" class="details-button">Details</a>
    </div>
</div>`;