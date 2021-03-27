import React from 'react'

// COMPONENTS
import Header from '../components/Header/Header';
import GellaryImgBlock from '../components/GellaryImgBlock/GellaryImgBlock';
import GellarySlider from '../components/GellarySlider/GellarySlider';
import Footer from '../components/Footer/Footer';

class Gallery extends React.Component {
  render(){
    return (
      <>
      <Header />
      <GellarySlider />
      <GellaryImgBlock />
      <Footer />
      </>
    );
  }
}

export default Gallery;