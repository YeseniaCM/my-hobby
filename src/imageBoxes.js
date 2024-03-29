import { container } from "./main.js"
import { showSlideshow } from "./slideShow.js";

const galleri = document.querySelector('#galleri');
galleri.addEventListener('click', printimagesBoxes)

function createImage(src, alt) {
    const img = document.createElement('img');
    img.src = src;
    img.alt = alt;
    return img;
}

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

    const boxTexts = [
        "Unik text för box 1",
        "Unik text för box 2",
        // "Unik text för box 3"
    ];

    const backgroundImages = [
        createImage('src/images/IMG_7057.JPG', 'Bildbeskrivning 1'),
        createImage('src/images/IMG_5166.JPG', 'Bildbeskrivning 2'),
        // createImage('src/images/IMG_5166.JPG', 'Bildbeskrivning 3')
    ];

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
        imageBox.appendChild(backgroundImages[index]);
        const textElement = document.createElement('h4');
        textElement.textContent = boxTexts[index];
        imageBox.appendChild(textElement);
        imageBox.addEventListener('click', () => handleClick(index));
        container.appendChild(imageBox);
    });
    
    app.appendChild(container)
}

const boxImages = [
    createImage(['src/images/IMG_7057.JPG', 'Bildbeskrivning 1', 'src/images/IMG_7058.JPG', 'Bildbeskrivning 1', 'src/images/IMG_7059.JPG','Bildbeskrivning 1']),
    createImage(['src/images/IMG_7057.JPG', 'Bildbeskrivning 1', 'src/images/IMG_7058.JPG', 'Bildbeskrivning 1', 'src/images/IMG_7059.JPG','Bildbeskrivning 1']),
];

function imageBoxOne(imageBox){
    showSlideshow([boxImages])
    imageBox.appendChild(document.createTextNode("Klickade på box 1"));
    console.log('klick på box 1');
}

function imageBoxTwo(){
    console.log('klick på box 2');
}

// function imageBoxThree(id){
//     console.log('klick på box 3', id);
// }