const Koa = require('koa');
const KoaRouter = require('koa-router');
const bodyParser = require('koa-bodyparser');
const cors = require('@koa/cors');
const json = require('koa-json');

const app = new Koa();
const router = new KoaRouter();

app.use(cors());
app.use(bodyParser());
app.use(json());

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});