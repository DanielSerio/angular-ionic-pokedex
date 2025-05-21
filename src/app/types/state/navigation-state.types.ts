import { BrowseResponse } from "#types/browse.types";

export interface NavigationState {
  nameKey: keyof BrowseResponse;
}

export interface DetailNavigationState extends NavigationState {
  [k: string]: any;
  url: string;
  name?: string;
}