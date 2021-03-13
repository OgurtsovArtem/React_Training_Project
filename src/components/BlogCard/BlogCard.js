import React from 'react'
import './BlogCard.css'
// Icon
import twitterIcon from '../../images/Twitter.svg';
import instagramIcon from '../../images/Insta.svg';
import likeIcon from '../../images/like.svg'

// import img from '../../images/404/iPhone-Wallpaper-1080x1920.jpg';
import img from '../../images/background/video_poster.jpg'
import ReadMoreButton from '../ReadMoreButton/ReadMoreButton'

class BlogCard extends React.Component {

  render(){
    return (
        <div className="blogCard">
            <h3 className="blogCard__title">Card title</h3>
            <div className="blogCard__image-block">
                <img  className="blogCard__image" src={img} alt='cardImage'></img>
            </div>
            <span className="blogCard__image-underline"></span>
            <div className="blogCard__text">
                loreDeserunt commodo dolor enim mollit ullamco sunt esse
                ex labore eiusmod nisi in exercitation minim.
                Sint ea consectetur non irure laborum ipsum ea
                cillum deserunt ullamco Lorem. Cupidatat cupidatat 
                aute ut quis incididunt Lorem in eu ullamco aliqua anim. 
                Veniam Lorem veniam incididunt occaecat excepteur sint duis 
                excepteur eu ullamco aliquip. Excepteur sint nisi culpa 
                excepteur dolor labore id nisi incididunt dolor eu dolore.
            </div>
            <div className="blogCard__info-container">
                <div className='blogCard__information-container'>
                    <div className="blogCard__date">23.03.2020</div>
                    <div className="blogCard__author">Steven King</div>
                    <p className="blogCard__likes">
                        <img className="blogCard__like-img" src={likeIcon} alt="like"></img>
                        23
                    </p>
                    <a href='https://www.instagram.com/alltrails/' target="_blank"   rel="noopener noreferrer">
                        <img className="blogCard__social-link blogCard__social_insta icon-default-size" src={instagramIcon} alt="instagram" />
                    </a>
                    <a href='https://twitter.com/alltrails' target="_blank"   rel="noopener noreferrer">
                        <img className="blogCard__social-link blogCard__social_twiter icon-default-size" src={twitterIcon} alt="twitter" />
                    </a>
                </div>
                <ReadMoreButton />
            </div>
        </div>
    );
  }
}

export default BlogCard;


