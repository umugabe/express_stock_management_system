const mongoose = require('mongoose');
const Schema = mongoose.Schema();

const StockSchema = new Schema({
    id: {required: true, type: String},
    amount: {required: true, type: String},
    pricePerUnit: {required: true, type: String},
    phone: {required: true, type: String},
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
updateTime: {required: false, type: Date},

});

module.exports = mongoose.model('stock',StockSchema);
