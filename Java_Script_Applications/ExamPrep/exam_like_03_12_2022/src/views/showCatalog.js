import { render } from '../lib.js';
import { getAllItems } from '../data/events.js';
import { html } from '../lib.js';

export async function showCatalog() {
    const items = await getAllItems();
    render(catalogTemplate(items));
}

const catalogTemplate = (items) =>html`
<section id="dashboard">
    <h2>Albums</h2>
    <ul class="card-wrapper">
        <!-- Display a li with information about every post (if any)-->
        ${items.length? items.map(itemTemplate): null}
    </ul>
    <!-- Display an h2 if there are no posts -->
    ${items.length? null : html`<h2>There are no albums added yet.</h2>`}
</section>
`;

//singer, album, imageUrl, release, label, sales
const itemTemplate = (item) =>html`
<li class="card">
    <img src=${item.imageUrl} alt="travis" />
    <p>
        <strong>Singer/Band: </strong><span class="singer">${item.singer}</span>
    </p>
    <p>
        <strong>Album name: </strong><span class="album">${item.album}</span>
    </p>
    <p><strong>Sales:</strong><span class="sales">${item.sales}</span></p>
    <a class="details-btn" href="/catalog/${item._id}">Details</a>
</li>`;

/*<h2>Fun Facts</h2>
<section id="dashboard">
    ${items.length? items.map(itemTemplate): null}
</section>
${items.length? null : html`<h2>No Fun Facts yet.</h2>`}*/

/*<div class="fact">
    <img src=${item.imageUrl} alt="example1" />
    <h3 class="category">${item.category}</h3>
    <p class="description">${item.description}</p>
    <a class="details-btn" href="/catalog/${item._id}">More Info</a>
</div>*/