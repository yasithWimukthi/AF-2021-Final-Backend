const KoaRouter = require('koa-router');
const {addCategory, getAllCategories} = require("../controllers/CategoryController");
const router = new KoaRouter({prefix: '/api/category'});

router.post('/add',addCategory);
router.get('/get-all',getAllCategories);

module.exports = router;