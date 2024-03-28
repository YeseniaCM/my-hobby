import { container } from "./main.js"

export function printimagesBoxes () {
    container.innerHTML = '';

    const frontHeading = document.createElement('h1');
    frontHeading.innerText = "Heading";
    container.append(frontHeading);

    const imageBoxs = [
        imageBoxOne,
        imageBoxTwo,
        // imageBoxThree
    ];

    const imageBoxClasses = [
        "imageBoxOne",
        "imageBoxTwo",
        // "imageBoxThree"
    ];

    const backgroundImages = [
        createImage('src/images/IMG_7057.JPG', 'Bildbeskrivning 1'),
        createImage('src/images/IMG_5166.JPG', 'Bildbeskrivning 2'),
        createImage('src/images/IMG_5166.JPG', 'Bildbeskrivning 3')
    ];

    function createImage(src, alt) {
        const img = document.createElement('img');
        img.src = src;
        img.alt = alt;
        return img;
    }

    function handleClick(clickedIndex) {
        imageBoxs.forEach((imageBoxs, index) => {
            const imageBox = container.querySelector(`.${imageBoxClasses[index]}`);
            if (index !== clickedIndex) {
                imageBox.classList.add('hidden');
            } else {
                imageBox.classList.remove('hidden'); 
            }
        });
        imageBoxs[clickedIndex](container.querySelector(`.${imageBoxClasses[clickedIndex]}`));
    }

    imageBoxs.forEach((imageBoxs, index) => {
        const imageBox = document.createElement('div');
        imageBox.classList.add('image-map');
        imageBox.classList.add(imageBoxClasses[index]); 
        imageBox.textContent = "Heej";
        imageBox.appendChild(backgroundImages[index]);
        imageBox.addEventListener('click', () => handleClick(index));
        container.appendChild(imageBox);
    });
    
    app.appendChild(container)
}

function imageBoxOne(imageBox, backgroundImage){
    imageBox.appendChild(document.createTextNode("Klickade på box 1"));
    console.log('klick på box 1');
}

function imageBoxTwo(id){
    console.log('klick på box 2', id);
}

// function imageBoxThree(id){
//     console.log('klick på box 3', id);
// }