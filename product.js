const mongoose = require('mongoose');
const ProductSchema = new mongoose.Schema({
    Name:String,
    name:String,
    Brand:String,
    brand:String,
    Price:Number,
    price:Number,
    Category:String,
    category:String,
});
module.exports = mongoose.model('products',ProductSchema);  