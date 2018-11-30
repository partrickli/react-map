/**
 *
 * @param {any[]} array
 * @param {(element) => boolean} criteria
 * @param {(element) => any} transform
 */
export function mapIf(array, criteria, transform) {
  return array.map((e) => (criteria(e) ? transform(e) : e));
}
