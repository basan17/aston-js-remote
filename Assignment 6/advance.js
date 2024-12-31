// Напишите функцию, которая будет проходить через массив целых чисел
// и выводить индекс каждого элемента с задержкой в 3 секунды.

// async function printIndices(arr, delay = 3000) {
//   for (const key of arr.keys()) {
//     console.log(key);
//     await wait(delay);
//   }
// }

// function wait(delay) {
//   return new Promise((resolve, reject) => {
//     if (delay < 0) {
//       reject(new Error("Delay must not be negative"));
//     }
//     setTimeout(() => {
//       resolve();
//     }, delay);
//   });
// }

// printIndices([1, 2, 3]);

Promise.resolve("A") // После того как call stack освободился, выполняются микротаски
  // т.к. промис ресолвится успешно со значением "A", начинают выполняться его then
  .then(function (a) {
    console.log(2, a); // В первом then в консоль выводится 2 A,
    // далее передается строка "B"
    // Output: 1, 2 A

    return "B";
  })

  .then(function (a) {
    // Начинает выполняться второй then с полученым "B"
    Promise.resolve("C") // тут создается еще один промис - "второй" промис

      .then(function (a) {
        // эти then должны выполняться "параллельно" с then предыщуего - первого промиса
        console.log(7, a); // поэтому они будут чередоваться с then "первого" промиса
      }) // эта функция возвращает undefined
      // Output: 1, 2 A, 3 B, 7 C
      .then(function (a) {
        // получаем undefined
        console.log(8, a); // Output: 1, 2 A, 3 B, 7 C, 4 B, 8 undefined
      }); // тут "второй" параллельный промис заканчивается

    console.log(3, a); // Output: 1, 2 A, 3 B

    return a; // далее передается также "B"
  })

  .then(function (a) {
    // получаем "B"
    Promise.resolve("D") // создается еще один промис, который будет выполняться
      // "параллельно" с первым промисом и его then тоже будут "чередоваться"
      // как это было с Promise.resolve("C")

      .then(function (a) {
        console.log(9, a); // Output: 1, 2 A, 3 B, 7 C, 4 B, 8 undefined, 9 D
      }) // функция возвращает undefined

      .then(function (a) {
        console.log(10, a); // Output: 1, 2 A, 3 B, 7 C, 4 B, 8 undefined, 9 D, 5 undefined, 10 undefined
      });

    console.log(4, a); // Output: 1, 2 A, 3 B, 7 C, 4 B
  })

  .then(function (a) {
    console.log(5, a); // Output: 1, 2 A, 3 B, 7 C, 4 B, 8 undefined, 9 D, 5 undefined
  });

console.log(1); // Сначала выполнится перый синхронный код Output: 1

setTimeout(function () {
  // после выполнения всех микротасков,
  // начинает выполняться перая задача в очереди макротасков
  console.log(6); // // Output: 1, 2 A, 3 B, 7 C, 4 B, 8 undefined, 9 D, 5 undefined, 10 undefined, 6
}, 0);
