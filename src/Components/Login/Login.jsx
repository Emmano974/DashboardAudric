import { Button, Grid, makeStyles, Paper, TextField, Typography } from '@material-ui/core';
import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

export default function Login(){  


        return(
            <Fragment>
               
                <Grid container justify='center' alignItems='center' direction='column'>
                    <Grid container style={{position:'absolute', top:20+ '%', width:20 + '%', paddingTop:70, paddingBottom:70}} direction='column' alignItems='center' component={Paper}> 
                    <Grid item xs>
                        <Typography variant='h5'>
                            Connexion
                        </Typography>
                    </Grid>
                    <Grid item xs>
                        <TextField type="text"/>
                    </Grid>
                     <Grid item xs>
                         <TextField type="password" />
                     </Grid>
                     <Grid item xs>
                         <Button>
                            <Link to='/Side'>
                                Se Connecter
                            </Link>
                        </Button>
                     </Grid>
                     <Grid item xs>
                         <Button>
                            Inscription
                        </Button>
                     </Grid>
                        <Typography>Mot de passe oublié ? </Typography>
                </Grid> 
                    </Grid>
                   
                       
            </Fragment>
        )
    }