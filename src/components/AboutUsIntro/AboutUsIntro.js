import React from 'react';
import './AboutUsIntro.css'
// images
import intro_1080 from '../../images/AbutUs/intro_1080.jpg';
import intro_2k from '../../images/AbutUs/intro_2k.jpg';
import intro_4k from '../../images/AbutUs/intro_4k.jpg';

class AboutUsIntro extends React.Component {

  render(){
    return (
      <>
      <section className="aboutUsIntro">
        <picture>
          <source srcSet={intro_4k} media="(min-width: 2560px)"></source>
          <source srcSet={intro_2k} media="(min-width: 1200px)"></source>
          <source srcSet={intro_1080} media="(min-width: 0px)"></source>
          <img className="aboutUsIntro__picture" srcSet={intro_1080} alt='background'></img>
        </picture>
        <div className="aboutUsIntro__container width-control">
          <div className="aboutUsIntro__description">
            <h1 className="aboutUsIntro__tite">WHY US</h1>
            <p className="aboutUsIntro__text">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
              when an unknown printer took a galley of type and scrambled it to make a type specimen book.
           
            </p>
            <p className="aboutUsIntro__text">It has survived not only five centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset
              sheets containing Lorem Ipsum passages, and more recently with desktop publishing software
              like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
          </div>
          <div className="aboutUsIntro__description">
            <h1 className="aboutUsIntro__tite">OUR MISSION</h1>
            <p className="aboutUsIntro__text">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
              when an unknown printer took a galley of type and scrambled it to make a type specimen book.
           
            </p>
            <p className="aboutUsIntro__text">It has survived not only five centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset
              sheets containing Lorem Ipsum passages, and more recently with desktop publishing software
              like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
          </div>
        </div>
        
        <div className="aboutUsIntro__map-container">
          <iframe className="aboutUsIntro__map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d38615.84978922544!2d55.0042522474889!3d24.99501804812535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f11b9b6a6d547%3A0x1e9558b560d30494!2sJebal%20Ali%20Beach!5e0!3m2!1sru!2sru!4v1615202229491!5m2!1sru!2sru"  title='map-locatin' allowFullScreen="" loading="lazy"></iframe>
        </div>
      </section>
      </>
    );
  }
}

export default AboutUsIntro;