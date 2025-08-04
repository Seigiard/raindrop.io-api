// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import RaindropIo from 'raindrop.io';

const client = new RaindropIo({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource user', () => {
  // skipped: tests are disabled for the time being
  test.skip('retrieve', async () => {
    const responsePromise = client.rest.v1.user.retrieve();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('update', async () => {
    const responsePromise = client.rest.v1.user.update();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('update: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.rest.v1.user.update(
        {
          config: {
            broken_level: 'broken_level',
            font_size: 0,
            last_collection: 0,
            raindrops_sort: 'raindrops_sort',
            acknowledge: [{}],
            add_default_collection: 0,
            ai_suggestions: true,
            default_collection_view: 'default_collection_view',
            filters_hide: true,
            font_color: 'font_color',
            lang: 'lang',
            nested_view_legacy: true,
            raindrops_buttons: ['string'],
            raindrops_hide: ['string'],
            raindrops_search_by_score: true,
            raindrops_search_incollection: true,
          },
          email: 'email',
          fullName: 'fullName',
          groups: [{ collections: [0], hidden: true, sort: 0, title: 'title' }],
          newpassword: 'newpassword',
          oldpassword: 'oldpassword',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(RaindropIo.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('getByName', async () => {
    const responsePromise = client.rest.v1.user.getByName(0);
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('getStats', async () => {
    const responsePromise = client.rest.v1.user.getStats();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
