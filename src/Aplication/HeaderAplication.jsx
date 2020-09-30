import React, { Component } from 'react';
import HeaderComponent from '../Component/HeaderComponent';



class HeaderAplication extends Component {
    render() {
      return(
        <div>
    <section id="topbar" >
      <div className="row">
      <div className="col-md-2"><img  src='assets/images/title2.png' /></div>
      <div className="col-md-8">
        <HeaderComponent />
      </div>
      <div className="col-md-2"><a><img className="img-fluid" src='assets/images/login_signup.PNG' /></a></div>
      </div>
      </section>
      <header id="header">
            <ul className="nav-menu" >
              <li><a href="#body">SKINCARE</a></li>
              <li><a href="#about">MAKE UP</a></li>
              <li><a href="#services">BODY</a></li>
              <li><a href="#portfolio">HAIR</a></li>
              <li><a href="#team">FRAGRANCE</a></li>
              <li><a href="">NAILS</a></li>
              <li><a href="#contact">TOOLS</a></li>
            </ul>
      </header>
        </div>
      )
    }
  }


export default HeaderAplication;