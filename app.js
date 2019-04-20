const Koa = require('koa');
const app = new Koa();
const appOne = new Koa();
const Router = require('koa-router');
const router = new Router();

const rp = require('request-promise');


app.env = 'NODE_ENV';

app.proxy = ""

router.get('/', (ctx, next) => {
    ctx.body ="这个会顶开下面那个吗"
    // ctx.router available
});

app
    .use(router.routes())
    .use(router.allowedMethods());



    
rp('http://www.baidu.com')
    .then(function (htmlString) {
        // Process html...
        
    })
    .catch(function (err) {
        // Crawling failed...
    });


// logger

// app.use(async (ctx, next) => {
//     await next();
//     const rt = ctx.response.get('X-Response-Time');
//     console.log(`${ctx.method} ${ctx.url} - ${rt}`);
// });

// // x-response-time

// app.use(async (ctx, next) => {
//     const start = Date.now();
//     await next();
//     const ms = Date.now() - start;
//     ctx.set('X-Response-Time', `${ms}ms`);
// });

// response





appOne.use(async ctx => {
    ctx.body = 'Hello World: 3001';
});



// app.listen(3000);

appOne.listen(3001)