import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core'
import React, { Component } from 'react'

export default class TableServeurs extends Component {
    render() {
        return (
            <div>
                <TableContainer>
                    <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Adresse IP</TableCell>
                            <TableCell>Client</TableCell>
                            <TableCell>Description</TableCell>
                            <TableCell>Localisation</TableCell>
                            <TableCell>Status</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>{this.props.serveurs.map(serveur => (
                         <TableRow>
                            <TableCell>{serveur.ip}</TableCell>
                            <TableCell>{serveur.client}</TableCell>
                            <TableCell>{serveur.description}</TableCell>
                            <TableCell>{serveur.localisation}</TableCell>
                    <TableCell>{serveur.status === true ? (<p>OK</p>
                        ): (<p>NON</p>)}
                        </TableCell>
                        </TableRow>
                    ))  }     
                    </TableBody>
                    </Table>
                </TableContainer>
            </div>
        )
    }
}
