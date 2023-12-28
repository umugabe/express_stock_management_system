const stockModel = require('../models/stock.model');

const create = async(req, res, next) =>{
    try {
        console.log(req.body);
        var savedStock = await stockModel.create(req.body);
        res.status(201).json({
            message: "stock created successfully",
            stock: savedStock
        })
    } catch (error) {
        res.status(500).send(error);
    }
}

const update = async(req, res, next) =>{
    
}

const remove = async(req, res, next) =>{
    
}
const list = async(req, res, next) => {

}
const findbyId = async(req, res, next) =>{
    
}

const findbyEmail = async(req, res, next) =>{
    
}

module.exports = {
    create, update, remove, list, findbyId, findbyEmail
}

