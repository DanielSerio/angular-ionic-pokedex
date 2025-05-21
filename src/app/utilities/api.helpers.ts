import { NamedItem } from "#types/list.types";

export class ApiHelpers {
  private static getIDFromURL(url: string): number {
    const matches = `${url}`.replace(/\/$/, '').match(/\d+$/) ?? [];

    // will never happen, but lets make typescript happy
    if (matches.length === 0) {
      return -1;
    }

    return Number(matches[0]);
  }

  /**
   * Takes a `NamedItem` object and returns a new object with an additional `id` property extracted from 
   * the `url` property.
   * @param item - The `item` parameter in the `getExtendedNamedItem` function is of type `NamedItem<T>`,
   * where `T` extends `object` or `undefined`. This means that `item` is an object with a `url`
   * property, and the function returns a new object with all
   * @returns The `getExtendedNamedItem` function is returning a new object that includes all properties
   * of the input `item` object, along with an additional `id` property that is obtained by calling the
   * `getIDFromURL` method with the `url` property of the `item` object.
   */
  public static getExtendedNamedItem<T extends object | undefined>(item: NamedItem<T>) {
    return ({
      ...item,
      id: this.getIDFromURL(item.url)
    });
  }
}
