const mongoose = require('mongoose')
const productSchema = require('./schema')

const COLLECTION_NAME = 'product'
const MODEL_NAME = 'product'
const productModel = mongoose.model(MODEL_NAME, productSchema, COLLECTION_NAME)
module.exports = productModel