import React, { Component } from 'react';
import ArticleAplication from './Aplication/ArticleAplication';
import CardAplication from './Aplication/CardAplication'
import ReviewAplication from './Aplication/ReviewAplication';
import './css/style.css';
import './css/bootstrap.min.css';
import TrendingAplication from './Aplication/TrendingAplication';
import FooterAplication from './Aplication/FooterAplication';
import HeaderAplication from './Aplication/HeaderAplication';

class App extends Component{
  render(){
  return (
    <div>
      <HeaderAplication/>
      <div className="container">
       <div className="TopFrame">
          <h3 className="TopFrameIn">Top Frame 970x50</h3>
        </div>
        <div className="Billboard">
          <h3 className="BillboardIn">Billboard 970x250</h3>
        </div>
      <section id="editor" >
        <p className="title">Editor's Choices</p>
        <p className="subtitle">subtitle With Love</p> 
        <br/>
        <CardAplication />
      </section>
      </div>    
      <section id="intro">
      <div className="intro-content">
      </div>
      </section>
      <div className="container">
      </div>  
    <div className="Billboard">
          <h3 className="BillboardIn">Horizontal 970x250 <br/> (Internal campaign only)</h3>
    </div>
    <div className="container">
    <section id="article" >
    <p className="title">Lastest Article</p>
    <p className="subtitle">So you can make better purchase decision<span><a href="#" className="see-more">See More  ></a></span></p>
    <ArticleAplication />
    </section>
    <br />
    <section id="review">
    <p className="title">Latest Review</p>
    <div className="row">
    <div className="col-md-8">
    <p className="subtitle">So you can make better purchase decision <span><a href="#" className="see-more">See More  ></a></span></p>    
    <ReviewAplication />
    </div >
    <div className="col-md-4">
      <div className="MR2">
          <h3 className="MR2in"> MR2 <br/> 300x250 </h3>
      </div>
    </div>
    </div>
    </section>
    <br />
    <section id="groups">
    <p className="title">Popular Groups</p>
    <p className="subtitle">Where the beauty TALK are <span><a href="#" className="see-more">See More  ></a></span></p>  
    <ul className="nav-menu">
      <li><img className="groups-item" src='assets/images/group1.png' /></li>
      <li><img className="groups-item" src='assets/images/group1.png' /></li>
      <li><img className="groups-item" src='assets/images/group1.png' /></li>
      <li><img className="groups-item" src='assets/images/group1.png' /></li>
    </ul>
    </section>
    <section id="video">
    <p className="title">Latest Video</p>
    <p className="subtitle">Watch and learn, ladies <span><a href="#" className="see-more">See More  ></a></span></p>
    <div className="row">
      <div className="col-md-8"><img className="video-item" src='assets/images/video.png' /></div>
      <div className="col-md-4">
        <div className="row"><img className="video-item" src='assets/images/video.png' /></div>
        <div className="row"><img className="video-item" src='assets/images/video.png' /></div>
      </div>
    </div>
    </section>
    <section id="trending">
    <p className="title">Trending This Week</p>
    <p className="subtitle">See our weekly most reviewed products</p>
    <TrendingAplication />
    </section>
    <section id="brand">
    <p className="title">Top Brands</p>
    <p className="subtitle">We all know and love</p>
    <div className="row">
      <div className="col-md-2"><img className="brand-item" src='assets/images/brand.png' /></div>
      <div className="col-md-2"><img className="brand-item" src='assets/images/brand.png' /></div>
      <div className="col-md-2"><img className="brand-item" src='assets/images/brand.png' /></div>
      <div className="col-md-2"><img className="brand-item" src='assets/images/brand.png' /></div>
      <div className="col-md-2"><img className="brand-item" src='assets/images/brand.png' /></div>
      <div className="col-md-2"><img className="brand-item" src='assets/images/brand.png' /></div>
    </div>
    </section>
    <p><span className="title">Female Daily - Find Everything you want to know about beauty on Female Daily</span><br/>
    Product Reviews, Tips & Trick, Expert and Consumer Opinion, Beauty Tutorials, Discussion, Beauty Workshops, anything!<br />
    We are to be your friendly solution to all things beauty, inside and out!</p>
  </div>
  <br/><br/><hr/>
  <FooterAplication/>
  <div className="TopFrame">
      <h3 className="TopFrameIn">Bottom Frame 970x50, 468x60, 320x50</h3>
    </div>
  </div>   
    ); 
  }
}
export default App;
