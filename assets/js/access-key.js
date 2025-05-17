
import {enquirysClean, enquirysCheck, enquirysChange} from './enquiry.js'
/* export function accessKeys() { */
    console.log('accessKeys');
    const querysInputs = document.querySelectorAll('.querys__inputs');
    const mailName = document.querySelector('.mail__name');
    const messageText = document.querySelector('.message__text');

    querysInputs.forEach(element => {
        element.addEventListener('focus', () => {
            enquirysClean();
            const itemsFocus = element.closest('.types__items');
            if (itemsFocus) {
                itemsFocus.classList.add('types__items--checked')
            }
        })

        element.addEventListener('blur', () => {
            setTimeout(() => {
               const act = document.activeElement;
               if (!act || !act.classList.contains('querys__inputs')) {
                   enquirysClean();
               }
            }, 20);
        });
    enquirysChange();
    });

    enquirysChange();

    querysInputs.forEach((querys, index) => {
    console.log('querysInputs forEach: ', querys, ' ', index);    
        querys.addEventListener('keydown', function(e) {
            if (e.key === 'Tab' && !e.shiftKey) {
                if ( index < querysInputs.length -1) {
                    e.preventDefault();
                    querysInputs[index +1].focus();
                    console.log('TAB+');
                }
            } else if (e.key === 'Tab' && e.shiftKey) {
                if (index > 0) {
                    e.preventDefault();
                    querysInputs[index - 1].focus();
                    console.log('TAB-');
                }    
            } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
                e.preventDefault();
                console.log('ArrowLeft');
                if (index > 0) {
                    querysInputs[index - 1].focus();
                } else {   
                   mailName.focus(); 
                }
            }  else if (e.key === "ArrowRight" || e.key === "ArrowDown") {
                e.preventDefault();
                    console.log('ArrowRight antes if index:', index);
                if (index < querysInputs.length - 1) {
                    querysInputs[index +1].focus();
                    console.log('ArrowRight');
                } else {
                    messageText.focus();
                }
            } 
        });

    });  
/* } */
