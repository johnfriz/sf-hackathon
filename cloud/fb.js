var appKey = '';
var appSecret = '';

var doFB = function(cb) {
  console.log('in doFB');

  return cb(undefined, {'res' : 'from doFB'});
}