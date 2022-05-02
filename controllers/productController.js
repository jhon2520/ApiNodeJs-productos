const Product = require("../models/Product")




const addProduct = async(req,res)=>{

    try {
        // el objeto body contiene el name, description, price etc
        const{
            name,
            size,
            unitaryPrice,
            imgUrl,
            description,

        } = req.body

        const product = Product({
            name,
            size,
            unitaryPrice,
            imgUrl,
            description

        });

        const productStore = await product.save();
        res.status(201).send({productStore})

    } catch (error) {
        res.status(500).send({message: error.message})
    }
}


module.exports ={
    addProduct
}