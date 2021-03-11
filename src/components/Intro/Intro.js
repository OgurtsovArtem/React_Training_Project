import React from 'react';
import './Intro.css'
// Icon
import twitterIcon from '../../images/Twitter.svg';
import instagramIcon from '../../images/Insta.svg';
// Images
import groundBackgrund  from "../../images/background/VG.png";
import mountainBackgrund  from "../../images/background/MG.png";
import skyBackgrund  from "../../images/background/HG.png";
import ShadowBackgrund  from "../../images/background/BGContent.png";
// Components

import ButtonScroll from "../ButtonScroll/ButtonScroll.js";
import BackgroundVideo from "../BackgroundVideo/BackgroundVideo.js"

class Intro extends React.Component {
    constructor(props){
        super(props);
        this.scrollElement = React.createRef();
    } 
    render() {
        return(
            <section className="intro" ref={this.scrollElement}>
                <div className="intro__background-container">
                    <BackgroundVideo/>
                    {/* <img src={skyBackgrund} className="intro__background-img intro__background-img_sky" alt="sky" />
                    <img src={mountainBackgrund} className="intro__background-img intro__background-img_mountain"  alt="mountain" />
                    <img src={groundBackgrund} className="intro__background-img intro__background-img_ground"  alt="ground" />
                    <img src={ShadowBackgrund} className="intro__background-img intro__background-img_shadow"  alt="shadow" />             */}
                </div>
                <div className="intro__block">
                    <div className="intro__container width-control">
                        <div className="intro__link">
                            <span className="intro__link-text">Follow us</span>
                            <ul className="intro__link-ul">
                                <li className="intro__link-li">
                                    <a href='https://www.instagram.com/alltrails/' target="_blank"   rel="noopener noreferrer">
                                        <img className="intro__link-insta icon-default-size" src={instagramIcon} alt="instagram" />
                                    </a>
                                </li>
                                <li className="intro__link-li">
                                    <a href='https://twitter.com/alltrails' target="_blank"   rel="noopener noreferrer">
                                        <img className="intro__link-twiter icon-default-size" src={twitterIcon} alt="twitter" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="intro__title-container">
                            <p className="intro__title-annotation text-annotation">
                                <span className="intro__textline textline"></span>
                                A Hiking guide
                            </p>
                            <h1 className="intro__title">
                            Be Prepared For The Mountains And Beyond!
                            </h1>
                        <ButtonScroll scrollElement={this.scrollElement}/>
                        </div>
                        <div className="intro__scroll">
                        <span className="intro__link-text">Scroll module</span>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
export default Intro;