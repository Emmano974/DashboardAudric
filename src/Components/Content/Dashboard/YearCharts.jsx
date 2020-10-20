import { ListItem, ListItemIcon, ListItemText, Typography } from '@material-ui/core'
import React, { Component, Fragment } from 'react'
import {BarChart, Bar, XAxis, YAxis, Legend} from 'recharts'
import EqualizerIcon from '@material-ui/icons/Equalizer';


export default class YearCharts extends Component {

    
    render() {
        const data = [
            {months: 'Jan', uv:'100'},
            {months: 'Feb', uv:'90'},
            {months: 'Mar', uv:'100'},
            {months: 'Apr', uv:'100'},
            {months: 'May', uv:'100'},
            {months: 'Jun', uv:'100'},
            {months: 'Jul', uv:'100'},
            {months: 'Aug', uv:'100'},
            {months: 'Sep', uv:'100'},
            {months: 'Oct', uv:'100'},
            {months: 'Nov', uv:'100'},
            {months: 'Dec', uv:'100'},
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
                 <XAxis dataKey='months' />
                 <YAxis />
                 <Legend />
                 <Bar dataKey='uv' />
            </BarChart>
            </Fragment>
        )
    }
}
