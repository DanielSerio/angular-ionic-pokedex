import { EggGroup } from "#types/entity/egg-group.types";

export class ResponseValidation {
  private static isValidNumberID(value?: unknown): boolean {
    if (typeof value === 'number') {
      return value >= 1 && value % 1 === 0;
    }

    return false;
  }

  private static isValidArray(value?: unknown, mustHaveLength?: boolean): boolean {
    if (typeof value === 'object') {
      if (value === null) {
        return false;
      }

      if (!Array.isArray(value)) {
        return false;
      }

      if (mustHaveLength && value.length === 0) {
        return false;
      }

      return true;
    }

    return false;
  }

  public static isEggGroup(value: unknown): value is EggGroup {
    if (typeof value !== 'object' || value === null) {
      return false;
    }

    const casted = value as EggGroup;
    const tests = [
      [[casted.id], this.isValidNumberID],
      [[casted.pokemon_species], this.isValidArray]
    ] as const;

    for (const [params, validator] of tests) {
      const isValid = validator(...params);

      if (!isValid) {
        return false;
      }
    }

    return true;
  }
}
