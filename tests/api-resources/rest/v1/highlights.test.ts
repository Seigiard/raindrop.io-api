// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import RaindropIo from 'raindrop.io';

const client = new RaindropIo({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource highlights', () => {
  // Prism tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.rest.v1.highlights.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.rest.v1.highlights.list({ page: 0, perpage: 0 }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(RaindropIo.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('getByCollection', async () => {
    const responsePromise = client.rest.v1.highlights.getByCollection(0);
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('getByCollection: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.rest.v1.highlights.getByCollection(
        0,
        { page: 0, perpage: 0 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(RaindropIo.NotFoundError);
  });
});
