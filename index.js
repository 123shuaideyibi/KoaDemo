const Koa = require('koa');
const app = new Koa();

app.use(async(ctx)=>{
    ctx.body = 'Hello JSPang'
})
app.listen(3000);
console.log('app is starting at port 3000');