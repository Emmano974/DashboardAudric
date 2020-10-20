const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const devisSchema = new Schema({
  date : {
    type: String,},
  name : {
    type : String},
  phone : String,
  type : String,
  location : String,
  email : String,
  quantity : Number,
  price : Number,
  total : Number,
  timeremain : {
     type : String,
     default : Date.now()
  }
})

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
const Devis = mongoose.model('Devis', devisSchema)

module.exports.Devis = Devis
module.exports.Facture = Facture
