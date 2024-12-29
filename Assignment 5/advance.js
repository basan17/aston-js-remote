// сложность алгоритма для функции firstSum равна O(n)
// т.к. в худшем сценарии - где нет пары подходящих чисел,
// алгоритм пройдет по циклу for полностью.

export function firstSum(arr, sum) {
  const seenNumbers = new Set();

  for (let number of arr) {
    const complement = sum - number;

    if (seenNumbers.has(complement)) {
      return [complement, number];
    }

    seenNumbers.add(number);
  }

  return [];
}

const testArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(firstSum(testArr, 13));
