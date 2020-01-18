const Koa = require('koa');
const views = require('koa-views');
const path = require('path');

const app = new Koa();

app.use(views(path.join(__dirname, './views'), {
    extension: 'ejs'
}))

app.use(async (ctx) => {
    let title = '技术胖';
    await ctx.render('index', {
        title
    })
})

app.listen(3000, () => {
    console.log('demo is starting at port 3000')
})