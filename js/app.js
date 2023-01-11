'use strict';

const accordionContent = document.querySelectorAll('.accordion__content');
accordionContent.forEach((content) => {
    content.setAttribute('hidden', '')
})

function showContent(el) {
    if(button[el].getAttribute('id') === accordionContent[el].getAttribute('aria-labelledby') && accordionContent[el].hasAttribute('hidden')) {
        button[el].setAttribute('aria-expanded', 'true');
        accordionContent[el].setAttribute('aria-hidden', 'false');
        accordionContent[el].removeAttribute('hidden');
    }  else {
        button[el].setAttribute('aria-expanded', 'false');
        accordionContent[el].setAttribute('aria-hidden', 'true');
        accordionContent[el].setAttribute('hidden', '');
    }
}

const button = document.querySelectorAll('button');
for(let i = 0; i < button.length; i++) {
    button[i].addEventListener('click', () => {
        showContent(i)
    })
} 





