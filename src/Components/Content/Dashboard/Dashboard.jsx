import { Box, Card, Grid, ListItem, ListItemIcon, ListItemText, Paper, Typography } from '@material-ui/core'
import React, { Component } from 'react'
import Incidences from './Incidences'
import MonthsCharts from './MonthsCharts'
import Taches from './Taches'
import YearCharts from './YearCharts'
import StorageIcon from '@material-ui/icons/Storage';
import HistoryIcon from '@material-ui/icons/History';

export default class DashBoard extends Component {
    render(){
        return(
            <div>            
                <Box>
                <Grid container spacing={6}>
                    <Grid item xs={3}>
                        <Paper>
                        <ListItem>
                            <ListItemIcon>
                                <HistoryIcon/>
                            </ListItemIcon>
                            <ListItemText>
                            <Typography variant='h6'>Récents</Typography></ListItemText>
                            </ListItem>
                        </Paper> 
                        <Paper elevation={3}/>
                    </Grid>
                    <Grid item xs={3}>
                        <Card>

                            <Taches />
                        </Card>
                    </Grid>
                    <Grid item xs={3}>
                        <Card>
                        <ListItem>
                            <ListItemIcon>
                                <StorageIcon/>
                            </ListItemIcon>
                            <ListItemText>
                            
                            <Typography variant='h6'>Serveurs</Typography></ListItemText>
                            </ListItem>
                        </Card>
                    </Grid>
                    <Grid item xs={3}>
                        <Card>
                            <Incidences/>
                        </Card>
                    </Grid>
                    <Grid item xs={6}>
                        <Card>
                            <MonthsCharts />
                        </Card>
                    </Grid>
                    <Grid item xs={6}>
                        <Card>
                            <YearCharts/>
                            </Card>
                    </Grid>
                    </Grid>
                </Box>
            </div>
        )
    }
}