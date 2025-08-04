// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as UserAPI from './user';
import * as ConnectAPI from './connect';
import { Connect } from './connect';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class UserResource extends APIResource {
  connect: ConnectAPI.Connect = new ConnectAPI.Connect(this._client);

  retrieve(options?: RequestOptions): APIPromise<UserRetrieveResponse> {
    return this._client.get('/rest/v1/user', options);
  }

  update(
    body: UserUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<UserUpdateResponse> {
    return this._client.put('/rest/v1/user', { body, ...options });
  }

  getByName(name: number, options?: RequestOptions): APIPromise<UserGetByNameResponse> {
    return this._client.get(path`/rest/v1/user/${name}`, options);
  }

  getStats(options?: RequestOptions): APIPromise<UserGetStatsResponse> {
    return this._client.get('/rest/v1/user/stats', options);
  }
}

export interface User {
  _id: number;

  config: UserConfig;

  email: string;

  files: User.Files;

  fullName: string;

  groups: Array<User.Group>;

  password: boolean;

  pro: boolean;

  registered: string;

  avatar?: string;

  dropbox?: User.Dropbox;

  email_MD5?: string;

  gdrive?: User.Gdrive;

  lastAction?: string;

  lastUpdate?: string;

  lastVisit?: string;

  name?: string;

  proExpire?: string;

  tfa?: User.Tfa;
}

export namespace User {
  export interface Files {
    lastCheckPoint: string;

    size: number;

    used: number;
  }

  export interface Group {
    collections: Array<number>;

    hidden: boolean;

    sort: number;

    title: string;
  }

  export interface Dropbox {
    enabled: boolean;
  }

  export interface Gdrive {
    enabled: boolean;
  }

  export interface Tfa {
    enabled?: boolean;
  }
}

export interface UserConfig {
  broken_level: string;

  font_size: number;

  last_collection: number;

  raindrops_sort: string;

  acknowledge?: Array<unknown>;

  add_default_collection?: number;

  ai_suggestions?: boolean;

  default_collection_view?: string;

  filters_hide?: boolean;

  font_color?: string;

  lang?: string;

  nested_view_legacy?: boolean;

  raindrops_buttons?: Array<string>;

  raindrops_hide?: Array<string>;

  raindrops_search_by_score?: boolean;

  raindrops_search_incollection?: boolean;
}

export interface UserRetrieveResponse {
  result: boolean;

  user: User;
}

export interface UserUpdateResponse {
  item: UserUpdateResponse.Item;

  result: boolean;

  user: UserUpdateResponse.User;
}

export namespace UserUpdateResponse {
  export interface Item extends UserAPI.User {
    __v?: number;
  }

  export interface User extends UserAPI.User {
    __v?: number;
  }
}

export interface UserGetByNameResponse {
  result: boolean;

  user: UserGetByNameResponse.User;
}

export namespace UserGetByNameResponse {
  export interface User {
    _id: number;

    avatar: string;

    config: User.Config;

    email: string;

    fullName: string;

    lastAction: string;

    lastUpdate: string;

    name: string;

    pro: boolean;

    registered: string;
  }

  export namespace User {
    export interface Config {
      nested_view_legacy: boolean;

      raindrops_hide: Array<string>;
    }
  }
}

export interface UserGetStatsResponse {
  items: Array<UserGetStatsResponse.Item>;

  meta: UserGetStatsResponse.Meta;

  result: boolean;
}

export namespace UserGetStatsResponse {
  export interface Item {
    _id: number;

    count: number;
  }

  export interface Meta {
    _id: number;

    changedBookmarksDate: string;

    pro: boolean;
  }
}

export interface UserUpdateParams {
  config?: UserConfig;

  email?: string;

  fullName?: string;

  groups?: Array<UserUpdateParams.Group>;

  newpassword?: string;

  oldpassword?: string;
}

export namespace UserUpdateParams {
  export interface Group {
    collections?: Array<number>;

    hidden?: boolean;

    sort?: number;

    title?: string;
  }
}

UserResource.Connect = Connect;

export declare namespace UserResource {
  export {
    type User as User,
    type UserConfig as UserConfig,
    type UserRetrieveResponse as UserRetrieveResponse,
    type UserUpdateResponse as UserUpdateResponse,
    type UserGetByNameResponse as UserGetByNameResponse,
    type UserGetStatsResponse as UserGetStatsResponse,
    type UserUpdateParams as UserUpdateParams,
  };

  export { Connect as Connect };
}
