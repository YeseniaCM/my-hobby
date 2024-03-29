import { container } from "./main";

const home = document.querySelector('#home');
home.addEventListener('click', printHomepage)

export function printHomepage() {
    container.innerHTML = '';

    const homeTitle = document.createElement('h1');
    homeTitle.innerText = 'Välkommen!';
    const homeUnderTitle = document.createElement('h3');
    homeUnderTitle.innerText = 'En sida om en av mina hobbys'
    const homeContent = document.createElement('div');
    homeContent.classList.add('homeContent')
    homeContent.innerHTML = ` 
    <img src="./src/images/IMG_5484.JPG" alt="">
    `;

    container.append(homeTitle, homeUnderTitle, homeContent)
    app.append(container)
}