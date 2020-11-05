import React, { useState, Fragment, useEffect } from 'react'
import { Button,  Dialog, DialogContent, DialogTitle, Divider, Grid, IconButton, makeStyles, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add';
// import GetAppIcon from '@material-ui/icons/GetApp';
import CloseIcon from '@material-ui/icons/Close';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import axios from 'axios'

/*Style*/
const useStyles = makeStyles((theme) => ({
    formFactures: {
        paddingLeft:350,
        paddingRight:350,
        backgroundColor:'#3f51b5',
        color:'white'
    },
    contentFormFacture : {
        paddingLeft:350,
        paddingRight:350,
    },
    closeButton: {
        position:'absolute',
        right: theme.spacing(1),
        top: theme.spacing(1),
        paddingRight:350,
        color: 'white'
      },
      adding: { 
      },
      import: {
        textAlign : 'right',
        
      }
  }));
export default function Factures(){    
 
    const classes = useStyles()
  
    const [facture, setFacture] = useState({
        form : {
                id:"", 
                date:'',
                name:'',
                phone:'',
                type:'',
                location:'',
                email:'',
                quantity:'',
                price:'',
                total:"",
                newFacture:[],
        }})

    const [openF, setOpenF] = useState(false)
    const [openL, setOpenL] = useState(false)
    const [openU, setOpenU] = useState(false)

    useEffect(() => {
        getNewFacture()
        }, [
        ])

        const getNewFacture = () => {
            axios.get('http://localhost:8000/api/facture')
            .then((response)=> {
                const data = response.data
                setFacture({form : {
                    newFacture : data
                }
            })
                console.log('data facture reçu')
            })
            .catch(()=> {
                console.log('data non reçu')
            })
        }



               
    /*Ouverture/Fermeture boite de dialogue pour le formulaire */
    const setForm = () => {
        setOpenF(!openF)
    }

    const setList = () => {
        setOpenL(!openL)
    }
    
    /*Fonction récupération de chaque input*/
    const handleChange = (event) => {
        setFacture({ 
            form : {
                ...facture.form,
                [event.target.name] : event.target.value
             }});
        console.log(event)
    }

    /*Fonction Supression de chaque ligne*/
    const handleDelete = (id) => {
        const deletion = facture.form.newFacture.filter(details => 
            details.id !== id)
        setFacture({form : {
            newFacture : deletion}})
        console.log(id)
    }

    /*Fonction de soumission du formulaire*/
    const handleSubmit = (event) => {
        event.preventDefault();

        const {date ,name,phone,type,location,email,quantity,price} = facture.form
        
        const data = {
            date:new Date(date).getDate() +'/'+ (new Date(date).getMonth()+1) +"/" + new Date(date).getFullYear(),
            name:name,
            phone:phone,
            type:type,
            location:location,
            email:email,
            quantity:parseInt(quantity) ,
            price:parseInt(price),
            total:parseInt(price * quantity), 
        }
           
         axios({ 
            url: 'http://localhost:8000/api/facture',
            method:'POST',
            data: data 
            })
            .then(() => {
                console.log("data facture")
                handleReset()
                getNewFacture()
            })
            .catch(() => {
                console.log("No Data")
            })
    }

    const handleReset = () => {
        setFacture({form: {
            date:'',
            name:'',
            phone:'',
            type:'',
            location:'',
            email:'',
            quantity:'',
            price:'',
            total:'',  
        }})
    }

    console.log(facture.form.newFacture)


    /*Affichage du rendu des facture*/
    const renderTable = () => {
        return (
            <Fragment>
                 <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                    <TableCell>{openL ? (
                         <IconButton variant="outlined" onClick={setList}>
                            <KeyboardArrowDownIcon/>
                        </IconButton>
                    ) : (<IconButton variant="outlined" onClick={setList}>
                    <KeyboardArrowUpIcon/>
                </IconButton>)}
                            </TableCell>
                            <TableCell align='right'> 
                                     <IconButton variant="outlined" onClick={setForm} >
                                        <AddIcon/>
                                    </IconButton>
                                </TableCell>
                                {/* <TableCell align='right'>
                                    <IconButton variant="outlined">
                                            <GetAppIcon/>
                                    </IconButton>
                                </TableCell>  */}
                    </TableHead>
                </Table>
            </TableContainer>  
    <TableContainer component={Paper}>{openL ? (
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell><b>ID</b></TableCell>
                    <TableCell><b>Nom</b></TableCell>
                    <TableCell><b>Numéro de téléphone</b></TableCell>
                    <TableCell><b>Date</b></TableCell>
                    <TableCell><b>Adresse</b></TableCell>
                    <TableCell><b>Type de facture</b></TableCell>
                    <TableCell><b>Email</b></TableCell>
                    <TableCell><b>Quantité</b></TableCell>
                    <TableCell><b>Prix</b></TableCell>
                    <TableCell><b>Total</b></TableCell>
                    <TableCell colSpan='2' align='center'><b>Actions</b></TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {facture.form.newFacture.map(detail => (
                    <TableRow key={detail._id}>
                        <TableCell key={detail._id}>{detail._id}</TableCell>
                        <TableCell>{detail.name}</TableCell>
                        <TableCell>{detail.phone}</TableCell>
                        <TableCell>{detail.date}</TableCell>
                        <TableCell>{detail.location}</TableCell>
                        <TableCell>{detail.type}</TableCell>
                        <TableCell>{detail.email}</TableCell>
                        <TableCell>{detail.quantity}</TableCell>
                        <TableCell>{detail.price}</TableCell>
                        <TableCell>{detail.total} </TableCell>
                          {/* Bouton permettant de supprimer la ligne d'un Facture */}
                        <TableCell>
                            <Button type='button' onClick={handleDelete.bind(this, detail.id)}><DeleteIcon/></Button>
                        </TableCell>         
                        <TableCell>
                            <Button type='button' onClick={handleUpdate.bind(this, detail.id)}><DeleteIcon/></Button>
                        </TableCell>                                   
                    </TableRow>))}
                </TableBody>
                </Table>
        ) : (null)}
        </TableContainer>
        </Fragment>
        )}


    /*Affichage du formulaire de Facture */
    const renderDialog = (classes) => {
        return (
            <Dialog fullScreen onClose={setForm} open={openF} >
                <DialogTitle onClose={setForm} className={classes.formFactures}>FACTURE</DialogTitle>
                    <IconButton onClick={setForm} className={classes.closeButton}>
                        <CloseIcon />
                    </IconButton>
                    <Divider/>
                        <DialogContent className={classes.contentFormFacture}>
                            <form onSubmit={handleSubmit} name="form">
                            <Grid container spacing={1}>  
                                <Grid item xs={12}>
                                    <Typography>Audric Lamy</Typography>
                                    <Typography>7 rue des Jacinthes</Typography>
                                    <Typography>97490 Sainte-Clotilde</Typography>
                                    <Typography>Audric.Lamy@supinfo.com</Typography>
                                    <Typography>0692123456</Typography>
                                    <Typography>Fait le : </Typography>
                                    <TextField type="date" name="date" value={facture.form.date} onChange={handleChange}/>
                                </Grid>
                            </Grid>                 
                            <Grid container alignItems='flex-end' direction='column'> 
                                <Typography><b>Client</b></Typography>
                                    <Grid item xs>
                                        <TextField label="Nom" type="text" name="name" value={facture.form.name} onChange={handleChange}/>
                                    </Grid>
                                    <Grid item xs>
                                        <TextField type="text" name="phone" label="Numéro de téléphone" value={facture.form.phone} onChange={handleChange}/>
                                    </Grid> 
                                    <Grid item xs>
                                        <TextField type="text" name="location" label="Adresse" value={facture.form.location} onChange={handleChange}/>
                                    </Grid>
                                    <Grid item xs>
                                        <TextField type="email" name="email"  label="Email"value={facture.form.email} onChange={handleChange}/>
                                    </Grid>
                                </Grid>
                                    <Grid container>
                                        <Grid item xs={12}>
                                      <TableContainer>
                                        <Table>
                                          <TableHead>
                                            <TableRow>
                                              <TableCell>
                                                <Typography>Désignation</Typography>
                                              </TableCell>
                                              <TableCell>
                                                <Typography>Quantité</Typography>
                                              </TableCell>
                                              <TableCell>
                                                <Typography>Prix</Typography>
                                              </TableCell>
                                            </TableRow>
                                          </TableHead>
                                          <TableBody>
                                            <TableRow>
                                              <TableCell>
                                              <TextField type="text" name="type" label="Description"  value={facture.form.type} onChange={handleChange}/>
                                              </TableCell>
                                              <TableCell>
                                              <TextField   type="number"  name="quantity"   label="Quantité"  value={facture.form.quantity} onChange={handleChange}/>
                                              </TableCell>
                                              <TableCell>
                                              <TextField type="number" name="price"   label="Prix" value={facture.form.price} onChange={handleChange}/>
                                              </TableCell>
                                            </TableRow> 
                                            </TableBody>
                                        </Table>
                                        </TableContainer>
                                        </Grid>
                                        </Grid>
                                        <Grid container alignItems='flex-end' direction='column'>
                                        <Grid item xs={3} >
                                        <TableContainer>
                                        <Table>
                                            <TableHead>
                                                <TableRow>
                                                    <TableCell>
                                                        <Typography>Total</Typography>
                                                    </TableCell>
                                                </TableRow>
                                            </TableHead>
                                            <TableBody>
                                                <TableRow>
                                                    <TableCell>
                                                  <TextField disabled type="number" name="price"   label="Total" value={facture.form.price * facture.form.quantity} onChange={handleChange}/>
                                              </TableCell>
                                                </TableRow>
                                            </TableBody>                                         
                                          </Table>
                                          </TableContainer>
                                          </Grid>
                                          </Grid>
                                         <Grid container>
                                             <Grid item xs>
                                                 <Button variant='outlined' color='secondary' type='submit'>Ajouter</Button>
                                             </Grid>
                                            <Grid item xs>
                                                <Button type='button' onClick={setForm}>Fermer</Button>
                                            </Grid>
                                         </Grid>
                                        </form>
                                        </DialogContent>
                                    </Dialog>
                
            )
        }        
        
    const handleUpdate = (id) => {
        setOpenU(!openU)
        console.log(openU)
        console.log(id)
        const index = facture.form.newFacture.findIndex(ind => ind.id === id)
        console.log(index)
        }
        
        return (
            <Fragment>
                {renderDialog(classes)}
                {renderTable()}
            </Fragment>
        )
    }