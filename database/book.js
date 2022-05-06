const mongoose = require("mongoose");
//creating book schema
const BookSchema = mongoose.Schema({
ISBN:String,
title:String,
authors:[Number],
language:String,
pubDate:String,
numOfPage:Number,
catagory:[String],
publications:Number,

});
const BookModel = mongoose.model(BookSchema);
module.exports = BookModel;