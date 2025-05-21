import { BrowseResponse } from '#types/browse.types';
import { ListOptions, ListResponse } from '#types/list.types';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoadingService } from './loading.service';
import { delay, finalize, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private _BASE_URL = 'https://pokeapi.co/api/v2';

  browseResponse$!: Observable<BrowseResponse>;

  constructor(private http: HttpClient, private loadingService: LoadingService) { }

  private getValidInt(n?: number, min: number = 0, defaultTo: number = 0) {
    if (n === undefined) {
      return defaultTo;
    }

    if (n <= min) {
      return min;
    }

    return ~~n;
  }
  private getValidLimit(n?: number) {
    return this.getValidInt(n, 1, 25);
  }

  private getValidOffset(n?: number) {
    return this.getValidInt(n);
  }

  /**
   * Sends an HTTP GET request to retrieve a BrowseResponse from a specified base URL.
   * @returns The `getBrowseMenu()` method is returning an HTTP GET request to the base URL with a
   * response of type `BrowseResponse`.
   */
  public getBrowseMenu() {
    this.loadingService.present('browse');
    this.browseResponse$ = this.http.get<BrowseResponse>(`${this._BASE_URL}`).pipe(
      delay(500), // Loading too quick. simulate lag for demo purposes
      finalize(() => {
        this.loadingService.dismiss('browse');
      })
    );
  }

  /**
   * Retrieves a list of items from a specified endpoint with optional limit and offset parameters.
   * @param endpoint - The `endpoint` parameter is a key of the `BrowseResponse` type.
   * @param [options] - The `options` parameter in the `getList` function is of type
   * `Partial<ListOptions>`, which means it is an object that may contain some or all of the properties
   * defined in the `ListOptions` interface. This allows for flexibility in providing additional
   * configuration options when calling the `getList` function
   * @returns The `getList` function is returning a HTTP GET request to a specific endpoint with query
   * parameters based on the provided options. The response is expected to be of type
   * `ListResponse<ExtendedItem>`, where `ExtendedItem` is a generic type that extends `object` or
   * `undefined`.
   */
  public getList<ExtendedItem extends object | undefined = undefined>(endpoint: keyof BrowseResponse, options?: Partial<ListOptions>) {
    const config = {
      limit: `${this.getValidLimit(options?.limit)}`,
      offset: `${this.getValidOffset(options?.offset)}`
    };

    const query = new URLSearchParams(config);

    return this.http.get<ListResponse<ExtendedItem>>(`${this._BASE_URL}/${endpoint}?${query.toString()}`);
  }

  /**
   * Retrieves an entity of type T from a specified endpoint using an HTTP GET request with a given ID.
   * @param endpoint - The `endpoint` parameter is a key of the `BrowseResponse` type, which is used to
   * specify the specific endpoint for the API request.
   * @param {number} id - The `id` parameter is a number that represents the unique identifier of the
   * entity you want to retrieve from the specified endpoint in the `getEntity` method.
   * @returns The `getEntity` method is returning an HTTP GET request to a specific endpoint with a given
   * ID, and it expects a response of type `T`.
   */
  public getEntity<T>(endpoint: keyof BrowseResponse, id: number) {
    return this.http.get<T>(`${this._BASE_URL}/${endpoint}/${id}`);
  }
}
