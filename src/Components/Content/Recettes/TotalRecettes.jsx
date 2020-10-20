import React, {Component } from 'react'
    
export default class TotalRecettes extends Component{

    
    render(){

        const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']


        function Somme(input){
            var total = 0;
            for(var i in input){
                total += parseInt(input[i]);
            }
            return total;
        }
        const monthday = new Date()

        const inpTotal = this.props.in.map(input => (input.montant))
        const outTotal = this.props.out.map(output => (output.montant))
        var totalInp = Somme(inpTotal);
        var totalout = Somme(outTotal);
        console.log(months[monthday.getMonth()])

        
        
        return(
            <div>
                <div className="row text-center">
                    <div className="col">
                        <h3>Total des entrées: {totalInp}€</h3>
                    </div>
                    <div className="col">
                        <h3>Total des sorties: {totalout}€</h3>
                    </div>
                </div>
                <div className="text-center container-fluid">
                    <h3>Total: {totalInp - totalout}€</h3>
                </div>
            </div>
        )
    }
}