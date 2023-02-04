const destinations = {

    notLoggedInUserMessage: 'Vous devez être connecté pour gérer vos favoris',

    init: function() {
        destinations.addLikeEvents();

        destinations.initDestinations();
    },
    addLikeEvents: function() {
        const likeBtnElt = document.querySelectorAll('.btn__like');
        for (const currentBtn of likeBtnElt) {
            currentBtn.addEventListener('click', destinations.handleLikeClick);
        }
    },
   
    handleLikeClick: function(event) {
        const targetElt = event.currentTarget;
       
        const parentElt = targetElt.closest('.card');
    
        message.addMessageToElement(destinations.notLoggedInUserMessage,parentElt);

        
        parentElt.classList.toggle('card--favori');
        if (parentElt.classList.contains('card--favori')) {
            destinations.storeToLocalStorage(parentElt.id);
        }
        else {
            destinations.removeToLocalStorage(parentElt.id);
        }
    },

    storeToLocalStorage: function(destinationId) {
        let destinationsLocal = localStorage.getItem('destinations');
        let destinationsList = [];

        if (destinationsLocal !== null) {
            destinationsList = JSON.parse(destinationsLocal);
        }
        destinationsList.push(destinationId);
        destinationsLocal = JSON.stringify(destinationsList);
        localStorage.setItem('destinations', destinationsLocal);
    },

    removeToLocalStorage: function(destinationId) {
        let destinationsLocal = localStorage.getItem('destinations');
        let destinationsList = [];
        if (destinationsLocal !== null) {
            destinationsList = JSON.parse(destinationsLocal);
        }
        destinationsList.pop(destinationId);
        destinationsLocal = JSON.stringify(destinationsList);
        localStorage.setItem('destinations', destinationsLocal);
    },

    initDestinations: function() {

        const destinationsCards = document.querySelectorAll('.card');
        for (const destinationCard of destinationsCards) {
            destinationCard.classList.remove('card--favori');
        }

        const destinationsLocal = localStorage.getItem('destinations');
        if (destinationsLocal !== null) {
            destinationsList = JSON.parse(destinationsLocal);
            for(const destinationId of destinationsList){
                const destinationCard = document.getElementById(destinationId);
                destinationCard.classList.add('card--favori');
            }
        }
    }
}

document.addEventListener('DOMContentLoaded', destinations.init);

function handleLikeClick() {
    
}