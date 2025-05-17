import { wrappersSubmit } from './formSubmit.js';
import { enquiryRadio } from './enquiry.js';
/* import { accessKeys } from './access-key.js' */
import  './access-key.js'; 

document.addEventListener('DOMContentLoaded', function () {
    console.log('Inicio');
    /* let formValid = true; */
    
   // import('./access-key.js').then(() => {
   //      console.log('access-key.js cargado');
   //  }).catch(err => {
   //      console.error('Error al cargar access-key.js:', err);
   //  });

    // ...tu lógica principal
/* }); */

    const wrappersForm = document.querySelector('.wrappers__form');
    const messageSuccess = document.querySelector('.message__success');
    wrappersForm.addEventListener('submit', function (e) {
        e.preventDefault();

        let formValid = true;

        formValid = wrappersSubmit(formValid);
/* ##### ENQUIRY RADIO ########### */
        formValid = enquiryRadio(formValid);
        
        if (formValid) {
            messageSuccess.classList.remove('display__none');            

            const headText = document.querySelector('.head__text');

            headText.setAttribute('tabindex', '-1');
            headText.focus();
        }
    });
});



