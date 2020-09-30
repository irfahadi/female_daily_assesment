import React, { useState,Component, Fragment } from 'react';
import axios from 'axios';
import CardComponent from '../Component/CardComponent' 

class CardAplication extends Component{
    state = {
        card: []
    }
    componentDidMount(){
        axios({
            method: 'get',
            url: 'https://virtserver.swaggerhub.com/hqms/FDN-WP/0.1/wp',
            responseType: 'json'
          })
            .then ((response)=>{
                // console.log(response.data.["editor's choice"]);
                var api = response.data.["editor's choice"]
                this.setState({
                    card: api
                });
                // console.log(this.state.card)
            });
        }
    render(){
        return(
            <Fragment>
                <ul className="nav-menu-product" >
                {
                this.state.card.map(card =>{
                    return <li><CardComponent
                    name={card.editor} 
                    job={card.role}
                    title={card.product.name}
                    detail={card.product.description}
                    img={card.product.image}
                    /></li>
                })
                }
                </ul>
            </Fragment>
        )
    }    
}

export default CardAplication;
