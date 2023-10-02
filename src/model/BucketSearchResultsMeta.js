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
 * The BucketSearchResultsMeta model module.
 * @module model/BucketSearchResultsMeta
 * @version 1.0.0
 */
class BucketSearchResultsMeta {
    /**
     * Constructs a new <code>BucketSearchResultsMeta</code>.
     * Metadata about the search results.
     * @alias module:model/BucketSearchResultsMeta
     */
    constructor() { 
        
        BucketSearchResultsMeta.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>BucketSearchResultsMeta</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BucketSearchResultsMeta} obj Optional instance to populate.
     * @return {module:model/BucketSearchResultsMeta} The populated <code>BucketSearchResultsMeta</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BucketSearchResultsMeta();

            if (data.hasOwnProperty('results')) {
                obj['results'] = ApiClient.convertToType(data['results'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>BucketSearchResultsMeta</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>BucketSearchResultsMeta</code>.
     */
    static validateJSON(data) {

        return true;
    }


}



/**
 * The total number of results.
 * @member {Number} results
 */
BucketSearchResultsMeta.prototype['results'] = undefined;






export default BucketSearchResultsMeta;

