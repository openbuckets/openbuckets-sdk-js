/**
 * OpenBuckets API
 * The OpenBuckets web-based tool is a powerful utility that allows users to quickly locate open buckets in cloud storage systems through a simple query. In addition, it provides a convenient way to search for various file types across these open buckets, making it an essential tool for security professionals, researchers, and anyone interested in discovering exposed data. This Postman collection aims to showcase the capabilities of OpenBuckets by providing a set of API requests that demonstrate how to leverage its features. By following this collection, you'll learn how to utilize OpenBuckets to identify open buckets and search for specific file types within them.
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: support@openbuckets.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.OpenBucketsApi);
  }
}(this, function(expect, OpenBucketsApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new OpenBucketsApi.FileSearchResultsQuery();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('FileSearchResultsQuery', function() {
    it('should create an instance of FileSearchResultsQuery', function() {
      // uncomment below and update the code to test FileSearchResultsQuery
      //var instance = new OpenBucketsApi.FileSearchResultsQuery();
      //expect(instance).to.be.a(OpenBucketsApi.FileSearchResultsQuery);
    });

    it('should have the property keywords (base name: "keywords")', function() {
      // uncomment below and update the code to test the property keywords
      //var instance = new OpenBucketsApi.FileSearchResultsQuery();
      //expect(instance).to.be();
    });

    it('should have the property limit (base name: "limit")', function() {
      // uncomment below and update the code to test the property limit
      //var instance = new OpenBucketsApi.FileSearchResultsQuery();
      //expect(instance).to.be();
    });

    it('should have the property start (base name: "start")', function() {
      // uncomment below and update the code to test the property start
      //var instance = new OpenBucketsApi.FileSearchResultsQuery();
      //expect(instance).to.be();
    });

  });

}));
