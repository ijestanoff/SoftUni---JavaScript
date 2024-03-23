import { searchItems } from '../data/events.js';
import { html, render } from '../lib.js';
import { createSubmitHandler, getUserData } from '../util.js';

let hasUser = null;
export function showSearchView () {
    const onStart = true;
    const userData = getUserData();
    hasUser = !!userData;
    render(searchTemplate(hasUser, onStart));
}

const searchTemplate = (hasUser, onStart, items) =>html`
<section id="search">
    <h2>Search by Brand</h2>
    <form @submit=${createSubmitHandler(onSearch)} class="search-wrapper cf">
        <input
            id="#search-input"
            type="text"
            name="search"
            placeholder="Search here..."
            required
        />
        <button type="submit">Search</button>
    </form>
    <h3>Results:</h3>
    <div id="search-container">
        ${onStart? html`<h2>There are no results found.</h2>`: html`
            <ul class="card-wrapper">
                ${!items.length? html`<h2>There are no results found.</h2>` : items.map((item) => itemTemplate(item, hasUser)) }
            </ul>
        `}
    </div>
</section>`;

const itemTemplate = (item, hasUser) =>html`
<li class="card">
    <img src=${item.imageUrl} alt="travis" />
    <p>
        <strong>Brand: </strong><span class="brand">${item.brand}</span>
    </p>
    <p>
        <strong>Model: </strong
        ><span class="model">${item.model}</span>
    </p>
    <p><strong>Value:</strong><span class="value">${item.value}</span>$</p>
    ${hasUser? html`<a class="details-btn" href="/catalog/${item._id}">Details</a>`:null}
    
</li>`;

async function onSearch ({search}) {
    if (!search) {
        return alert('Search must by filed!');
    }
    const items = await searchItems(search);
    const onStart = false;
    render(searchTemplate(hasUser, onStart, items));
}