import React, { Component } from 'react';
import { FaFacebook,FaTwitter,FaInstagram,FaYoutube } from 'react-icons/fa';

class FooterAplication extends Component{
    render(){
        return(
            <div className="container">
            <section id="footer">
            <div className="footer-top-area">
                  <div className="zigzag-bottom"></div>
                      <div className="row">
                          <div className="col-md-3 col-sm-3">
                              <p><a className="footer-font" href="#">About Us</a></p>
                              <p><a className="footer-font" href="#">Feedback</a></p>
                              <p><a className="footer-font" href="#">Contact Us Us</a></p>
                          </div>
                          <div className="col-md-3 col-sm-3">
                              <p><a className="footer-font" href="#">Term & Condition </a></p>
                              <p><a className="footer-font" href="#">Privacy Policy</a></p>
                              <p><a className="footer-font" href="#">Help</a></p>
                          </div>
                          <div className="col-md-1 col-sm-3">
                              <p><a className="footer-font" href="#">Awards</a></p>
                              <p><a className="footer-font" href="#">Newsletter</a></p>
                          </div>
                          <div className="col-md-5 col-sm-3">
                              <p className="text-center"><a className="footer-font" href="#">Download Our Mobile App</a></p>
                              <p className="text-center"><img className="footer-img" src='assets/images/asgp.png' /></p>
                          </div>
                      </div>
              </div>
              <div className="row">
              <div className="col-md-8">
              <p className="copyright"><img classNameName="footer-img" src='assets/images/title.png' /><br />Copyright © 2015-2017 Female Daily Network · All rights reserved</p>
              </div>
              <div className="col-md-4">
                  <a href="#" target="_blank"><FaFacebook size={42} style={{margin:"1rem"}}/></a> 
                  <a href="#" target="_blank"><FaTwitter size={42} style={{margin:"1rem"}}/></a>
                  <a href="#" target="_blank"><FaInstagram size={42} style={{margin:"1rem"}}/></a>
                  <a href="#" target="_blank"><FaYoutube size={42} style={{margin:"1rem"}}/></a>
              </div>
              </div>
                                  
            </section>
            </div>  
        )
    }
}

export default FooterAplication;