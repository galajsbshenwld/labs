function sumLastFivePositives() {
    // debugger;
    const input = document.getElementById('numberInput').value;
    let numbers = input.split(',').map(Number); //Розділяємо рядок на окремі числа, використовуючи кому як роздільник. Потім за допомогою .map(Number) перетворюємо кожний рядок на числове значення.
    let positives = numbers.filter(number => number > 0);  //Фільтруємо масив чисел, залишаючи тільки додатні числа.) 

    if (positives.length < 5) { //Перевіряємо, чи є у нас щонайменше 5 додатніх чисел. Якщо ні, виводимо повідомлення про введення щонайменше 5 додатніх чисел.
        document.getElementById('result_1').innerText = 'Введіть щонайменше 5 додатніх чисел.';
        return;
    }

    const lastFivePositiveSum = positives.slice(-5).reduce((acc, curr) => acc + curr, 0); // Вибираємо останні п’ять додатніх чисел з масиву positives і обчислюємо їх суму за допомогою .reduce().
    document.getElementById('result_1').innerText = `Сума останніх 5 додатніх елементів: ${lastFivePositiveSum}`;
}




function factorial(n) {
    // Базовий випадок: факторіал 0 або 1 дорівнює 1
    // debugger;
    if (n === 0 || n === 1) {
        return 1;
    } else {
        // Рекурсивний випадок: обчислюємо факторіал для менших чисел
        return n * factorial(n - 1);
    }
}
function calculateFactorial() {
    const inputNumber1 = parseInt(document.getElementById('numberInput1').value);
    let result_1 = factorial(inputNumber1);
    document.getElementById('result_2').innerText = `Факторіал числа ${inputNumber1} дорівнює ${result_1}`;
}


function calculateArrayLength() {
    // debugger;
    const input = document.getElementById('numberInput2').value;
    const arrayInput = document.getElementById('result_3'); // Отримуємо елемент, де буде виведено результат
    // trim() — видаляє зайві пробіли з початку та кінця введеного рядка
    if (input.trim() === "") {    // Перевірка, чи введено щось в поле
        arrayInput.innerText = 'Помилка: Не вказано масив.';
        return;
    }
        // Розбиваємо введений рядок на масив, видаляючи зайві пробіли
    const array = input.split(',').map(item => item.trim());
    const length = array.length;
    arrayInput.innerText = `Довжина масиву дорівнює: ${length}`;
}