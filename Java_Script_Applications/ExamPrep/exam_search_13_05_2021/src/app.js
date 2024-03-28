import { page } from './lib.js';
import { updateNav } from './util.js';
import { logout } from './data/users.js';
import { showHomeView } from './views/showHomeview.js';
import { showCatalog } from './views/showCatalog.js';
import { showLoginView } from './users/login.js';
import { showRegisterView } from './users/register.js';
import { showCreateView } from './views/showCreateView.js';
import { showDetailsView } from './views/showDetails.js';
import { showEditView } from './views/showEdit.js';
import { showDeleteView } from './views/showDelete.js';
import { showSearchView } from './views/showSearch.js';
import { showMyListings } from './views/showMyListing.js';

updateNav();

page('/', showHomeView);
page('/catalog', showCatalog);
page('/login', showLoginView);
page('/register', showRegisterView);
page('/create', showCreateView);
page('/catalog/:id', showDetailsView);
page('/edit/:id', showEditView);
page('/delete/:id', showDeleteView);
page('/byYear', showSearchView);
page('/myListings', showMyListings);
page.start();

document.querySelector('#logoutBtn').addEventListener('click', async () => {
    logout();
    updateNav();
    page.redirect('/');
});