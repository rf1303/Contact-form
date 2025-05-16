import {messageError, messageOk, animateConsentIcon} from './ui.js';



const validMailRegex = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i;

const firtsLast = /^[A-Za-zÑñ]+$/;


export function wrappersSubmit(formValid) {

    const firstName = document.getElementById('first');
    const lastName = document.getElementById('last');
    const emailContact = document.getElementById('mail');
    const messageText = document.getElementById('messageText');
    const consentCheck = document.getElementById('consent');


        if (!firtsLast.test(firstName.value.trim()) || !firstName.value.trim()) {
            messageError(firstName, 0);
            formValid = false;
            console.log('firstName: ', firstName);
        } else {
            messageOk(firstName, 0);
        }
        if (!firtsLast.test(lastName.value.trim()) || !lastName.value.trim()) {
            messageError(lastName, 1);
            formValid = false;
            console.log('lastName: ', lastName);
        } else {
            messageOk(lastName, 1);
        }

        if (!validMailRegex.test(emailContact.value.trim()) || !emailContact.value.trim()) {
            messageError(emailContact, 2)
            console.log('emailContact :', emailContact);
            formValid = false;
        } else {
            messageOk(emailContact, 2);
            console.log('email: ', emailContact.value);
        }

        if (!messageText.value.trim()) {
            messageError(messageText, 4)
            formValid = false;
        } else {
            messageOk(messageText, 4)
            console.log('messageOk 👍'); 
        }

        if (!consentCheck.checked) {
            consent.focus();
            formValid = false;

           const consentIcon = document.querySelector('.consent__icon');
            consentIcon.style.animation = 'pulse 0.5s ease-in-out 2';
            setTimeout(() => {
                consentIcon.style.animation = '';
            }, 3000); 
        }
    return  formValid; 
}
