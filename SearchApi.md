# formance.SearchApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**search**](SearchApi.md#search) | **POST** /api/search/ | Search


# **search**
> void search(query)

Search with Query

### Example


```typescript
import { formance } from '@formancehq/formance';
import * as fs from 'fs';

const configuration = formance.createConfiguration();
const apiInstance = new formance.SearchApi(configuration);

let body:formance.SearchApiSearchRequest = {
  // Query
  query: {
    ledgers: [
      "ledgers_example",
    ],
    nextToken: "nextToken_example",
    size: 1,
    terms: [
      "terms_example",
    ],
    target: "target_example",
  },
};

apiInstance.search(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | **Query**|  |


### Return type

**void**

### Authorization

[Authorization](README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

