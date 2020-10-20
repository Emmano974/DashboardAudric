import React, { useState, Fragment, useEffect } from 'react'
import { Button, Dialog, DialogContent, DialogTitle, Divider, Grid, IconButton, makeStyles, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add';
import CloseIcon from '@material-ui/icons/Close';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import axios from 'axios'

const useStyles = makeStyles((theme) => ({
    formDevis: {
        paddingLeft:350,
        paddingRight:350,
        backgroundColor:'#3f51b5',
        color:'white'
    },
    contentFormDevis : {
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
        textAlign : 'right',
      },
      import: {
        textAlign : 'right',
      }
  }));


export default function Devis () {


    const [devis, setDevis] = useState({
        form : {
                date:'',
                name:'',
                phone:'',
                type:'',
                location:'',
                email:'',
                quantity:'',
                price:'',
                total:"", 
                timeremain:'',
                newDevis:[],
        }})

    const [openF, setOpenF] = useState(false)
    const [openL, setOpenL] = useState(false)

    useEffect(() => {
        getNewDevis()
        },[])

        const getNewDevis = () => {
            axios.get('/api/devis')
            .then((response)=> {
                const data = response.data
                setDevis({form : {
                    newDevis : data
                }
            })
                console.log('data devis reçu')
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
        setDevis({ 
            form : {
                ...devis.form,
                [event.target.name] : event.target.value
             }});
        console.log(event)
    }
    
  

    /*Fonction Supression de chaque ligne*/
    const handleDelete = (id) => {
        axios.delete('/api/devis/' + id)
            .then(res => {  
                console.log(res)
                setDevis({
                    form : {
                        newDevis : devis.form.newDevis.filter(details =>  details.id !== id)
                            }})
                getNewDevis()
                // } : {
                //     return(
                //         newDevis : devis.form.newDevis.filter(details =>  details.id !== id)}})
                //     )
            })
                
                // })
    console.log(id)
    }


    /*Fonction de soumission du formulaire*/
    const handleSubmit = (event) => {
        event.preventDefault();

          const dt = new Date(devis.form.date); 
        function add_months(dt, n) { 
            var datemonth = new Date(dt.setMonth(dt.getMonth() + n)).toString();
            return datemonth
            
        }
        const months = add_months(dt, 3);
        console.log(months)

        const {date ,name,phone,type,location,email,quantity,price} = devis.form
        
        
        
        const data = {
            date:date,
            name: name,
            phone:phone,
            type:type,
            location:location,
            email:email,
            quantity:parseInt(quantity) ,
            price:parseInt(price),
            total:parseInt(price * quantity), 
            timeremain:months,
        }

        // const {id, date, name, phone, type, location, email, quantity, price, total} = devis.form;

        // setDevis({ form : {
        //      id:Math.random(), 
        //      date:'', 
        //      name:'', 
        //      phone:'', 
        //      type:'', 
        //      location:'', 
        //      email:'', 
        //      quantity:'', 
        //      price:'', 
        //      total:'', 
        //      timeremain:'', 
        //      newDevis:[...devis.form.newDevis, {id, date, name,  phone, type, location, email, quantity, price, total:devis.form.price * devis.form.quantity, timeremain: months}]
        //  } })

         axios({ 
            url: 'http://localhost:8000/api/devis',
            method:'POST',
            data:{
                date:devis.form.date,
                name: devis.form.name,
                phone:devis.form.phone,
                type:devis.form.type,
                location:devis.form.location,
                email:devis.form.email,
                quantity:devis.form.quantity ,
                price:devis.form.price,
                total:devis.form.price * devis.form.quantity, 
                timeremain:months,
        } 
            })
            .then(() => {
                console.log("data devis")
                getNewDevis()
            })
            .catch(() => {
                console.log("No Data")
            })
    }


    const handleReset = () => {
        setDevis({form: {
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

console.log(devis.form.newDevis)

    /*Affichage du rendu des devis*/
    const renderTable = () => {
        return (
            <Fragment>
            <TableContainer component={Paper}>
           <Table>
               <TableHead>
                   <TableRow>
               <TableCell>{openL ? (
                    <IconButton variant="outlined" onClick={setList}>
                       <KeyboardArrowDownIcon/>
                   </IconButton>
               ) : (<IconButton variant="outlined" onClick={setList}>
               <KeyboardArrowUpIcon/>
           </IconButton>)}
                       </TableCell>
                       <TableCell align='center'>
                           <Typography><b>Liste des devis</b></Typography>
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
               </TableRow>
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
                    <TableCell><b>Type de devis</b></TableCell>
                    <TableCell><b>Email</b></TableCell>
                    <TableCell><b>Quantité</b></TableCell>
                    <TableCell><b>Prix</b></TableCell>
                    <TableCell><b>Total</b></TableCell>
                    <TableCell><b>Temps</b></TableCell>
                    <TableCell colSpan='2' align='center'><b>Actions</b></TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {devis.form.newDevis.map(detail => (
                    <TableRow key={detail._id}>
                        <TableCell>{detail._id}</TableCell>
                        <TableCell>{detail.name}</TableCell>
                        <TableCell>{detail.phone}</TableCell>
                        <TableCell>{detail.date}</TableCell>
                        <TableCell>{detail.location}</TableCell>
                        <TableCell>{detail.type}</TableCell>
                        <TableCell>{detail.email}</TableCell>
                        <TableCell>{detail.quantity}</TableCell>
                        <TableCell>{detail.price}</TableCell>
                        <TableCell>{detail.total} </TableCell>
                        <TableCell>{detail.timeremain}</TableCell>
                          {/* Bouton permettant de supprimer la ligne d'un devis */}
                        <TableCell>
                            <Button type='button' onClick={handleDelete.bind(this, detail._id)}><DeleteIcon/></Button>
                        </TableCell>  
                        <TableCell>
                            <Button type='button' onClick={handleUpdate.bind(this, detail._id)}>U</Button>
                        </TableCell>                                   
                    </TableRow>))}
                </TableBody>
                </Table>
        ) : (null)}
        </TableContainer>
        </Fragment>
        )}


    /*Affichage du formulaire de devis */
    const renderDialog = (classes) => {
        return (
            <Dialog fullScreen onClose={setForm} aria-labelledby="simple-dialog-title" open={openF} >
                <DialogTitle id="customized-dialog-title" onClose={setForm} className={classes.formDevis}>DEVIS</DialogTitle>
                    <IconButton aria-label="close" onClick={setForm} className={classes.closeButton}>
                        <CloseIcon />
                    </IconButton>
                    <Divider/>
                        <DialogContent className={classes.contentFormDevis}>
                            <form onSubmit={handleSubmit} name="form">
                            <Grid container spacing={1}>  
                                <Grid item xs={12}>
                                    <Typography><b>Entreprise</b></Typography>
                                    <Typography>Audric Lamy</Typography>
                                    <Typography>7 rue des Jacinthes</Typography>
                                    <Typography>97490 Sainte-Clotilde</Typography>
                                    <Typography>Audric.Lamy@supinfo.com</Typography>
                                    <Typography>0692123456</Typography>
                                    <Typography>Fait le : </Typography>
                                    <TextField required type="date" name="date" value={devis.form.date} onChange={handleChange}/>
                                </Grid>
                            </Grid>                 
                            <Grid container alignItems='flex-end' direction='column'> 
                                <Typography><b>Client</b></Typography>
                                    <Grid item xs>
                                        <TextField label="Nom" required type="text" name="name" value={devis.form.name} onChange={handleChange}/>
                                    </Grid>
                                    <Grid item xs>
                                        <TextField required type="text" name="phone" label="Numéro de téléphone" value={devis.form.phone} onChange={handleChange}/>
                                    </Grid> 
                                    <Grid item xs>
                                        <TextField required type="text" name="location" label="Adresse" value={devis.form.location} onChange={handleChange}/>
                                    </Grid>
                                    <Grid item xs>
                                        <TextField required type="email" name="email"  label="Email"value={devis.form.email} onChange={handleChange}/>
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
                                              <TextField required type='text' name="type" label="Description"  value={devis.form.type} onChange={handleChange}/>
                                              </TableCell>
                                              <TableCell>
                                              <TextField  required type='number' name="quantity"   label="Quantité"  value={devis.form.quantity} onChange={handleChange}/>
                                              </TableCell>
                                              <TableCell>
                                              <TextField required type='number' name="price"   label="Prix" value={devis.form.price} onChange={handleChange}/>
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
                                                  <TextField disabled type="number" name="price"   label="Total" value={devis.form.price * devis.form.quantity} onChange={handleChange}/>
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
        console.log(devis.form.newDevis[id].name)
       }
    
        const classes = useStyles()
    
        return (

            <Fragment>
                {renderDialog(classes)}
        {renderTable()}
            </Fragment>

        )
    }