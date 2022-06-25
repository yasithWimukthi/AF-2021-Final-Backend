const KoaRouter = require('koa-router');
const {addCategory, getAllCategories, getRoomsByCategory} = require("../controllers/CategoryController");
const router = new KoaRouter({prefix: '/api/category'});

router.post('/get-rooms-by-category',getRoomsByCategory);
router.post('/add',addCategory);
router.get('/get-all',getAllCategories);

module.exports = router;