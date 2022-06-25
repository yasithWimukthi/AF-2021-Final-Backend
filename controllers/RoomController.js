const Room = require('../models/Room');
const Category = require('../models/Category');

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
        const room = new Room({code, amount, wing, pax});
        if (category){
            room.category.push(category);
        }
        await room.save();
        const roomAddedCategory = await Category.findById(category);
        roomAddedCategory.rooms.push(room._id);
        await roomAddedCategory.save();
        return (ctx.body = {message: 'Room added successfully',room});
    }
    catch (err) {
        ctx.throw(500, err);
    }
}

/**
 * Get all rooms
 * @param ctx
 * @returns {Promise<{rooms: awaited Query<Array<HydratedDocument<InferSchemaType<module:mongoose.Schema<any, Model<EnforcedDocType, any, any, any>, {}, {}, any, {}, DefaultTypeKey, ObtainDocumentType<any, EnforcedDocType, TPathTypeKey>>>, ObtainSchemaGeneric<module:mongoose.Schema<any, Model<EnforcedDocType, any, any, any>, {}, {}, any, {}, DefaultTypeKey, ObtainDocumentType<any, EnforcedDocType, TPathTypeKey>>, "TInstanceMethods">, {}>>, module:mongoose.Schema<any, Model<EnforcedDocType, any, any, any>, {}, {}, any, {}, DefaultTypeKey, ObtainDocumentType<any, EnforcedDocType, TPathTypeKey>> extends Schema<infer EnforcedDocType, infer M, infer TInstanceMethods, infer TQueryHelpers, infer TVirtuals, infer TStaticMethods, infer TPathTypeKey, infer DocType> ? DocType : unknown extends Document ? Require_id<module:mongoose.Schema<any, Model<EnforcedDocType, any, any, any>, {}, {}, any, {}, DefaultTypeKey, ObtainDocumentType<any, EnforcedDocType, TPathTypeKey>> extends Schema<infer EnforcedDocType, infer M, infer TInstanceMethods, infer TQueryHelpers, infer TVirtuals, infer TStaticMethods, infer TPathTypeKey, infer DocType> ? DocType : unknown> : (Document<unknown, any, module:mongoose.Schema<any, Model<EnforcedDocType, any, any, any>, {}, {}, any, {}, DefaultTypeKey, ObtainDocumentType<any, EnforcedDocType, TPathTypeKey>> extends Schema<infer EnforcedDocType, infer M, infer TInstanceMethods, infer TQueryHelpers, infer TVirtuals, infer TStaticMethods, infer TPathTypeKey, infer DocType> ? DocType : unknown> & Require_id<module:mongoose.Schema<any, Model<EnforcedDocType, any, any, any>, {}, {}, any, {}, DefaultTypeKey, ObtainDocumentType<any, EnforcedDocType, TPathTypeKey>> extends Schema<infer EnforcedDocType, infer M, infer TInstanceMethods, infer TQueryHelpers, infer TVirtuals, infer TStaticMethods, infer TPathTypeKey, infer DocType> ? DocType : unknown> & module:mongoose.Schema<any, Model<EnforcedDocType, any, any, any>, {}, {}, any, {}, DefaultTypeKey, ObtainDocumentType<any, EnforcedDocType, TPathTypeKey>> extends Schema<infer EnforcedDocType, infer M, infer TInstanceMethods, infer TQueryHelpers, infer TVirtuals, infer TStaticMethods, infer TPathTypeKey, infer DocType> ? TInstanceMethods : unknown), module:mongoose.Schema<any, Model<EnforcedDocType, any, any, any>, {}, {}, any, {}, DefaultTypeKey, ObtainDocumentType<any, EnforcedDocType, TPathTypeKey>> extends Schema<infer EnforcedDocType, infer M, infer TInstanceMethods, infer TQueryHelpers, infer TVirtuals, infer TStaticMethods, infer TPathTypeKey, infer DocType> ? TQueryHelpers : unknown, module:mongoose.Schema<any, Model<EnforcedDocType, any, any, any>, {}, {}, any, {}, DefaultTypeKey, ObtainDocumentType<any, EnforcedDocType, TPathTypeKey>> extends Schema<infer EnforcedDocType, infer M, infer TInstanceMethods, infer TQueryHelpers, infer TVirtuals, infer TStaticMethods, infer TPathTypeKey, infer DocType> ? DocType : unknown> & module:mongoose.Schema<any, Model<EnforcedDocType, any, any, any>, {}, {}, any, {}, DefaultTypeKey, ObtainDocumentType<any, EnforcedDocType, TPathTypeKey>> extends Schema<infer EnforcedDocType, infer M, infer TInstanceMethods, infer TQueryHelpers, infer TVirtuals, infer TStaticMethods, infer TPathTypeKey, infer DocType> ? TQueryHelpers : unknown}>}
 */
const getAllRooms = async (ctx) => {
    try {
        const rooms = await Room.find({});
        return (ctx.body = {rooms});
    }
    catch (err) {
        ctx.throw(500, err);
    }
}


module.exports = {
    addRoom,
    getAllRooms
}