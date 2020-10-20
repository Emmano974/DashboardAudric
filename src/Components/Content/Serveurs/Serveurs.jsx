import React, { Component } from 'react'
import TableServeurs from './TableServeurs';

export default class Serveurs extends Component {
    constructor(props){
        super(props);
        this.state = {
            serveurs : [{
                ip:'192.168.1.1',
                client:'Audric Lamy',
                description:'Serveur web pour site ecommerce Sport2000',
                localisation:'Cilaos',
                status:true
            }]
        }
    }

    handleDelete = (id) => {
        const {serveurs} = this.state;
        serveurs.splice(id, 1);
        this.setState({
            serveurs: [...serveurs]
        })
    }

    handleAdd = (serveur) => {
        const {ip, client, description, localisation} = serveur;

        this.setState({
            serveurs: [
                ...this.state.serveurs,
                {
                    ip, client, description, localisation
                }
            ]
        })
    }



    render() {
        return (
            <div>
                <TableServeurs serveurs={this.state.serveurs} />
            </div>
        )
    }
}
