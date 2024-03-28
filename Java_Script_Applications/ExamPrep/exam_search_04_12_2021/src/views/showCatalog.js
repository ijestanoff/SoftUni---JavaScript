import { render } from '../lib.js';
import { getAllItems} from '../data/events.js';
import { html } from '../lib.js';
import { getUserData } from '../util.js';

export async function showCatalog() {
    const userData = getUserData();
    const hasUser = !!userData;
    const items = await getAllItems();
    render(catalogTemplate(items, hasUser));
}

const catalogTemplate = (items, hasUser) =>html`
<section id="catalogPage">
    <h1>All Albums</h1>
    ${items.length? items.map((item) =>itemTemplate(item, hasUser)) :html`<p>No Albums in Catalog!</p>` }
</section>`;

const itemTemplate = (item, hasUser) =>html`
<div class="card-box">
    <img src=${item.imgUrl}>
    <div>
        <div class="text-center">
            <p class="name">Name: ${item.name}</p>
            <p class="artist">Artist: ${item.artist}</p>
            <p class="genre">Genre: ${item.genre}</p>
            <p class="price">Price: $${item.price}</p>
            <p class="date">Release Date: ${item.releaseDate}</p>
        </div>
        ${hasUser? html`<div class="btn-group">
            <a href="/catalog/${item._id}" id="details">Details</a>
        </div>`:null}
        
    </div>
</div>`;