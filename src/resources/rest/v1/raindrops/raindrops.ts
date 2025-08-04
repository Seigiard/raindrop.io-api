// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as RaindropsAPI from './raindrops';
import * as CollectionsAPI from '../collections/collections';
import * as SuggestAPI from './suggest';
import { Suggest, SuggestCreateParams, SuggestCreateResponse, SuggestGetResponse } from './suggest';
import { APIPromise } from '../../../../core/api-promise';
import { type Uploadable } from '../../../../core/uploads';
import { buildHeaders } from '../../../../internal/headers';
import { RequestOptions } from '../../../../internal/request-options';
import { multipartFormRequestOptions } from '../../../../internal/uploads';
import { path } from '../../../../internal/utils/path';

export class Raindrops extends APIResource {
  suggest: SuggestAPI.Suggest = new SuggestAPI.Suggest(this._client);

  retrieve(id: number, options?: RequestOptions): APIPromise<RaindropRetrieveResponse> {
    return this._client.get(path`/rest/v1/raindrop/${id}`, options);
  }

  list(
    collectionID: number,
    query: RaindropListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<RaindropListResponse> {
    return this._client.get(path`/rest/v1/raindrops/${collectionID}`, { query, ...options });
  }

  create0(body: RaindropCreate0Params, options?: RequestOptions): APIPromise<RaindropCreate0Response> {
    return this._client.post('/rest/v1/raindrop', { body, ...options });
  }

  create1(
    params: RaindropCreate1Params | null | undefined = undefined,
    options?: RequestOptions,
  ): APIPromise<RaindropCreate1Response> {
    const { body } = params ?? {};
    return this._client.post('/rest/v1/raindrops', { body: body, ...options });
  }

  delete0(id: number, options?: RequestOptions): APIPromise<RaindropDelete0Response> {
    return this._client.delete(path`/rest/v1/raindrop/${id}`, options);
  }

  delete1(
    collectionID: number,
    params: RaindropDelete1Params | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<RaindropDelete1Response> {
    const { search, ...body } = params ?? {};
    return this._client.delete(path`/rest/v1/raindrops/${collectionID}`, {
      query: { search },
      body,
      ...options,
    });
  }

  getCache(id: number, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/rest/v1/raindrop/${id}/cache`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  update0(
    id: number,
    params: RaindropUpdate0Params | null | undefined = undefined,
    options?: RequestOptions,
  ): APIPromise<RaindropUpdate0Response> {
    const { body } = params ?? {};
    return this._client.put(path`/rest/v1/raindrop/${id}`, { body: body, ...options });
  }

  update1(
    collectionID: number,
    body: RaindropUpdate1Params | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<RaindropUpdate1Response> {
    return this._client.put(path`/rest/v1/raindrops/${collectionID}`, { body, ...options });
  }

  updateCover(
    id: number,
    body: RaindropUpdateCoverParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<RaindropUpdateCoverResponse> {
    return this._client.put(
      path`/rest/v1/raindrop/${id}/cover`,
      multipartFormRequestOptions({ body, ...options }, this._client),
    );
  }

  updateFile(
    body: RaindropUpdateFileParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<RaindropUpdateFileResponse> {
    return this._client.put(
      '/rest/v1/raindrop/file',
      multipartFormRequestOptions({ body, ...options }, this._client),
    );
  }
}

export type CreatorRef = CreatorRef.UnionMember0 | number;

export namespace CreatorRef {
  export interface UnionMember0 {
    _id: number;

    email: string;

    name: string;

    avatar?: string;
  }
}

export interface UserRef {
  $id: number;

  $ref: string;
}

export interface RaindropRetrieveResponse {
  author: boolean;

  item: RaindropRetrieveResponse.Item;

  result: boolean;
}

export namespace RaindropRetrieveResponse {
  export interface Item {
    _id: number;

    collection: CollectionsAPI.CollectionRef | null;

    collectionId: number;

    cover: string;

    created: string;

    creatorRef: RaindropsAPI.CreatorRef;

    domain: string;

    excerpt: string;

    highlights: Array<Item.Highlight>;

    lastUpdate: string;

    link: string;

    media: Array<Item.Media>;

    note: string;

    removed: boolean;

    sort: number;

    tags: Array<string>;

    title: string;

    type: string;

    user: RaindropsAPI.UserRef;
  }

  export namespace Item {
    export interface Highlight {
      _id: string;

      created: string;

      creatorRef: RaindropsAPI.CreatorRef;

      lastUpdate: string;

      note: string;

      text: string;
    }

    export interface Media {
      link: string;

      type: string;
    }
  }
}

export interface RaindropListResponse {
  collectionId: number;

  count: number;

  items: Array<RaindropListResponse.Item>;

  result: boolean;
}

export namespace RaindropListResponse {
  export interface Item {
    _id: number;

    collection: CollectionsAPI.CollectionRef | null;

    collectionId: number;

    cover: string;

    created: string;

    creatorRef: RaindropsAPI.CreatorRef;

    domain: string;

    excerpt: string;

    highlights: Array<Item.Highlight>;

    lastUpdate: string;

    link: string;

    media: Array<Item.Media>;

    note: string;

    removed: boolean;

    sort: number;

    tags: Array<string>;

    title: string;

    type: string;

    user: RaindropsAPI.UserRef;
  }

  export namespace Item {
    export interface Highlight {
      _id: string;

      created: string;

      creatorRef: RaindropsAPI.CreatorRef;

      lastUpdate: string;

      note: string;

      text: string;
    }

    export interface Media {
      link: string;

      type: string;
    }
  }
}

export interface RaindropCreate0Response {
  item: RaindropCreate0Response.Item;

  result: boolean;
}

export namespace RaindropCreate0Response {
  export interface Item {
    __v: number;

    _id: number;

    collection: CollectionsAPI.CollectionRef | null;

    collectionId: number;

    cover: string;

    created: string;

    creatorRef: RaindropsAPI.CreatorRef;

    domain: string;

    excerpt: string;

    lastUpdate: string;

    link: string;

    media: Array<Item.Media>;

    note: string;

    removed: boolean;

    sort: number;

    tags: Array<string>;

    title: string;

    type: string;

    user: RaindropsAPI.UserRef;
  }

  export namespace Item {
    export interface Media {
      link: string;

      type: string;
    }
  }
}

export interface RaindropCreate1Response {
  items: Array<RaindropCreate1Response.Item>;

  result: boolean;
}

export namespace RaindropCreate1Response {
  export interface Item {
    __v: number;

    _id: number;

    collection: CollectionsAPI.CollectionRef | null;

    collectionId: number;

    cover: string;

    created: string;

    creatorRef: RaindropsAPI.CreatorRef;

    domain: string;

    excerpt: string;

    highlights: Array<Item.Highlight>;

    lastUpdate: string;

    link: string;

    media: Array<Item.Media>;

    note: string;

    removed: boolean;

    sort: number;

    tags: Array<string>;

    title: string;

    type: string;

    user: RaindropsAPI.UserRef;
  }

  export namespace Item {
    export interface Highlight {
      _id: string;

      created: string;

      creatorRef: RaindropsAPI.CreatorRef;

      lastUpdate: string;

      note: string;

      text: string;
    }

    export interface Media {
      link: string;

      type: string;
    }
  }
}

export interface RaindropDelete0Response {
  item?: RaindropDelete0Response.Item;

  result?: boolean;
}

export namespace RaindropDelete0Response {
  export interface Item {
    _id: number;

    collection: CollectionsAPI.CollectionRef | null;

    collectionId: number;

    cover: string;

    created: string;

    creatorRef: RaindropsAPI.CreatorRef;

    domain: string;

    excerpt: string;

    lastUpdate: string;

    link: string;

    media: Array<Item.Media>;

    note: string;

    order: number;

    removed: boolean;

    sort: number;

    tags: Array<string>;

    title: string;

    type: string;

    user: RaindropsAPI.UserRef;
  }

  export namespace Item {
    export interface Media {
      link: string;

      type: string;
    }
  }
}

export interface RaindropDelete1Response {
  modified: number;

  result: boolean;
}

export interface RaindropUpdate0Response {
  item?: RaindropUpdate0Response.Item;

  result?: boolean;
}

export namespace RaindropUpdate0Response {
  export interface Item {
    __v: number;

    _id: number;

    collection: CollectionsAPI.CollectionRef | null;

    collectionId: number;

    cover: string;

    created: string;

    creatorRef: RaindropsAPI.CreatorRef;

    domain: string;

    excerpt: string;

    highlights: Array<Item.Highlight>;

    lastUpdate: string;

    link: string;

    media: Array<Item.Media>;

    note: string;

    removed: boolean;

    sort: number;

    tags: Array<string>;

    title: string;

    type: string;

    user: RaindropsAPI.UserRef;
  }

  export namespace Item {
    export interface Highlight {
      _id: string;

      created: string;

      creatorRef: RaindropsAPI.CreatorRef;

      lastUpdate: string;

      note: string;

      text: string;
    }

    export interface Media {
      link: string;

      type: string;
    }
  }
}

export interface RaindropUpdate1Response {
  modified?: number;

  result?: boolean;
}

export interface RaindropUpdateCoverResponse {
  item?: RaindropUpdateCoverResponse.Item;

  result?: boolean;
}

export namespace RaindropUpdateCoverResponse {
  export interface Item {
    __v: number;

    _id: number;

    collection: CollectionsAPI.CollectionRef | null;

    collectionId: number;

    cover: string;

    created: string;

    creatorRef: RaindropsAPI.CreatorRef;

    domain: string;

    excerpt: string;

    lastUpdate: string;

    link: string;

    media: Array<Item.Media>;

    note: string;

    removed: boolean;

    sort: number;

    tags: Array<string>;

    title: string;

    type: string;

    user: RaindropsAPI.UserRef;
  }

  export namespace Item {
    export interface Media {
      link: string;

      type: string;
    }
  }
}

export interface RaindropUpdateFileResponse {
  item: RaindropUpdateFileResponse.Item;

  result: boolean;
}

export namespace RaindropUpdateFileResponse {
  export interface Item {
    __v: number;

    _id: number;

    collection: CollectionsAPI.CollectionRef | null;

    collectionId: number;

    cover: string;

    created: string;

    creatorRef: RaindropsAPI.CreatorRef;

    domain: string;

    excerpt: string;

    file: Item.File;

    lastUpdate: string;

    link: string;

    media: Array<Item.Media>;

    note: string;

    removed: boolean;

    sort: number;

    tags: Array<string>;

    title: string;

    type: string;

    user: RaindropsAPI.UserRef;
  }

  export namespace Item {
    export interface File {
      name: string;

      size: number;

      type: string;
    }

    export interface Media {
      link: string;

      type: string;
    }
  }
}

export interface RaindropListParams {
  page?: number;

  perpage?: number;

  search?: string;

  sort?: string;
}

export interface RaindropCreate0Params {
  link: string;

  collection?: RaindropCreate0Params.Collection;

  cover?: string;

  created?: string;

  excerpt?: string;

  highlights?: Array<RaindropCreate0Params.Highlight>;

  important?: boolean;

  lastUpdate?: string;

  media?: Array<RaindropCreate0Params.Media>;

  order?: number;

  pleaseParse?: unknown;

  reminder?: unknown;

  tags?: Array<unknown>;

  title?: string;

  type?: string;
}

export namespace RaindropCreate0Params {
  export interface Collection {
    $id: number;
  }

  export interface Highlight {
    note: string;

    text: string;
  }

  export interface Media {
    link: string;
  }
}

export interface RaindropCreate1Params {
  body?: unknown;
}

export interface RaindropDelete1Params {
  /**
   * Query param:
   */
  search?: string;

  /**
   * Body param:
   */
  ids?: Array<number>;
}

export interface RaindropUpdate0Params {
  body?: unknown;
}

export interface RaindropUpdate1Params {
  collection?: RaindropUpdate1Params.Collection;

  cover?: string;

  ids?: Array<number>;

  important?: boolean;

  media?: Array<string>;

  tags?: Array<string>;
}

export namespace RaindropUpdate1Params {
  export interface Collection {
    $id?: number;
  }
}

export interface RaindropUpdateCoverParams {
  cover?: Uploadable;
}

export interface RaindropUpdateFileParams {
  collectionId?: number;

  file?: Uploadable;
}

Raindrops.Suggest = Suggest;

export declare namespace Raindrops {
  export {
    type CreatorRef as CreatorRef,
    type UserRef as UserRef,
    type RaindropRetrieveResponse as RaindropRetrieveResponse,
    type RaindropListResponse as RaindropListResponse,
    type RaindropCreate0Response as RaindropCreate0Response,
    type RaindropCreate1Response as RaindropCreate1Response,
    type RaindropDelete0Response as RaindropDelete0Response,
    type RaindropDelete1Response as RaindropDelete1Response,
    type RaindropUpdate0Response as RaindropUpdate0Response,
    type RaindropUpdate1Response as RaindropUpdate1Response,
    type RaindropUpdateCoverResponse as RaindropUpdateCoverResponse,
    type RaindropUpdateFileResponse as RaindropUpdateFileResponse,
    type RaindropListParams as RaindropListParams,
    type RaindropCreate0Params as RaindropCreate0Params,
    type RaindropCreate1Params as RaindropCreate1Params,
    type RaindropDelete1Params as RaindropDelete1Params,
    type RaindropUpdate0Params as RaindropUpdate0Params,
    type RaindropUpdate1Params as RaindropUpdate1Params,
    type RaindropUpdateCoverParams as RaindropUpdateCoverParams,
    type RaindropUpdateFileParams as RaindropUpdateFileParams,
  };

  export {
    Suggest as Suggest,
    type SuggestCreateResponse as SuggestCreateResponse,
    type SuggestGetResponse as SuggestGetResponse,
    type SuggestCreateParams as SuggestCreateParams,
  };
}
