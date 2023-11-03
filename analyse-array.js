export default function analyseArray(array) {
  if (array.length === 0) {
    return { average: null, min: null, max: null, length: 0 };
  }

  let sum = 0;
  let min = Number.POSITIVE_INFINITY;
  let max = Number.NEGATIVE_INFINITY;

  for (const number of array) {
    sum += number;

    if (number < min) {
      min = number;
    }

    if (number > max) {
      max = number;
    }
  }

  return { average: sum / array.length, min, max, length: array.length };
}
