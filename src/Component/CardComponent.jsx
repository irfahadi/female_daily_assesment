import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';

const StarRating = () =>{
    const [rating] = useState(4.1);
    return(
       <div>
           4.1 
           {
               [ ...Array(5)].map((star,i) => {
                   const ratingValue = i + 1;
                   return( 
                       <FaStar 
                       value={ratingValue}
                       color={ratingValue <= rating ? "#DB2C4E" : "#ddd"}
                        />
                        )})
           }
           (7)
       </div> 
    )
}

const CardComponent = (props) => {
    
    return(
        <div className="editor-item">
          <img className="editor-img" src="assets/images/girl.jpg" />
            <p className="editor-name">{props.name}</p>
            <p className="editor-job">{props.job}</p>
            <img className="product-img" src="https://static.femaledaily.com/dyn/640/images/prod-pics/product_1558000129_YOU_MAKEUP_800x800.png" />
            <StarRating className="Star" /> 
        
        <p className="product-title">{props.title}</p>
        <p className="product-detail">{props.detail}</p>
        {/* <p className="product-user">{props.user}</p> */}
        </div>
       
    )
}

export default CardComponent;