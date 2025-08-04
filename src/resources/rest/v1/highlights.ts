// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Highlights extends APIResource {
  list(
    query: HighlightListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<HighlightListResponse> {
    return this._client.get('/rest/v1/highlights', { query, ...options });
  }

  getByCollection(
    collectionID: number,
    query: HighlightGetByCollectionParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<HighlightGetByCollectionResponse> {
    return this._client.get(path`/rest/v1/highlights/${collectionID}`, { query, ...options });
  }
}

export interface HighlightListResponse {
  items: Array<HighlightListResponse.Item>;

  result: boolean;
}

export namespace HighlightListResponse {
  export interface Item {
    _id: string;

    created: string;

    link: string;

    note: string;

    raindropRef: number;

    tags: Array<string>;

    text: string;

    title: string;
  }
}

export interface HighlightGetByCollectionResponse {
  items: Array<HighlightGetByCollectionResponse.Item>;

  result: boolean;
}

export namespace HighlightGetByCollectionResponse {
  export interface Item {
    _id: string;

    created: string;

    link: string;

    note: string;

    raindropRef: number;

    tags: Array<string>;

    text: string;

    title: string;
  }
}

export interface HighlightListParams {
  page?: number;

  perpage?: number;
}

export interface HighlightGetByCollectionParams {
  page?: number;

  perpage?: number;
}

export declare namespace Highlights {
  export {
    type HighlightListResponse as HighlightListResponse,
    type HighlightGetByCollectionResponse as HighlightGetByCollectionResponse,
    type HighlightListParams as HighlightListParams,
    type HighlightGetByCollectionParams as HighlightGetByCollectionParams,
  };
}
