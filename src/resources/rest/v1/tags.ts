// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as CollectionsAPI from './collections/collections';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Tags extends APIResource {
  update(
    collectionID: number,
    body: TagUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CollectionsAPI.SimpleResponse> {
    return this._client.put(path`/rest/v1/tags/${collectionID}`, { body, ...options });
  }

  delete(
    collectionID: number,
    body: TagDeleteParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CollectionsAPI.SimpleResponse> {
    return this._client.delete(path`/rest/v1/tags/${collectionID}`, { body, ...options });
  }

  getByCollection(collectionID: number, options?: RequestOptions): APIPromise<TagGetByCollectionResponse> {
    return this._client.get(path`/rest/v1/tags/${collectionID}`, options);
  }
}

export interface TagGetByCollectionResponse {
  items: Array<TagGetByCollectionResponse.Item>;

  result: boolean;
}

export namespace TagGetByCollectionResponse {
  export interface Item {
    _id: string;

    count: number;
  }
}

export interface TagUpdateParams {
  replace?: string;

  tags?: Array<string>;
}

export interface TagDeleteParams {
  tags?: Array<string>;
}

export declare namespace Tags {
  export {
    type TagGetByCollectionResponse as TagGetByCollectionResponse,
    type TagUpdateParams as TagUpdateParams,
    type TagDeleteParams as TagDeleteParams,
  };
}
