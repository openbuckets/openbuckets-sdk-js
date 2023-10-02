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

import ApiClient from '../ApiClient';

/**
 * The FileSearchResultsQuery model module.
 * @module model/FileSearchResultsQuery
 * @version 1.0.0
 */
class FileSearchResultsQuery {
    /**
     * Constructs a new <code>FileSearchResultsQuery</code>.
     * The query parameters used for the search.
     * @alias module:model/FileSearchResultsQuery
     */
    constructor() { 
        
        FileSearchResultsQuery.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>FileSearchResultsQuery</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/FileSearchResultsQuery} obj Optional instance to populate.
     * @return {module:model/FileSearchResultsQuery} The populated <code>FileSearchResultsQuery</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new FileSearchResultsQuery();

            if (data.hasOwnProperty('keywords')) {
                obj['keywords'] = ApiClient.convertToType(data['keywords'], 'String');
            }
            if (data.hasOwnProperty('limit')) {
                obj['limit'] = ApiClient.convertToType(data['limit'], 'Number');
            }
            if (data.hasOwnProperty('start')) {
                obj['start'] = ApiClient.convertToType(data['start'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>FileSearchResultsQuery</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>FileSearchResultsQuery</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['keywords'] && !(typeof data['keywords'] === 'string' || data['keywords'] instanceof String)) {
            throw new Error("Expected the field `keywords` to be a primitive type in the JSON string but got " + data['keywords']);
        }

        return true;
    }


}



/**
 * The keywords used for the search.
 * @member {String} keywords
 */
FileSearchResultsQuery.prototype['keywords'] = undefined;

/**
 * The maximum number of results to return.
 * @member {Number} limit
 */
FileSearchResultsQuery.prototype['limit'] = undefined;

/**
 * The starting index for the results.
 * @member {Number} start
 */
FileSearchResultsQuery.prototype['start'] = undefined;






export default FileSearchResultsQuery;

