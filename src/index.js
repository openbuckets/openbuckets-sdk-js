/**
 * OpenBuckets API
 * The OpenBuckets web-based tool is a powerful utility that allows users to quickly locate open buckets in cloud storage systems through a simple query. In addition, it provides a convenient way to search for various file types across these open buckets, making it an essential tool for security professionals, researchers, and anyone interested in discovering exposed data. This Postman collection aims to showcase the capabilities of OpenBuckets by providing a set of API requests that demonstrate how to leverage its features. By following this collection, you'll learn how to utilize OpenBuckets to identify open buckets and search for specific file types within them.
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: support@openbuckets.io
 *
 * https://openbuckets.io
 * Do not edit the class manually.
 *
 */


import ApiClient from './ApiClient';
import Bucket from './model/Bucket';
import BucketSearchResults from './model/BucketSearchResults';
import BucketSearchResultsBucketsInner from './model/BucketSearchResultsBucketsInner';
import BucketSearchResultsMeta from './model/BucketSearchResultsMeta';
import BucketSearchResultsQuery from './model/BucketSearchResultsQuery';
import File from './model/File';
import FileSearchResults from './model/FileSearchResults';
import FileSearchResultsFilesInner from './model/FileSearchResultsFilesInner';
import FileSearchResultsMeta from './model/FileSearchResultsMeta';
import FileSearchResultsQuery from './model/FileSearchResultsQuery';
import BucketsApi from './api/BucketsApi';
import FilesApi from './api/FilesApi';


/**
* The OpenBuckets web-based tool is a powerful utility that allows users to quickly locate open buckets in cloud storage systems through a simple query. In addition, it provides a convenient way to search for various file types across these open buckets, making it an essential tool for security professionals, researchers, and anyone interested in discovering exposed data. This Postman collection aims to showcase the capabilities of OpenBuckets by providing a set of API requests that demonstrate how to leverage its features. By following this collection, you&#39;ll learn how to utilize OpenBuckets to identify open buckets and search for specific file types within them..<br>
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* <p>
* An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
* <pre>
* var OpenBucketsApi = require('index'); // See note below*.
* var xxxSvc = new OpenBucketsApi.XxxApi(); // Allocate the API class we're going to use.
* var yyyModel = new OpenBucketsApi.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
* and put the application logic within the callback function.</em>
* </p>
* <p>
* A non-AMD browser application (discouraged) might do something like this:
* <pre>
* var xxxSvc = new OpenBucketsApi.XxxApi(); // Allocate the API class we're going to use.
* var yyy = new OpenBucketsApi.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* </p>
* @module index
* @version 1.0.0
*/
export {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient,

    /**
     * The Bucket model constructor.
     * @property {module:model/Bucket}
     */
    Bucket,

    /**
     * The BucketSearchResults model constructor.
     * @property {module:model/BucketSearchResults}
     */
    BucketSearchResults,

    /**
     * The BucketSearchResultsBucketsInner model constructor.
     * @property {module:model/BucketSearchResultsBucketsInner}
     */
    BucketSearchResultsBucketsInner,

    /**
     * The BucketSearchResultsMeta model constructor.
     * @property {module:model/BucketSearchResultsMeta}
     */
    BucketSearchResultsMeta,

    /**
     * The BucketSearchResultsQuery model constructor.
     * @property {module:model/BucketSearchResultsQuery}
     */
    BucketSearchResultsQuery,

    /**
     * The File model constructor.
     * @property {module:model/File}
     */
    File,

    /**
     * The FileSearchResults model constructor.
     * @property {module:model/FileSearchResults}
     */
    FileSearchResults,

    /**
     * The FileSearchResultsFilesInner model constructor.
     * @property {module:model/FileSearchResultsFilesInner}
     */
    FileSearchResultsFilesInner,

    /**
     * The FileSearchResultsMeta model constructor.
     * @property {module:model/FileSearchResultsMeta}
     */
    FileSearchResultsMeta,

    /**
     * The FileSearchResultsQuery model constructor.
     * @property {module:model/FileSearchResultsQuery}
     */
    FileSearchResultsQuery,

    /**
    * The BucketsApi service constructor.
    * @property {module:api/BucketsApi}
    */
    BucketsApi,

    /**
    * The FilesApi service constructor.
    * @property {module:api/FilesApi}
    */
    FilesApi
};
