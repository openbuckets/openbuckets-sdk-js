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
 * The FileSearchResultsFilesInner model module.
 * @module model/FileSearchResultsFilesInner
 * @version 1.0.0
 */
class FileSearchResultsFilesInner {
    /**
     * Constructs a new <code>FileSearchResultsFilesInner</code>.
     * Details about each file.
     * @alias module:model/FileSearchResultsFilesInner
     */
    constructor() { 
        
        FileSearchResultsFilesInner.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>FileSearchResultsFilesInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/FileSearchResultsFilesInner} obj Optional instance to populate.
     * @return {module:model/FileSearchResultsFilesInner} The populated <code>FileSearchResultsFilesInner</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new FileSearchResultsFilesInner();

            if (data.hasOwnProperty('bucketId')) {
                obj['bucketId'] = ApiClient.convertToType(data['bucketId'], 'Number');
            }
            if (data.hasOwnProperty('cloudProvider')) {
                obj['cloudProvider'] = ApiClient.convertToType(data['cloudProvider'], 'String');
            }
            if (data.hasOwnProperty('fileExtension')) {
                obj['fileExtension'] = ApiClient.convertToType(data['fileExtension'], 'String');
            }
            if (data.hasOwnProperty('fileName')) {
                obj['fileName'] = ApiClient.convertToType(data['fileName'], 'String');
            }
            if (data.hasOwnProperty('fileSize')) {
                obj['fileSize'] = ApiClient.convertToType(data['fileSize'], 'Number');
            }
            if (data.hasOwnProperty('fileUrl')) {
                obj['fileUrl'] = ApiClient.convertToType(data['fileUrl'], 'String');
            }
            if (data.hasOwnProperty('fullPath')) {
                obj['fullPath'] = ApiClient.convertToType(data['fullPath'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('indexedAt')) {
                obj['indexedAt'] = ApiClient.convertToType(data['indexedAt'], 'Date');
            }
            if (data.hasOwnProperty('lastModified')) {
                obj['lastModified'] = ApiClient.convertToType(data['lastModified'], 'Date');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>FileSearchResultsFilesInner</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>FileSearchResultsFilesInner</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['cloudProvider'] && !(typeof data['cloudProvider'] === 'string' || data['cloudProvider'] instanceof String)) {
            throw new Error("Expected the field `cloudProvider` to be a primitive type in the JSON string but got " + data['cloudProvider']);
        }
        // ensure the json data is a string
        if (data['fileExtension'] && !(typeof data['fileExtension'] === 'string' || data['fileExtension'] instanceof String)) {
            throw new Error("Expected the field `fileExtension` to be a primitive type in the JSON string but got " + data['fileExtension']);
        }
        // ensure the json data is a string
        if (data['fileName'] && !(typeof data['fileName'] === 'string' || data['fileName'] instanceof String)) {
            throw new Error("Expected the field `fileName` to be a primitive type in the JSON string but got " + data['fileName']);
        }
        // ensure the json data is a string
        if (data['fileUrl'] && !(typeof data['fileUrl'] === 'string' || data['fileUrl'] instanceof String)) {
            throw new Error("Expected the field `fileUrl` to be a primitive type in the JSON string but got " + data['fileUrl']);
        }
        // ensure the json data is a string
        if (data['fullPath'] && !(typeof data['fullPath'] === 'string' || data['fullPath'] instanceof String)) {
            throw new Error("Expected the field `fullPath` to be a primitive type in the JSON string but got " + data['fullPath']);
        }

        return true;
    }


}



/**
 * The unique identifier for the bucket containing the file.
 * @member {Number} bucketId
 */
FileSearchResultsFilesInner.prototype['bucketId'] = undefined;

/**
 * The cloud provider where the file is hosted.
 * @member {String} cloudProvider
 */
FileSearchResultsFilesInner.prototype['cloudProvider'] = undefined;

/**
 * The file extension.
 * @member {String} fileExtension
 */
FileSearchResultsFilesInner.prototype['fileExtension'] = undefined;

/**
 * The name of the file.
 * @member {String} fileName
 */
FileSearchResultsFilesInner.prototype['fileName'] = undefined;

/**
 * The size of the file in bytes.
 * @member {Number} fileSize
 */
FileSearchResultsFilesInner.prototype['fileSize'] = undefined;

/**
 * The URL of the file.
 * @member {String} fileUrl
 */
FileSearchResultsFilesInner.prototype['fileUrl'] = undefined;

/**
 * The full path to the file.
 * @member {String} fullPath
 */
FileSearchResultsFilesInner.prototype['fullPath'] = undefined;

/**
 * The unique identifier for the file.
 * @member {Number} id
 */
FileSearchResultsFilesInner.prototype['id'] = undefined;

/**
 * The date and time when the file was last indexed.
 * @member {Date} indexedAt
 */
FileSearchResultsFilesInner.prototype['indexedAt'] = undefined;

/**
 * The date and time when the file was last modified.
 * @member {Date} lastModified
 */
FileSearchResultsFilesInner.prototype['lastModified'] = undefined;






export default FileSearchResultsFilesInner;

