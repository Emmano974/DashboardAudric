const express = require('express')
const router = express.Router()

const {Devis, Facture, Task, InRecette, OutRecette} = require('../models/devisModels')

router.use(express.json());
router.use(express.urlencoded({extended:false}))

/*DEVIS */
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
  Devis.findById(req.params.id)
  .then(data => {
    if(!data) {
      return res.status(404).end(); }
      return res.status(200).json(data);
  })
  .catch(err => next(err))
})

router.put('/devis/:id', (req, res) => {
  Devis.findByIdAndUpdate(req.params.id, req.body,{new  : true}, 
    (err, data) => {
      if(err) return res.status(500).send(err);
      return res.send(data)
    })})

router.delete('/devis/:id', (req, res, next) => {
      Devis.findByIdAndRemove(req.params.id)
      .exec()
      .then(data => {
        if(!data) {
          return res.status(404).end(); }
          return res.status(200).json(data);
      })
      .catch(err => next(err))
    })

router.post('/devis', async (req, res) => {
      console.log(req.body)
      const data = req.body;
    
      const newDevis = new Devis(data)
      try {
        const saved = await newDevis.save();
        res.send(saved)
      } catch (error) {
        res.status(400).send(error)
      }
    })
    
/*FACTURE */
router.get('/facture',  (req, res) => {
  Facture.find({ })
  .then((data) => {
    console.log(data)
    res.json(data)
  })
  .catch((error) => {
    console.log(error)
  })
})

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

/*TASK */
router.get('/task', (req, res) => {
  Task.find({ })
  .then((data) => {
    console.log(data)
    res.json(data)
  })
  .catch((error) => {
    console.log(error)
  })
})

router.post('/task', async (req, res) => {
  console.log(req.body)
  const data = req.body;

  const newTask = new Task(data)
  try {
    const saved = await newTask.save();
    res.send(saved);
  } catch (error) {
    res.status(400).send(error)
  }
})

/*RECETTES */
router.get('/recetteIn',  (req, res) => {
  InRecette.find({ })
  .then((data) => {
    console.log(data)
    res.json(data)
  })
  .catch((error) => {
    console.log(error)
  })
})

router.get('/recetteOut',  (req, res) => {
  OutRecette.find({ })
  .then((data) => {
    console.log(data)
    res.json(data)
  })
  .catch((error) => {
    console.log(error)
  })
})

router.post('/recetteIn', async (req, res) => {
  console.log(req.body)
  const data = req.body;

  const newRecetteIn = new InRecette(data)
  try {
    const saved = await newRecetteIn.save();
    res.send(saved)
  } catch (error) {
    res.status(400).send(error)
  }
})

router.post('/recetteOut', async (req, res) => {
  console.log(req.body)
  const data = req.body;

  const newRecetteOut = new OutRecette(data)
  try {
    const saved = await newRecetteOut.save();
    res.send(saved)
  } catch (error) {
    res.status(400).send(error)
  }
})

  



module.exports = router;