import React from 'react';
import './AboutUsContact.css'

import QuestionFrom from '../QuestionFrom/QuestionFrom'

class AboutUsContact extends React.Component {

  render(){
    return (
      <section className="aboutUsContact width-control">
        <div className="aboutUsContact__container">
          <h2 className="aboutUsContact__title">Title</h2>
          <p className="aboutUsContact__text">Address 4578 Marmora Road, Glasgow, D04 89GR</p>
          <p className="aboutUsContact__text">
            Phones
            <a className="aboutUsContact__text_accent">(800) 123-0045</a>
            ; 
            <a className="aboutUsContact__text_accent">(800) 123-0045</a>
          </p>
          <p className="aboutUsContact__text">
            E-mail 
            <a className="aboutUsContact__text_accent">info@demolink.org</a>
            </p>
          <p className="aboutUsContact__text">
          We are open Mn-Fr: 10 am-8 pm
          </p>
        </div>
        <QuestionFrom />
      </section>
    );
  }
}

export default AboutUsContact;