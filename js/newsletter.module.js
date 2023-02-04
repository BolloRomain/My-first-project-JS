const newsletter = {

    newsletterBtnElt: null,
    closeBtnElt: null,
    newsletterFormElt: null,

    init: function() {

        newsletter.newsletterBtnElt = document.querySelector(".header  .header__part:nth-child(1) .menu__item:nth-child(2)");
        newsletter.newsletterBtnElt.addEventListener('click', newsletter.handleNewsletterOn);

        newsletter.closeBtnElt = document.querySelector(".newsletter .newsletter__close");
        newsletter.closeBtnElt.addEventListener('click', newsletter.handleNewsletterOff);

        newsletter.newsletterFormElt = document.querySelector('.newsletter form');
        newsletter.newsletterFormElt.addEventListener('submit', newsletter.handleNewsletterSubmit);
    },

    handleNewsletterOn: function(event) {
        event.preventDefault();
        const newsletterAsideElt = document.querySelector('.newsletter');
        newsletterAsideElt.classList.add('newsletter--on');
    },

    handleNewsletterOff: function() {
        const newsletterAsideElt = document.querySelector('.newsletter');
        newsletter.flushError();
        newsletterAsideElt.classList.remove('newsletter--on');
    },

    handleNewsletterSubmit: function(event) {
        event.preventDefault();
        const userEmail = document .getElementById('subscriber-email').value;
        if (newsletter.isForbiddenEmail(userEmail) === true) {
            newsletter.flushError();
            newsletter.displayError();
        }
        else {
            newsletter.newsletterFormElt.submit();
        }
    },

    isForbiddenEmail: function(email) {
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
    },

    displayError: function() {
        const errorPElt = document.createElement('p');
        errorPElt.classList.add('message');
        errorPElt.textContent = 'Les adresses jetables ne sont pas autorisées !';
        const newsletterAsideElt = document.querySelector('.newsletter');
        newsletterAsideElt.prepend(errorPElt);
    },

    flushError: function() {
        const newsletterAsideElt = document.querySelector('.newsletter');
        if (newsletterAsideElt.querySelector('.message') != null ) {
            newsletterAsideElt.removeChild(newsletterAsideElt.querySelector('.message'));  
    
        }
    }

};

document.addEventListener('DOMContentLoaded', newsletter.init);


























//? L'encart de newsletter doit apparaitre au click sur le menu "newsletter"

// =>  écouteur d'événement
// 1. sélectionner l'élément qui va écouter l'événement
/// ce sera le bouton "newsletter"

const newsletterBtnElt = document.querySelector(".header  .header__part:nth-child(1) .menu__item:nth-child(2)");

// 2. quelles instructions devront être exécutées au click du bouton newsletter ?
/// il faut créer le handler

function handleNewsletterOn(event) {

    event.preventDefault();
    // on sélectionne l'encart de newsletter
    const newsletterAsideElt = document.querySelector('.newsletter');
    
    // on veut modifier la liste des classes sur l'encart
    newsletterAsideElt.classList.add('newsletter--on');
}

// 3. on place un écouteur d'événement click sur le bouton newsletter et on dit à JS qu'à chaque click il faut exécuter le code contenu dans handleNewsletterOn
newsletterBtnElt.addEventListener('click', handleNewsletterOn);


//? l'encart de newsletter doit disparaitre au click sur le bouton fermer de l'encart

// => écouteur d'événement
// 1. sélectionne l'élément qui va écouter l'événement
/// ce sera le bouton fermer de l'encart

const closeBtnElt = document.querySelector(".newsletter .newsletter__close");

// 2. quelles instructions devront être exécutées au click du bouton pour fermer l'encart de la newsletter ?
/// il faut créer le handler

function handleNewsletterOff() {
    // on sélectionne l'encart de newsletter
    const newsletterAsideElt = document.querySelector('.newsletter');
    // On supprime l'affiche du message d'erreur
    flushError();
    // on veut modifier la liste des classes sur l'encart
    newsletterAsideElt.classList.remove('newsletter--on');
}

// 3. on place un écouteur d'événement click sur le bouton de fermeture de l'encart newsletter et on dit à JS qu'à chaque click il faut exécuter le code contenu dans handleNewsletterOff
closeBtnElt.addEventListener('click', handleNewsletterOff);


//! Traitement de la saisie de formulaire

//? déclencher la vérification de la saisie au moment de la soumission du formulaire
// => l'élément formulaire devra écouter l'événement submit 

//* Sélectionner l'élément form
const newsletterFormElt = document.querySelector('.newsletter form');

//* Création du Handler qui sera déclenché à la survenue d'un submit
const handleNewsletterSubmit = function(event) {

    // on bloque l'envoi du formulaire
    event.preventDefault();

    // On récupère la valeur saisie dans le champ email
    const userEmail = document  .getElementById('subscriber-email')
                                .value;
    // Vérification de la validité du domaine de l'email
    if (isForbiddenEmail(userEmail) === true) {
        // on supprime l'ancien message
        flushError();
        // déclencher l'affichage d'un message d'erreur
        displayError();
        // comme il y a une erreur, on ne soumet pas le formulaire

    }
    else {
        // dans le cas où :
        // (isForbiddenEmail(userEmail) === false)
        newsletterFormElt.submit();
        //? https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/submit
    }
}

//* Association de l'écouteur d'événement submit au formulaire
newsletterFormElt.addEventListener('submit', handleNewsletterSubmit);


/**
 * Le but de cette fonction c'est de retourner TRUE si l'email passé en argument contient un nom de domaine interdit
 * Et FALSE si l'email passé en argument ne contient pas un nom de domaine interdit
 * 
 * isForbiddenEmail => Est-ce que c'est un email interdit ?
 * 
 * @param {string} email 
 * @returns bool
 */
const isForbiddenEmail = function(email) {

    // On récupère le tableau des domaines interdits
    const forbiddenDomains = [
        '@yopmail.com',//0
        '@yopmail.fr',//1
        '@yopmail.net',//2
        '@cool.fr.nf',
        '@jetable.fr.nf',
        '@courriel.fr.nf',
        '@moncourrier.fr.nf',
        '@monemail.fr.nf',
        '@monmail.fr.nf',
        '@hide.biz.st',
        '@mymail.infos.st',
    ];

    // On ne veut récupérer que les valeurs de chaque élément : for ..of
    for (const currentDomain of forbiddenDomains) {
        // on vérifie si la chaine de caractère contenue dans currentDomain est présente dans la chaine de caractères dans email
        if (email.includes(currentDomain)) {
            // si oui, alors, le domaine de l'email fait partie des domaines interdits
            return true;
        }
    }

    // si on a réussi à parcourir tout le tableau sans jamais tomber sur un des domaines interdits, alors, on peut dire que l'email n'a pas de nom de domaine interdit
    return false;
}

/**
 * le but de cette fonction est d'afficher un message
 */
const displayError = function() {

    // création d'un nouvel élément
    const errorPElt = document.createElement('p');
    errorPElt.classList.add('message'); // ligne 61 de styles.css
    errorPElt.textContent = 'Les adresses jetables ne sont pas autorisées !';

    // rattachement du nouvel élément
    const newsletterAsideElt = document.querySelector('.newsletter');
    newsletterAsideElt.prepend(errorPElt);
}

const flushError = function() {

    // d'abord je vais chercher dans le DOM l'élément aside qui contient le formulaire de newsletter
    const newsletterAsideElt = document.querySelector('.newsletter');

    // on vérifie d'abord si l'élément avec la classe message existe
    // pour éviter de tenter de le supprimer et de créer une erreur si il n'existe pas
    if (newsletterAsideElt.querySelector('.message') != null ) {

        // removeChild va supprimer l'élément enfant qui a comme classe "message"
        newsletterAsideElt.removeChild(newsletterAsideElt.querySelector('.message'));  

    }
}