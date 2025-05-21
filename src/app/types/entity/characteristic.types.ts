import { NamedItem } from "#types/list.types";

export interface Characteristic {
  descriptions: CharacteristicDescription[];
  gene_modulo: number;
  highest_stat: NamedItem;
  id: number;
  possible_values: number[];
}

export interface CharacteristicDescription {
  description: string;
  language: NamedItem;
}
