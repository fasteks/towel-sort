module.exports = function towelSort (matrix) {
  if (!matrix) {
    return [];
  }

  const sortedMatrix = matrix.reduce((acc, rec, index) => {
    if (index % 2 !== 0) {
      return [...acc, rec.reverse()]
    }
    return [...acc, rec]
  }, [])

  return sortedMatrix.flat()
}