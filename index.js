//constants

const frame = document.getElementById('text-container');

let counter = -1;

const letters = document.getElementsByClassName('letters');

//detect keystrokes

window.addEventListener('keydown', function(event){
    if (event.key === 'Enter'){
        frame.innerHTML +=
        `<p class='letters enter'></p>`
        counter++;
        letters[counter - 1].classList.remove('drop');
    } else if (event.key === 'Backspace'){
        letters[counter].remove();
        counter--;
    } else if (event.key === 'CapsLock' 
    || event.key === 'Shift' 
    || event.key === 'Control' 
    || event.key === 'Alt'
    || event.key === 'Tab' 
    || event.key === 'Delete' 
    || event.key === 'End' 
    || event.key === 'PageDown' 
    || event.key === 'Insert' 
    || event.key === 'Home' 
    || event.key === 'PageUp' 
    || event.key === 'Meta' 
    || event.key === 'ArrowUp' 
    || event.key === 'ArrowDown' 
    || event.key === 'ArrowLeft' 
    || event.key === 'ArrowRight' 
    || event.key === 'ContextMenu' 
    || event.key === 'Escape'
    || event.key === 'ScrollLock'
    || event.key === 'Pause'
    || event.key === 'F1'
    || event.key === 'F2'
    || event.key === 'F3'
    || event.key === 'F4'
    || event.key === 'F5'
    || event.key === 'F6'
    || event.key === 'F7'
    || event.key === 'F8'
    || event.key === 'F9'
    || event.key === 'F10'
    || event.key === 'F11'
    || event.key === 'F12'
    ) {
    } else {
        frame.innerHTML +=
        `<p class='letters alpha drop'> ${event.key}
        </p>`
        counter++;
        letters[counter - 1].classList.remove('drop');
    }
});

// const button = document.getElementById('button');

// button.addEventListener('click', function(){
//     for (let i = 0; i <= letters.length; i++) {
//         letters[i].classList.add('fly');
//         counter--;
//     }
// });

