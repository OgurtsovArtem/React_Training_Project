import React from 'react';
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';
import './SidebarRandom.css';
import SwiperCore, { Navigation, Pagination, Scrollbar, Controller, Autoplay  } from 'swiper/core';

// Install modules
SwiperCore.use([Navigation, Pagination, Scrollbar, Controller, Autoplay ]);



function SidebarRandom(params) {
// Params
let mainSliderSelector = '.main-slider',
navSliderSelector = '.nav-slider',
interleaveOffset = 0.5;

// Main Slider
let mainSliderOptions = {
  loop: true,
  speed:1000,
  autoplay:{
    delay:3000
  },
  loopAdditionalSlides: 10,
  grabCursor: true,
  watchSlidesProgress: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  on: {
    init: function(){
      this.autoplay.stop();
    },
    imagesReady: function(){
      this.el.classList.remove('loading');
      this.autoplay.start();
    },
    slideChangeTransitionEnd: function(){
      let swiper = this,
          captions = swiper.el.querySelectorAll('.caption');
      for (let i = 0; i < captions.length; ++i) {
        captions[i].classList.remove('show');
      }
      swiper.slides[swiper.activeIndex].querySelector('.caption').classList.add('show');
    },
    progress: function(){
      let swiper = this;
      for (let i = 0; i < swiper.slides.length; i++) {
        let slideProgress = swiper.slides[i].progress,
            innerOffset = swiper.width * interleaveOffset,
            innerTranslate = slideProgress * innerOffset;
       
        swiper.slides[i].querySelector(".slide-bgimg").style.transform =
          "translateX(" + innerTranslate + "px)";
      }
    },
    touchStart: function() {
      let swiper = this;
      for (let i = 0; i < swiper.slides.length; i++) {
        swiper.slides[i].style.transition = "";
      }
    },
    setTransition: function(speed) {
      let swiper = this;
      for (let i = 0; i < swiper.slides.length; i++) {
        swiper.slides[i].style.transition = speed + "ms";
        swiper.slides[i].querySelector(".slide-bgimg").style.transition =
          speed + "ms";
      }
    }
  }
};
let mainSlider = new Swiper(mainSliderSelector, mainSliderOptions);

// Navigation Slider
let navSliderOptions = {
  loop: true,
  loopAdditionalSlides: 10,
  speed:1000,
  spaceBetween: 5,
  slidesPerView: 5,
  centeredSlides : true,
  touchRatio: 0.2,
  slideToClickedSlide: true,
  direction: 'vertical',
  on: {
    imagesReady: function(){
      this.el.classList.remove('loading');
    },
    click: function(){
      mainSlider.autoplay.stop();
    }
  }
};
let navSlider = new Swiper(navSliderSelector, navSliderOptions);

console.log(navSlider, mainSlider)
// Matching sliders
mainSlider.controller.control = navSlider;
navSlider.controller.control = mainSlider;

    return(
        <>
        <div className="swiper-container main-slider loading">
        <div className="swiper-wrapper">
            <div className="swiper-slide">
            <figure className="slide-bgimg" style={{backgroundImage: 'url(https://drive.google.com/uc?export=view&id=0B_koKn2rKOkLbVhsNzdIYmlfN1E)'}}>
                <img src="https://drive.google.com/uc?export=view&id=0B_koKn2rKOkLbVhsNzdIYmlfN1E" className="entity-img"  alt=''/>
            </figure>
            <div className="content">
                <p className="title">Shaun Matthews</p>
                <span className="caption">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</span>
            </div>
            </div>
            <div className="swiper-slide">
            <figure className="slide-bgimg"style={{backgroundImage: 'url(https://drive.google.com/uc?export=view&id=0B_koKn2rKOkLbVhsNzdIYmlfN1E)'}} >
                <img src="https://drive.google.com/uc?export=view&id=0B_koKn2rKOkLWTdaX3J5b1VueDg" className="entity-img" alt='' />
            </figure>
            <div className="content">
                <p className="title">Alexis Berry</p>
                <span className="caption">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</span>
            </div>
            </div>
            <div className="swiper-slide">
            <figure className="slide-bgimg" style={{backgroundImage: 'url(https://drive.google.com/uc?export=view&id=0B_koKn2rKOkLbVhsNzdIYmlfN1E)'}}>
                <img src="https://drive.google.com/uc?export=view&id=0B_koKn2rKOkLRml1b3B6eXVqQ2s" className="entity-img" alt='' />
            </figure>
            <div className="content">
                <p className="title">Billie	Pierce</p>
                <span className="caption">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</span>
            </div>
            </div>
            <div className="swiper-slide">
            <figure className="slide-bgimg" style={{backgroundImage: 'url(https://drive.google.com/uc?export=view&id=0B_koKn2rKOkLbVhsNzdIYmlfN1E)'}}>
                <img src="https://drive.google.com/uc?export=view&id=0B_koKn2rKOkLVUpEems2ZXpHYVk" className="entity-img" alt=''/>
            </figure>
            <div className="content">
                <p className="title">Trevor	Copeland</p>
                <span className="caption">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</span>
            </div>
            </div>
            <div className="swiper-slide">
            <figure className="slide-bgimg" style={{backgroundImage: 'url(https://drive.google.com/uc?export=view&id=0B_koKn2rKOkLbVhsNzdIYmlfN1E)'}}>
                <img src="https://drive.google.com/uc?export=view&id=0B_koKn2rKOkLNXBIcEdOUFVIWmM" className="entity-img" alt='' />
            </figure>
            <div className="content">
                <p className="title">Bernadette	Newman</p>
                <span className="caption">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</span>
            </div>
            </div>
        </div>
        <div className="swiper-button-prev swiper-button-white"></div>
        <div className="swiper-button-next swiper-button-white"></div>
        </div>

        <div className="swiper-container nav-slider loading">
        <div className="swiper-wrapper" role="navigation">
            <div className="swiper-slide">
            <figure className="slide-bgimg" style={{backgroundImage: 'url(https://drive.google.com/uc?export=view&id=0B_koKn2rKOkLbVhsNzdIYmlfN1E)'}}>
                <img src="https://drive.google.com/uc?export=view&id=0B_koKn2rKOkLbVhsNzdIYmlfN1E" className="entity-img"  alt=''/>
            </figure>
            <div className="content">
                <p className="title">Shaun Matthews</p>
            </div>
            </div>
            <div className="swiper-slide">
            <figure className="slide-bgimg" >
                <img src="https://drive.google.com/uc?export=view&id=0B_koKn2rKOkLWTdaX3J5b1VueDg" className="entity-img" alt=''/>
            </figure>
            <div className="content">
                <p className="title">Alexis Berry</p>
            </div>
            </div>
            <div className="swiper-slide">
            <figure className="slide-bgimg" style={{backgroundImage: 'url(https://drive.google.com/uc?export=view&id=0B_koKn2rKOkLbVhsNzdIYmlfN1E)'}}>
                <img src="https://drive.google.com/uc?export=view&id=0B_koKn2rKOkLRml1b3B6eXVqQ2s" className="entity-img" alt=''/>
            </figure>
            <div className="content">
                <p className="title">Billie	Pierce</p>
            </div>
            </div>
            <div className="swiper-slide">
            <figure className="slide-bgimg" >
                <img src="https://drive.google.com/uc?export=view&id=0B_koKn2rKOkLVUpEems2ZXpHYVk" className="entity-img" alt='' />
            </figure>
            <div className="content">
                <p className="title">Trevor	Copeland</p>
            </div>
            </div>
            <div className="swiper-slide">
            <figure className="slide-bgimg">
                <img src="https://drive.google.com/uc?export=view&id=0B_koKn2rKOkLNXBIcEdOUFVIWmM" className="entity-img" alt=''/>
            </figure>
            <div className="content">
                <p className="title">Bernadette	Newman</p>
            </div>
            </div>
        </div>
        </div>
        </>
    );
}
export default SidebarRandom;

