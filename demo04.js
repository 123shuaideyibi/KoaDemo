const Koa = require('koa');
const app = new Koa();
const bodyparser = require('koa-bodyparser');

app.use(bodyparser());

app.use(async (ctx) => {
    if (ctx.url === '/' && ctx.method === 'GET') {
        //显示表单页面
        let html = `
            <h1>Koa2 request POST请求</h1>
            <form method = "POST" action="/">
                名字：
                <input name="userName"/><br/>
                年龄：
                <input name="age"><br/>
                网站：
                <input name="webSite"><br/>
                <button type="submit">提交</button>
            </form>
        `;
        ctx.body = html;
    } else if (ctx.url === '/' && ctx.method === 'POST') {
        let postData = ctx.request.body;
        ctx.body = postData;
    } else {
        ctx.body = '<h1>404</h1>';
    }
})

app.listen(3000, () => {
    console.log('demo is starting at port 3000');
})