import { searchItems } from '../data/events.js';
import { html, render } from '../lib.js';
import { getUserData } from '../util.js';

let hasUser;
export function showSearchView () {
    const userData = getUserData();
    hasUser = !!userData;
    const onStart = true;
    render(searchTemplate(onStart, hasUser));
}

const searchTemplate = (onStart, hasUser, items) =>html`
<section id="searchPage">
    <h1>Search by Name</h1>

    <div class="search">
        <input id="search-input" type="text" name="search" placeholder="Enter desired albums's name">
        <button @click=${onSearch} class="button-list">Search</button>
    </div>

    <h2>Results:</h2>

    <!--Show after click Search button-->
    <div class="search-result">
        <!--If have matches-->
        ${onStart? html`<p class="no-result">No result.</p>`: html`
             </div>
                 ${!items.length? html`<p class="no-result">No result.</p>` : items.map((item) => itemTemplate(item, hasUser)) }
            </div>
        `}
        
    </div>
</section>`;

const itemTemplate = (item, hasUser) =>html`
<div class="card-box">
    <img src=${item.imagUrl}>
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

async function onSearch (e) {
    const search = e.target.parentElement.children[0];
    if (!search.value) {
        return alert('Search must by filed!');
    }
    const items = await searchItems(search.value);
    const onStart = false;
    render(searchTemplate(onStart, hasUser, items));
}