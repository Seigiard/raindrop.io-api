// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import RaindropIo from 'raindrop.io';

const client = new RaindropIo({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource url', () => {
  // skipped: tests are disabled for the time being
  test.skip('checkExists', async () => {
    const responsePromise = client.rest.v1.import.url.checkExists();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('checkExists: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.rest.v1.import.url.checkExists(
        { urls: ['https://example.com'] },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(RaindropIo.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('parse', async () => {
    const responsePromise = client.rest.v1.import.url.parse();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('parse: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.rest.v1.import.url.parse({ url: 'https://example.com' }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(RaindropIo.NotFoundError);
  });
});
