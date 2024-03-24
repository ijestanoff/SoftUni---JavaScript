import { render } from '../lib.js';
import { getAllItems } from '../data/events.js';
import { html } from '../lib.js';

export async function showCatalog() {
    const items = await getAllItems();
    render(catalogTemplate(items));
}

const catalogTemplate = (items) =>html`
<section id="dashboard-page" class="dashboard">
    <h1>Dashboard</h1>
    ${items.length? html`
        <ul class="other-books-list">
            ${items.map(itemTemplate)}
        </ul>
    ` : html`<p class="no-books">No books in database!</p>`}
</section>`;

//title, description, imageUrl, type
const itemTemplate = (item) =>html`
<li class="otherBooks">
    <h3>${item.title}</h3>
    <p>Type: ${item.type}</p>
    <p class="img"><img src=${item.imageUrl}></p>
    <a class="button" href="/catalog/${item._id}">Details</a>
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