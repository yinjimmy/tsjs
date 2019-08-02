
require ("./bcx.node.js");

const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

var bcxconfig = {
  default_ws_node: "ws://47.93.62.96:8049"
  , ws_node_list: [
    { url: "ws://39.97.110.222:8040", name: "Cocos - China - Beijing" }
    , { url: "ws://47.93.62.96:8049", name: "Cocos - China - Xiamen" }
  ]
  , auto_reconnect: true
};

const bcx = new BCX(bcxconfig);
bcx.init().then(res => {
  if (1 != res.code) {
    console.log("ERR, BCX connect failed:" + res.code);
  } else {
    console.log("SUC, BCX connected");
  }
});