import { wrappersSubmit } from './formSubmit.js';
import { enquiryRadio, enquirysCheck, enquirysClean } from './enquiry.js';
/* import { accessKeys } from './access-key.js' */
import  './access-key.js'; 

document.addEventListener('DOMContentLoaded', function () {
    console.log('Inicio');
    const wrappersForm = document.querySelector('.wrappers__form');
    const messageSuccess = document.querySelector('.message__success');
    const querysInputs = document.querySelector('input[name="enquirys"]');
  
    querysInputs.addEventListener('keydown', enquirysCheck());
   

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



