// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';

export class OAuth extends APIResource {
  /**
   * @example
   * ```ts
   * await client.oauth.authorize({
   *   client_id: 'client_id',
   *   redirect_uri: 'redirect_uri',
   * });
   * ```
   */
  authorize(query: OAuthAuthorizeParams, options?: RequestOptions): APIPromise<void> {
    return this._client.get('/v1/oauth/authorize', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * @example
   * ```ts
   * const response = await client.oauth.requestAccessToken({
   *   client_id: '5e1c589cf6f48c0211311383',
   *   client_secret: 'c3363988-9d27-4bc6-a0ae-d126ce78dc09',
   *   code: 'c8983220-1cca-4626-a19d-801a6aae003c',
   *   grant_type: 'authorization_code',
   *   redirect_uri: 'https://oauthdebugger.com/debug',
   * });
   * ```
   */
  requestAccessToken(
    body: OAuthRequestAccessTokenParams,
    options?: RequestOptions,
  ): APIPromise<OAuthRequestAccessTokenResponse> {
    return this._client.post('/v1/oauth/access_token', { body, ...options });
  }
}

export type OAuthRequestAccessTokenResponse =
  | OAuthRequestAccessTokenResponse.TokenResponse
  | OAuthRequestAccessTokenResponse.TokenErrorResponse;

export namespace OAuthRequestAccessTokenResponse {
  export interface TokenResponse {
    access_token: string;

    expires_in: number;

    refresh_token: string;

    token_type: 'Bearer';

    /**
     * @deprecated
     */
    expires?: number;
  }

  export interface TokenErrorResponse {
    errorMessage: string;

    result: boolean;

    status: number;
  }
}

export interface OAuthAuthorizeParams {
  client_id: string;

  redirect_uri: string;
}

export type OAuthRequestAccessTokenParams =
  | OAuthRequestAccessTokenParams.ObtainToken
  | OAuthRequestAccessTokenParams.RefreshToken;

export declare namespace OAuthRequestAccessTokenParams {
  export interface ObtainToken {
    client_id: string;

    client_secret: string;

    code: string;

    grant_type: 'authorization_code';

    redirect_uri: string;
  }

  export interface RefreshToken {
    client_id: string;

    client_secret: string;

    grant_type: 'refresh_token';

    refresh_token: string;
  }
}

export declare namespace OAuth {
  export {
    type OAuthRequestAccessTokenResponse as OAuthRequestAccessTokenResponse,
    type OAuthAuthorizeParams as OAuthAuthorizeParams,
    type OAuthRequestAccessTokenParams as OAuthRequestAccessTokenParams,
  };
}
