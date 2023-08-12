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
import BucketSearchResults from '../model/BucketSearchResults';

/**
* Buckets service.
* @module api/BucketsApi
* @version 1.0.0
*/
export default class BucketsApi {

    /**
    * Constructs a new BucketsApi. 
    * @alias module:api/BucketsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the searchBuckets operation.
     * @callback module:api/BucketsApi~searchBucketsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/BucketSearchResults} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Search Buckets
     * This request enables you to perform a targeted search for buckets within the OpenBuckets database using advanced filters. You can narrow down the search based on various criteria such as keywords, bucket type, exact match, sorting, and pagination.
     * @param {Object} opts Optional parameters
     * @param {String} [keywords] the search keywords to filter bucket names (e.g., \"abg\")
     * @param {String} [type] the type of bucket to filter (e.g., aws,dos,azure,gcp)
     * @param {String} [exact] whether to perform an exact match for the keywords (0 for false, 1 for true)
     * @param {String} [start] starting index for pagination
     * @param {String} [limit] number of search results to return per page
     * @param {String} [order] the sorting field for the search results (e.g., \"fileCount\" for sorting by file count)
     * @param {String} [direction] the sorting direction for the search results (e.g., \"asc\" for ascending)
     * @param {module:api/BucketsApi~searchBucketsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/BucketSearchResults}
     */
    searchBuckets(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'keywords': opts['keywords'],
        'type': opts['type'],
        'exact': opts['exact'],
        'start': opts['start'],
        'limit': opts['limit'],
        'order': opts['order'],
        'direction': opts['direction']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = BucketSearchResults;
      return this.apiClient.callApi(
        '/api/v2/buckets', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
