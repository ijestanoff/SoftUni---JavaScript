import { html } from '../lib.js';

export const paginator = (page, pages) => {
    const pageLinks = (new Array(pages)).fill(0);

    return html`<div>
    ${page > 1 ? html`<a href="?page=${page - 1}">&lt; Prev</a>` : html`<a>&lt; Prev</a>`}
    ${pageLinks.map((_, i) => pageIndex(i + 1, page))}
    ${page < pages ? html`<a href="?page=${page + 1}">Next &gt;</a>` : html`<a>Next &gt;</a>`}
    </div>`;
};

const pageIndex = (index, page) => index == page
    ? html`<span>${index}</span>`
    : html`<a href="?page=${index}">${index}</a>`;
