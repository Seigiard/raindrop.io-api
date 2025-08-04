// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { RaindropIo } from '../client';

export abstract class APIResource {
  protected _client: RaindropIo;

  constructor(client: RaindropIo) {
    this._client = client;
  }
}
