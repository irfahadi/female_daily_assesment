import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import React, { Component } from 'react';
import axios from 'axios';
import ReviewComponent from '../Component/ReviewComponent' 

class ReviewAplication extends Component{
    state = {
        review: []
    }
    componentDidMount(){
        axios({
            method: 'get',
            url: 'https://virtserver.swaggerhub.com/hqms/FDN-WP/0.1/wp',
            responseType: 'json'
          })
            .then ((response)=>{
                // console.log(response.data.["editor's choice"]);
                var api = response.data.["latest review"]
                this.setState({
                    review: api
                });
                // console.log(this.state.card)
            });
        }
    render(){
        const settings = {
            dots: true,
            autoplay: false,
            infinite: true,
            slidesToShow: 2,
            slidesToScroll: 1
          };
        return(
                <Slider {...settings}>
                {
                this.state.review.map(review =>{
                    return <ReviewComponent 
                            title={review.product.name} 
                            desc={review.product.desc}
                            comment={review.comment}
                            user={review.user}
                            // detail={review.profile}
                            />
                })
                }
                </Slider>
            
        )
    }    
}

export default ReviewAplication;
