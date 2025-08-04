// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as HighlightsAPI from './highlights';
import {
  HighlightGetByCollectionParams,
  HighlightGetByCollectionResponse,
  HighlightListParams,
  HighlightListResponse,
  Highlights,
} from './highlights';
import * as TagsAPI from './tags';
import { TagDeleteParams, TagGetByCollectionResponse, TagUpdateParams, Tags } from './tags';
import * as CollectionsAPI from './collections/collections';
import {
  Collection,
  CollectionCleanResponse,
  CollectionCreateParams,
  CollectionCreateResponse,
  CollectionDelete0Params,
  CollectionDelete0Response,
  CollectionJoinResponse,
  CollectionListChildrensResponse,
  CollectionListResponse,
  CollectionMergeParams,
  CollectionMergeResponse,
  CollectionRef,
  CollectionRetrieveResponse,
  CollectionUpdate0Params,
  CollectionUpdate1Params,
  CollectionUpdate1Response,
  CollectionUpdateCoverParams,
  CollectionUpdateCoverResponse,
  Collections,
  SimpleResponse,
} from './collections/collections';
import * as ImportAPI from './import/import';
import {
  Import,
  ImportHTMLBookmarkFileResponseItemFolder,
  ImportUploadFileParams,
  ImportUploadFileResponse,
} from './import/import';
import * as RaindropsAPI from './raindrops/raindrops';
import {
  CreatorRef,
  RaindropCreate0Params,
  RaindropCreate0Response,
  RaindropCreate1Params,
  RaindropCreate1Response,
  RaindropDelete0Response,
  RaindropDelete1Params,
  RaindropDelete1Response,
  RaindropListParams,
  RaindropListResponse,
  RaindropRetrieveResponse,
  RaindropUpdate0Params,
  RaindropUpdate0Response,
  RaindropUpdate1Params,
  RaindropUpdate1Response,
  RaindropUpdateCoverParams,
  RaindropUpdateCoverResponse,
  RaindropUpdateFileParams,
  RaindropUpdateFileResponse,
  Raindrops,
  UserRef,
} from './raindrops/raindrops';
import * as UserAPI from './user/user';
import {
  User,
  UserConfig,
  UserGetByNameResponse,
  UserGetStatsResponse,
  UserResource,
  UserRetrieveResponse,
  UserUpdateParams,
  UserUpdateResponse,
} from './user/user';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class V1 extends APIResource {
  user: UserAPI.UserResource = new UserAPI.UserResource(this._client);
  highlights: HighlightsAPI.Highlights = new HighlightsAPI.Highlights(this._client);
  tags: TagsAPI.Tags = new TagsAPI.Tags(this._client);
  import: ImportAPI.Import = new ImportAPI.Import(this._client);
  collections: CollectionsAPI.Collections = new CollectionsAPI.Collections(this._client);
  raindrops: RaindropsAPI.Raindrops = new RaindropsAPI.Raindrops(this._client);

  getFiltersByCollection(
    collectionID: number,
    query: V1GetFiltersByCollectionParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<V1GetFiltersByCollectionResponse> {
    return this._client.get(path`/rest/v1/filters/${collectionID}`, { query, ...options });
  }
}

export interface V1GetFiltersByCollectionResponse {
  collectionId: number;

  created: Array<V1GetFiltersByCollectionResponse.Created>;

  result: boolean;

  tags: Array<V1GetFiltersByCollectionResponse.Tag>;

  types: Array<V1GetFiltersByCollectionResponse.Type>;

  [k: string]:
    | V1GetFiltersByCollectionResponse.unnamed_schema_with_map_parent_0
    | number
    | Array<V1GetFiltersByCollectionResponse.Created>
    | boolean
    | undefined;
}

export namespace V1GetFiltersByCollectionResponse {
  export interface Created {
    _id: string;

    count: number;
  }

  export interface Tag {
    _id: string;

    count: number;
  }

  export interface Type {
    _id: string;

    count: number;
  }

  export interface unnamed_schema_with_map_parent_0 {
    _id: string;

    count: number;
  }
}

export interface V1GetFiltersByCollectionParams {
  search?: string;

  tagsSort?: '-count' | '_id';
}

V1.UserResource = UserResource;
V1.Highlights = Highlights;
V1.Tags = Tags;
V1.Import = Import;
V1.Collections = Collections;
V1.Raindrops = Raindrops;

export declare namespace V1 {
  export {
    type V1GetFiltersByCollectionResponse as V1GetFiltersByCollectionResponse,
    type V1GetFiltersByCollectionParams as V1GetFiltersByCollectionParams,
  };

  export {
    UserResource as UserResource,
    type User as User,
    type UserConfig as UserConfig,
    type UserRetrieveResponse as UserRetrieveResponse,
    type UserUpdateResponse as UserUpdateResponse,
    type UserGetByNameResponse as UserGetByNameResponse,
    type UserGetStatsResponse as UserGetStatsResponse,
    type UserUpdateParams as UserUpdateParams,
  };

  export {
    Highlights as Highlights,
    type HighlightListResponse as HighlightListResponse,
    type HighlightGetByCollectionResponse as HighlightGetByCollectionResponse,
    type HighlightListParams as HighlightListParams,
    type HighlightGetByCollectionParams as HighlightGetByCollectionParams,
  };

  export {
    Tags as Tags,
    type TagGetByCollectionResponse as TagGetByCollectionResponse,
    type TagUpdateParams as TagUpdateParams,
    type TagDeleteParams as TagDeleteParams,
  };

  export {
    Import as Import,
    type ImportHTMLBookmarkFileResponseItemFolder as ImportHTMLBookmarkFileResponseItemFolder,
    type ImportUploadFileResponse as ImportUploadFileResponse,
    type ImportUploadFileParams as ImportUploadFileParams,
  };

  export {
    Collections as Collections,
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
    Raindrops as Raindrops,
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
}
