export function capitalizeFirstLetter(str: string): string {
  if (str.length === 0) return str;
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

export function capitalizeFirstLetterOfCity(city: string): string {
  return city
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

export function formatLocation(location: string): string {
  const parts = location.split(',').map((part) => part.trim());
  if (parts.length < 3) return location;

  const [city, cityCode, country] = parts;
  return `${capitalizeFirstLetterOfCity(city)}, ${capitalizeFirstLetter(country)}`;
}