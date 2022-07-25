const ConsoleLog = document.querySelector('#ConsoleLog');
ConsoleLog.addEventListener('click', () => {
    alert('Служит для вывода информации в консоль');
})


const Alert = document.querySelector('#Alert');
Alert.addEventListener('click', () => {
    alert('Показывает сообщение в модальном окне и ждёт, пока пользователь нажмёт кнопку «ОК»');
})

const Prompt = document.querySelector('#Prompt');
Prompt.addEventListener('click', () => {
    alert('Отображает модальное окно с текстом, полем для ввода текста и кнопками OK/Отмена');
})