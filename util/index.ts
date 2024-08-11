function getPublicAssetUrl(filePath: string) {
  const pathPrefix = import.meta.env.VITE_PATH_PREFIX;
  let output = filePath;

  if (!pathPrefix) return output;
  return `/${pathPrefix}${output}`;
}

export function getIconUrl(fileName: string) {
  return getPublicAssetUrl(`/icons/${fileName}.svg`);
}

export function getImageUrl(fileName: string) {
  return getPublicAssetUrl(`/images/${fileName}`);
}
