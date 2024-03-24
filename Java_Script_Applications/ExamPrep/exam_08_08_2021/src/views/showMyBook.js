import { getMyBooks } from '../data/events.js';
import { html, render } from '../lib.js';
import { getUserData } from '../util.js';

export async function showMyBook (ctx) {
    const userData = getUserData();
    const items = await getMyBooks(userData._id);
    render(myBookTemplate(items));
}

const myBookTemplate = (items) => html`
<section id="my-books-page" class="my-books">
    <h1>My Books</h1>
    <!-- Display ul: with list-items for every user's books (if any) -->

    ${items.length? html`
    <ul class="my-books-list">
        ${items.map(bookTemplate)}        
    </ul>`: html`<p class="no-books">No books in database!</p>`}
</section>`;

const bookTemplate = (item) =>html`
<li class="otherBooks">
    <h3>${item.title}</h3>
    <p>Type: ${item.type}</p>
    <p class="img"><img src=${item.imageUrl}></p>
    <a class="button" href="/catalog/${item._id}">Details</a>
</li>`;