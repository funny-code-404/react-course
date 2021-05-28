const chunk = (array, length) => {
  let result = []
  for (let i = 0; i < array.length / length; i++) {
    result.push(array.slice(i * length, i * length + length))
  }
  return result
}

const isArrSolved = (arr) => {
  if (arr.includes('')) {
    return false
  }

  let prevVal

  for (let i = 0; i < arr.length; i++) {
    if (!!prevVal && prevVal !== arr[i]) {
      return false
    }

    prevVal = arr[i]
  }

  return true
}

const isHorisontalSolved = (chunkFields) => {
  for (let i = 0; i < chunkFields.length; i++) {
    if (isArrSolved(chunkFields[i])) {
      return true
    }
  }

  return false
}

const isVerticalSolved = (fields) => {
  const indexes = [0, 3, 6]

  for (let i = 0; i < 3; ++i) {
    const value = (index) => fields[indexes[index] + i]

    if (isArrSolved([value(0), value(1), value(2)])) {
      return true
    }
  }

  return false
}

const isDiagonalSolved = (chunkFields) => {
  const fields = chunkFields

  if (fields[1][1] === '') {
    return false
  }

  return (
    isArrSolved([fields[0][0], fields[1][1], fields[2][2]]) ||
    isArrSolved([fields[0][2], fields[1][1], fields[2][0]])
  )
}

const getResult = (chunkFields, fields) => {
  return (
    isHorisontalSolved(chunkFields) || isVerticalSolved(fields) || isDiagonalSolved(chunkFields)
  )
}

export const check = (fields) => {
  const chunkFields = chunk(fields, 3)
  const res = getResult(chunkFields, fields)
  return res
}
