export function capitalizeFirstLetter(str) {
  if (!str) return '';

  return str.trim().charAt(0).toUpperCase() + str.trim().slice(1);
}
