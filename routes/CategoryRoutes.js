const KoaRouter = require('koa-router');
const {addCategory} = require("../controllers/CategoryController");
const router = new KoaRouter({prefix: '/api/category'});

router.post('/add',addCategory);
// router.get('/get-all',getAllRooms);

module.exports = router;