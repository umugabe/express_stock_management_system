const stockModel = require('../models/stock.model');

const create = async(req, res, next) =>{
    // try {
    //     console.log(req.body);
    //     const savedStock = await stockModel.save(req.body);
    //     res.status(201).json({
    //         message: 'stock created',
    //         stock: savedStock
    //     })
    // } catch (error) {
    //     res.status(500).send("Failed to save!!")
    // }
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

