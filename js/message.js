const message = {

     removeOldMessages: function(parentElt) {

        const oldMessages = parentElt.querySelectorAll('.message');

        for (const messageElt of oldMessages) {
            messageElt.remove();
        }
    },
    addMessageToElement: function (content, parentElt) {

        message.removeOldMessages(parentElt);
        const errorPElt = document.createElement('p');
        errorPElt.classList.add('message'); 
        errorPElt.textContent = content;
        parentElt.prepend(errorPElt);
    }

};