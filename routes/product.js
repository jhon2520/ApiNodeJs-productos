const express = require("express");
const {addProduct} = require("../controllers/productController")


const upload = require("../libs/storage")

const api = express.Router()




api.post("/products",upload,addProduct)



module.exports = api;