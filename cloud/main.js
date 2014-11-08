require("cloud/app.js");
// Use AV.Cloud.define to define as many cloud functions as you want.
// For example:

var http = require('http')
AV.Cloud.define("hello", function(request, response) {
  response.success("Hello world!");
});

AV.Cloud.afterSave("Message", function(request) {
	var name = request.object.get("name");
	var phone = request.object.get("phone");
	var messageContent = request.object.get("messageContent");
	var msg = '姓名 '+name+'   电话 '+phone+'   留言 '+messageContent;	
	http.get("http://itms.sinaapp.com/sms/send.php?message="+encodeURI(msg),function(){});
});