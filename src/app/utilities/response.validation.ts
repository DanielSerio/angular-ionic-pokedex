import { PokemonAbility } from "#types/entity/ability.types";
import { Berry } from "#types/entity/berry.types";
import { EggGroup } from "#types/entity/egg-group.types";

export class ResponseValidation {
  private static isValidNumber(value?: unknown): value is number {
    return typeof value === 'number' && !isNaN(value);
  }

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

  private static isValidName(value?: unknown): boolean {
    return typeof value === 'string' && value.length > 0;
  }

  public static isAbility(value: unknown): value is PokemonAbility {
    if (typeof value !== 'object' || value === null) {
      return false;
    }

    const casted = value as PokemonAbility;
    const tests = [
      [[casted.id], this.isValidNumberID],
      [[casted.names], this.isValidArray],
      [[casted.effect_changes], this.isValidArray],
      [[casted.effect_entries], this.isValidArray],
      [[casted.flavor_text_entries], this.isValidArray],
      [[casted.pokemon], this.isValidArray],
      [[casted.generation.name], this.isValidName]
    ] as const;

    for (const [params, validator] of tests) {
      const isValid = validator(...params);

      if (!isValid) {
        return false;
      }
    }

    return true;
  }

  public static isBerry(value: unknown): value is Berry {
    if (typeof value !== 'object' || value === null) {
      return false;
    }

    const casted = value as Berry;
    const tests = [
      [[casted.id], this.isValidNumberID],
      [[casted.growth_time], this.isValidNumber],
      [[casted.flavors], this.isValidArray],
    ] as const;

    for (const [params, validator] of tests) {
      const isValid = validator(...params);

      if (!isValid) {
        return false;
      }
    }

    return true;
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
