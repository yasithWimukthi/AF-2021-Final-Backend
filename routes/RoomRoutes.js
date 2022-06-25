const KoaRouter = require('koa-router');
const {addRoom, getAllRooms} = require("../controllers/RoomController");
const router = new KoaRouter({prefix: '/api/room'});

router.post('/add',addRoom);
router.get('/get-all',getAllRooms);

module.exports = router;