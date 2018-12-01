export class Collection extends Array {
  /**
   * @template Element
   * @template TransformedElement
   * @param {(element: Element) => boolean} criteria
   * @param {(element: Element) => TransformedElement} transform
   * @returns {TransformedElement[]}
   */
  conditionalMap(criteria, transform) {
    return this.map((element) => {
      return criteria(element) ? transform(element) : element;
    });
  }
}
