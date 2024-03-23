import { deleteFruit } from '../data/events.js';
import { page } from '../lib.js';

export async function showDeleteView(ctx) {
    const del = confirm('Are you sure deletetion?');
    if (del) {
        await deleteFruit(ctx.params.id);
        page.redirect('/catalog');
    }
}
