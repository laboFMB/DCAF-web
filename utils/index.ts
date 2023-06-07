export function isValidFloat(value) {
  return !isNaN(parseFloat(value)) && isFinite(value)
}

export function parseMin(min: string) {
  if (isValidFloat(min)) {
    return parseFloat(min)
  }
  return -10000
}
