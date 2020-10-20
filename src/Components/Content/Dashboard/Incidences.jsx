import React from 'react'
import WarningIcon from '@material-ui/icons/Warning';
import { ListItem, ListItemIcon, ListItemText, Typography } from '@material-ui/core';

export default function Incidences() {
    return (
        <div>
            
            <ListItem>
                <ListItemIcon>
                    <WarningIcon/>
                </ListItemIcon>
                <ListItemText>
                <Typography variant='h6'>Incidences</Typography>
                </ListItemText>
            </ListItem>
        </div>
    )
}
