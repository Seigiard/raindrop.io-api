// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import RaindropIo from 'raindrop.io';

const client = new RaindropIo({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource sharing', () => {
  // Prism tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.rest.v1.collections.sharing.create(0, {
      emails: ['dev@stainless.com'],
      role: 'member',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('create: required and optional params', async () => {
    const response = await client.rest.v1.collections.sharing.create(0, {
      emails: ['dev@stainless.com'],
      role: 'member',
    });
  });

  // Prism tests are disabled
  test.skip('delete', async () => {
    const responsePromise = client.rest.v1.collections.sharing.delete(0);
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('deleteUser: only required params', async () => {
    const responsePromise = client.rest.v1.collections.sharing.deleteUser(0, { id: 0 });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('deleteUser: required and optional params', async () => {
    const response = await client.rest.v1.collections.sharing.deleteUser(0, { id: 0 });
  });

  // Prism tests are disabled
  test.skip('get', async () => {
    const responsePromise = client.rest.v1.collections.sharing.get(0);
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('updateUser: only required params', async () => {
    const responsePromise = client.rest.v1.collections.sharing.updateUser(0, { id: 0 });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('updateUser: required and optional params', async () => {
    const response = await client.rest.v1.collections.sharing.updateUser(0, { id: 0, role: 'member' });
  });
});
