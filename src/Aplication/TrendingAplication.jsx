import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import React, { Component } from 'react';
import TrendingComponent from '../Component/TrendingComponent';
import axios from 'axios';


class TrendingAplication extends Component{
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
        const settings = {
            dots: true,
            autoplay: false,
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 1
          };
        return(
            <Slider {...settings}>
                {
                    this.state.card.map(card =>{
                    return <TrendingComponent
                    title={card.product.name}
                    detail={card.product.description}
                    img={card.product.image}
                    />
                })
                }
            </Slider>
        )}
}

export default TrendingAplication;
