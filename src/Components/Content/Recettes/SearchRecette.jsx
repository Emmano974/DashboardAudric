import { TextField } from '@material-ui/core'
import React, { Component } from 'react'

export default class SearchRecette extends Component {
    render() {
        
        return (
            <div>
                <TextField type="text" placeholder='Rechercher' value={this.props.search} onChange={this.updateSearch}/>
            </div>
        )
    }
}
