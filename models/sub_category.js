
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var product = new Schema({
    category_id:({
            type: mongoose.Types.ObjectId
    }),
    name:({
        type:String,
    }),
    image:({
        type:String
    })
})

const MyModel = mongoose.model('subcategory', product);
module.exports = MyModel;
