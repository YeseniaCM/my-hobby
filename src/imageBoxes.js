import { container } from "./main"

export function printimagesBoxes () {
    container.innerHTML = '';

    const frontHeading = document.createElement('h1');
    frontHeading.innerText = "Heading";
    container.append(frontHeading);
    
    const imageBoxCount = 3;

    for (let i = 1; i <= imageBoxCount; i++){
        const imageBox = document.createElement('div');
        imageBox.classList.add('image-map');
        imageBox.textContent = "Heej";
        container.appendChild(imageBox);
    }

    
    app.appendChild(container)
}