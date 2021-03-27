import React from 'react';
// Components
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import AboutUsIntro from '../components/AboutUsIntro/AboutUsIntro';
import AboutUsContact from '../components/AboutUsContact/AboutUsContact';

class AboutUs extends React.Component {

  render(){
    return (
      <>
      <Header />
      <AboutUsIntro />
      <AboutUsContact />
      <Footer />
      </>
    );
  }
}

export default AboutUs;