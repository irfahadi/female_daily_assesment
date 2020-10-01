import React, { Component } from 'react';
import SearchComponent from '../Component/SearchComponent';
import SideBarComponent from "../Component/SidebarComponent";


class HeaderAplication extends Component {
    render() {
      return(
        <div>
    <section id="topbar" >
      <div className="row">
      <div className="col-md-1">
      <SideBarComponent pageWrapId={"page-wrap"} />
      <div id="page-wrap">
      {/* <h1>Click to show menu</h1> */}
      </div>
      </div>
      <div className="col-md-2"><img  src='assets/images/title.png' /></div>
      <div className="col-md-7">
        <SearchComponent />
      </div>
      <div className="col-md-2"><a><img className="img-fluid" src='assets/images/login_signup.png' /></a></div>
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