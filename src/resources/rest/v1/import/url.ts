// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';

export class URL extends APIResource {
  checkExists(
    body: URLCheckExistsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<URLCheckExistsResponse> {
    return this._client.post('/rest/v1/import/url/exists', { body, ...options });
  }

  parse(
    query: URLParseParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<URLParseResponse> {
    return this._client.get('/rest/v1/import/url/parse', { query, ...options });
  }
}

export interface URLCheckExistsResponse {
  id: number;

  duplicates: Array<URLCheckExistsResponse.Duplicate>;

  ids: Array<number>;

  result: boolean;
}

export namespace URLCheckExistsResponse {
  export interface Duplicate {
    _id: number;

    link: string;
  }
}

export interface URLParseResponse {
  item: URLParseResponse.Item;

  result: boolean;
}

export namespace URLParseResponse {
  export interface Item {
    cover: string;

    excerpt: string;

    media: Array<Item.Media>;

    meta: Item.Meta;

    title: string;

    type: string;
  }

  export namespace Item {
    export interface Media {
      link: string;
    }

    export interface Meta {
      tags: Array<string>;
    }
  }
}

export interface URLCheckExistsParams {
  urls?: Array<string>;
}

export interface URLParseParams {
  url?: string;
}

export declare namespace URL {
  export {
    type URLCheckExistsResponse as URLCheckExistsResponse,
    type URLParseResponse as URLParseResponse,
    type URLCheckExistsParams as URLCheckExistsParams,
    type URLParseParams as URLParseParams,
  };
}
