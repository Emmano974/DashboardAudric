const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const devisSchema = new Schema({
  date : {
    type: String,
    required: true},
  name : {
    type : String,
    required: true},
  phone : {
    type : String,
    required: true},
  type :{
    type : String,
    required: true},
  location : {
    type : String,
    required: true},
  email : {
    type : String,
    required: true},
  quantity : {
    type : Number,
    required: true},
  price : {
    type : Number,
    required: true},
  total : {
    type : Number,
    required: true},
  timeremain : {
     type : String,
     default : Date.now()}
  })

const factureSchema = new Schema({
  date : {
    type: String,
    required: true},
  name : {
    type : String,
    required: true},
  phone : {
    type : String,
    required: true},
  type :{
    type : String,
    required: true},
  location : {
    type : String,
    required: true},
  email : {
    type : String,
    required: true},
  quantity : {
    type : Number,
    required: true},
  price : {
    type : Number,
    required: true},
  total : {
    type : Number,
    required: true}
  })

const taskSchema = new Schema({
  name : {
    type: String},
  time : {
    type: String},
  status : {
    type: String},
});

const recetteInSchema = new Schema({
  date : {
    type: String,
    required: true},
  from : {
    type : String,
    required: true},
  nature : {
    type : String,
    required: true},
  cost :{
    type : Number,
    required: true},
  })

const recetteOutSchema = new Schema({
  date : {
    type: String,
    required: true},
  to : {
    type : String,
    required: true},
  nature : {
    type : String,
    required: true},
  cost :{
    type : Number,
    required: true},
    })

const Task = mongoose.model('Task', taskSchema);
const Facture = mongoose.model('Facture', factureSchema);
const Devis = mongoose.model('Devis', devisSchema);
const InRecette = mongoose.model('InRecette', recetteInSchema);
const OutRecette = mongoose.model('OutRecette', recetteOutSchema);

module.exports.Devis = Devis;
module.exports.Facture = Facture;
module.exports.Task = Task;
module.exports.InRecette = InRecette;
module.exports.OutRecette = OutRecette;
