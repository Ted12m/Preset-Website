const express = require('express');
const mongoose = require('mongoose');
const port = 8000;
const app = express();

var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res) {
    console.log('request was made:' + req.url);
    res.writeHead(200, { 'Content-Type': 'text/html' });
    var myReadStream = fs.createReadStream(__dirname + '/index.html', 'utf-8');
    myReadStream.pipe(res);
});

server.listen(3000, '127.0.0.1');
console.log('helu mf');
mongoose.connect("mongodb+srv://hmz:hmz@feedback.shkaz.mongodb.net/test", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
})

app.get("/", (req, res) => {
    res.send("server is running");
});

app.listen(port, () => {
    console.log("Running");
});