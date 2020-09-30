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

const TrendingComponent = (props) => {
    
    return(
        <div className="trending-item">
            <img className="product-img" src="https://static.femaledaily.com/dyn/640/images/prod-pics/product_1558000129_YOU_MAKEUP_800x800.png" />
            <StarRating  /> 
        <p className="product-title">{props.title}</p>
        <p className="product-detail">{props.detail}</p>
        </div>
    )
}

export default TrendingComponent;