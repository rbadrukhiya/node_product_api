
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var product = new Schema({
    name:({
        type:String,
    }),
    image:({
        type:String
    })
})

const MyModel = mongoose.model('category', product);
module.exports = MyModel;
