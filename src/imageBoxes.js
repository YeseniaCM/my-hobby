import { container } from "./main.js"

export function printimagesBoxes () {
    container.innerHTML = '';

    const frontHeading = document.createElement('h1');
    frontHeading.innerText = "Heading";
    container.append(frontHeading);

    const imageBoxs = [
        imageBoxOne,
        imageBoxTwo,
        imageBoxThree
    ];

    const imageBoxClasses = [
        "imageBoxOne",
        "imageBoxTwo",
        "imageBoxThree"
    ];

    function handleClick(clickedIndex) {
        imageBoxs.forEach((imageBoxs, index) => {
            const imageBox = container.querySelector(`.${imageBoxClasses[index]}`);
            if (index !== clickedIndex) {
                imageBox.classList.add('hidden');
            } else {
                imageBox.classList.remove('hidden'); // Visa den klickade boxen
            }
        });
        imageBoxs[clickedIndex]();
    }

    imageBoxs.forEach((imageBoxs, index) => {
        const imageBox = document.createElement('div');
        imageBox.classList.add('image-map');
        imageBox.classList.add(imageBoxClasses[index]); // Add class based on index
        imageBox.textContent = "Heej";
        imageBox.addEventListener('click', () => handleClick(index));
        container.appendChild(imageBox);
    });
    
    app.appendChild(container)
}

function imageBoxOne(){
       
    console.log('klick på box 1');
}

function imageBoxTwo(id){
    console.log('klick på box 2', id);
}

function imageBoxThree(id){
    console.log('klick på box 3', id);
}