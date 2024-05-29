function mirrorNumber() {
	let input = document.getElementById("numberInput").value; // Перетворюємо введене значення на ціле число
  let num = parseInt(input);
   // Перевірка, чи введено коректне трьохзначне число
  if (!isNaN(num) && input.length === 3) {
  let digits = input.split(''); // Формуємо дзеркальне число
  let result = digits[2] + digits[1] + digits[0];
  document.getElementById("result_1").innerText = result;
  } else {
  	document.getElementById("result_1").innerText = "Введіть чотирицифрове число! Спробуйте ще раз!";
  }
}


function mixedProduct(v1, v2, v3) {
  return v1.x * (v2.y * v3.z - v2.z * v3.y) +
         v1.y * (v2.z * v3.x - v2.x * v3.z) +
         v1.z * (v2.x * v3.y - v2.y * v3.x);
}
function checkComplanarity() {     // Отримуємо координати векторів a, b і c з полів вводу
  const a = { x: parseFloat(document.getElementById('ax').value), y: parseFloat(document.getElementById('ay').value), z: parseFloat(document.getElementById('az').value) };
  const b = { x: parseFloat(document.getElementById('bx').value), y: parseFloat(document.getElementById('by').value), z: parseFloat(document.getElementById('bz').value) };
  const c = { x: parseFloat(document.getElementById('cx').value), y: parseFloat(document.getElementById('cy').value), z: parseFloat(document.getElementById('cz').value) };

  const result = mixedProduct(a, b, c);   // Обчислюємо змішаний добуток векторів

  if (result === 0) {
      document.getElementById('result_2').textContent = 'Вектори a, b і c є компланарними.';
  } else {
      document.getElementById('result_2').textContent = 'Вектори a, b і c не є компланарними.';
  }
}

function countNumbers() {
  const k = parseInt(document.getElementById('k').value);
  let count = 0;

  for (let i = 1000; i < 10000; i++) {
      const digitsSum = Array.from(String(i), Number).reduce((acc, curr) => acc + curr, 0);
      if (digitsSum === k) {
          count++;
      }
  }

  document.getElementById('result_3').textContent = `Кількість чисел з сумою цифр, рівною ${k}: ${count}`;
}

function factorize() {

  debugger;
  const numberInput1 = document.getElementById('numberInput1').value;
  console.log(numberInput1);
  let number = parseInt(numberInput1);

  // if (isNaN(number) || number <= 0) {
  //     console.log("Please enter a valid natural number.");
  //     return;
  // }

  let factors = [];
  let divisor = 2;

  while (number > 1) {
      if (number % divisor === 0) {
          factors.push(divisor);
          number =  number / divisor;
      } else {
          divisor++;
      }
  }
  document.getElementById('result_4').innerText = factors.join(' , ') + " множників";
  // console.log("Prime factors:", factors.join(', '));
  
}


