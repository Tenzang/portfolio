export function getIconUrl(fileName: string) {
  const pathPrefix = import.meta.env.VITE_PATH_PREFIX;
  let output = `/icons/${fileName}.svg`;

  if (!pathPrefix) return output;
  return `/${pathPrefix}${output}`;
}
