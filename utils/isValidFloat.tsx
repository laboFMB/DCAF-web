export function isValidFloat(value) {
  return !isNaN(parseFloat(value)) && isFinite(value)
}
