import { page } from './lib.js';
import { showHome } from './views/home.js';

//showHome();
page('./', showHome);
page.start();