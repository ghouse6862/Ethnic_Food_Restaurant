//Imports
const mongoose = require('mongoose');

//Create Products Schema
const productsSchema = new mongoose.Schema({
    productName : {
        type : String,
        required : true,
        trim : true,
        unique : true,
        minlength : 3
    },
    description : {
        type : String,
        required : true,
        trim : true,
        minlength : 10,
        maxlength : 150
    },
    category : {
        type : String,
        required : true,
        trim : true,
        lowercase : true,
        minlength : 3
    },
    price : {
            type : Number,
            required : true,
            min : 0
    },
    qty : {
        type : Number,
        required : true,
        min : 0
    },
    image : {
        type : Buffer,
        required : true
    },
    isDeleted : {
        type : Boolean,
        default : false
    }
});

//Export Products Model
module.exports.Products = mongoose.model('Products', productsSchema);