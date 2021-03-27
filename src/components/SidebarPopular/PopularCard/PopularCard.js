import React from 'react'
import './PopularCard.css'

import img from '../../../images/InfoBlog/02.jpg'
import likeIcon from '../../../images/like.svg'

function PopularCard()  {
    let count = 23;
    return (
        <div className="popular-card-content">
            <img alt="img" src={img} className="popular-card-img"></img>
            <div className="popular-card-background">
                <h3 className="popular-card-subtitle accent">Lorem</h3>
                <h5 className="popular-card-author accent">Tony Stark</h5>
                <p className="popular-card__likes accent">
                    <img className="popular-card__like-img" src={likeIcon} alt="like"></img>
                    {count}
                </p>
            </div>                            
        </div>
    );
}

export default PopularCard;