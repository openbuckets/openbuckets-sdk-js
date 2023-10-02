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
import FileSearchResultsFilesInner from './FileSearchResultsFilesInner';
import FileSearchResultsMeta from './FileSearchResultsMeta';
import FileSearchResultsQuery from './FileSearchResultsQuery';

/**
 * The FileSearchResults model module.
 * @module model/FileSearchResults
 * @version 1.0.0
 */
class FileSearchResults {
    /**
     * Constructs a new <code>FileSearchResults</code>.
     * The search results for files.
     * @alias module:model/FileSearchResults
     */
    constructor() { 
        
        FileSearchResults.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>FileSearchResults</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/FileSearchResults} obj Optional instance to populate.
     * @return {module:model/FileSearchResults} The populated <code>FileSearchResults</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new FileSearchResults();

            if (data.hasOwnProperty('files')) {
                obj['files'] = ApiClient.convertToType(data['files'], [FileSearchResultsFilesInner]);
            }
            if (data.hasOwnProperty('meta')) {
                obj['meta'] = FileSearchResultsMeta.constructFromObject(data['meta']);
            }
            if (data.hasOwnProperty('query')) {
                obj['query'] = FileSearchResultsQuery.constructFromObject(data['query']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>FileSearchResults</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>FileSearchResults</code>.
     */
    static validateJSON(data) {
        if (data['files']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['files'])) {
                throw new Error("Expected the field `files` to be an array in the JSON data but got " + data['files']);
            }
            // validate the optional field `files` (array)
            for (const item of data['files']) {
                FileSearchResultsFilesInner.validateJSON(item);
            };
        }
        // validate the optional field `meta`
        if (data['meta']) { // data not null
          FileSearchResultsMeta.validateJSON(data['meta']);
        }
        // validate the optional field `query`
        if (data['query']) { // data not null
          FileSearchResultsQuery.validateJSON(data['query']);
        }

        return true;
    }


}



/**
 * An array of files.
 * @member {Array.<module:model/FileSearchResultsFilesInner>} files
 */
FileSearchResults.prototype['files'] = undefined;

/**
 * @member {module:model/FileSearchResultsMeta} meta
 */
FileSearchResults.prototype['meta'] = undefined;

/**
 * @member {module:model/FileSearchResultsQuery} query
 */
FileSearchResults.prototype['query'] = undefined;






export default FileSearchResults;

