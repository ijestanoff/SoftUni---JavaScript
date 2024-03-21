import { get } from '../data/request.js';
import { html, render } from '../lib.js';
import { createSubmitHandler } from '../util.js';

export function showSearchView (ctx) {
    const onStart = true;
    render(searchTemplate(onStart));
}

const searchTemplate = (onStart, cars) =>html`
<section id="search">
    <div class="form">
    <h4>Search</h4>
    <form @submit=${createSubmitHandler(onSearch)} class="search-form">
        <input type="text" name="search" id="search-input" />
        <button class="button-list">Search</button>
    </form>
    </div>
    <div class="search-result">
        ${onStart? html`<h2 class="no-avaliable">No result.</h2>`: html`
            </div>
                ${!cars.length? html`<h2 class="no-avaliable">No result.</h2>` : cars.map(carTemplate) }
            </div>
        `}
    </div>
</section>`;

const carTemplate = (car) =>html`
<div class="car">
    <img src="${car.imageUrl}" alt="example1"/>
    <h3 class="model">${car.model}</h3>
    <a class="details-btn" href="/catalog/${car._id}">More Info</a>
</div>`;

async function onSearch ({search}) {
    if (!search) {
        return alert('Search must by filed!');
    }
    const cars = await get(`/data/cars?where=model%20LIKE%20%22${search}%22`);
    const onStart = false;
    render(searchTemplate(onStart, cars));
}