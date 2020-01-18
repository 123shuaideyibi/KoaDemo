const Koa = require('koa');
const app = new Koa();
const fs = require('fs');

async function route(url) {
    let page = '404.html';
    switch (url) {
        case '/':
            page = 'index.html';
            break;
        case '/index':
            page = 'index.html';
            break;
        case '/todo':
            page = 'todo.html';
            break;
        case '/404':
            page = '404.html';
            break;
        default:
            break;
    }
    let html = await render(page);
    return html;
}

function render(page) {
    return new Promise((resolve, reject) => {
        let pageUrl = `./page/${page}`;
        fs.readFile(pageUrl, "binary", (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        })
    })
}

app.use(async (ctx) => {
    let url = ctx.request.url;
    let html = await route(url);
    ctx.body = html;
})



app.listen(3000,()=>{
    console.log(`demo is starting at port 3000`)
});