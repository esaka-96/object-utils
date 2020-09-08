/**
 * @summary checks if param is an object and not null
 * @param {any} obj
 */
export function isObject(obj: any) {
  return !!obj && typeof obj === 'object';
}
