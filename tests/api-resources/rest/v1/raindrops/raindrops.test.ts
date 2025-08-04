// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import RaindropIo, { toFile } from 'raindrop.io';

const client = new RaindropIo({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource raindrops', () => {
  // skipped: tests are disabled for the time being
  test.skip('retrieve', async () => {
    const responsePromise = client.rest.v1.raindrops.retrieve(0);
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('list', async () => {
    const responsePromise = client.rest.v1.raindrops.list(0);
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.rest.v1.raindrops.list(
        0,
        { page: 0, perpage: 0, search: 'search', sort: 'sort' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(RaindropIo.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('create0: only required params', async () => {
    const responsePromise = client.rest.v1.raindrops.create0({ link: 'link' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('create0: required and optional params', async () => {
    const response = await client.rest.v1.raindrops.create0({
      link: 'link',
      collection: { $id: 0 },
      cover: 'cover',
      created: 'created',
      excerpt: 'excerpt',
      highlights: [{ note: 'note', text: 'text' }],
      important: true,
      lastUpdate: 'lastUpdate',
      media: [{ link: 'link' }],
      order: 0,
      pleaseParse: {},
      reminder: {},
      tags: [{}],
      title: 'title',
      type: 'type',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('create1', async () => {
    const responsePromise = client.rest.v1.raindrops.create1();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('create1: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.rest.v1.raindrops.create1({ body: {} }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(RaindropIo.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('delete0', async () => {
    const responsePromise = client.rest.v1.raindrops.delete0(0);
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('delete1', async () => {
    const responsePromise = client.rest.v1.raindrops.delete1(0);
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('delete1: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.rest.v1.raindrops.delete1(
        0,
        { search: 'search', ids: [0] },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(RaindropIo.NotFoundError);
  });

  // Prism doesn't properly handle redirects
  test.skip('getCache', async () => {
    const responsePromise = client.rest.v1.raindrops.getCache(0);
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('update0', async () => {
    const responsePromise = client.rest.v1.raindrops.update0(0);
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('update0: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.rest.v1.raindrops.update0(0, { body: {} }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(RaindropIo.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('update1', async () => {
    const responsePromise = client.rest.v1.raindrops.update1(0);
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('update1: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.rest.v1.raindrops.update1(
        0,
        {
          collection: { $id: 0 },
          cover: 'cover',
          ids: [0],
          important: true,
          media: ['https://example.com'],
          tags: ['string'],
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(RaindropIo.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('updateCover', async () => {
    const responsePromise = client.rest.v1.raindrops.updateCover(0);
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('updateCover: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.rest.v1.raindrops.updateCover(
        0,
        { cover: await toFile(Buffer.from('# my file contents'), 'README.md') },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(RaindropIo.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('updateFile', async () => {
    const responsePromise = client.rest.v1.raindrops.updateFile();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('updateFile: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.rest.v1.raindrops.updateFile(
        { collectionId: 0, file: await toFile(Buffer.from('# my file contents'), 'README.md') },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(RaindropIo.NotFoundError);
  });
});
