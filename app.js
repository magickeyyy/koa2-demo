const Koa = require("koa");
const Router = require("@koa/router");
const router = new Router();
const views = require("koa-views");
const KoaStatic = require("koa-static");
const bodyParser = require("koa-bodyparser");

const app = new Koa();

app.use(KoaStatic(__dirname + "/assets"));
app.use(KoaStatic(__dirname + "/public"));

app.use(bodyParser());

// koa-views不能识别嵌套的路径，最多是文件夹下index文件
app.use(
    views("views", {
        extension: "ejs"
    })
);

router.get("/", async ctx => {
    await ctx.render("index", {
        title: "koa2+ejs"
    });
});
router.get("/aboutus", async ctx => {
    await ctx.render("aboutus", {
        title: "关于我们"
    });
});
router.get("/joinus", async ctx => {
    await ctx.render("joinus", {
        title: "加入我们"
    });
});
router.get("/signin", async ctx => {
    await ctx.render("signin", {
        title: "登录"
    });
});
router.get("/signout", async ctx => {
    await ctx.render("signout", {
        title: "登出"
    });
});
router.get("/orders", async ctx => {
    await ctx.render("orders", {
        title: "订单管理"
    });
});
router.get("/products", async ctx => {
    await ctx.render("products", {
        title: "产品管理"
    });
});
router.get("/users", async ctx => {
    await ctx.render("users", {
        title: "用户管理"
    });
});
router.get("/users/other", async ctx => {
    await ctx.render("users/other", {
        title: "other"
    });
});
router.get("/users/admin", async ctx => {
    await ctx.render("users/admin", {
        title: "admin"
    });
});
router.post("/signin", async ctx => {
    ctx.response.status = 200;
    ctx.response.body = {
        id: 11
    };
});

const user = require('./route/api/admin');
router.use('/admin', user)

app.use(router.routes()).use(router.allowedMethods());

app.listen(3000, () => {
    console.log("app is started at port http://localhost:3000");
});