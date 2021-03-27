import React from 'react';
import './InfoBlog.css';

import Image_01  from "../../images/InfoBlog/01.jpg";
import Image_02  from "../../images/InfoBlog/02.jpg";
import Image_03  from "../../images/InfoBlog/03.jpg";

import ReadMoreButton from '../ReadMoreButton/ReadMoreButton';

class InfoBlog extends React.Component {
    constructor(props){
        super(props)
        this.sectionInfoBlog = React.createRef();
        this.setState = {
            width: window.innerHeight
        }
    }
    componentDidMount() {
        this.sectionWidth = this.sectionInfoBlog.current;
    }

   render(){
        return(
            <section className="infoBlog  width-control" ref={this.sectionInfoBlog}>
                <div className="infoBlog__container">
                    <span className="infoBlog__number" >01</span>
                    <div className="infoBlog__container-information">
                        <p className="infoBlog__title-annotation text-annotation">
                            <span className="infoBlog__textline textline"></span>
                            A Hiking guide
                        </p>
                        <h3 className="infoBlog__title">
                            What level of  hiker are you?
                        </h3>
                        <p className="infoBlog__text">
                        Determining what level of hiker you are can be an important tool when planning future hikes. 
                        This hiking level guide will help you plan hikes according to different hike ratings set by various websites like All Trails and Modern Hiker. 
                        What type of hiker are you – novice, moderate, advanced moderate, expert, or expert backpacker? 
                        </p>
                        <ReadMoreButton />
                    </div>
                    <img className="infoBlog__img" src={Image_01} alt="info" />
                </div>
                <div className="infoBlog__container flex-row-reverse">
                <span className="infoBlog__number reverse" >02</span>
                    <div className="infoBlog__container-information">
                        <p className="infoBlog__title-annotation text-annotation">
                            <span className="infoBlog__textline textline"></span>
                            Hiking Essentials
                        </p>
                        <h3 className="infoBlog__title">
                            Picking the right Hiking Gear!
                        </h3>
                        <p className="infoBlog__text">
                        The nice thing about beginning hiking is that you don’t really need any special gear, you can probably get away with things you already have.
                        Let’s start with clothing. A typical mistake hiking beginners make is wearing jeans and regular clothes, which will get heavy and chafe wif they get sweaty or wet. 
                        </p>
                        <ReadMoreButton />
                    </div>
                    <img className="infoBlog__img" src={Image_02} alt="info" />
                </div>
                <div className="infoBlog__container">
                <span className="infoBlog__number" >03</span>
                    <div className="infoBlog__container-information">
                        <p className="infoBlog__title-annotation text-annotation">
                            <span className="infoBlog__textline textline"></span>
                            where you go is the key
                        </p>
                        <h3 className="infoBlog__title">
                            Understand Your Map &amp; Timing
                        </h3>
                        <p className="infoBlog__text">
                        To start, print out the hiking guide and map. If it’s raining, throw them in a Zip-Lock bag. 
                        Read over the guide, study the map, and have a good idea of what to expect. I like to know what my next landmark is as I hike. 
                        For example, I’ll read the guide and know that say, in a mile, I make a right turn at the junction.. 
                        </p>
                        <ReadMoreButton />
                    </div>
                    <img className="infoBlog__img" src={Image_03} alt="info" />
                </div>
            </section>
        );
    }
}

export default InfoBlog;