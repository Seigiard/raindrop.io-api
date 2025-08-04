// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as CollectionsAPI from './collections';
import * as CoversAPI from './covers';
import { CoverGetByTextResponse, CoverListResponse, Covers } from './covers';
import * as SharingAPI from './sharing';
import {
  Role,
  Sharing,
  SharingCreateParams,
  SharingCreateResponse,
  SharingDeleteUserParams,
  SharingUpdateUserParams,
} from './sharing';
import * as RaindropsAPI from '../raindrops/raindrops';
import { APIPromise } from '../../../../core/api-promise';
import { type Uploadable } from '../../../../core/uploads';
import { RequestOptions } from '../../../../internal/request-options';
import { multipartFormRequestOptions } from '../../../../internal/uploads';
import { path } from '../../../../internal/utils/path';

export class Collections extends APIResource {
  covers: CoversAPI.Covers = new CoversAPI.Covers(this._client);
  sharing: SharingAPI.Sharing = new SharingAPI.Sharing(this._client);

  create(body: CollectionCreateParams, options?: RequestOptions): APIPromise<CollectionCreateResponse> {
    return this._client.post('/rest/v1/collection', { body, ...options });
  }

  retrieve(id: number, options?: RequestOptions): APIPromise<CollectionRetrieveResponse> {
    return this._client.get(path`/rest/v1/collection/${id}`, options);
  }

  list(options?: RequestOptions): APIPromise<CollectionListResponse> {
    return this._client.get('/rest/v1/collections', options);
  }

  clean(options?: RequestOptions): APIPromise<CollectionCleanResponse> {
    return this._client.put('/rest/v1/collections/clean', options);
  }

  delete0(
    body: CollectionDelete0Params | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CollectionDelete0Response> {
    return this._client.delete('/rest/v1/collections', { body, ...options });
  }

  delete1(id: number, options?: RequestOptions): APIPromise<SimpleResponse> {
    return this._client.delete(path`/rest/v1/collection/${id}`, options);
  }

  deleteInvalid(options?: RequestOptions): APIPromise<SimpleResponse> {
    return this._client.delete('/rest/v1/collection/-99', options);
  }

  join(id: number, options?: RequestOptions): APIPromise<CollectionJoinResponse> {
    return this._client.post(path`/rest/v1/collection/${id}/join`, options);
  }

  listChildrens(options?: RequestOptions): APIPromise<CollectionListChildrensResponse> {
    return this._client.get('/rest/v1/collections/childrens', options);
  }

  merge(
    body: CollectionMergeParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CollectionMergeResponse> {
    return this._client.put('/rest/v1/collections/merge', { body, ...options });
  }

  update0(
    body: CollectionUpdate0Params | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<SimpleResponse> {
    return this._client.put('/rest/v1/collections', { body, ...options });
  }

  update1(
    id: number,
    body: CollectionUpdate1Params | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CollectionUpdate1Response> {
    return this._client.put(path`/rest/v1/collection/${id}`, { body, ...options });
  }

  updateCover(
    id: number,
    body: CollectionUpdateCoverParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CollectionUpdateCoverResponse> {
    return this._client.put(
      path`/rest/v1/collection/${id}/cover`,
      multipartFormRequestOptions({ body, ...options }, this._client),
    );
  }
}

export interface Collection {
  _id: number;

  access: Collection.Access;

  author: boolean;

  count: number;

  cover: Array<string>;

  created: string;

  creatorRef: RaindropsAPI.CreatorRef;

  description: string;

  expanded: boolean;

  lastAction: string;

  lastUpdate: string;

  parent: unknown | null;

  public: boolean;

  slug: string;

  sort: number;

  title: string;

  user: RaindropsAPI.UserRef;

  view: string;

  color?: string;
}

export namespace Collection {
  export interface Access {
    draggable: boolean;

    for: number;

    level: number;

    root: boolean;
  }
}

export interface CollectionRef {
  $id: number;

  $ref: 'collections';

  oid?: number;
}

export interface SimpleResponse {
  result: boolean;
}

export interface CollectionCreateResponse {
  item: CollectionCreateResponse.Item;

  result: boolean;
}

export namespace CollectionCreateResponse {
  export interface Item extends CollectionsAPI.Collection {
    __v: number;

    creatorRef: RaindropsAPI.CreatorRef;

    parent: unknown | null;
  }
}

export interface CollectionRetrieveResponse {
  item?: Collection;

  result?: boolean;
}

export interface CollectionListResponse {
  items: Array<Collection>;

  result: boolean;
}

export interface CollectionCleanResponse {
  count: number;

  result: boolean;
}

export interface CollectionDelete0Response {
  ids: Array<number>;

  modified: number;

  result: boolean;
}

export interface CollectionJoinResponse {
  result?: boolean;

  role?: SharingAPI.Role;
}

export interface CollectionListChildrensResponse {
  items: Array<CollectionListChildrensResponse.Item>;

  result: boolean;
}

export namespace CollectionListChildrensResponse {
  export interface Item extends CollectionsAPI.Collection {
    parent: CollectionsAPI.CollectionRef | null;
  }
}

export interface CollectionMergeResponse {
  ids: Array<number>;

  modified: number;

  result: boolean;
}

export interface CollectionUpdate1Response {
  item: Collection;

  result: boolean;
}

export interface CollectionUpdateCoverResponse {
  item: CollectionUpdateCoverResponse.Item;

  result: boolean;
}

export namespace CollectionUpdateCoverResponse {
  export interface Item extends CollectionsAPI.Collection {
    __v: number;
  }
}

export interface CollectionCreateParams {
  cover: Array<string>;

  public: boolean;

  sort: number;

  title: string;

  view: string;

  parent?: CollectionRef | null;
}

export interface CollectionDelete0Params {
  ids?: Array<number>;
}

export interface CollectionMergeParams {
  ids?: Array<number>;

  to?: number;
}

export interface CollectionUpdate0Params {
  expanded?: boolean;

  sort?: string;
}

export interface CollectionUpdate1Params {
  cover?: Array<string>;

  expanded?: boolean;

  parent?: CollectionRef | null;

  /**
   * Collection and raindrops that it contains will be accessible without
   * authentication?
   */
  public?: boolean;

  sort?: number;

  title?: string;

  view?: string;
}

export interface CollectionUpdateCoverParams {
  cover?: Uploadable;
}

Collections.Covers = Covers;
Collections.Sharing = Sharing;

export declare namespace Collections {
  export {
    type Collection as Collection,
    type CollectionRef as CollectionRef,
    type SimpleResponse as SimpleResponse,
    type CollectionCreateResponse as CollectionCreateResponse,
    type CollectionRetrieveResponse as CollectionRetrieveResponse,
    type CollectionListResponse as CollectionListResponse,
    type CollectionCleanResponse as CollectionCleanResponse,
    type CollectionDelete0Response as CollectionDelete0Response,
    type CollectionJoinResponse as CollectionJoinResponse,
    type CollectionListChildrensResponse as CollectionListChildrensResponse,
    type CollectionMergeResponse as CollectionMergeResponse,
    type CollectionUpdate1Response as CollectionUpdate1Response,
    type CollectionUpdateCoverResponse as CollectionUpdateCoverResponse,
    type CollectionCreateParams as CollectionCreateParams,
    type CollectionDelete0Params as CollectionDelete0Params,
    type CollectionMergeParams as CollectionMergeParams,
    type CollectionUpdate0Params as CollectionUpdate0Params,
    type CollectionUpdate1Params as CollectionUpdate1Params,
    type CollectionUpdateCoverParams as CollectionUpdateCoverParams,
  };

  export {
    Covers as Covers,
    type CoverListResponse as CoverListResponse,
    type CoverGetByTextResponse as CoverGetByTextResponse,
  };

  export {
    Sharing as Sharing,
    type Role as Role,
    type SharingCreateResponse as SharingCreateResponse,
    type SharingCreateParams as SharingCreateParams,
    type SharingDeleteUserParams as SharingDeleteUserParams,
    type SharingUpdateUserParams as SharingUpdateUserParams,
  };
}
