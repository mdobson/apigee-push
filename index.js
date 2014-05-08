var usergrid = require('usergrid');

var ApigeePush = module.exports = function(opts) {
  
  opts = opts || {};
  this.client = new usergrid.client({
    orgName:opts.orgName,
    appName:opts.appName
  });
};

ApigeePush.prototype.sendNotification = function(opts, cb) {
  opts = opts || {};

  var options = {
    type: opts.path,
  };

  options['payloads'] = {};
  options['payloads'][opts.notifier] = opts.alert;

  this.client.createEntity(options,cb);
};
