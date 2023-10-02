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
// Configure Bearer (auth-scheme) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new OpenBucketsApi.FilesApi();
let opts = {
  'keywords': org images -aws, // String | multiple keywords.\"-\" denotes stop keywords
  'order': size, // String | the sorting field for the search results (e.g., \"size\", \"lastModified\")
  'direction': desc, // String | the sorting direction for the search results (e.g., \"desc\" for descending)
  'fieldToSearch': desc, // String | taken into consideration if you provide any of the allowed values, \"cloudProvider\",\"fileExtension\",\"fileName\",\"fileUrl\",\"fullPath\"
  'fullPath': 1, // Number | include the full path in the search results (1 for true, 0 for false)
  'extensions': pdf,.env, // String | comma-separated list of file extensions to include (e.g., \"pdf,env\")
  'lastModifiedFrom': 1682965800, // String | UNIX timestamp for the starting date of the last modification range
  'lastModifiedTo': 1693420200, // String | UNIX timestamp for the ending date of the last modification rang
  'sizeFrom': 15155035, // String | minimum file size in bytes
  'sizeTo': 4538824351471, // String | maximum file size in bytes
  'start': 0, // Number | starting index for pagination
  'limit': 20, // Number | number of search results to return per page, based on your role.  If you send a value more than the allowed limit, we set it to the allowed limit.
  'excludeBuckets': 45,54, // String | comma-separated list of bucket IDs to exclude from the search
  'buckets': , // String | filter search results to specific bucket IDs
  'stopExtensions': .csv,.env // String | comma-separated list of file extensions to exclude with or without \".\" (e.g., sql, .sql)
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
 **keywords** | **String**| multiple keywords.\&quot;-\&quot; denotes stop keywords | [optional] 
 **order** | **String**| the sorting field for the search results (e.g., \&quot;size\&quot;, \&quot;lastModified\&quot;) | [optional] 
 **direction** | **String**| the sorting direction for the search results (e.g., \&quot;desc\&quot; for descending) | [optional] 
 **fieldToSearch** | **String**| taken into consideration if you provide any of the allowed values, \&quot;cloudProvider\&quot;,\&quot;fileExtension\&quot;,\&quot;fileName\&quot;,\&quot;fileUrl\&quot;,\&quot;fullPath\&quot; | [optional] 
 **fullPath** | **Number**| include the full path in the search results (1 for true, 0 for false) | [optional] 
 **extensions** | **String**| comma-separated list of file extensions to include (e.g., \&quot;pdf,env\&quot;) | [optional] 
 **lastModifiedFrom** | **String**| UNIX timestamp for the starting date of the last modification range | [optional] 
 **lastModifiedTo** | **String**| UNIX timestamp for the ending date of the last modification rang | [optional] 
 **sizeFrom** | **String**| minimum file size in bytes | [optional] 
 **sizeTo** | **String**| maximum file size in bytes | [optional] 
 **start** | **Number**| starting index for pagination | [optional] 
 **limit** | **Number**| number of search results to return per page, based on your role.  If you send a value more than the allowed limit, we set it to the allowed limit. | [optional] 
 **excludeBuckets** | **String**| comma-separated list of bucket IDs to exclude from the search | [optional] 
 **buckets** | **String**| filter search results to specific bucket IDs | [optional] 
 **stopExtensions** | **String**| comma-separated list of file extensions to exclude with or without \&quot;.\&quot; (e.g., sql, .sql) | [optional] 

### Return type

[**FileSearchResults**](FileSearchResults.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

