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
 * The BucketSearchResultsBucketsInner model module.
 * @module model/BucketSearchResultsBucketsInner
 * @version 1.0.0
 */
class BucketSearchResultsBucketsInner {
    /**
     * Constructs a new <code>BucketSearchResultsBucketsInner</code>.
     * Details about each bucket.
     * @alias module:model/BucketSearchResultsBucketsInner
     */
    constructor() { 
        
        BucketSearchResultsBucketsInner.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>BucketSearchResultsBucketsInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BucketSearchResultsBucketsInner} obj Optional instance to populate.
     * @return {module:model/BucketSearchResultsBucketsInner} The populated <code>BucketSearchResultsBucketsInner</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BucketSearchResultsBucketsInner();

            if (data.hasOwnProperty('cloudProvider')) {
                obj['cloudProvider'] = ApiClient.convertToType(data['cloudProvider'], 'String');
            }
            if (data.hasOwnProperty('fileCount')) {
                obj['fileCount'] = ApiClient.convertToType(data['fileCount'], 'Number');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('indexedAt')) {
                obj['indexedAt'] = ApiClient.convertToType(data['indexedAt'], 'Date');
            }
            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>BucketSearchResultsBucketsInner</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>BucketSearchResultsBucketsInner</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['cloudProvider'] && !(typeof data['cloudProvider'] === 'string' || data['cloudProvider'] instanceof String)) {
            throw new Error("Expected the field `cloudProvider` to be a primitive type in the JSON string but got " + data['cloudProvider']);
        }
        // ensure the json data is a string
        if (data['url'] && !(typeof data['url'] === 'string' || data['url'] instanceof String)) {
            throw new Error("Expected the field `url` to be a primitive type in the JSON string but got " + data['url']);
        }

        return true;
    }


}



/**
 * The cloud provider where the bucket is hosted.
 * @member {String} cloudProvider
 */
BucketSearchResultsBucketsInner.prototype['cloudProvider'] = undefined;

/**
 * The number of files in the bucket.
 * @member {Number} fileCount
 */
BucketSearchResultsBucketsInner.prototype['fileCount'] = undefined;

/**
 * The unique identifier for the bucket.
 * @member {Number} id
 */
BucketSearchResultsBucketsInner.prototype['id'] = undefined;

/**
 * The date and time when the bucket was last indexed.
 * @member {Date} indexedAt
 */
BucketSearchResultsBucketsInner.prototype['indexedAt'] = undefined;

/**
 * The URL of the bucket.
 * @member {String} url
 */
BucketSearchResultsBucketsInner.prototype['url'] = undefined;






export default BucketSearchResultsBucketsInner;

