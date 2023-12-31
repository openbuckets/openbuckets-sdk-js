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
 * The File model module.
 * @module model/File
 * @version 1.0.0
 */
class File {
    /**
     * Constructs a new <code>File</code>.
     * @alias module:model/File
     */
    constructor() { 
        
        File.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>File</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/File} obj Optional instance to populate.
     * @return {module:model/File} The populated <code>File</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new File();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('bucket')) {
                obj['bucket'] = ApiClient.convertToType(data['bucket'], 'String');
            }
            if (data.hasOwnProperty('bucketId')) {
                obj['bucketId'] = ApiClient.convertToType(data['bucketId'], 'Number');
            }
            if (data.hasOwnProperty('filename')) {
                obj['filename'] = ApiClient.convertToType(data['filename'], 'String');
            }
            if (data.hasOwnProperty('fullPath')) {
                obj['fullPath'] = ApiClient.convertToType(data['fullPath'], 'String');
            }
            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
            if (data.hasOwnProperty('size')) {
                obj['size'] = ApiClient.convertToType(data['size'], 'Number');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('lastModified')) {
                obj['lastModified'] = ApiClient.convertToType(data['lastModified'], 'Number');
            }
            if (data.hasOwnProperty('container')) {
                obj['container'] = ApiClient.convertToType(data['container'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>File</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>File</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
            throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
        }
        // ensure the json data is a string
        if (data['bucket'] && !(typeof data['bucket'] === 'string' || data['bucket'] instanceof String)) {
            throw new Error("Expected the field `bucket` to be a primitive type in the JSON string but got " + data['bucket']);
        }
        // ensure the json data is a string
        if (data['filename'] && !(typeof data['filename'] === 'string' || data['filename'] instanceof String)) {
            throw new Error("Expected the field `filename` to be a primitive type in the JSON string but got " + data['filename']);
        }
        // ensure the json data is a string
        if (data['fullPath'] && !(typeof data['fullPath'] === 'string' || data['fullPath'] instanceof String)) {
            throw new Error("Expected the field `fullPath` to be a primitive type in the JSON string but got " + data['fullPath']);
        }
        // ensure the json data is a string
        if (data['url'] && !(typeof data['url'] === 'string' || data['url'] instanceof String)) {
            throw new Error("Expected the field `url` to be a primitive type in the JSON string but got " + data['url']);
        }
        // ensure the json data is a string
        if (data['type'] && !(typeof data['type'] === 'string' || data['type'] instanceof String)) {
            throw new Error("Expected the field `type` to be a primitive type in the JSON string but got " + data['type']);
        }
        // ensure the json data is a string
        if (data['container'] && !(typeof data['container'] === 'string' || data['container'] instanceof String)) {
            throw new Error("Expected the field `container` to be a primitive type in the JSON string but got " + data['container']);
        }

        return true;
    }


}



/**
 * Unique identifier for the file
 * @member {String} id
 */
File.prototype['id'] = undefined;

/**
 * Name of the bucket
 * @member {String} bucket
 */
File.prototype['bucket'] = undefined;

/**
 * Unique identifier for the bucket
 * @member {Number} bucketId
 */
File.prototype['bucketId'] = undefined;

/**
 * Name of the file
 * @member {String} filename
 */
File.prototype['filename'] = undefined;

/**
 * Full path to the file
 * @member {String} fullPath
 */
File.prototype['fullPath'] = undefined;

/**
 * URL to access the file
 * @member {String} url
 */
File.prototype['url'] = undefined;

/**
 * Size of the file in bytes
 * @member {Number} size
 */
File.prototype['size'] = undefined;

/**
 * Type of cloud storage
 * @member {String} type
 */
File.prototype['type'] = undefined;

/**
 * Timestamp when file was last modified
 * @member {Number} lastModified
 */
File.prototype['lastModified'] = undefined;

/**
 * Storage container name
 * @member {String} container
 */
File.prototype['container'] = undefined;






export default File;

