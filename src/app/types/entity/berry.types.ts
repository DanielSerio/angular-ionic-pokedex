import { NamedItem } from "#types/list.types";

export interface Berry {
  firmness: NamedItem;
  flavors: BerryFlavorListItem[];
  growth_time: number;
  id: number;
  item: NamedItem;
  max_harvest: number;
  name: string;
  natural_gift_power: number;
  natural_gift_type: NamedItem;
  size: number;
  smoothness: number;
  soil_dryness: number;
}

export interface BerryFlavorListItem {
  flavor: NamedItem;
  potency: number;
}

export interface BerryName {
  language: NamedItem;
  name: string;
}

export interface BerryListItem {
  berry: NamedItem;
  potency: number;
}

export interface BerryFirmness {
  berries: NamedItem[];
  id: number;
  name: string;
  names: BerryName[];
}

export interface BerryFlavor {
  berries: BerryListItem[];
  contest_type: NamedItem;
  id: number;
  name: string;
  names: BerryName[];
}
