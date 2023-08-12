/**
 * OpenBuckets API
 * The OpenBuckets web-based tool is a powerful utility that allows users to quickly locate open buckets in cloud storage systems through a simple query. In addition, it provides a convenient way to search for various file types across these open buckets, making it an essential tool for security professionals, researchers, and anyone interested in discovering exposed data. This Postman collection aims to showcase the capabilities of OpenBuckets by providing a set of API requests that demonstrate how to leverage its features. By following this collection, you'll learn how to utilize OpenBuckets to identify open buckets and search for specific file types within them.
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openbuckets.io).
 * https://openbuckets.io
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import FileSearchResults from '../model/FileSearchResults';

/**
* Files service.
* @module api/FilesApi
* @version 1.0.0
*/
export default class FilesApi {

    /**
    * Constructs a new FilesApi. 
    * @alias module:api/FilesApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the searchFiles operation.
     * @callback module:api/FilesApi~searchFilesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/FileSearchResults} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Search Files
     * This request allows you to perform a highly specific search for files within the OpenBuckets database using advanced filters. You can narrow down the search based on various criteria such as keywords, order, size, date range, file extensions, and more.
     * @param {Object} opts Optional parameters
     * @param {String} [keywords] multiple keywords. - denotes stop keywords
     * @param {String} [order] the sorting field for the search results (e.g., \"size\", \"last_modified\")
     * @param {String} [direction] the sorting direction for the search results (e.g., \"desc\" for descending)
     * @param {String} [fullPath] include the full path in the search results (1 for true, 0 for false)
     * @param {String} [extensions] comma-separated list of file extensions to include (e.g., \"pdf,env\")
     * @param {String} [lastModifiedFrom] UNIX timestamp for the starting date of the last modification range
     * @param {String} [lastModifiedTo] UNIX timestamp for the ending date of the last modification rang
     * @param {String} [sizeFrom] minimum file size in bytes
     * @param {String} [sizeTo] maximum file size in bytes
     * @param {String} [start] starting index for pagination
     * @param {String} [limit] number of search results to return per page
     * @param {String} [excludeBuckets] comma-separated list of bucket IDs to exclude from the search
     * @param {String} [regexp] use regular expression for the search (true or false)
     * @param {String} [noautocorrect] disable autocorrection in the search query (true or false)
     * @param {String} [buckets] filter search results to specific bucket IDs
     * @param {String} [stopExtensions] comma-separated list of file extensions to exclude
     * @param {String} [pagingMode] pagination mode (e.g., \"offset\" for offset-based)
     * @param {String} [searchAfter] token to continue a scroll-based search
     * @param {String} [scrollId] scroll ID for a continuation of a scroll-based search
     * @param {module:api/FilesApi~searchFilesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/FileSearchResults}
     */
    searchFiles(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'keywords': opts['keywords'],
        'order': opts['order'],
        'direction': opts['direction'],
        'full-path': opts['fullPath'],
        'extensions': opts['extensions'],
        'last-modified-from': opts['lastModifiedFrom'],
        'last-modified-to': opts['lastModifiedTo'],
        'size-from': opts['sizeFrom'],
        'size-to': opts['sizeTo'],
        'start': opts['start'],
        'limit': opts['limit'],
        'excludeBuckets': opts['excludeBuckets'],
        'regexp': opts['regexp'],
        'noautocorrect': opts['noautocorrect'],
        'buckets': opts['buckets'],
        'stopExtensions': opts['stopExtensions'],
        'pagingMode': opts['pagingMode'],
        'searchAfter': opts['searchAfter'],
        'scrollId': opts['scrollId']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = FileSearchResults;
      return this.apiClient.callApi(
        '/api/v2/files', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
