
const slider = {

    currentPosition: 0,

    sliderImagesNumber: 3,

    init: function() {
        slider.generateSliderImages();
        slider.addEvents();
    },

    addEvents: function() {

        const sliderButtons = document.querySelectorAll('.slider__btn');

        const nextBtn = sliderButtons[1];
        nextBtn.addEventListener('click', slider.handleNextSlide);
    },

    handleNextSlide: function () {
        let newPosition = slider.currentPosition +1;
        
        if (newPosition > slider.sliderImagesNumber - 1) {
            newPosition = 0;
        }
        slider.goToSlide(newPosition);
    },

    goToSlide: function(newPosition) {
        if (newPosition >= 0 && newPosition < slider.sliderImagesNumber) {

            const currentSliderImage = document.querySelector('.slider__img--current');

            if (currentSliderImage) {
                currentSliderImage.classList.remove('slider__img--current');    
            } else {
                console.warn('Il n\'y avait aucun slide affiché dans le diaporama');
            }
 
            const sliderImages = document.querySelectorAll('.slider__img');
            
            const newSliderImage = sliderImages[newPosition];
            newSliderImage.classList.add('slider__img--current');

            slider.currentPosition = newPosition;

        } else {
            console.warn('Le slide à afficher n\'existe pas');
        }
    },

    generateSliderImages: function() {
        const sliderImages = [
            'ocean.jpg',
            'ski.jpg',
            'city.jpg'
         ];
        const sliderSectionElt = document.querySelector('.slider');
    
        for (const currentImg of sliderImages) {
            const newSliderImg = document.createElement('img');
            newSliderImg.src = 'img/' + currentImg;
            newSliderImg.classList.add('slider__img');
            newSliderImg.alt = "image du slider";
            sliderSectionElt.prepend(newSliderImg);
        }
    
        const firstSliderImage = document.querySelector('.slider__img');
    
        firstSliderImage.classList.add('slider__img--current');
    }
}

document.addEventListener('DOMContentLoaded', slider.init);
