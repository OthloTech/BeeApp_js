"use strict";

const koa = require('koa');
const _ = require('koa-route')
const views = require('co-views')
const app = koa();

const port = 8888;
const render = views(__dirname + '/views', { ext: 'ect' });

// dist以下のCSS, JSは静的ファイルとして提供
app.use(require('koa-static-server')({rootDir: 'dist', rootPath: '/dist'}));



// ログ -----------------------
app.use(function*(next) {
  try {
    yield next
  } finally {
    console.log('%s %s %s %s',
      new Date().toISOString(),
      this.request.method,
      this.request.url,
      this.response.status
    )
  }
})

app.use(function*(next) {
  try {
    yield next
  } catch(ex) {
    this.response.status = ex.status || 500
    throw ex
  }
})


// app.use(_.get('/', function *() {
//   this.body = yield render('index', {
//     title: title
//   })
// }));

app.use(function *(){  
  this.body = 'Hello from koajs';
});
// // all other routes
// app.use(function *() {
//   this.body = yield render('index')
// });

// サーバー起動
app.listen(port, function() {
  console.log('Server listening at port %d', port);
});
