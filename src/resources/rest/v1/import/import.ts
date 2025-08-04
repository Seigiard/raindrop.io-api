// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as URLAPI from './url';
import { URL, URLCheckExistsParams, URLCheckExistsResponse, URLParseParams, URLParseResponse } from './url';
import { APIPromise } from '../../../../core/api-promise';
import { type Uploadable } from '../../../../core/uploads';
import { RequestOptions } from '../../../../internal/request-options';
import { multipartFormRequestOptions } from '../../../../internal/uploads';

export class Import extends APIResource {
  url: URLAPI.URL = new URLAPI.URL(this._client);

  uploadFile(
    body: ImportUploadFileParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ImportUploadFileResponse> {
    return this._client.post(
      '/rest/v1/import/file',
      multipartFormRequestOptions({ body, ...options }, this._client),
    );
  }
}

export interface ImportHTMLBookmarkFileResponseItemFolder {
  bookmarks: Array<ImportHTMLBookmarkFileResponseItemFolder.Bookmark>;

  folders: Array<ImportHTMLBookmarkFileResponseItemFolder>;

  title: string;
}

export namespace ImportHTMLBookmarkFileResponseItemFolder {
  export interface Bookmark {
    cover: string;

    created: string;

    excerpt: string;

    important: boolean;

    lastUpdate: string;

    link: string;

    media: Array<Bookmark.Media>;

    note: string;

    tags: Array<string>;

    title: string;
  }

  export namespace Bookmark {
    export interface Media {
      link: string;
    }
  }
}

export interface ImportUploadFileResponse {
  count: ImportUploadFileResponse.Count;

  items: Array<ImportHTMLBookmarkFileResponseItemFolder>;

  result: boolean;
}

export namespace ImportUploadFileResponse {
  export interface Count {
    bookmarks: number;

    duplicates: number;

    folders: number;

    highlights: number;

    tags: number;
  }
}

export interface ImportUploadFileParams {
  import?: Uploadable;
}

Import.URL = URL;

export declare namespace Import {
  export {
    type ImportHTMLBookmarkFileResponseItemFolder as ImportHTMLBookmarkFileResponseItemFolder,
    type ImportUploadFileResponse as ImportUploadFileResponse,
    type ImportUploadFileParams as ImportUploadFileParams,
  };

  export {
    URL as URL,
    type URLCheckExistsResponse as URLCheckExistsResponse,
    type URLParseResponse as URLParseResponse,
    type URLCheckExistsParams as URLCheckExistsParams,
    type URLParseParams as URLParseParams,
  };
}
