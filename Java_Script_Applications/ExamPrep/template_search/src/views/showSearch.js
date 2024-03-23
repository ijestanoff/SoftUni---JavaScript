import { searchItems } from '../data/events.js';
import { html, render } from '../lib.js';
import { createSubmitHandler } from '../util.js';

export function showSearchView () {
    const onStart = true;
    render(searchTemplate(onStart));
}

//@submit=${createSubmitHandler(onSearch)}
// ${onStart? html`<h2 class="no-result">No result.</h2>`: html`
//     </div>
//         ${!items.length? html`<h2 class="no-avaliable">No result.</h2>` : items.map(itemTemplate) }
//     </div>
// `}
const searchTemplate = (onStart, items) =>html`
`;

//href="/catalog/${item._id}"
const itemTemplate = (item) =>html`
`;

async function onSearch ({search}) {
    if (!search) {
        return alert('Search must by filed!');
    }
    const items = await searchItems(search);
    const onStart = false;
    render(searchTemplate(onStart, items));
}

/*<section id="search">
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
                ${!items.length? html`<h2 class="no-avaliable">No result.</h2>` : items.map(itemTemplate) }
            </div>
        `}
    </div>
</section>*/

/*<div class="fruit">
    <img src=${item.imageUrl} alt="example1" />
    <h3 class="title">${item.name}</h3>
    <p class="description">${item.description}</p>
    <a class="details-btn" href="/catalog/${item._id}">More Info</a>
</div>*/