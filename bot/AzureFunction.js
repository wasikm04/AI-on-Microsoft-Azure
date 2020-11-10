
var https= require('https');
var requestlib = require('request');
var fs = require('fs');
module.exports = (context, req) => {

  try {
    if (!req.body.filename) {
      return endWithBadResponse(context, `filename or url is not defined`);
    }
 
const request = https.get(req.body.url, function(response) {
  var data = '';
  var buffer = [];
response.on('data', function (chunk) {
    context.log.error(chunk)
        buffer.push(chunk)
        data += chunk;
  })
  response.on('end', function () {
      //data =  Buffer.from(data)
      data= Buffer.concat(buffer);
      context.log.error(data)
    context.bindings.storage =  data;
    context.done();
  });
  }); 
    
  } catch (err) {
    context.log.error(err.message);
    throw err;
  }
};

function endWithBadResponse(context, message = "Bad Request") {
  context.log.error(message);
  context.bindings.response = {
    status: 400,
    body: message,
  };
  context.done();
}
