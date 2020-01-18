const Koa = require('koa');
const app = new Koa();

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
        let postData = await parsePostData(ctx);
        ctx.body = postData;
    } else {
        ctx.body = '<h1>404</h1>';
    }
})

function parsePostData(ctx) {
    return new Promise((resolve, reject) => {
        try {
            let postData = "";
            //1.将post表单数据解析成querystring格式（比如user=jspang&age=18）
            ctx.req.addListener('data', (data) => {
                //拼接后的字符串，其中有些字符串被转换了
                //userName=jspang&age=18&webSite=https%3A%2F%2Fjspang.com
                postData += data;
            })
            //2.将字符串转换成JSON格式
            ctx.req.on('end', () => {
                let parseData = parseQueryStr(postData);
                resolve(parseData);
            })
        } catch (error) {
            reject(error)
        }
    })
}

//userName=jspang&age=18&webSite=https://jspang.com
//转换成
//{"userName": "jspang","age": "18","webSite": "https://jspang.com"}
function parseQueryStr(queryStr){
    let queryData = {};
    let queryStrList = queryStr.split('&');//将字符串转换成数组，以&隔开
    for(let queryStr of queryStrList){
        let itemList = queryStr.split('=');//字符串转换数组，以=隔开
        queryData[itemList[0]]=decodeURIComponent(itemList[1]);
    }
    return queryData;
}

app.listen(3000, () => {
    console.log('demo is starting at port 3000');
})