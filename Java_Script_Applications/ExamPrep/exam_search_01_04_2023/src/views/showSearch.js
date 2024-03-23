import { searchItems } from '../data/events.js';
import { html, render } from '../lib.js';
import { createSubmitHandler } from '../util.js';

export function showSearchView () {
    const onStart = true;
    render(searchTemplate(onStart));
}

const searchTemplate = (onStart, fruits) =>html`
<section id="search">
    <div class="form">
        <h2>Search</h2>
        <form @submit=${createSubmitHandler(onSearch)} class="search-form">
            <input type="text" name="search" id="search-input"/>
            <button class="button-list">Search</button>
        </form>
    </div>
    <h4>Results:</h4>
    <div class="search-result">
        ${onStart? html`<h2 class="no-result">No result.</h2>`: html`
            </div>
                ${!fruits.length? html`<h2 class="no-avaliable">No result.</h2>` : fruits.map(fruitTemplate) }
            </div>
        `}
    </div>
</section>`;

const fruitTemplate = (fruit) =>html`
<div class="fruit">
    <img src=${fruit.imageUrl} alt="example1" />
    <h3 class="title">${fruit.name}</h3>
    <p class="description">${fruit.description}</p>
    <a class="details-btn" href="/catalog/${fruit._id}">More Info</a>
</div>`;

async function onSearch ({search}) {
    if (!search) {
        return alert('Search must by filed!');
    }
    const fruits = await searchItems(search);
    const onStart = false;
    render(searchTemplate(onStart, fruits));
}