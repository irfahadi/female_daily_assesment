import React from 'react';

const ArticleComponent = (props) =>{
    return(  
    <div className="article-item">
      <img className="article-img" src="https://imgcdn.femaledaily.com/2019/06/5-makeup-tools-3-Copy.jpg" />
      <p className="product-title">{props.title}</p>
      <p className="product-detail">{props.user}<span className="time-post">{props.time}</span></p>
    </div>
    
    )
}

export default ArticleComponent;