const newsletterBtnElt = document.querySelector(".header  .header__part:nth-child(1) .menu__item:nth-child(2)");

function handleNewsletterOn(event) {

    event.preventDefault();
    const newsletterAsideElt = document.querySelector('.newsletter');
    
    newsletterAsideElt.classList.add('newsletter--on');
}

newsletterBtnElt.addEventListener('click', handleNewsletterOn);


const closeBtnElt = document.querySelector(".newsletter .newsletter__close");

function handleNewsletterOff() {
    
    const newsletterAsideElt = document.querySelector('.newsletter');
   
    flushError();
   
    newsletterAsideElt.classList.remove('newsletter--on');
}


closeBtnElt.addEventListener('click', handleNewsletterOff);

const newsletterFormElt = document.querySelector('.newsletter form');

const handleNewsletterSubmit = function(event) {

    event.preventDefault();
    const userEmail = document  .getElementById('subscriber-email')
                                .value;
    if (isForbiddenEmail(userEmail) === true) {
       
        flushError();
      
        displayError();
        
    }
    else {
        newsletterFormElt.submit();
       
    }
}

//* Association de l'écouteur d'événement submit au formulaire
newsletterFormElt.addEventListener('submit', handleNewsletterSubmit);


const isForbiddenEmail = function(email) {

    // On récupère le tableau des domaines interdits
    const forbiddenDomains = [
        '@yopmail.com',
        '@yopmail.fr',
        '@yopmail.net',
        '@cool.fr.nf',
        '@jetable.fr.nf',
        '@courriel.fr.nf',
        '@moncourrier.fr.nf',
        '@monemail.fr.nf',
        '@monmail.fr.nf',
        '@hide.biz.st',
        '@mymail.infos.st',
    ];


    for (const currentDomain of forbiddenDomains) {
       
        if (email.includes(currentDomain)) {
           
            return true;
        }
    }

    return false;
}

const displayError = function() {

    const errorPElt = document.createElement('p');
    errorPElt.classList.add('message'); 
    errorPElt.textContent = 'Les adresses jetables ne sont pas autorisées !';

  
    const newsletterAsideElt = document.querySelector('.newsletter');
    newsletterAsideElt.prepend(errorPElt);
}

const flushError = function() {

    
    const newsletterAsideElt = document.querySelector('.newsletter');

    if (newsletterAsideElt.querySelector('.message') != null ) {

        newsletterAsideElt.removeChild(newsletterAsideElt.querySelector('.message'));  

    }
}