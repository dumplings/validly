export const typeIs = value => {
  const type = Object.prototype.toString.call(value).slice(8, -1)
  if (type === 'Number' && (value - value !== 0)) return 'Not_Valid_Number'
  return type
}

export const generate = (verify, generateDefaults) =>
  (value, defaults) => {
    if (verify(value)) return value
    if (verify(defaults)) return defaults
    return generateDefaults
  }
