'use strict';

// Hide all the content of each button
const accordionContent = document.querySelectorAll('.accordion__content');
accordionContent.forEach((content) => {
    content.setAttribute('hidden', '')
})

// Showing content with spacebar or enter key
function showContent(el) {
    // Check if the button has the same attr of div content(aria-labelledby) value and also attribute of 'hidden'
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

// Navigate up and down key
function arrowContent(el, key) {
    const accordionPanel = el.parentElement;
    const sibling = key === 40 ? accordionPanel.nextElementSibling : accordionPanel.previousElementSibling;
    if(sibling === null) return;
    const heading = sibling.firstElementChild;
    if(heading === null) return;
    heading.firstElementChild.focus();
}


const button = document.querySelectorAll('button');
for(let i = 0; i < button.length; i++) {
    button[i].addEventListener('click', () => {
        showContent(i)
    })
}


button.forEach(btn => {
    btn.addEventListener('keydown', (e) => {
        if(e.keyCode == 40) {
            arrowContent(btn.parentElement, e.keyCode)
        } if (e.keyCode == 38) {
            arrowContent(btn.parentElement, e.keyCode)
        }
    })
})





