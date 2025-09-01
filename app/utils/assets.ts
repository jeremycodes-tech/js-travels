/**
 * Returns the correct asset path for files in `/public`,
 * including GitHub Pages basePath when exported.
 */
export const asset = (path: string): string => {
  // Next.js sets this automatically based on next.config.js
  const basePath = process.env.__NEXT_ROUTER_BASEPATH || "";
  return `${basePath}${path}`;
};
