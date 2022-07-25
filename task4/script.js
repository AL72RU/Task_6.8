document.querySelector('a').addEventListener('click', function(e) {
    this.textContent = prompt('Введите текст:');
    e.preventDefault();
})