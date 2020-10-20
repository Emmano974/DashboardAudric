import React, { Fragment, useState } from 'react'
import AddIcon from '@material-ui/icons/Add';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import DeleteIcon from '@material-ui/icons/Delete';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import CloseIcon from '@material-ui/icons/Close';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import EqualizerIcon from '@material-ui/icons/Equalizer';



import { Button, Dialog, Divider, Grid,IconButton, List, ListItem, ListItemIcon, ListItemText, makeStyles, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography, withStyles } from '@material-ui/core';

const styles = (theme) => ({
    root: {
      margin: 0,
      padding: theme.spacing(2),
    },
    closeButton: {
      position: 'absolute',
      right: theme.spacing(1),
      top: theme.spacing(1),
      color: theme.palette.grey[500],
    }
  });

  const useStyles = makeStyles((theme) => ({
      table : {
          
      },
      total : {
        textAlign:'center'
      }
  }));
  

  const DialogTitle = withStyles(styles)((props) => {
    const { children, classes, onClose, ...other } = props;
    return (
      <MuiDialogTitle disableTypography className={classes.root} {...other}>
        <Typography variant="h6">{children}</Typography>
        {onClose ? (
          <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
            <CloseIcon />
          </IconButton>
        ) : null}
      </MuiDialogTitle>
    );
  });
  
  const DialogContent = withStyles((theme) => ({
    root: {
      padding: theme.spacing(2),
    },
  }))(MuiDialogContent);

export default function Recettes(){

    const classes = useStyles()

    const [input, setInput] = useState({
        in: {
            id:'',
            date:'',
            from:'',
            nature:'',
            cost:'',
            status:'',
            newInput:[]
        }
    })

    const [openI, setOpenI] = useState(false)
    const [openO, setOpenO] = useState(false)
    const [openLi, setOpenLi] = useState(false)
    const [openLu, setOpenLu] = useState(false)


    const handleOpenLi = () => {
        setOpenLi(!openLi)
    }

    const handleOpenLu = () => {
        setOpenLu(!openLu)
    }

    const handleOpenI = () => {
        setOpenI(!openI)
    }

    const handleOpenO = () => {
        setOpenO(!openO)
    }

    const [output, setOutput] = useState({
        out: {
            id:'',
            date:'',
            to:'',
            nature:'',
            cost:'',
            status:'',
            newOutput:[]
        }
    })

/*Fonction récupération de la valeur de chaque input des entrées d'argent */
    const handleChangeIn = (event) => {
        setInput({
            in: {
                ...input.in,
                [event.target.name] : event.target.value 
            }
        })
    }

/*Fonction récupération de la valeur de chaque input des sorties d'argent */
    const handleChangeOut = (event) => {
         setOutput({
            out: {
                ...output.out,
                [event.target.name] : event.target.value 
            }
        })
    }

/*Fonction permettant de récupérer les valeurs des entrées après envoie du formulaire et stockage dans un array */
    const handleSubmitIn = (event) => {
        event.preventDefault();

        const {date, from, nature, cost, status} = input.in

        setInput({
            in: {
                  id:"",
            date:"",
            from:"",
            nature:"",
            cost:"",
            status:"",
            newInput:[...input.in.newInput, {id:Math.random(), date, from, nature, cost, status}]
            }
        })

    }

    /*Fonction permettant de récupérer les valeurs des sorties après envoie du formulaire et stockage dans un array */
    const handleSubmitOut = (event) => {
        event.preventDefault();

        const {date, to, nature, cost, status} = output.out

        setOutput({
            out: {
                  id:"",
            date:"",
            to:"",
            nature:"",
            cost:"",
            status:"",
            newOutput:[...output.out.newOutput, {id:Math.random(), date, to, nature, cost, status}]
            }
    })
    }

    // searching = () => {
    //     return this.state.input.nature.filter(nat => nat.toLowerCase().includes(this.state.search.toLowerCase()) )
    // }

    // updateSearch = (event) => {
    //     this.setState({
    //         search: event.target.value
            
    //     })
    //     console.log(event.target.value)
    // }

    // const handleDelete = (id) => {
    //     const deletion = this.state.input.filter(trans => trans.id !== id);
    //     this.setState({input : deletion})
    //     console.log(id)
    // }
/*Formulaire pour les entrées d'argent */
    const renderIn = () => {
        return(
            <Dialog fullWidth open={openI} onClose={handleOpenI}>
                 <DialogTitle onClose={handleOpenI}>
                    Ajouter une entrée
                </DialogTitle>
                <Divider/>
                <DialogContent>
                        <form onSubmit={handleSubmitIn}>
                        <Grid container spacing={2} direction='column' alignItems='center'>
                            <Grid item xs>
                                <TextField required type="date" name='date' value={input.in.date} onChange={handleChangeIn}/>
                            </Grid>
                            <Grid item xs>
                                <TextField required type="text" name='from' value={input.in.from} onChange={handleChangeIn}  label='Provenance'/>
                            </Grid>
                            <Grid item xs>
                                <TextField required type="text" name='nature' value={input.in.nature} onChange={handleChangeIn} label='Nature'/>
                            </Grid>
                            <Grid item xs>
                                <TextField required type="number" name='cost' value={input.in.cost} onChange={handleChangeIn} label='Montant'/>
                            </Grid>
                            <Grid item xs> 
                                <Button type="submit">Ajouter</Button>
                            </Grid> 
                        </Grid>
                        </form> 
                        </DialogContent>
                        </Dialog>
        )
    }

/*Formulaire pour les sorties d'argent */
    const renderOut = () => {
        return(
            <Dialog fullWidth open={openO} onClose={handleOpenO}>
                <DialogTitle onClose={handleOpenO}>Ajouter une Sortie</DialogTitle>
                <Divider/>
                <DialogContent>
                <form onSubmit={handleSubmitOut}>
                    <Grid container spacing={2} direction='column' alignItems='center'>
                        <Grid item xs>
                            <TextField required type="date" name='date' value={output.out.date} onChange={handleChangeOut}  />
                        </Grid>
                        <Grid item xs>
                            <TextField required type="text" name='to' value={output.out.to} onChange={handleChangeOut}  label='Destination'/>
                        </Grid>
                        <Grid item xs>
                            <TextField required type="text" name='nature' value={output.out.nature} onChange={handleChangeOut} label='Nature'/>
                        </Grid>
                       <Grid item xs>
                            <TextField required type="number" name='cost' value={output.out.cost} onChange={handleChangeOut} label='Montant'/>
                        </Grid>
                        <Grid item xs>
                            <Button variant='contained' type="submit">Ajouter</Button>
                        </Grid>
                        </Grid>
                        </form>
                        </DialogContent>
            </Dialog>
            
    )}

/*Affichage dans un tableau des entrées d'argents*/
    const renderTableIn = () => {
        return( 
            <div>
            <TableContainer component={Paper} >
                <Table>
                    <TableHead className={classes.table}>
                    <TableCell>{openLi ? (
                         <IconButton onClick={handleOpenLi}>
                            <KeyboardArrowDownIcon/>
                        </IconButton>
                    ) : (<IconButton onClick={handleOpenLi}>
                    <KeyboardArrowUpIcon/>
                </IconButton>)}
                            </TableCell>
                        <TableCell  style={{color:'green'}} align='center' colSpan='6'><ArrowDownwardIcon style={{border:'solid 3px',borderRadius:'100%', fontSize:'40px'}}/></TableCell>
                        <TableCell align='right'>
                        <IconButton onClick={handleOpenI}><AddIcon/></IconButton>
                        </TableCell>
                    </TableHead>
                </Table>
            </TableContainer>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>Date</TableCell>
                            <TableCell>Provenance</TableCell>
                            <TableCell>Nature</TableCell>
                            <TableCell>Prix</TableCell>
                            <TableCell>Status</TableCell>
                            <TableCell colSpan='2'>Actions</TableCell>
                        </TableRow>
                    </TableHead>{input.in.newInput.map(details => (
                        <TableBody>{openLi ? (
                            <TableRow>
                                <TableCell>{details.id}</TableCell>
                                <TableCell>{details.date}</TableCell>
                                <TableCell>{details.from}</TableCell>
                                <TableCell>{details.nature}</TableCell>
                                <TableCell>{details.cost}</TableCell>
                                <TableCell>{details.status}</TableCell>
                                <TableCell><Button type='button' onClick={handleDeleteIn.bind(this, details.id)}><DeleteIcon/></Button></TableCell>
                            </TableRow>):(null)}
                        </TableBody>
                        ))}
                </Table>
            </TableContainer>
            </div>
    )}

/*Affichage dans un tableau des sorties d'argents*/
    const renderTableOut = () => {
    return( 
        <Fragment>
        <TableContainer component={Paper}>
                <Table >
                    <TableHead>
                    <TableCell>{openLu ? (
                         <IconButton variant="outlined" onClick={handleOpenLu}>
                            <KeyboardArrowDownIcon/>
                        </IconButton>
                    ) : (<IconButton variant="outlined" onClick={handleOpenLu}>
                    <KeyboardArrowUpIcon/>
                </IconButton>)}
                            </TableCell>
                        <TableCell style={{color:'red'}} align='center' colSpan='6'><ArrowUpwardIcon style={{border:'solid 3px',borderRadius:'100%', fontSize:'40px'}}/></TableCell>
                        <TableCell align='right'>
                        <IconButton color='default' onClick={handleOpenO}><AddIcon/></IconButton>
                        </TableCell>
                    </TableHead>
                </Table>
            </TableContainer>
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell>Date</TableCell>
                        <TableCell>Destination</TableCell>
                        <TableCell>Nature</TableCell>
                        <TableCell>Prix</TableCell>
                        <TableCell>Status</TableCell>
                        <TableCell colSpan='2'>Actions</TableCell>
                    </TableRow>
                    

                   
                </TableHead>{output.out.newOutput.map(details => (
                    <TableBody>{openLu ? (
                        <TableRow>
                            <TableCell>{details.id}</TableCell>
                            <TableCell>{details.date}</TableCell>
                            <TableCell>{details.to}</TableCell>
                            <TableCell>{details.nature}</TableCell>
                            <TableCell>{details.cost}</TableCell>
                            <TableCell>{details.status}</TableCell>
                            <TableCell><Button type='button' onClick={handleDeleteOut.bind(this, details.id)}><DeleteIcon/></Button></TableCell>
                        </TableRow>):(null)}
                    </TableBody>))}
            </Table> 
        </TableContainer>
        </Fragment>
    )}

      /*Fonction Supression de chaque ligne*/
    const handleDeleteIn = (id) => {
        const deletion = input.in.newInput.filter(details => 
            details.id !== id)
        setInput({in : {
            newInput : deletion}})
        console.log(id)
    }

    const handleDeleteOut = (id) => {
        const deletion = output.out.newOutput.filter(details => 
            details.id !== id)
        setOutput({out : {
            newOutput : deletion}})
        console.log(id)
    }

    function Somme(input){
            var total = 0;
            for(var i in input){
                total += parseInt(input[i]);
            }
            return total;
        }

        const inpTotal = input.in.newInput.map(input => (input.cost))
        const outTotal = output.out.newOutput.map(output => (output.cost))
        var totalInp = Somme(inpTotal);
        var totalout = Somme(outTotal);

        return (
            <Fragment>
                <Grid container spacing={5} align='center' justify="space-around">
                    <Grid item xs>
                        {renderTableIn()}
                    </Grid>
                    <Grid item xs>
                        {renderTableOut()}
                    </Grid>
               <Grid item xs={4}>
                    <Paper className={classes.total}>
                        <ListItem> 
                            <ListItemIcon>
                                <ArrowDownwardIcon style={{border:'solid 3px',borderRadius:'100%', fontSize:'40px'}}/>
                            </ListItemIcon>
                            </ListItem>
                            <ListItem>
                            <ListItemText>
                                <Typography variant='h5'>
                                   {totalInp} €
                                </Typography>
                            </ListItemText>
                        </ListItem>
                            
                        </Paper>
               </Grid>
               <Grid item xs={4}>
               <Paper><Typography variant='h5'>Total des sorties: {totalout}€</Typography></Paper>
               </Grid>
               <Grid item xs={12}>
                   <Paper><Typography variant='h4'><EqualizerIcon style={{fontSize:'40px'}}/>{totalInp - totalout} €</Typography></Paper>
               </Grid>
               </Grid>
               {renderIn()}
               
               {renderOut()}

            </Fragment>
        )
    }