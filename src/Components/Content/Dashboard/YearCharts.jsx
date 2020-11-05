import { ListItem, ListItemIcon, ListItemText, Typography } from '@material-ui/core'
import React, { Component, Fragment } from 'react'
import {BarChart, Bar, XAxis, YAxis, Legend} from 'recharts'
import EqualizerIcon from '@material-ui/icons/Equalizer';


export default class YearCharts extends Component {

    
    render() {
        const data = [
            {year: '2009', recettes:'10'},
            {year: '2010', recettes:'90'},
            {year: '2011', recettes:'50'},
            {year: '2012', recettes:'90'},
            {year: '2013', recettes:'400'},
            {year: '2014', recettes:'20'},
            {year: '2015', recettes:'90'},
            {year: '2016', recettes:'10'},
            {year: '2017', recettes:'800'},
            {year: '2018', recettes:'700'},
            {year: '2019', recettes:'100'},
            {year: '2020', recettes:'100'},
        ]
        return (
            <Fragment>
                <ListItem>
                    <ListItemIcon>
                        <EqualizerIcon/>
                    </ListItemIcon>
                    <ListItemText>
                        <Typography variant='h6'>Revenus - année</Typography>
                    </ListItemText> 
            </ListItem>
                <BarChart 
                    width={500}
                    height={300}
                    data={data}
                 >
                 <XAxis dataKey='year' />
                 <YAxis />
                 <Legend />
                 <Bar dataKey='recettes' />
            </BarChart>
            </Fragment>
        )
    }
}
