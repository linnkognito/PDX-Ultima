export const homeLocation = { lat: 45.478937, lng: -122.6100302 };

export const calcDistance = (startPos = homeLocation, destPos) => {
  const toRadians = (degrees) => degrees * (Math.PI / 180);

  const R = 3958.8; // Radius of Earth in miles
  const dLat = toRadians(destPos.lat - startPos.lat);
  const dLng = toRadians(destPos.lng - startPos.lng);

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRadians(startPos.lat)) *
      Math.cos(toRadians(destPos.lat)) *
      Math.sin(dLng / 2) *
      Math.sin(dLng / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return (R * c).toFixed(1); // Distance in miles
};
