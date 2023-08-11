# openbuckets

OpenBucketsApi - JavaScript client for openbuckets

The OpenBuckets web-based tool is a powerful utility that allows users to quickly locate open buckets in cloud storage systems through a simple query. In addition, it provides a convenient way to search for various file types across these open buckets, making it an essential tool for security professionals, researchers, and anyone interested in discovering exposed data.
This Postman collection aims to showcase the capabilities of OpenBuckets by providing a set of API requests that demonstrate how to leverage its features. By following this collection, you'll learn how to utilize OpenBuckets to identify open buckets and search for specific file types within them.

## Installation

### For [Node.js](https://nodejs.org/)

#### Using npm
Install it via:

```shell
npm install openbuckets --save
```


#### Using git

If the library is hosted at a git repository, e.g.https://github.com/openbuckets/sdk-js
then install it via:

```shell
    npm install openbuckets/sdk-js --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var OpenBucketsApi = require('openbuckets');

var defaultClient = OpenBucketsApi.ApiClient.instance;
// Configure Bearer access token for authorization: bearerAuth
var bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

var api = new OpenBucketsApi.BucketsApi()
var opts = {
  'keywords': abg, // {String} the search keywords to filter bucket names (e.g., \"abg\")
  'type': aws, // {String} the type of bucket to filter (e.g., aws,dos,azure,gcp)
  'exact': 0, // {String} whether to perform an exact match for the keywords (0 for false, 1 for true)
  'start': 0, // {String} starting index for pagination
  'limit': 1000, // {String} number of search results to return per page
  'order': fileCount, // {String} the sorting field for the search results (e.g., \"fileCount\" for sorting by file count)
  'direction': asc // {String} the sorting direction for the search results (e.g., \"asc\" for ascending)
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.searchBuckets(opts, callback);

```

## Documentation for API Endpoints

All URIs are relative to *https://api.openbuckets.io*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*OpenBucketsApi.BucketsApi* | [**searchBuckets**](docs/BucketsApi.md#searchBuckets) | **GET** /api/v2/buckets | Search Buckets
*OpenBucketsApi.FilesApi* | [**searchFiles**](docs/FilesApi.md#searchFiles) | **GET** /api/v2/files | Search Files


## Documentation for Models

 - [OpenBucketsApi.Bucket](docs/Bucket.md)
 - [OpenBucketsApi.BucketSearchResults](docs/BucketSearchResults.md)
 - [OpenBucketsApi.File](docs/File.md)
 - [OpenBucketsApi.FileSearchResults](docs/FileSearchResults.md)


## Documentation for Authorization


Authentication schemes defined for the API:
### bearerAuth

- **Type**: Bearer authentication

