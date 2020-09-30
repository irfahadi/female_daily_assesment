import React, { useState,Component, Fragment } from 'react';
import axios from 'axios';
import ArticleComponent from '../Component/ArticleComponent';

class ArticleAplication extends Component{
    state = {
        article: []
    }
    componentDidMount(){
        axios({
            method: 'get',
            url: 'https://virtserver.swaggerhub.com/hqms/FDN-WP/0.1/wp',
            responseType: 'json'
          })
            .then ((response)=>{
                // console.log(response.data.["latest article"]);
                var api = response.data.["latest articles"]
                this.setState({
                    article: api
                });
            });
        }
    render(){
        return(
            <Fragment>
                <ul className="nav-menu-product" >
                    {
                        this.state.article.map(article =>{
                            return <li><ArticleComponent
                            title={article.title}
                            user={article.author}
                            time={article.published_at}
                            /></li>
                        })
                    }
                </ul>
            </Fragment>
        )}
        }

export default ArticleAplication;
