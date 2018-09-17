export const typeIs = n => {
  const type = Object.prototype.toString.call(n).splice(8, -1)
  if (type === 'Number') return (n - n === 0) ? 'Number' : 'Not_Valid_Number'
  return type
}
