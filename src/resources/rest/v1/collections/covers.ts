// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Covers extends APIResource {
  list(options?: RequestOptions): APIPromise<CoverListResponse> {
    return this._client.get('/rest/v1/collections/covers', options);
  }

  getByText(text: string, options?: RequestOptions): APIPromise<CoverGetByTextResponse> {
    return this._client.get(path`/rest/v1/collections/covers/${text}`, options);
  }
}

export interface CoverListResponse {
  items: Array<CoverListResponse.Item>;

  result: boolean;
}

export namespace CoverListResponse {
  export interface Item {
    icons: Array<Item.Icon>;

    title: string;

    link?: string;

    sort?: number;
  }

  export namespace Item {
    export interface Icon {
      png: string;
    }
  }
}

export interface CoverGetByTextResponse {
  items: Array<CoverGetByTextResponse.Item>;

  result: boolean;
}

export namespace CoverGetByTextResponse {
  export interface Item {
    icons: Array<Item.Icon>;

    title: string;
  }

  export namespace Item {
    export interface Icon {
      png: string;
    }
  }
}

export declare namespace Covers {
  export {
    type CoverListResponse as CoverListResponse,
    type CoverGetByTextResponse as CoverGetByTextResponse,
  };
}
