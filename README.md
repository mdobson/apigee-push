##Apigee Push Tool

Send quick push notifications with this module.

###Docs

####Constructor

Params: `opts`
`opts` is just a simple javascript object with two properties. Your `orgName' and your `appName` these correspond to your apigee credentials.

####sendPushNotification

Params: `opts`, `cb`

`opts` is a simple javascript object with the following properties being required.
1. `path` - this is the path that will have notifications sent to it. To send a notification to everything use `devices;ql=/notifications`
2. `notifier` - this is the name of the notifier object that holds your push credentials
3. `alert` - this is a string that contains your push message.

`cb` is a callback with an `err` and `data` parameters.
