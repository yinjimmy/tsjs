import express = require('express');
require('./bcx.node.js');
declare var BCX: any;

const app: express.Application = express();
app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
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
bcx.init().then((res:any) => {
    if (1 != res.code) {
        console.log("ERR, BCX connect failed:" + res.code);
    } else {
        console.log("SUC, BCX connected");
    }
});