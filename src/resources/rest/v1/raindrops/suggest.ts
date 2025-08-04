// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Suggest extends APIResource {
  create(
    body: SuggestCreateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<SuggestCreateResponse> {
    return this._client.post('/rest/v1/raindrop/suggest', { body, ...options });
  }

  get(id: number, options?: RequestOptions): APIPromise<SuggestGetResponse> {
    return this._client.get(path`/rest/v1/raindrop/${id}/suggest`, options);
  }
}

export interface SuggestCreateResponse {
  result?: boolean;
}

export interface SuggestGetResponse {
  result?: boolean;
}

export interface SuggestCreateParams {
  link?: string;
}

export declare namespace Suggest {
  export {
    type SuggestCreateResponse as SuggestCreateResponse,
    type SuggestGetResponse as SuggestGetResponse,
    type SuggestCreateParams as SuggestCreateParams,
  };
}
