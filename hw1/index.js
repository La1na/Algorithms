const readline = require('node:readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

function sumThreeNumbers() {
  let num1, num2, num3;

  readline.question('Введите первое число: ', (answer1) => {
    num1 = parseInt(answer1);
    if (isNaN(num1)) {
      console.log('Ошибка: Введите корректное число.');
      readline.close();
      return;
    }

    readline.question('Введите второе число: ', (answer2) => {
      num2 = parseInt(answer2);
      if (isNaN(num2)) {
        console.log('Ошибка: Введите корректное число.');
        readline.close();
        return;
      }

      readline.question('Введите третье число: ', (answer3) => {
        num3 = parseInt(answer3);
        if (isNaN(num3)) {
          console.log('Ошибка: Введите корректное число.');
          readline.close();
          return;
        }

        const sum = num1 + num2 + num3;
        console.log(`Сумма равна: ${sum}`);
        readline.close();
      });
    });
  });
}

sumThreeNumbers();



// НАЧАЛО
//   readline = СОЗДАТЬ_ИНТЕРФЕЙС_ВВОДА_ВЫВОДА()
//   ФУНКЦИЯ сложитьТриЧисла()
//     num1, num2, num3

//     readline.ЗАДАТЬ_ВОПРОС("Введите первое число: ", CALLBACK (ответ1)) 
//       num1 = ЦЕЛОЕ_ЧИССЛО(ответ1)
//       ЕСЛИ НЕ ЯВЛЯЕТСЯ_ЧИСЛОМ(num1) ТО
//         ВЫВЕСТИ("Ошибка: Введите корректное число.")
//         readline.ЗАКРЫТЬ()
//         ВОЗВРАТ
//       КОНЕЦ_ЕСЛИ

//       readline.ЗАДАТЬ_ВОПРОС("Введите второе число: ", CALLBACK (ответ2))
//         num2 = ЦЕЛОЕ_ЧИСЛО(ответ2)
//         ЕСЛИ НЕ ЯВЛЯЕТСЯ_ЧИСЛОМ(num2) ТО
//           ВЫВЕСТИ("Ошибка: Введите корректное число.")
//           readline.ЗАКРЫТЬ()
//           ВОЗВРАТ
//         КОНЕЦ_ЕСЛИ

   
//         readline.ЗАДАТЬ_ВОПРОС("Введите третье число: ", CALLBACK (ответ3))  
//           num3 = ЦЕЛОЕ_ЧИСЛО(ответ3)
//           ЕСЛИ НЕ ЯВЛЯЕТСЯ_ЧИСЛОМ(num3) ТО
//             ВЫВЕСТИ("Ошибка: Введите корректное число.")
//             readline.ЗАКРЫТЬ()
//             ВОЗВРАТ
//           КОНЕЦ_ЕСЛИ
//           сумма = num1 + num2 + num3     
//           ВЫВЕСТИ("Сумма равна:", сумма)     
//           readline.ЗАКРЫТЬ()
//         КОНЕЦ_CALLBACK
//       КОНЕЦ_CALLBACK
//     КОНЕЦ_CALLBACK
//   КОНЕЦ_ФУНКЦИИ


//   сложитьТриЧисла()
// КОНЕЦ