
// You should implement your task here.

module.exports = function towelSort (matrix) {
  return Array.isArray(matrix) ? matrix.reduce((sum, current, index) => ([...sum, ...(index + 1) % 2 === 0 ? current.sort((a, b) => (b-a)) : current]), []) : [] ;
}