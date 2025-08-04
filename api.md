# OAuth

Types:

- <code><a href="./src/resources/oauth.ts">OAuthRequestAccessTokenResponse</a></code>

Methods:

- <code title="get /v1/oauth/authorize">client.oauth.<a href="./src/resources/oauth.ts">authorize</a>({ ...params }) -> void</code>
- <code title="post /v1/oauth/access_token">client.oauth.<a href="./src/resources/oauth.ts">requestAccessToken</a>({ ...params }) -> OAuthRequestAccessTokenResponse</code>

# Rest

## V1

Types:

- <code><a href="./src/resources/rest/v1/v1.ts">V1GetFiltersByCollectionResponse</a></code>

Methods:

- <code title="get /rest/v1/filters/{collectionId}">client.rest.v1.<a href="./src/resources/rest/v1/v1.ts">getFiltersByCollection</a>(collectionID, { ...params }) -> V1GetFiltersByCollectionResponse</code>

### User

Types:

- <code><a href="./src/resources/rest/v1/user/user.ts">User</a></code>
- <code><a href="./src/resources/rest/v1/user/user.ts">UserConfig</a></code>
- <code><a href="./src/resources/rest/v1/user/user.ts">UserRetrieveResponse</a></code>
- <code><a href="./src/resources/rest/v1/user/user.ts">UserUpdateResponse</a></code>
- <code><a href="./src/resources/rest/v1/user/user.ts">UserGetByNameResponse</a></code>
- <code><a href="./src/resources/rest/v1/user/user.ts">UserGetStatsResponse</a></code>

Methods:

- <code title="get /rest/v1/user">client.rest.v1.user.<a href="./src/resources/rest/v1/user/user.ts">retrieve</a>() -> UserRetrieveResponse</code>
- <code title="put /rest/v1/user">client.rest.v1.user.<a href="./src/resources/rest/v1/user/user.ts">update</a>({ ...params }) -> UserUpdateResponse</code>
- <code title="get /rest/v1/user/{name}">client.rest.v1.user.<a href="./src/resources/rest/v1/user/user.ts">getByName</a>(name) -> UserGetByNameResponse</code>
- <code title="get /rest/v1/user/stats">client.rest.v1.user.<a href="./src/resources/rest/v1/user/user.ts">getStats</a>() -> UserGetStatsResponse</code>

#### Connect

Methods:

- <code title="get /rest/v1/user/connect/{provider}">client.rest.v1.user.connect.<a href="./src/resources/rest/v1/user/connect.ts">get</a>(provider) -> void</code>
- <code title="get /rest/v1/user/connect/{provider}/revoke">client.rest.v1.user.connect.<a href="./src/resources/rest/v1/user/connect.ts">revoke</a>(provider) -> void</code>

### Highlights

Types:

- <code><a href="./src/resources/rest/v1/highlights.ts">HighlightListResponse</a></code>
- <code><a href="./src/resources/rest/v1/highlights.ts">HighlightGetByCollectionResponse</a></code>

Methods:

- <code title="get /rest/v1/highlights">client.rest.v1.highlights.<a href="./src/resources/rest/v1/highlights.ts">list</a>({ ...params }) -> HighlightListResponse</code>
- <code title="get /rest/v1/highlights/{collectionId}">client.rest.v1.highlights.<a href="./src/resources/rest/v1/highlights.ts">getByCollection</a>(collectionID, { ...params }) -> HighlightGetByCollectionResponse</code>

### Tags

Types:

- <code><a href="./src/resources/rest/v1/tags.ts">TagGetByCollectionResponse</a></code>

Methods:

- <code title="put /rest/v1/tags/{collectionId}">client.rest.v1.tags.<a href="./src/resources/rest/v1/tags.ts">update</a>(collectionID, { ...params }) -> SimpleResponse</code>
- <code title="delete /rest/v1/tags/{collectionId}">client.rest.v1.tags.<a href="./src/resources/rest/v1/tags.ts">delete</a>(collectionID, { ...params }) -> SimpleResponse</code>
- <code title="get /rest/v1/tags/{collectionId}">client.rest.v1.tags.<a href="./src/resources/rest/v1/tags.ts">getByCollection</a>(collectionID) -> TagGetByCollectionResponse</code>

### Import

Types:

- <code><a href="./src/resources/rest/v1/import/import.ts">ImportHTMLBookmarkFileResponseItemFolder</a></code>
- <code><a href="./src/resources/rest/v1/import/import.ts">ImportUploadFileResponse</a></code>

Methods:

- <code title="post /rest/v1/import/file">client.rest.v1.import.<a href="./src/resources/rest/v1/import/import.ts">uploadFile</a>({ ...params }) -> ImportUploadFileResponse</code>

#### URL

Types:

- <code><a href="./src/resources/rest/v1/import/url.ts">URLCheckExistsResponse</a></code>
- <code><a href="./src/resources/rest/v1/import/url.ts">URLParseResponse</a></code>

Methods:

- <code title="post /rest/v1/import/url/exists">client.rest.v1.import.url.<a href="./src/resources/rest/v1/import/url.ts">checkExists</a>({ ...params }) -> URLCheckExistsResponse</code>
- <code title="get /rest/v1/import/url/parse">client.rest.v1.import.url.<a href="./src/resources/rest/v1/import/url.ts">parse</a>({ ...params }) -> URLParseResponse</code>

### Collections

Types:

- <code><a href="./src/resources/rest/v1/collections/collections.ts">Collection</a></code>
- <code><a href="./src/resources/rest/v1/collections/collections.ts">CollectionRef</a></code>
- <code><a href="./src/resources/rest/v1/collections/collections.ts">SimpleResponse</a></code>
- <code><a href="./src/resources/rest/v1/collections/collections.ts">CollectionCreateResponse</a></code>
- <code><a href="./src/resources/rest/v1/collections/collections.ts">CollectionRetrieveResponse</a></code>
- <code><a href="./src/resources/rest/v1/collections/collections.ts">CollectionListResponse</a></code>
- <code><a href="./src/resources/rest/v1/collections/collections.ts">CollectionCleanResponse</a></code>
- <code><a href="./src/resources/rest/v1/collections/collections.ts">CollectionDelete0Response</a></code>
- <code><a href="./src/resources/rest/v1/collections/collections.ts">CollectionJoinResponse</a></code>
- <code><a href="./src/resources/rest/v1/collections/collections.ts">CollectionListChildrensResponse</a></code>
- <code><a href="./src/resources/rest/v1/collections/collections.ts">CollectionMergeResponse</a></code>
- <code><a href="./src/resources/rest/v1/collections/collections.ts">CollectionUpdate1Response</a></code>
- <code><a href="./src/resources/rest/v1/collections/collections.ts">CollectionUpdateCoverResponse</a></code>

Methods:

- <code title="post /rest/v1/collection">client.rest.v1.collections.<a href="./src/resources/rest/v1/collections/collections.ts">create</a>({ ...params }) -> CollectionCreateResponse</code>
- <code title="get /rest/v1/collection/{id}">client.rest.v1.collections.<a href="./src/resources/rest/v1/collections/collections.ts">retrieve</a>(id) -> CollectionRetrieveResponse</code>
- <code title="get /rest/v1/collections">client.rest.v1.collections.<a href="./src/resources/rest/v1/collections/collections.ts">list</a>() -> CollectionListResponse</code>
- <code title="put /rest/v1/collections/clean">client.rest.v1.collections.<a href="./src/resources/rest/v1/collections/collections.ts">clean</a>() -> CollectionCleanResponse</code>
- <code title="delete /rest/v1/collections">client.rest.v1.collections.<a href="./src/resources/rest/v1/collections/collections.ts">delete0</a>({ ...params }) -> CollectionDelete0Response</code>
- <code title="delete /rest/v1/collection/{id}">client.rest.v1.collections.<a href="./src/resources/rest/v1/collections/collections.ts">delete1</a>(id) -> SimpleResponse</code>
- <code title="delete /rest/v1/collection/-99">client.rest.v1.collections.<a href="./src/resources/rest/v1/collections/collections.ts">deleteInvalid</a>() -> SimpleResponse</code>
- <code title="post /rest/v1/collection/{id}/join">client.rest.v1.collections.<a href="./src/resources/rest/v1/collections/collections.ts">join</a>(id) -> CollectionJoinResponse</code>
- <code title="get /rest/v1/collections/childrens">client.rest.v1.collections.<a href="./src/resources/rest/v1/collections/collections.ts">listChildrens</a>() -> CollectionListChildrensResponse</code>
- <code title="put /rest/v1/collections/merge">client.rest.v1.collections.<a href="./src/resources/rest/v1/collections/collections.ts">merge</a>({ ...params }) -> CollectionMergeResponse</code>
- <code title="put /rest/v1/collections">client.rest.v1.collections.<a href="./src/resources/rest/v1/collections/collections.ts">update0</a>({ ...params }) -> SimpleResponse</code>
- <code title="put /rest/v1/collection/{id}">client.rest.v1.collections.<a href="./src/resources/rest/v1/collections/collections.ts">update1</a>(id, { ...params }) -> CollectionUpdate1Response</code>
- <code title="put /rest/v1/collection/{id}/cover">client.rest.v1.collections.<a href="./src/resources/rest/v1/collections/collections.ts">updateCover</a>(id, { ...params }) -> CollectionUpdateCoverResponse</code>

#### Covers

Types:

- <code><a href="./src/resources/rest/v1/collections/covers.ts">CoverListResponse</a></code>
- <code><a href="./src/resources/rest/v1/collections/covers.ts">CoverGetByTextResponse</a></code>

Methods:

- <code title="get /rest/v1/collections/covers">client.rest.v1.collections.covers.<a href="./src/resources/rest/v1/collections/covers.ts">list</a>() -> CoverListResponse</code>
- <code title="get /rest/v1/collections/covers/{text}">client.rest.v1.collections.covers.<a href="./src/resources/rest/v1/collections/covers.ts">getByText</a>(text) -> CoverGetByTextResponse</code>

#### Sharing

Types:

- <code><a href="./src/resources/rest/v1/collections/sharing.ts">Role</a></code>
- <code><a href="./src/resources/rest/v1/collections/sharing.ts">SharingCreateResponse</a></code>

Methods:

- <code title="post /rest/v1/collection/{id}/sharing">client.rest.v1.collections.sharing.<a href="./src/resources/rest/v1/collections/sharing.ts">create</a>(id, { ...params }) -> SharingCreateResponse</code>
- <code title="delete /rest/v1/collection/{id}/sharing">client.rest.v1.collections.sharing.<a href="./src/resources/rest/v1/collections/sharing.ts">delete</a>(id) -> SimpleResponse</code>
- <code title="delete /rest/v1/collection/{id}/sharing/{userId}">client.rest.v1.collections.sharing.<a href="./src/resources/rest/v1/collections/sharing.ts">deleteUser</a>(userID, { ...params }) -> SimpleResponse</code>
- <code title="get /rest/v1/collection/{id}/sharing">client.rest.v1.collections.sharing.<a href="./src/resources/rest/v1/collections/sharing.ts">get</a>(id) -> void</code>
- <code title="put /rest/v1/collection/{id}/sharing/{userId}">client.rest.v1.collections.sharing.<a href="./src/resources/rest/v1/collections/sharing.ts">updateUser</a>(userID, { ...params }) -> void</code>

### Raindrops

Types:

- <code><a href="./src/resources/rest/v1/raindrops/raindrops.ts">CreatorRef</a></code>
- <code><a href="./src/resources/rest/v1/raindrops/raindrops.ts">UserRef</a></code>
- <code><a href="./src/resources/rest/v1/raindrops/raindrops.ts">RaindropRetrieveResponse</a></code>
- <code><a href="./src/resources/rest/v1/raindrops/raindrops.ts">RaindropListResponse</a></code>
- <code><a href="./src/resources/rest/v1/raindrops/raindrops.ts">RaindropCreate0Response</a></code>
- <code><a href="./src/resources/rest/v1/raindrops/raindrops.ts">RaindropCreate1Response</a></code>
- <code><a href="./src/resources/rest/v1/raindrops/raindrops.ts">RaindropDelete0Response</a></code>
- <code><a href="./src/resources/rest/v1/raindrops/raindrops.ts">RaindropDelete1Response</a></code>
- <code><a href="./src/resources/rest/v1/raindrops/raindrops.ts">RaindropUpdate0Response</a></code>
- <code><a href="./src/resources/rest/v1/raindrops/raindrops.ts">RaindropUpdate1Response</a></code>
- <code><a href="./src/resources/rest/v1/raindrops/raindrops.ts">RaindropUpdateCoverResponse</a></code>
- <code><a href="./src/resources/rest/v1/raindrops/raindrops.ts">RaindropUpdateFileResponse</a></code>

Methods:

- <code title="get /rest/v1/raindrop/{id}">client.rest.v1.raindrops.<a href="./src/resources/rest/v1/raindrops/raindrops.ts">retrieve</a>(id) -> RaindropRetrieveResponse</code>
- <code title="get /rest/v1/raindrops/{collectionId}">client.rest.v1.raindrops.<a href="./src/resources/rest/v1/raindrops/raindrops.ts">list</a>(collectionID, { ...params }) -> RaindropListResponse</code>
- <code title="post /rest/v1/raindrop">client.rest.v1.raindrops.<a href="./src/resources/rest/v1/raindrops/raindrops.ts">create0</a>({ ...params }) -> RaindropCreate0Response</code>
- <code title="post /rest/v1/raindrops">client.rest.v1.raindrops.<a href="./src/resources/rest/v1/raindrops/raindrops.ts">create1</a>({ ...params }) -> RaindropCreate1Response</code>
- <code title="delete /rest/v1/raindrop/{id}">client.rest.v1.raindrops.<a href="./src/resources/rest/v1/raindrops/raindrops.ts">delete0</a>(id) -> RaindropDelete0Response</code>
- <code title="delete /rest/v1/raindrops/{collectionId}">client.rest.v1.raindrops.<a href="./src/resources/rest/v1/raindrops/raindrops.ts">delete1</a>(collectionID, { ...params }) -> RaindropDelete1Response</code>
- <code title="get /rest/v1/raindrop/{id}/cache">client.rest.v1.raindrops.<a href="./src/resources/rest/v1/raindrops/raindrops.ts">getCache</a>(id) -> void</code>
- <code title="put /rest/v1/raindrop/{id}">client.rest.v1.raindrops.<a href="./src/resources/rest/v1/raindrops/raindrops.ts">update0</a>(id, { ...params }) -> RaindropUpdate0Response</code>
- <code title="put /rest/v1/raindrops/{collectionId}">client.rest.v1.raindrops.<a href="./src/resources/rest/v1/raindrops/raindrops.ts">update1</a>(collectionID, { ...params }) -> RaindropUpdate1Response</code>
- <code title="put /rest/v1/raindrop/{id}/cover">client.rest.v1.raindrops.<a href="./src/resources/rest/v1/raindrops/raindrops.ts">updateCover</a>(id, { ...params }) -> RaindropUpdateCoverResponse</code>
- <code title="put /rest/v1/raindrop/file">client.rest.v1.raindrops.<a href="./src/resources/rest/v1/raindrops/raindrops.ts">updateFile</a>({ ...params }) -> RaindropUpdateFileResponse</code>

#### Suggest

Types:

- <code><a href="./src/resources/rest/v1/raindrops/suggest.ts">SuggestCreateResponse</a></code>
- <code><a href="./src/resources/rest/v1/raindrops/suggest.ts">SuggestGetResponse</a></code>

Methods:

- <code title="post /rest/v1/raindrop/suggest">client.rest.v1.raindrops.suggest.<a href="./src/resources/rest/v1/raindrops/suggest.ts">create</a>({ ...params }) -> SuggestCreateResponse</code>
- <code title="get /rest/v1/raindrop/{id}/suggest">client.rest.v1.raindrops.suggest.<a href="./src/resources/rest/v1/raindrops/suggest.ts">get</a>(id) -> SuggestGetResponse</code>
