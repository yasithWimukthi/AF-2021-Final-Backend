const Category = require('../models/Category');
const Room = require("../models/Room");

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

module.exports ={
    addCategory,
    getAllCategories,
    getRoomsByCategory
}