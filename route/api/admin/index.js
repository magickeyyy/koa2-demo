const router = require('@koa/router')();
const user = require('./user')
const list = require('./list')

router.use('/user', user)
router.use('/list', list)

module.exports = router.routes();