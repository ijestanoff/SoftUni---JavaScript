import { deleteItem } from '../data/events.js';
import { page } from '../lib.js';

export async function showDeleteView(ctx) {
    await deleteItem(ctx.params.id);
    page.redirect('/catalog');
}
