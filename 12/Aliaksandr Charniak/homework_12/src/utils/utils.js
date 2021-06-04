export const getCorrectedArray = (data, property) => {
  return data ? (data[property] ? data[property] : Array.isArray(data) ? data : [data]) : []
}
