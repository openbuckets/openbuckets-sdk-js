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
 * The BucketSearchResultsQuery model module.
 * @module model/BucketSearchResultsQuery
 * @version 1.0.0
 */
class BucketSearchResultsQuery {
    /**
     * Constructs a new <code>BucketSearchResultsQuery</code>.
     * The query parameters used for the search.
     * @alias module:model/BucketSearchResultsQuery
     */
    constructor() { 
        
        BucketSearchResultsQuery.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>BucketSearchResultsQuery</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BucketSearchResultsQuery} obj Optional instance to populate.
     * @return {module:model/BucketSearchResultsQuery} The populated <code>BucketSearchResultsQuery</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BucketSearchResultsQuery();

            if (data.hasOwnProperty('direction')) {
                obj['direction'] = ApiClient.convertToType(data['direction'], 'String');
            }
            if (data.hasOwnProperty('exact')) {
                obj['exact'] = ApiClient.convertToType(data['exact'], 'Boolean');
            }
            if (data.hasOwnProperty('keywords')) {
                obj['keywords'] = ApiClient.convertToType(data['keywords'], 'String');
            }
            if (data.hasOwnProperty('limit')) {
                obj['limit'] = ApiClient.convertToType(data['limit'], 'Number');
            }
            if (data.hasOwnProperty('order')) {
                obj['order'] = ApiClient.convertToType(data['order'], 'String');
            }
            if (data.hasOwnProperty('start')) {
                obj['start'] = ApiClient.convertToType(data['start'], 'Number');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>BucketSearchResultsQuery</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>BucketSearchResultsQuery</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['direction'] && !(typeof data['direction'] === 'string' || data['direction'] instanceof String)) {
            throw new Error("Expected the field `direction` to be a primitive type in the JSON string but got " + data['direction']);
        }
        // ensure the json data is a string
        if (data['keywords'] && !(typeof data['keywords'] === 'string' || data['keywords'] instanceof String)) {
            throw new Error("Expected the field `keywords` to be a primitive type in the JSON string but got " + data['keywords']);
        }
        // ensure the json data is a string
        if (data['order'] && !(typeof data['order'] === 'string' || data['order'] instanceof String)) {
            throw new Error("Expected the field `order` to be a primitive type in the JSON string but got " + data['order']);
        }
        // ensure the json data is a string
        if (data['type'] && !(typeof data['type'] === 'string' || data['type'] instanceof String)) {
            throw new Error("Expected the field `type` to be a primitive type in the JSON string but got " + data['type']);
        }

        return true;
    }


}



/**
 * The sort direction.
 * @member {String} direction
 */
BucketSearchResultsQuery.prototype['direction'] = undefined;

/**
 * Whether the search is an exact match.
 * @member {Boolean} exact
 */
BucketSearchResultsQuery.prototype['exact'] = undefined;

/**
 * The keywords used for the search.
 * @member {String} keywords
 */
BucketSearchResultsQuery.prototype['keywords'] = undefined;

/**
 * The maximum number of results to return.
 * @member {Number} limit
 */
BucketSearchResultsQuery.prototype['limit'] = undefined;

/**
 * The field by which to order the results.
 * @member {String} order
 */
BucketSearchResultsQuery.prototype['order'] = undefined;

/**
 * The starting index for the results.
 * @member {Number} start
 */
BucketSearchResultsQuery.prototype['start'] = undefined;

/**
 * The type of cloud provider.
 * @member {String} type
 */
BucketSearchResultsQuery.prototype['type'] = undefined;






export default BucketSearchResultsQuery;

