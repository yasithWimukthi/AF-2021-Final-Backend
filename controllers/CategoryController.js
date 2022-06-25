const Category = require('../models/Category');
const Room = require("../models/Room");

/**
 * add category
 * @param ctx
 * @returns {Promise<{message: string, category: HydratedDocument<MergeType<InferSchemaType<module:mongoose.Schema<any, Model<EnforcedDocType, any, any, any>, {}, {}, any, {}, DefaultTypeKey, ObtainDocumentType<any, EnforcedDocType, TPathTypeKey>>>, {name, description}>, ObtainSchemaGeneric<module:mongoose.Schema<any, Model<EnforcedDocType, any, any, any>, {}, {}, any, {}, DefaultTypeKey, ObtainDocumentType<any, EnforcedDocType, TPathTypeKey>>, "TInstanceMethods">, {}> & ObtainSchemaGeneric<module:mongoose.Schema<any, Model<EnforcedDocType, any, any, any>, {}, {}, any, {}, DefaultTypeKey, ObtainDocumentType<any, EnforcedDocType, TPathTypeKey>>, "TStaticMethods">}|{message: string}>}
 */
const addCategory = async (ctx) => {
    try {
        const {name, description} = ctx.request.body;

        if(!name){
            ctx.status = 400;
            return ctx.body = {
                message: 'Name is required'
            }
        }

        if(!description){
            ctx.status = 400;
            return ctx.body = {
                message: 'Description is required'
            }
        }

        if (!name || !description) {
            ctx.status = 400;
            return ctx.body = {
                message: 'Bad Request'
            };
        }

        const category = new Category({name, description});

        await category.save();
        return ctx.body = {
            message: 'Category added successfully',
            category
        }
    }catch (err) {
        ctx.status = 500;
        return ctx.body = {
            message: 'Internal Server Error'
        }
    }
}

/**
 * get all categories
 * @param ctx
 * @returns {Promise<{categories: awaited Query<Array<HydratedDocument<InferSchemaType<module:mongoose.Schema<any, Model<EnforcedDocType, any, any, any>, {}, {}, any, {}, DefaultTypeKey, ObtainDocumentType<any, EnforcedDocType, TPathTypeKey>>>, ObtainSchemaGeneric<module:mongoose.Schema<any, Model<EnforcedDocType, any, any, any>, {}, {}, any, {}, DefaultTypeKey, ObtainDocumentType<any, EnforcedDocType, TPathTypeKey>>, "TInstanceMethods">, {}>>, module:mongoose.Schema<any, Model<EnforcedDocType, any, any, any>, {}, {}, any, {}, DefaultTypeKey, ObtainDocumentType<any, EnforcedDocType, TPathTypeKey>> extends Schema<infer EnforcedDocType, infer M, infer TInstanceMethods, infer TQueryHelpers, infer TVirtuals, infer TStaticMethods, infer TPathTypeKey, infer DocType> ? DocType : unknown extends Document ? Require_id<module:mongoose.Schema<any, Model<EnforcedDocType, any, any, any>, {}, {}, any, {}, DefaultTypeKey, ObtainDocumentType<any, EnforcedDocType, TPathTypeKey>> extends Schema<infer EnforcedDocType, infer M, infer TInstanceMethods, infer TQueryHelpers, infer TVirtuals, infer TStaticMethods, infer TPathTypeKey, infer DocType> ? DocType : unknown> : (Document<unknown, any, module:mongoose.Schema<any, Model<EnforcedDocType, any, any, any>, {}, {}, any, {}, DefaultTypeKey, ObtainDocumentType<any, EnforcedDocType, TPathTypeKey>> extends Schema<infer EnforcedDocType, infer M, infer TInstanceMethods, infer TQueryHelpers, infer TVirtuals, infer TStaticMethods, infer TPathTypeKey, infer DocType> ? DocType : unknown> & Require_id<module:mongoose.Schema<any, Model<EnforcedDocType, any, any, any>, {}, {}, any, {}, DefaultTypeKey, ObtainDocumentType<any, EnforcedDocType, TPathTypeKey>> extends Schema<infer EnforcedDocType, infer M, infer TInstanceMethods, infer TQueryHelpers, infer TVirtuals, infer TStaticMethods, infer TPathTypeKey, infer DocType> ? DocType : unknown> & module:mongoose.Schema<any, Model<EnforcedDocType, any, any, any>, {}, {}, any, {}, DefaultTypeKey, ObtainDocumentType<any, EnforcedDocType, TPathTypeKey>> extends Schema<infer EnforcedDocType, infer M, infer TInstanceMethods, infer TQueryHelpers, infer TVirtuals, infer TStaticMethods, infer TPathTypeKey, infer DocType> ? TInstanceMethods : unknown), module:mongoose.Schema<any, Model<EnforcedDocType, any, any, any>, {}, {}, any, {}, DefaultTypeKey, ObtainDocumentType<any, EnforcedDocType, TPathTypeKey>> extends Schema<infer EnforcedDocType, infer M, infer TInstanceMethods, infer TQueryHelpers, infer TVirtuals, infer TStaticMethods, infer TPathTypeKey, infer DocType> ? TQueryHelpers : unknown, module:mongoose.Schema<any, Model<EnforcedDocType, any, any, any>, {}, {}, any, {}, DefaultTypeKey, ObtainDocumentType<any, EnforcedDocType, TPathTypeKey>> extends Schema<infer EnforcedDocType, infer M, infer TInstanceMethods, infer TQueryHelpers, infer TVirtuals, infer TStaticMethods, infer TPathTypeKey, infer DocType> ? DocType : unknown> & module:mongoose.Schema<any, Model<EnforcedDocType, any, any, any>, {}, {}, any, {}, DefaultTypeKey, ObtainDocumentType<any, EnforcedDocType, TPathTypeKey>> extends Schema<infer EnforcedDocType, infer M, infer TInstanceMethods, infer TQueryHelpers, infer TVirtuals, infer TStaticMethods, infer TPathTypeKey, infer DocType> ? TQueryHelpers : unknown, message: string}|{message: string}>}
 */

const getAllCategories = async (ctx) => {
    try {
        const categories = await Category.find();
        return ctx.body = {
            message: 'Categories retrieved successfully',
            categories
        }
    }catch (err) {
        ctx.status = 500;
        return ctx.body = {
            message: 'Internal Server Error'
        }
    }
}

/**
 * find all rooms by category id
 * @param ctx
 * @returns {Promise<{message: string}|{rooms: awaited Query<Array<HydratedDocument<InferSchemaType<module:mongoose.Schema<any, Model<EnforcedDocType, any, any, any>, {}, {}, any, {}, DefaultTypeKey, ObtainDocumentType<any, EnforcedDocType, TPathTypeKey>>>, ObtainSchemaGeneric<module:mongoose.Schema<any, Model<EnforcedDocType, any, any, any>, {}, {}, any, {}, DefaultTypeKey, ObtainDocumentType<any, EnforcedDocType, TPathTypeKey>>, "TInstanceMethods">, {}>>, module:mongoose.Schema<any, Model<EnforcedDocType, any, any, any>, {}, {}, any, {}, DefaultTypeKey, ObtainDocumentType<any, EnforcedDocType, TPathTypeKey>> extends Schema<infer EnforcedDocType, infer M, infer TInstanceMethods, infer TQueryHelpers, infer TVirtuals, infer TStaticMethods, infer TPathTypeKey, infer DocType> ? DocType : unknown extends Document ? Require_id<module:mongoose.Schema<any, Model<EnforcedDocType, any, any, any>, {}, {}, any, {}, DefaultTypeKey, ObtainDocumentType<any, EnforcedDocType, TPathTypeKey>> extends Schema<infer EnforcedDocType, infer M, infer TInstanceMethods, infer TQueryHelpers, infer TVirtuals, infer TStaticMethods, infer TPathTypeKey, infer DocType> ? DocType : unknown> : (Document<unknown, any, module:mongoose.Schema<any, Model<EnforcedDocType, any, any, any>, {}, {}, any, {}, DefaultTypeKey, ObtainDocumentType<any, EnforcedDocType, TPathTypeKey>> extends Schema<infer EnforcedDocType, infer M, infer TInstanceMethods, infer TQueryHelpers, infer TVirtuals, infer TStaticMethods, infer TPathTypeKey, infer DocType> ? DocType : unknown> & Require_id<module:mongoose.Schema<any, Model<EnforcedDocType, any, any, any>, {}, {}, any, {}, DefaultTypeKey, ObtainDocumentType<any, EnforcedDocType, TPathTypeKey>> extends Schema<infer EnforcedDocType, infer M, infer TInstanceMethods, infer TQueryHelpers, infer TVirtuals, infer TStaticMethods, infer TPathTypeKey, infer DocType> ? DocType : unknown> & module:mongoose.Schema<any, Model<EnforcedDocType, any, any, any>, {}, {}, any, {}, DefaultTypeKey, ObtainDocumentType<any, EnforcedDocType, TPathTypeKey>> extends Schema<infer EnforcedDocType, infer M, infer TInstanceMethods, infer TQueryHelpers, infer TVirtuals, infer TStaticMethods, infer TPathTypeKey, infer DocType> ? TInstanceMethods : unknown), module:mongoose.Schema<any, Model<EnforcedDocType, any, any, any>, {}, {}, any, {}, DefaultTypeKey, ObtainDocumentType<any, EnforcedDocType, TPathTypeKey>> extends Schema<infer EnforcedDocType, infer M, infer TInstanceMethods, infer TQueryHelpers, infer TVirtuals, infer TStaticMethods, infer TPathTypeKey, infer DocType> ? TQueryHelpers : unknown, module:mongoose.Schema<any, Model<EnforcedDocType, any, any, any>, {}, {}, any, {}, DefaultTypeKey, ObtainDocumentType<any, EnforcedDocType, TPathTypeKey>> extends Schema<infer EnforcedDocType, infer M, infer TInstanceMethods, infer TQueryHelpers, infer TVirtuals, infer TStaticMethods, infer TPathTypeKey, infer DocType> ? DocType : unknown> & module:mongoose.Schema<any, Model<EnforcedDocType, any, any, any>, {}, {}, any, {}, DefaultTypeKey, ObtainDocumentType<any, EnforcedDocType, TPathTypeKey>> extends Schema<infer EnforcedDocType, infer M, infer TInstanceMethods, infer TQueryHelpers, infer TVirtuals, infer TStaticMethods, infer TPathTypeKey, infer DocType> ? TQueryHelpers : unknown, message: string}>}
 */
const getRoomsByCategory = async (ctx) => {
    try {
        const {categoryId} = ctx.request.body;
        const rooms = await Room.find({category: categoryId});
        return ctx.body = {
            message: 'Rooms retrieved successfully',
            rooms
        }
    }catch (err) {
        ctx.status = 500;
        return ctx.body = {
            message: 'Internal Server Error'
        }
    }
}

const getRoomsInEachCategory = async (ctx) => {
    try {
        const categories = await Category.find().populate('rooms');
        return ctx.body = {
            message: 'Rooms retrieved successfully',
            categories
        }
    }catch (err) {
        ctx.status = 500;
        return ctx.body = {
            message: 'Internal Server Error'
        }
    }
}

module.exports ={
    addCategory,
    getAllCategories,
    getRoomsByCategory,
    getRoomsInEachCategory
}