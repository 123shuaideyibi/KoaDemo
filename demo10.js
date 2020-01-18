const Koa = require('koa');
const app = new Koa();

app.use(async (ctx) => {
    if (ctx.url === '/index') {
        ctx.cookies.set(
            'MyName', 'jspang', {
            domain: 'localhost',
            // path: '/index',
            maxAge: 1000 * 60 * 60 * 24,
            expires: new Date('2021-01-18'),
            httpOnly: false,
            overwrite: false
        }
        );
        ctx.body = "Cookie值已设置,访问任意localhost:3000/xxx都能访问到Cookie值";
    } else {
        if (ctx.cookies.get('MyName')) {
            ctx.body = "Cookie值为："+ctx.cookies.get('MyName')
        } else {
            ctx.body = "Cookie值不存在，访问localhost:3000/index设置cookie值"
        }
    }
})

app.listen(3000, () => {
    console.log('server is starting at port 3000')
})