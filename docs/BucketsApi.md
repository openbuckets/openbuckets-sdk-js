# OpenBucketsApi.BucketsApi

All URIs are relative to *https://api.openbuckets.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**searchBuckets**](BucketsApi.md#searchBuckets) | **GET** /api/v2/buckets | Search Buckets



## searchBuckets

> BucketSearchResults searchBuckets(opts)

Search Buckets

This request enables you to perform a targeted search for buckets within the OpenBuckets database using advanced filters. You can narrow down the search based on various criteria such as keywords, bucket type, exact match, sorting, and pagination.

### Example

```javascript
import OpenBucketsApi from 'openbuckets';
let defaultClient = OpenBucketsApi.ApiClient.instance;
// Configure Bearer access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new OpenBucketsApi.BucketsApi();
let opts = {
  'keywords': abg, // String | the search keywords to filter bucket names (e.g., \"abg\")
  'type': aws, // String | the type of bucket to filter (e.g., aws,dos,azure,gcp)
  'exact': 0, // String | whether to perform an exact match for the keywords (0 for false, 1 for true)
  'start': 0, // String | starting index for pagination
  'limit': 1000, // String | number of search results to return per page
  'order': fileCount, // String | the sorting field for the search results (e.g., \"fileCount\" for sorting by file count)
  'direction': asc // String | the sorting direction for the search results (e.g., \"asc\" for ascending)
};
apiInstance.searchBuckets(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **keywords** | **String**| the search keywords to filter bucket names (e.g., \&quot;abg\&quot;) | [optional] 
 **type** | **String**| the type of bucket to filter (e.g., aws,dos,azure,gcp) | [optional] 
 **exact** | **String**| whether to perform an exact match for the keywords (0 for false, 1 for true) | [optional] 
 **start** | **String**| starting index for pagination | [optional] 
 **limit** | **String**| number of search results to return per page | [optional] 
 **order** | **String**| the sorting field for the search results (e.g., \&quot;fileCount\&quot; for sorting by file count) | [optional] 
 **direction** | **String**| the sorting direction for the search results (e.g., \&quot;asc\&quot; for ascending) | [optional] 

### Return type

[**BucketSearchResults**](BucketSearchResults.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

