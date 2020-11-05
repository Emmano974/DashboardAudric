const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const morgan = require('morgan')
const cors = require('cors')
const app = express();
const PORT = process.env.PORT || 8000;


const routes = require('./src/routes/api')

app.use(cors())
app.use('/api', routes)
app.use(morgan('tiny'))
app.use(express.static(path.join(__dirname, 'build')));

/*Middleware */
app.use(express.json());
app.use(express.urlencoded({extended:false}))


// app.get('/', function (req, res) {
//  return res.send();
// });
// app.get('/api', function (req, res) {
//     res.send("api")
//   });

// newClient.save((error) => {
//   if(error){
//     console.log('erreur')
//   } else {
//     console.log('OK')
//   } 
// })

// const Schema = mongoose.Schema;
// const devisSchema = new Schema({
//   date : String,
//   name : String,
//   phone : String,
//   type : String,
//   location : String,
//   email : String,
//   quantity : Number,
//   price : Number,
//   total : Number,
//   timeremain : {
//      type : String,
//      default : Date.now()
//   }
// })

// const Devis = mongoose.model('Devis', devisSchema)

// const data = {
//   date : "24-08-2000",
//   name : "Audric",
//   phone : "0692123456",
//   type : "Site Web",
//   location : "Le Port",
//   email : "Audric.Lamy@supinfo.com",
//   quantity : 10,
//   price : 50,
//   total : 500,
//   timeremain : "24-11-2000",
// }

// const newDevis = new Devis(data)

// newDevis.save((error) => {
//   if (error){
//     console.log('non')
//   } else {
//     console.log('Oui')
//   }
// })



/*Connexion à la base de donnéee */
const db = mongoose.connection;
mongoose.connect('mongodb://localhost/test', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => console.log('connecté'));



app.listen(PORT, console.log('Server is starting at ' + PORT))

// const express = require('express');
// const bodyParser = require('body-parser')
// const path = require('path');
// // const express = require('express')
// const app = express()

// app.use(express.static(path.join(__dirname, 'build')));

// app.get('/',  (req, res)=> {
//     res.sendFile(path.join(__dirname, 'index.html'));
// });

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, '/build/index.html'), function(err) {
    if (err) {
      res.status(500).send(err)
    }
  })
})


// app.listen(process.env.PORT || 8000);


