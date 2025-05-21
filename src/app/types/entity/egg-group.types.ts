import { NamedItem } from "#types/list.types";

export interface EggGroup {
  id: number;
  name: string;
  names: EggGroupName[];
  pokemon_species: NamedItem[];
}

export interface EggGroupName {
  language: NamedItem;
  name: string;
}