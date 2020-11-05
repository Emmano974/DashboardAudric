import { Box, Button, Dialog, DialogTitle,  List, Grid, IconButton, ListItem, ListItemIcon, ListItemText, makeStyles, MenuItem, Select, TextField, Typography } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import LoopIcon from '@material-ui/icons/Loop';
import CheckIcon from '@material-ui/icons/Check';
import ClearIcon from '@material-ui/icons/Clear';
import AddIcon from '@material-ui/icons/Add';
import ListIcon from '@material-ui/icons/List';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import axios from 'axios'


const useStyles = makeStyles({
    taches: {
    },
    button : {
       
    },
    root : {
    },
    listes : {
        position: "absolute",
        left: 0,
        top: 0,
        height: 130, /* itemSize × index */
        width:500
    }
  });



export default function Taches() {
    const classes = useStyles();

    const [open, setOpen] = React.useState(false);
  
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  
    const [task, setTask] = useState({
        form: {
            name:"",
            time:"",
            status:"",
            newTask:[]
        }
        })

        useEffect(() => {
            getNewTask()
            },[])
    
            const getNewTask = () => {
                axios.get('/api/task')
                .then((response)=> {
                    const data = response.data
                    setTask({form : {
                        newTask : data
                    }
                })
                    console.log('data task reçu')
                })
                .catch(()=> {
                    console.log('data non reçu')
                })
            }

    const handleChange = (event) => {
        setTask({
            form:{
                ...task.form,
            [event.target.name] : event.target.value}
        })
        console.log(task)
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        const {name, time, status} = task.form

        const data = {
            name : name,
            time : time,
            status : status
        }

        axios({ 
            url: '/api/task',
            method:'POST',
            data: data
            })
            .then(() => {
                console.log("data task")
                getNewTask()
                
            })
            .catch(() => {
                console.log("No Data")
            })
    }

    const renderDialogTask = () => {
        return(
            <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
                <DialogTitle id="simple-dialog-title">Tâche</DialogTitle>
                    <Button type='submit'>Ajouter</Button>
                        <List>
                            <form onSubmit={handleSubmit}>
                            <ListItem>
                                <TextField type='text' name='name' placeholder="Nom de la tâche" value={task.form.name} onChange={handleChange}></TextField>
                            </ListItem>
                            <ListItem>
                                <TextField type='text' name='time' placeholder="Durée" value={task.form.time} onChange={handleChange}></TextField>
                            </ListItem>
                            <ListItem>
                            <Select name='status' value={task.form.status} onChange={handleChange}>
                                <MenuItem value="en cours"><IconButton><LoopIcon/></IconButton></MenuItem>
                                <MenuItem value="terminé"><IconButton><CheckIcon/></IconButton></MenuItem>
                                <MenuItem value="Non"><IconButton><ClearIcon/></IconButton></MenuItem>
                            </Select>   
                            </ListItem>
                            <Button type='submit'>Ajouter</Button>
                            </form>    
                        </List>
                </Dialog>
        )
    }

    const taskTable = () => {
        return(
            <Box textAlign='center'>
            <Grid container className={classes.root}>
                <Grid item lg className={classes.taches}>
                    <ListItem>
                        <ListItemIcon>
                            <ListIcon/>
                        </ListItemIcon>
                        <ListItemText>
                            <Typography variant='h6'>Tâches</Typography>
                        </ListItemText>
                    </ListItem>
                </Grid >
                <Grid item className={classes.button}>
                    <ListItem>
                    <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                        <AddIcon/>
                    </Button>
                    </ListItem>
                </Grid>
            
            <List> 
                
            {task.form.newTask.map((taskes) => (
            
            <ListItem>          
                <ListItemIcon>    
                    <FiberManualRecordIcon/>
                </ListItemIcon> 
                <ListItemText>
                        {taskes.tasks}
                        {taskes.time}   
                        {taskes.status}             
                </ListItemText>
                    <Select>
                        <MenuItem value={10}><IconButton><LoopIcon/></IconButton></MenuItem>
                        <MenuItem value={20}><IconButton><CheckIcon/></IconButton></MenuItem>
                        <MenuItem value={30}><IconButton><ClearIcon/></IconButton></MenuItem>
                    </Select> 
                    </ListItem> 
              ))} 
        </List>     
        </Grid>   
        </Box>  
        )
    }

    return (

      
        <React.Fragment >
            
            {taskTable()}
            {renderDialogTask()}
        </React.Fragment>
    )
}
