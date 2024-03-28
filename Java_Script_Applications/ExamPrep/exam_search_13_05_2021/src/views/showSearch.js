import { searchItems } from '../data/events.js';
import { html, render } from '../lib.js';

export function showSearchView () {
    const onStart = true;
    render(searchTemplate(onStart));
}

const searchTemplate = (onStart, items) =>html`
<section id="search-cars">
    <h1>Filter by year</h1>

    <div class="container">
        <input id="search-input" type="text" name="search" placeholder="Enter desired production year">
        <button @click=${onSearch} class="button-list">Search</button>
    </div>

    <h2>Results:</h2>
    <div class="listings">
        ${onStart? html`<p class="no-cars"> No results.</p>`: html`
                ${!items.length? html`<p class="no-cars"> No results.</p>` : items.map(itemTemplate) }
        `}
    </div>
</section>`;

const itemTemplate = (item) =>html`
<div class="listing">
    <div class="preview">
        <img src=${item.imageUrl}>
    </div>
    <h2>${item.brand} ${item.model}</h2>
    <div class="info">
        <div class="data-info">
            <h3>Year: ${item.year}</h3>
            <h3>Price: ${item.price} $</h3>
        </div>
        <div class="data-buttons">
            <a href="/catalog/${item._id}" class="button-carDetails">Details</a>
        </div>
    </div>
</div>`;

async function onSearch (e) {
    const search = e.target.parentElement.children[0];
    if (!search.value) {
        return alert('Search must by filed!');
    }
    const items = await searchItems(search.value);
    const onStart = false;
    render(searchTemplate(onStart, items));
}