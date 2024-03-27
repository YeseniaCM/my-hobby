import { container } from "./main";

const home = document.querySelector('#home');
home.addEventListener('click', printHomepage)

export function printHomepage() {
    container.innerHTML = '';

    const homePage = document.createElement('div');
    homePage.innerText = 'Heej';

    container.append(homePage)
    app.append(container)
}