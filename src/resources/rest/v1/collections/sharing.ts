// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as CollectionsAPI from './collections';
import { APIPromise } from '../../../../core/api-promise';
import { buildHeaders } from '../../../../internal/headers';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Sharing extends APIResource {
  create(id: number, body: SharingCreateParams, options?: RequestOptions): APIPromise<SharingCreateResponse> {
    return this._client.post(path`/rest/v1/collection/${id}/sharing`, { body, ...options });
  }

  delete(id: number, options?: RequestOptions): APIPromise<CollectionsAPI.SimpleResponse> {
    return this._client.delete(path`/rest/v1/collection/${id}/sharing`, options);
  }

  deleteUser(
    userID: number,
    params: SharingDeleteUserParams,
    options?: RequestOptions,
  ): APIPromise<CollectionsAPI.SimpleResponse> {
    const { id } = params;
    return this._client.delete(path`/rest/v1/collection/${id}/sharing/${userID}`, options);
  }

  get(id: number, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/rest/v1/collection/${id}/sharing`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  updateUser(userID: number, params: SharingUpdateUserParams, options?: RequestOptions): APIPromise<void> {
    const { id, ...body } = params;
    return this._client.put(path`/rest/v1/collection/${id}/sharing/${userID}`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export type Role = 'member' | 'viewer';

export interface SharingCreateResponse {
  token: string;

  link: string;

  result: boolean;
}

export interface SharingCreateParams {
  emails: Array<string>;

  role: Role;
}

export interface SharingDeleteUserParams {
  id: number;
}

export interface SharingUpdateUserParams {
  /**
   * Path param:
   */
  id: number;

  /**
   * Body param:
   */
  role?: Role;
}

export declare namespace Sharing {
  export {
    type Role as Role,
    type SharingCreateResponse as SharingCreateResponse,
    type SharingCreateParams as SharingCreateParams,
    type SharingDeleteUserParams as SharingDeleteUserParams,
    type SharingUpdateUserParams as SharingUpdateUserParams,
  };
}
