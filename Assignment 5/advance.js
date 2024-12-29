// сложность алгоритма для функции firstSum равна O(n^2)
// т.к. проходит по двум циклам for, где один вложен в другой.

export function firstSum(arr, total) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j > 0; j--) {
      if (arr[i] == arr[j]) continue;
      if (arr[i] + arr[j] === total) {
        return [arr[i], arr[j]];
      }
    }
  }
  return [];
}

const testArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(firstSum(testArr, 13));
