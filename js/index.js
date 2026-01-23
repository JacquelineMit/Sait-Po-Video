'use strict'

let buttons = document.querySelectorAll('.btnOt')
for (let i = 0; i < buttons.length; i++) {
    const button = buttons[i]; // 0, 1, 2, 3
    button.addEventListener("click", function(event) { 
        event.preventDefault();
        button.classList.toggle('btn--active');
        let newText = button.dataset.toggleText;
        button.dataset.toggleText = button.innerHTML;
        button.innerHTML = newText;
    })
}