import { render } from '../lib.js';
import { getAllItems } from '../data/events.js';
import { html } from '../lib.js';

export async function showCatalog() {
    const items = await getAllItems();
    render(catalogTemplate(items));
}

const catalogTemplate = (items) =>html`
<section id="dashboard">
    <h2>Job Offers</h2>
    ${items.length? items.map(itemTemplate): html`<h2>No offers yet.</h2>`}
</section>`;

//title,imageUrl, category, description, requirements, salary
const itemTemplate = (item) =>html`
<div class="offer">
    <img src=${item.imageUrl} />
    <p>
        <strong>Title: </strong><span class="title">${item.title}</span>
    </p>
    <p><strong>Salary:</strong><span class="salary">${item.salary}</span></p>
    <a class="details-btn" href="/catalog/${item._id}">Details</a>
</div>`;

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