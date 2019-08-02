# hello

ts 中使用 bcx.node 版本库，正常运行连接到链服务



```js
require('./bcx.node.js');
declare var BCX: any;  // tsc 别报错

const bcx = new BCX({});
```



## test

```shell
npm install
npm run tsc
node build/main.js
```

