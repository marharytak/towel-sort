module.exports = function towelSort(matrix) {
  if (!matrix || !matrix.length) { return []; }
  return matrix.map((arr, index) => { return index % 2 ? arr.reverse() : arr }).flat();
}