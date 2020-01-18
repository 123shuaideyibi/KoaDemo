const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();
// home层
let home = new Router();
home.get('/first', async (ctx) => {
    ctx.body = "路径为/home/first";
}).get('/second', async (ctx) => {
    ctx.body = "路径为/home/second";
})

// index层
let index = new Router();
index.get('/first', async (ctx) => {
    ctx.body = "路径为/index/first";
}).get('/second', async (ctx) => {
    ctx.body = "路径为/index/second";
})

// 父级路由，将两个子路由装载上
let router = new Router();
router.use('/home', home.routes(), home.allowedMethods());
router.use('/index', index.routes(), index.allowedMethods());

app
    .use(router.routes())
    .use(router.allowedMethods());

app.listen(3000, () => {
    console.log('demo is starting at port 3000')
})