import { BrowseResponse } from "#types/browse.types";

export interface NavigationState {
  nameKey: keyof BrowseResponse;
}