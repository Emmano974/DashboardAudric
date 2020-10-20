import React from 'react'

export default class RecentDevis extends React.Component {
    render(){
        return(
            <div className="col float-left">
                <h3>Récents</h3>
                <table className="RecentTable table">
                    <thead>
                        <tr>
                            <th>Nom</th>
                            <th>Prix</th>                       
                        </tr>
                    </thead>
                    <tbody>{this.props.devis.map(details => (
                        <tr key={details.id}>
                            <td>{details.name}</td>
                            <td>{details.price}</td>
                        </tr>
                    ))  }
                        <tr>
                            
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}