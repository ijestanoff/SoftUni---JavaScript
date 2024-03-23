import { get } from '../data/request.js';
import { html, render } from '../lib.js';
import { createSubmitHandler } from '../util.js';

export function showSearchView () {
    const onStart = true;
    render(searchTemplate(onStart));
}

const searchTemplate = (onStart, motors) =>html`
<section id="search">
    <div class="form">
        <h4>Search</h4>
        <form @submit=${createSubmitHandler(onSearch)} class="search-form">
            <input type="text" name="search" id="search-input"/>
            <button class="button-list">Search</button>
        </form>
    </div>
    <h4 id="result-heading">Results:</h4>
    <div class="search-result">
        ${onStart? html`<h2 class="no-avaliable">No result.</h2>`: html`
            </div>
                ${!motors.length? html`<h2 class="no-avaliable">No result.</h2>` : motors.map(motorTemplate) }
            </div>
        `}
    </div>
</section>`;

const motorTemplate = (motor) =>html`
<div class="motorcycle">
    <img src=${motor.imageUrl} alt="example1" />
    <h3 class="model">${motor.model}</h3>
    <a class="details-btn" href="/catalog/${motor._id}">More Info</a>
</div>`;

async function onSearch ({search}) {
    if (!search) {
        return alert('Search must by filed!');
    }
    const motors = await get(`/data/motorcycles?where=model%20LIKE%20%22${search}%22`);
    const onStart = false;
    render(searchTemplate(onStart, motors));
}