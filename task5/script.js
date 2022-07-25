const textIn = document.querySelector('input');
const button = document.querySelector('button');
const textOut = document.querySelector('#duplicateField');

textIn.addEventListener('keyup', () => {
    textOut.textContent = textIn.value
});

button.addEventListener('click', () => {
    console.log(textIn.value);
    textIn.value = '';
    textOut.textContent = textIn.value;
})

