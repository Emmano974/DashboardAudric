import { ListItem, ListItemIcon, ListItemText, Typography } from '@material-ui/core'
import React, { Component } from 'react'
import {BarChart, Bar, XAxis, YAxis, Legend} from 'recharts'

import EqualizerIcon from '@material-ui/icons/Equalizer';

export default class MonthsCharts extends Component {

    
    render() {
        const data = [
            {months: 'Jan', recettes:'100'},
            {months: 'Feb', recettes:'90'},
            {months: 'Mar', recettes:'8000'},
            {months: 'Apr', recettes:'4000'},
            {months: 'May', recettes:'100'},
            {months: 'Jun', recettes:'900'},
            {months: 'Jul', recettes:'5000'},
            {months: 'Aug', recettes:'1000'},
            {months: 'Sep', recettes:'100'},
            {months: 'Oct', recettes:'100'},
            {months: 'Nov', recettes:'100'},
            {months: 'Dec', recettes:'100'},
        ]
        return (
            <React.Fragment>
                    <ListItem>
                        <ListItemIcon>
<EqualizerIcon/>
                        </ListItemIcon>
                        <ListItemText>
                    <Typography variant='h6'>Revenus - Mois de l'année</Typography></ListItemText>
                    </ListItem>
                <BarChart 
                    width={500}
                    height={300}
                    data={data}
                 >
                 <XAxis dataKey='months' />
                 <YAxis />
                 <Legend />
                 <Bar dataKey='recettes' />
            </BarChart>
            </React.Fragment>
        )
    }
}
