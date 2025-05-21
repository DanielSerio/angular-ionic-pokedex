import { NamedItem } from "#types/list.types";

export interface PokemonAbility {
  effect_changes: AbilityEffectChange[];
  effect_entries: AbilityEffectEntry[];
  flavor_text_entries: AbilityFlavorTextEntry[];
  generation: NamedItem;
  id: number;
  is_main_series: boolean;
  name: string;
  names: AbilityName[];
  pokemon: PokemonListItem[];
}

export interface AbilityEffectChangeEntry {
  effect: string;
  language: NamedItem;
}

export interface AbilityEffectChange {
  effect_entries: AbilityEffectChangeEntry[];
  version_group: NamedItem;
}

export interface PokemonListItem {
  is_hidden: boolean;
  pokemon: NamedItem;
  slot: number;
}

export interface AbilityName {
  language: NamedItem;
  name: string;
}

export interface AbilityFlavorTextEntry {
  flavor_text: string;
  language: NamedItem;
  version_group: NamedItem;
}

export interface AbilityEffectEntry {
  effect: string;
  language: NamedItem;
  short_effect: string;
}