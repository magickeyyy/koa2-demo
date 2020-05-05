const router = require('@koa/router')();

router.get('/', async (ctx) => {
    ctx.body = {
        apiname: 'user',
        ...ctx.query
    };
})
router.get('/userinfo', async (ctx) => {
    ctx.body = {
        apiname: 'userinfo',
        ...ctx.query
    };
})

module.exports = router.routes();