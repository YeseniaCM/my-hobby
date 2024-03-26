import './scss/style.scss'
import { printHomepage } from './homePage';
import { printimagesBoxes } from './imageBoxes';
import { menuToggle } from './toggleMenu';

export let container = document.createElement('div');
container.classList.add('container');
printimagesBoxes()

printHomepage()
