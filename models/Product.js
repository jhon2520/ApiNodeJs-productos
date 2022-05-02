const mongoose = require("mongoose");

const Schema = mongoose.Schema

const ProductSchema = Schema({
    name:String,
    size:Number,
    unitaryPrice:Number,
    imgUrl:String,
    description:String,
},{
    // para que muestre cuando se creo y actualizó por ultima vez las colección
    timestamps:true
});

module.exports = mongoose.model("Productos",ProductSchema)