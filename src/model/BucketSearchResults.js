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
import BucketSearchResultsBucketsInner from './BucketSearchResultsBucketsInner';
import BucketSearchResultsMeta from './BucketSearchResultsMeta';
import BucketSearchResultsQuery from './BucketSearchResultsQuery';

/**
 * The BucketSearchResults model module.
 * @module model/BucketSearchResults
 * @version 1.0.0
 */
class BucketSearchResults {
    /**
     * Constructs a new <code>BucketSearchResults</code>.
     * The search results for buckets.
     * @alias module:model/BucketSearchResults
     */
    constructor() { 
        
        BucketSearchResults.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>BucketSearchResults</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BucketSearchResults} obj Optional instance to populate.
     * @return {module:model/BucketSearchResults} The populated <code>BucketSearchResults</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BucketSearchResults();

            if (data.hasOwnProperty('buckets')) {
                obj['buckets'] = ApiClient.convertToType(data['buckets'], [BucketSearchResultsBucketsInner]);
            }
            if (data.hasOwnProperty('meta')) {
                obj['meta'] = BucketSearchResultsMeta.constructFromObject(data['meta']);
            }
            if (data.hasOwnProperty('query')) {
                obj['query'] = BucketSearchResultsQuery.constructFromObject(data['query']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>BucketSearchResults</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>BucketSearchResults</code>.
     */
    static validateJSON(data) {
        if (data['buckets']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['buckets'])) {
                throw new Error("Expected the field `buckets` to be an array in the JSON data but got " + data['buckets']);
            }
            // validate the optional field `buckets` (array)
            for (const item of data['buckets']) {
                BucketSearchResultsBucketsInner.validateJSON(item);
            };
        }
        // validate the optional field `meta`
        if (data['meta']) { // data not null
          BucketSearchResultsMeta.validateJSON(data['meta']);
        }
        // validate the optional field `query`
        if (data['query']) { // data not null
          BucketSearchResultsQuery.validateJSON(data['query']);
        }

        return true;
    }


}



/**
 * An array of buckets.
 * @member {Array.<module:model/BucketSearchResultsBucketsInner>} buckets
 */
BucketSearchResults.prototype['buckets'] = undefined;

/**
 * @member {module:model/BucketSearchResultsMeta} meta
 */
BucketSearchResults.prototype['meta'] = undefined;

/**
 * @member {module:model/BucketSearchResultsQuery} query
 */
BucketSearchResults.prototype['query'] = undefined;






export default BucketSearchResults;

