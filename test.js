var ApigeePush = require('./index');

var pusher = new ApigeePush({
  orgName: 'internetofthings',
  appName: 'sandbox'
});

pusher.sendNotification({
  path: 'devices;ql=/notifications',
  notifier: 'ZettaApp',
  alert: 'Hello world!'
}, function(){
  console.log(arguments);
});
