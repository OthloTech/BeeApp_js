"use strict";

const koa = require('koa');
const app = koa();
const port = 8888;

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

// ルート定義
const router = require('./routes/index')(app);
// dist以下のCSS, JSは静的ファイルとして提供
//app.use(require('koa-static-server')({rootDir: 'app/build', rootPath: '/app/build'}));

// サーバー起動
app.listen(port, function() {
  console.log('Server listening at port %d', port);
});
