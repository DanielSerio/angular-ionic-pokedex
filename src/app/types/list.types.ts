type NamedItemBase<T extends object | undefined> = T extends undefined ? {
  name: string;
  url: string;
} : T & {
  name: string;
  url: string;
};

export type NamedItem<T extends object | undefined = undefined> = NamedItemBase<T>;

export interface ListResponse<ExtendedItem extends object | undefined = undefined> {
  count: number;
  next: string;
  previous: null;
  results: NamedItem<ExtendedItem>[];
}

export interface ListOptions {
  limit: number;
  offset: number;
}