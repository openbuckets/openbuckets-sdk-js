# OpenBucketsApi.FilesApi

All URIs are relative to *https://api.openbuckets.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**searchFiles**](FilesApi.md#searchFiles) | **GET** /api/v2/files | Search Files



## searchFiles

> FileSearchResults searchFiles(opts)

Search Files

This request allows you to perform a highly specific search for files within the OpenBuckets database using advanced filters. You can narrow down the search based on various criteria such as keywords, order, size, date range, file extensions, and more.

### Example

```javascript
import OpenBucketsApi from 'open_buckets_api';
let defaultClient = OpenBucketsApi.ApiClient.instance;
// Configure Bearer access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new OpenBucketsApi.FilesApi();
let opts = {
  'keywords': org%20images%20-aws, // String | multiple keywords. - denotes stop keywords
  'order': size, // String | the sorting field for the search results (e.g., \"size\", \"last_modified\")
  'direction': desc, // String | the sorting direction for the search results (e.g., \"desc\" for descending)
  'fullPath': 1, // String | include the full path in the search results (1 for true, 0 for false)
  'extensions': pdf%2C.env, // String | comma-separated list of file extensions to include (e.g., \"pdf,env\")
  'lastModifiedFrom': 1682965800, // String | UNIX timestamp for the starting date of the last modification range
  'lastModifiedTo': 1693420200, // String | UNIX timestamp for the ending date of the last modification rang
  'sizeFrom': 15155035, // String | minimum file size in bytes
  'sizeTo': 4538824351471, // String | maximum file size in bytes
  'start': 0, // String | starting index for pagination
  'limit': 1000, // String | number of search results to return per page
  'excludeBuckets': 45,54, // String | comma-separated list of bucket IDs to exclude from the search
  'regexp': false, // String | use regular expression for the search (true or false)
  'noautocorrect': false, // String | disable autocorrection in the search query (true or false)
  'buckets': , // String | filter search results to specific bucket IDs
  'stopExtensions': , // String | comma-separated list of file extensions to exclude
  'pagingMode': offset, // String | pagination mode (e.g., \"offset\" for offset-based)
  'searchAfter': , // String | token to continue a scroll-based search
  'scrollId':  // String | scroll ID for a continuation of a scroll-based search
};
apiInstance.searchFiles(opts, (error, data, response) => {
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
 **keywords** | **String**| multiple keywords. - denotes stop keywords | [optional] 
 **order** | **String**| the sorting field for the search results (e.g., \&quot;size\&quot;, \&quot;last_modified\&quot;) | [optional] 
 **direction** | **String**| the sorting direction for the search results (e.g., \&quot;desc\&quot; for descending) | [optional] 
 **fullPath** | **String**| include the full path in the search results (1 for true, 0 for false) | [optional] 
 **extensions** | **String**| comma-separated list of file extensions to include (e.g., \&quot;pdf,env\&quot;) | [optional] 
 **lastModifiedFrom** | **String**| UNIX timestamp for the starting date of the last modification range | [optional] 
 **lastModifiedTo** | **String**| UNIX timestamp for the ending date of the last modification rang | [optional] 
 **sizeFrom** | **String**| minimum file size in bytes | [optional] 
 **sizeTo** | **String**| maximum file size in bytes | [optional] 
 **start** | **String**| starting index for pagination | [optional] 
 **limit** | **String**| number of search results to return per page | [optional] 
 **excludeBuckets** | **String**| comma-separated list of bucket IDs to exclude from the search | [optional] 
 **regexp** | **String**| use regular expression for the search (true or false) | [optional] 
 **noautocorrect** | **String**| disable autocorrection in the search query (true or false) | [optional] 
 **buckets** | **String**| filter search results to specific bucket IDs | [optional] 
 **stopExtensions** | **String**| comma-separated list of file extensions to exclude | [optional] 
 **pagingMode** | **String**| pagination mode (e.g., \&quot;offset\&quot; for offset-based) | [optional] 
 **searchAfter** | **String**| token to continue a scroll-based search | [optional] 
 **scrollId** | **String**| scroll ID for a continuation of a scroll-based search | [optional] 

### Return type

[**FileSearchResults**](FileSearchResults.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

