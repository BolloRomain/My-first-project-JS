const reviewsFilter = {

    init: function() {
        reviewsFilter.addListeners();
    },

    addListeners: function() {

        const ratingCheckboxList = document.querySelectorAll('.filter');

        for (const ratingCheckbox of ratingCheckboxList) {
            ratingCheckbox.addEventListener('click', reviewsFilter.handleRatingFilter);
        }
    },

    handleRatingFilter: function(event) {

        const clickedElt = event.currentTarget;

        let clickedCheckbox = clickedElt.querySelector('input');

        const ratingValue = clickedCheckbox.value;

        const reviewsList = 
        document.querySelectorAll('.review[data-rating="'+ ratingValue +'"]');

        for (const reviewsElt of reviewsList) {
            reviewsElt.classList.toggle('review--hidden');
        }
    }
};

document.addEventListener('DOMContentLoaded', reviewsFilter.init);