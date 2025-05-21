import { NamedItem } from "#types/list.types";

export interface ContestEffect {
  appeal: number;
  effect_entries: ContestEffectEntry[];
  flavor_text_entries: ContestEffectFlavorTextEntry[];
  id: number;
  jam: number;
}

export interface ContestEffectFlavorTextEntry {
  flavor_text: string;
  language: NamedItem;
}

export interface ContestEffectEntry {
  effect: string;
  language: NamedItem;
}


export interface ContestType {
  berry_flavor: NamedItem;
  id: number;
  name: string;
  names: ContestTypeName[];
}

export interface ContestTypeName {
  color: string;
  language: NamedItem;
  name: string;
}
