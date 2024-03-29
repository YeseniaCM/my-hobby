import { container } from "./main";

export function showSlideshow(imageSrcs) {
    
    const slideshowElement = document.createElement('div');
    slideshowElement.classList.add('slideshow');

    imageSrcs.forEach((imageSrc) => {
        const imageElement = document.createElement('img');
        imageElement.src = imageSrc;
        imageElement.alt = 'Slideshow image';
        slideshowElement.appendChild(imageElement);
    });

    container.appendChild(slideshowElement);

    
    slideshowElement.addEventListener('click', () => {
        container.removeChild(slideshowElement); 
    });

    document.body.appendChild(slideshowElement);
}