const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const factureSchema = new Schema({
    date : String,
    name : String,
    phone : String,
    type : String,
    location : String,
    email : String,
    quantity : Number,
    price : Number,
    total : Number,
  })
  
  const Facture = mongoose.model('Facture', factureSchema)
  
  module.exports = Facture