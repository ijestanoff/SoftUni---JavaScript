import { page } from './lib.js';
import { updateNav } from './util.js';
import { logout } from './data/users.js';
import { showHomeView } from './views/showHomeview.js';
import { showCatalog } from './views/showCatalog.js';
import { showCreateView } from './views/showCreateView.js';
import { showLoginView } from './users/login.js';
import { showRegisterView } from './users/register.js';
import { showDetailsView } from './views/showDetails.js';
import { showEditView } from './views/showEdit.js';
import { showDeleteView } from './views/showDelete.js';
import { showMyBook } from './views/showMyBook.js';

updateNav();

page('/', showHomeView);
page('/catalog', showCatalog);
page('/create', showCreateView);
page('/login', showLoginView);
page('/register', showRegisterView);
page('/catalog/:id', showDetailsView);
page('/edit/:id', showEditView);
page('/delete/:id', showDeleteView);
page('/myBook', showMyBook);
page.start();

document.querySelector('#logoutBtn').addEventListener('click', async () => {
    //href="javascript:void(0)" id="logoutBtn"
    logout();
    updateNav();
    page.redirect('/');
});
