/* let express = require('express');

let app = express();

app.listen(4000);

app.get('/',function(req,res){
    res.send('服务器收到了你的请求');
}); */

let webSocket = require('ws');

let wss = new webSocket.Server({
    port:4000
});

wss.on('connection',function(ws){
    ws.on('message',function incoming(message){
        console.log('received: '+message);
    });
    ws.send('something');
});