import './scss/style.scss'
import { printHomepage } from './homePage';
import { printimagesBoxes } from './imageBoxes';

export let container = document.createElement('div');
container.classList.add('container');
printimagesBoxes()

printHomepage()
