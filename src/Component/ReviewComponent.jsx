import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';

const StarRating = () =>{
    const [rating] = useState(3);
    return(
       <div>
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
       </div> 
    )
}

const ReviewComponent = (props) => {
    return(
        <div className="review-item">
          <div className="row">
            <div className="col-md-4">
            <img className="review-img" src='https://static.femaledaily.com/dyn/480/images/prod-pics/product_1525323944_Tonymoly_D_800x800.jpg' />
            </div>
            <div className="col-md-8">
            <label className="review-title">{props.title}</label><br />
            <label className="review-desc">{props.desc}</label>  
            </div>
          </div>
          <hr className="hr-review" />
          <div className="row">
          <div className="col-md-1"></div>
            <div className="col-md-5">
            <StarRating size={36} />
            </div>
            <div className="col-md-5">
              <p class="text-right"><span class="review-time">2 hour ago</span></p>
            </div>
          </div>
          <div className="row">
          <div className="col-md-12">
          <p className="review-detail">{props.comment}</p>
          </div>
          </div>
          <img className="review-img" src='assets/images/girl.jpg' />
          <p class="text-center"><span class="review-user">{props.user}</span></p>
          <p class="text-center"><span class="review-time">Oily, Medium Dark, Warm, 19-24</span></p>
        </div>
      
    )
}

export default ReviewComponent;