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
 * The FileSearchResultsMeta model module.
 * @module model/FileSearchResultsMeta
 * @version 1.0.0
 */
class FileSearchResultsMeta {
    /**
     * Constructs a new <code>FileSearchResultsMeta</code>.
     * Metadata about the search results.
     * @alias module:model/FileSearchResultsMeta
     */
    constructor() { 
        
        FileSearchResultsMeta.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>FileSearchResultsMeta</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/FileSearchResultsMeta} obj Optional instance to populate.
     * @return {module:model/FileSearchResultsMeta} The populated <code>FileSearchResultsMeta</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new FileSearchResultsMeta();

            if (data.hasOwnProperty('results')) {
                obj['results'] = ApiClient.convertToType(data['results'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>FileSearchResultsMeta</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>FileSearchResultsMeta</code>.
     */
    static validateJSON(data) {

        return true;
    }


}



/**
 * The total number of results.
 * @member {Number} results
 */
FileSearchResultsMeta.prototype['results'] = undefined;






export default FileSearchResultsMeta;

