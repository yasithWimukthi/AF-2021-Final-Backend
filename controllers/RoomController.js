const Room = require('../models/Room');

/**
 * Add a room
 * @param ctx
 * @returns {Promise<{message: string}>}
 */
const addRoom = async (ctx) => {
    try {
        const {code, amount, wing, pax, category} = ctx.request.body;
        if (!code){
            ctx.status = 400;
            return ctx.body = {
                message: 'Code is required'
            };
        }
        if (!amount){
            ctx.status = 400;
            return ctx.body = {
                message: 'Amount is required'
            };
        }
        if (!wing){
            ctx.status = 400;
            return ctx.body = {
                message: 'Wing is required'
            };
        }
        if (!pax){
            ctx.status = 400;
            return ctx.body = {
                message: 'Pax is required'
            };
        }
        if (!code || !amount || !wing || !pax ) {
            ctx.status = 400;
            return ctx.body = {
                message: 'Bad Request'
            };
        }
        const room = new Room({code, amount, wing, pax, category});
        await room.save();
        return (ctx.body = {message: 'Room added successfully',room});
    }
    catch (err) {
        ctx.throw(500, err);
    }
}

module.exports = {
    addRoom
}