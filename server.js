const Koa = require('koa');
const KoaRouter = require('koa-router');
const bodyParser = require('koa-bodyparser');
const cors = require('@koa/cors');
const json = require('koa-json');
const {dbConnect} = require("./helper/dbConnection");
require('dotenv').config();

const app = new Koa();
const router = new KoaRouter();

app.use(cors());
app.use(bodyParser());
app.use(json());

app.listen(3000, () => {
    dbConnect();
    console.log('Server is running on port 3000');
});