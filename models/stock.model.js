const mongoose = require('mongoose');
const Schema = mongoose.Schema();

const StockSchema = new Schema({
    id: {
    type: String,
    required: [true, "id is required"],
    unique: true,
},

    amount: {
    type: String,
    required: [true,"amaount is required"]
    
},
    pricePerUnit: {
    type: String,
    required: [true,"pricePerUnit is required"]
    
},
    phone: {
    type: String,
    required: [true, "phone number is required"]
    
},
email: {
    type: String,
    unique: true,
    match: [
        /^(. +)@(\S+) $/,
        'please provide a valid email',
    ],
    required: [true, "Email is required"],
},
product_name:{
    type :String,
    required: [true, "the product name is required"]

},

stocktype: {
    type: String,
    required: true,
    enum: {
        values:["Growth stock","Preffered stock","Hybrid stock"],
        message: "{value} is Invalid stock type",
    }
},
entryDate:{
    required: true,
    type: Date,
    default: new Date(),
},
updateTime: {
    type: Date,
    required: false
    
},

});

module.exports = mongoose.model('stock',StockSchema);
