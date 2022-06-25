const KoaRouter = require('koa-router');
const {addRoom} = require("../controllers/RoomController");
const router = new KoaRouter({prefix: '/api/room'});

router.post('/add',addRoom);

module.exports = router;