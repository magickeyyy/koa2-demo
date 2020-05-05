const router = require('@koa/router')();

router.get('/listinfo', async (ctx) => {
    ctx.body = {
        apiname: 'listinfo',
        ...ctx.query
    };
})
router.post('/list', async (ctx) => {
    ctx.response.message = '成功'
    ctx.body = {
        apiname: 'list',
        ...ctx.request.body
    };
})

module.exports = router.routes();