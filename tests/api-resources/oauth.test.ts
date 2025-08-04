// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import RaindropIo from 'raindrop.io';

const client = new RaindropIo({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource oauth', () => {
  // Prism doesn't properly handle redirects
  test.skip('authorize: only required params', async () => {
    const responsePromise = client.oauth.authorize({ client_id: 'client_id', redirect_uri: 'redirect_uri' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism doesn't properly handle redirects
  test.skip('authorize: required and optional params', async () => {
    const response = await client.oauth.authorize({ client_id: 'client_id', redirect_uri: 'redirect_uri' });
  });

  // skipped: tests are disabled for the time being
  test.skip('requestAccessToken: only required params', async () => {
    const responsePromise = client.oauth.requestAccessToken({
      client_id: 'client_id',
      client_secret: 'client_secret',
      code: 'code',
      grant_type: 'authorization_code',
      redirect_uri: 'redirect_uri',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('requestAccessToken: required and optional params', async () => {
    const response = await client.oauth.requestAccessToken({
      client_id: 'client_id',
      client_secret: 'client_secret',
      code: 'code',
      grant_type: 'authorization_code',
      redirect_uri: 'redirect_uri',
    });
  });
});
