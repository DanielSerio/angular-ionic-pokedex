import { TitleCasePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titleKabab',
  standalone: true,
})
export class TitleKababPipe implements PipeTransform {

  constructor(private titleCasePipe: TitleCasePipe) { }

  private titleCase = (word: string): string => {
    return this.titleCasePipe.transform(word.trim());
  };
  /**
   * Transforms a string by converting it to title case and replacing hyphens with spaces.
   * @param {string | null} [value] - The `value` parameter in the `transform` function is a string or
   * null. The function first checks if the `value` is a string, and if not, it returns an empty string.
   * If the `value` contains a hyphen '-', it splits the string by hyphens, capital
   * @returns The `transform` method takes a string as input, checks if it is a valid string, and then
   * processes it accordingly. If the input string contains a hyphen '-', it splits the string by
   * hyphens, converts each part to title case using the `titleCase` method, and then joins them back
   * with a space. If the input string does not contain a hyphen, it directly converts
   */
  transform(value?: string | null): string {
    if (typeof value !== 'string') {
      return '';
    }

    if (!value.indexOf('-')) {
      return this.titleCase(value);
    }

    return value.split(/[\-]/g).map(this.titleCase).join(' ');
  }
}
