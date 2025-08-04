// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import { APIPromise } from '../../../../core/api-promise';
import { buildHeaders } from '../../../../internal/headers';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Connect extends APIResource {
  get(
    provider: 'facebook' | 'google' | 'twitter' | 'vkontate' | 'dropbox' | 'gdrive',
    options?: RequestOptions,
  ): APIPromise<void> {
    return this._client.get(path`/rest/v1/user/connect/${provider}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  revoke(
    provider: 'facebook' | 'google' | 'twitter' | 'vkontate' | 'dropbox' | 'gdrive',
    options?: RequestOptions,
  ): APIPromise<void> {
    return this._client.get(path`/rest/v1/user/connect/${provider}/revoke`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}
