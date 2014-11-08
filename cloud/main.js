require("cloud/app.js");
// Use AV.Cloud.define to define as many cloud functions as you want.
// For example:

var http = require('http')
AV.Cloud.define("hello", function(request, response) {
  response.success("Hello world!");
});

AV.Cloud.afterSave("Message", function(request) {
	http.get("http://itms.sinaapp.com/sms/send.php?message=%E6%9C%89%E6%96%B0%E7%9A%84%E7%95%99%E8%A8%80%E4%BA%86",function(){});
});