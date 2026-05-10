const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export function assetPath(path: string) {
  if (!path.startsWith("/")) {
    return path;
  }

  return `${basePath}${path}`;
}

export function routePath(href: string) {
  if (!href.startsWith("/") || href.startsWith("//")) {
    return href;
  }

  return `${basePath}${href}`;
}
