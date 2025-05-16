import {wrappersSubmit} from './formSubmit.js';
import {enquiryRadio} from './enquiry.js';

document.addEventListener('DOMContentLoaded', function () {
    console.log('Inicio');
    /* let formValid = true; */
    const wrappersForm = document.querySelector('.wrappers__form');
    // const firstName = document.getElementById('first');
    // const lastName = document.getElementById('last');
    // const emailContact = document.getElementById('mail');
    // const messageText = document.getElementById('messageText');
    // const consentCheck = document.getElementById('consent');
    const querysInputs = document.querySelectorAll('.querys__inputs');
    const wrappersMessage = document.querySelector('.wrappers__message');
    const wrappersConsent = document.querySelector('.wrappers__consent');
    const messageSuccess = document.querySelector('.message__success');
    const mailName = document.querySelector('.mail__name');
    const fieldError = document.querySelectorAll('.field__error');
    /* const queryEnquiry = document.querySelector('input[name="enquirys"]:checked'); */
    // const validMailRegex = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i;
    //
    //  const firtsLast = /^[A-Za-zÑñ]+$/;

    wrappersForm.addEventListener('submit', function (e) {
        e.preventDefault();

        // if (!firtsLast.test(firstName.value.trim()) || !firstName.value.trim()) {
        //     messageError(firstName, 0);
        //     formValid = false;
        //     console.log('firstName: ', firstName);
        // } else {
        //     messageOk(firstName, 0);
        // }
        // if (!firtsLast.test(lastName.value.trim()) || !lastName.value.trim()) {
        //     messageError(lastName, 1);
        //     formValid = false;
        //     console.log('lastName: ', lastName);
        // } else {
        //     messageOk(lastName, 1);
        // }
        //
        // if (!validMailRegex.test(emailContact.value.trim()) || !emailContact.value.trim()) {
        //     messageError(emailContact, 2)
        //     console.log('emailContact :', emailContact);
        //     formValid = false;
        // } else {
        //     messageOk(emailContact, 2);
        //     console.log('email: ', emailContact.value);
        // }
 
/* ###### MESSAGE TEXT  ########### */
        // if (!messageText.value.trim()) {
        //     messageError(messageText, 4)
        //     formValid = false;
        // } else {
        //     messageOk(messageText, 4)
        //     console.log('messageOk 👍'); 
        // }
        //
        // if (!consentCheck.checked) {
        //     consent.focus();
        //     formValid = false;
        //
        //    const consentIcon = document.querySelector('.consent__icon');
        //     consentIcon.style.animation = 'pulse 0.5s ease-in-out 2';
        //     setTimeout(() => {
        //         consentIcon.style.animation = '';
        //     }, 3000); 
        // }
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


    // function enquiryRadio() {
    //     enquirysClean();
    //     const queryEnquiry = document.querySelector('input[name="enquirys"]:checked');
    //     if (queryEnquiry !== null) {
    //         const queryEnquiryCheck = queryEnquiry.closest('.types__items');
    //             console.log('checked', queryEnquiry.value);
    //             fieldError[3].classList.add('display__none');
    //
    //             queryEnquiryCheck.classList.add('types__items--checked'); 
    //     } else {
    //         console.log('queryEnquiry: ', fieldError[3], ' ', queryEnquiry);
    //         enquirysClean();
    //         const querysInputs = document.querySelectorAll('.querys__inputs');
    //         querysInputs.forEach(element => {
    //             const errorRadio = element.closest('.types__items');
    //             if(errorRadio) {
    //                 errorRadio.classList.add('inputs__error');
    //             }
    //         });
    //         fieldError[3].classList.remove('display__none');
    //         formValid = false;
    //     }
    // }

    // function enquirysClean() {
    //     const enquirysItem = document.querySelectorAll('.types__items');
    //     enquirysItem.forEach((e) => {
    //         const inputsRadio = e.closest('.types__items');
    //         inputsRadio.classList.remove('types__items--checked');
    //         inputsRadio.classList.remove('inputs__error');
    //         console.log('enquirysClean', inputsRadio);
    //     });
    // }


            
    // function inputsClean() {
    //     fieldError.forEach((e) => {
    //         e.classList.add('display__none');
    //     });      
    // }
    //
    // function messageError(inputId, index) {
    //     inputId.classList.add('inputs__error');
    //     fieldError[index].classList.remove('display__none');
    //     console.log('messageError: ', inputId, ' ',index);
    // }
    //  
    // function messageOk(inputId, index) {
    //     inputId.classList.remove('inputs__error');
    //     fieldError[index].classList.add('display__none');
    //     console.log('messageOk: ', inputId, ' ',index);
    //
    // }
});



