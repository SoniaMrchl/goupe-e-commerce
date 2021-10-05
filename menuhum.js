const toggleButton = document.getElementById('toggle-button');
const sideBare = document.getElementById('side-bar');
toggleButton.addEventListener('click', show);

function show() {
    sideBare.classList.toggle('active');
    console.log('coucou')
}

console.log('coucou');



attention au majuscule il faut le faire exactement comme ca 