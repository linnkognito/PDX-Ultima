export function capitalizeFirstLetter(str) {
  if (!str) return '';

  return str.trim().charAt(0).toUpperCase() + str.trim().slice(1);
}

export function createAndCleanUpArray(arr) {
  return arr
    .split(',')
    .map((el) => el.trim())
    .filter(Boolean);
}
