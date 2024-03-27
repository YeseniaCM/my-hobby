import './css/style.css'
import { printHomepage } from './homePage';
import { printimagesBoxes } from './imageBoxes';

export let container = document.createElement('div');
container.classList.add('conatiner');
printimagesBoxes()

printHomepage()
