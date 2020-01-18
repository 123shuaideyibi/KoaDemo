const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();
// 增加了层级
const router = new Router({
    prefix:'/jspang'
});

router
    .get('/', (ctx, next) => {
        ctx.body = 'Hello JSPang'
    })
    .get('/todo',(ctx,next)=>{
        ctx.body="Todo page"
    })

app
    .use(router.routes())
    .use(router.allowedMethods());

app.listen(3000, () => {
    console.log('demo is starting at port 3000')
})