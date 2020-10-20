const express = require('express')

const router = express.Router()

const {Devis, Facture} = require('../models/devisModels')

router.use(express.json());
router.use(express.urlencoded({extended:false}))


// const data = {
//     date : "24-08-2000",
//     name : "Audric",
//     phone : "0692123456",
//     type : "Site Web",
//     location : "Le Port",
//     email : "Audric.Lamy@supinfo.com",
//     quantity : 10,
//     price : 50,
//     total : 500,
//   }

//   const newFacture = new Facture(data)

//   newFacture.save((error) => {
//     if (error){
//       console.log('non')
//     } else {
//       console.log('Oui')
//     }
//   })

// const data = {
//     date : "24-08-2000",
//     name : "Audric",
//     phone : "0692123456",
//     type : "Site Web",
//     location : "Le Port",
//     email : "Audric.Lamy@supinfo.com",
//     quantity : 10,
//     price : 50,
//     total : 500,
//     timeremain: '24-12-2000'
//   }

//   const newDevis = new Devis(data)

//   newDevis.save((error) => {
//     if (error){
//       console.log('non')
//     } else {
//       console.log('Oui')
//     }
//   })




router.get('/facture', (req, res) => {

  Facture.find({ })
  .then((data) => {
    console.log(data)
    res.json(data)
  })
  .catch((error) => {
    console.log(error)
  })
})


router.get('/devis', (req, res) => {

    Devis.find({ })
    .then((data) => {
      console.log(data)
      res.json(data)
    })
    .catch((error) => {
      console.log(error)
    })
  })

router.get('/devis/:id', (req, res, next) => {
  Devis.findOne(req.params.id)
  .then(data => {
    if(!data) {
      return res.status(404).end(); }
      return res.status(200).json(data);
  })
  .catch(err => next(err))
})


router.delete('/devis/:id', (req, res, next) => {
  Devis.findOneAndRemove(req.params.id)
  .exec()
  .then(data => {
    if(!data) {
      return res.status(404).end(); }
      return res.status(200).json(data);
  })
  .catch(err => next(err))
})



/*Récupération des données du formulaire */
router.post('/devis', (req, res) => {
  console.log(req.body)
  const data = req.body;

  const newDevis = new Devis(data)
  
  newDevis.save((error) => {
    if(error){
      res.status(500).json({msg:'Sorry'})
    }else {
     res.json({
        msg:'We received your data'
      })
    }
  })
})

/*Récupération des données du formulaire */
router.post('/facture', (req, res) => {
  console.log(req.body)
  const data = req.body;

  const newFacture = new Facture(data)
  
  newFacture.save((error) => {
    if(error){
      res.status(500).json({msg:'Sorry'})
    }else {
     res.json({
        msg:'We received your data'
      })
    }
  })
})


  



module.exports = router;