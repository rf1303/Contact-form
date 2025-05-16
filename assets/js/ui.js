

export  function inputsClean() {
            const fieldError = document.querySelectorAll('.field__error');
            fieldError.forEach((e) => {
                e.classList.add('display__none');
            });      
        }

export  function messageError(inputId, index) {
            const fieldError = document.querySelectorAll('.field__error');
            inputId.classList.add('inputs__error');
            fieldError[index].classList.remove('display__none');
            console.log('messageError: ', inputId, ' ',index);
        }
     
export  function messageOk(inputId, index) {
            const fieldError = document.querySelectorAll('.field__error');
            inputId.classList.remove('inputs__error');
            fieldError[index].classList.add('display__none');
            console.log('messageOk: ', inputId, ' ',index);
        }

export function animateConsentIcon() {
            const consentIcon = document.querySelector('.consent__icon');
            consentIcon.style.animation = 'pulse 0.5s ease-in-out 2';
            setTimeout(() => {
                consentIcon.style.animation = '';
            }, 3000);
}
