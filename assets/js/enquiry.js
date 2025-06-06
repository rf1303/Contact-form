
/* import {fieldError} from './ui.js' */


export function enquiryRadio(formValid) {
           enquirysClean();
           const queryEnquiry = document.querySelector('input[name="enquirys"]:checked');
           const fieldError = document.querySelectorAll('.field__error');
           if (queryEnquiry !== null) {
                 const queryEnquiryCheck = queryEnquiry.closest('.types__items');
                    console.log('checked enquiryRadio', formValid);
                    fieldError[3].classList.add('display__none');
        
                     queryEnquiryCheck.classList.add('types__items--checked'); 
            } else {
                 console.log('queryEnquiry: ', fieldError[3], ' ', queryEnquiry);
                 enquirysClean();
                 const querysInputs = document.querySelectorAll('.querys__inputs');
                 querysInputs.forEach(element => {
                     const errorRadio = element.closest('.types__items');
                     if(errorRadio) {
                         errorRadio.classList.add('inputs__error');
                     }
                 });
                 fieldError[3].classList.remove('display__none');
                 formValid = false;
            }
            console.log('formValid return: ', formValid);
            return formValid;
        }

export function enquirysClean() {
             const enquirysItem = document.querySelectorAll('.types__items');
             enquirysItem.forEach((e) => {
                 const inputsRadio = e.closest('.types__items');
                 inputsRadio.classList.remove('types__items--checked');
                 inputsRadio.classList.remove('inputs__error');
                 /* console.log('enquirysClean', inputsRadio); */
            });
        }

export  function enquirysCheck() {
            enquirysClean();
            const queryEnquirys = document.querySelector('input[name="enquirys"]:checked');
                console.log('queryEnquiry - enquirysCheck 1: ', queryEnquirys);
            if (queryEnquirys) {
                console.log('queryEnquiry - enquirysCheck 2');
                const queryEnquiryCheck = queryEnquirys.closest('.types__items');
                if (queryEnquiryCheck) {
                    queryEnquiryCheck.classList.add('types__items--checked'); 
                }
            } else {
                console.log('No hay radio selectetd');
            }
        }

export function enquirysChange() {
    const querysInputs = document.querySelectorAll('.querys__inputs');
    const queryEnquirys = document.querySelector('input[name="enquirys"]:checked');
    querysInputs.forEach(radio => {
        radio.addEventListener('change', enquirysCheck);
    })

  //TODO:
}
