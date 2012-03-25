var util = require('util');
var fb = require('./fb.js')
/* main.js
 * All calls here are publicly exposed as REST API endpoints.
 * - all parameters must be passed in a single JSON paramater.
 * - the return 'callback' method signature is 'callback (error, data)', where 'data' is a JSON object.
*/

/* 'getConfig' server side REST API method.
 * Trivial example of pulling in a shared config file.
 */
exports.getConfig = function(params, callback) {
  console.log('in getConfig with ts:' + new Date());
  var cfg = require("config.js");
  return callback(null, {data: cfg.config});
};

exports.facebook = function(params, callback) {
  console.log('in main.facebook()');

  return fb.doFB(callback);
}