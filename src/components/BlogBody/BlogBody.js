import React from 'react';
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';
import './BlogBody.scss';

import BlogPreloader from '../BlogPreloader/BlogPreloader';
import ErrorPage from '../ErrorPage/ErrorPage';

import SwiperCore, { Navigation, Pagination, Scrollbar, Controller, Autoplay  } from 'swiper/core';
// Install modules
SwiperCore.use([Navigation, Pagination, Scrollbar, Controller, Autoplay ]);




class BlogBody extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      images: [],
      isFetching: false,
      error: null,
      loading: false,
      hasError: false,
    }
  }
  static getDerivedStateFromError(error) {
    console.log(error)
    return { hasError: true };
  }
    componentDidMount(){
      const settings = `search/photos?&query=alps`
      this.apiLoader(settings)
    }
    componentDidUpdate(){
      this.button = document.getElementById('button-blog-search');
      this.button.addEventListener('click', this.apiSearch)
      if (this.state.images.length > 0) {
        this.slider()
      }
    }
    componentWillUnmount(){
      this.button.removeEventListener('click', this.apiSearch)
    }


    apiSearch = () => {
      let input = document.getElementById('input-blog-search');
      const settings = `search/photos?&query=${input.value}`
      this.apiLoader(settings)
    }

    apiLoader = (settings) => {
      const AUTH_KEY = 'AfwotE42Xf5ebUAbPBrIlUtdD53pQljeSZGqoNdTca0';
      fetch(`https://api.unsplash.com/${settings}/`,{
        headers: {
          'Authorization': `Client-ID ${AUTH_KEY}`,
        },
      })
      .then(this.setState({loading: true}))
      .then(res => {
        if (res.ok) {
            return res.json();
          }
          return Promise.reject(`Ошибка: ${res.status}`);
      })
      .then(res => {
        console.log(Object.values(res))
        this.setState({ images: Object.values(res)[2] })
      })
      .catch(e => {
        console.log(e);
        this.setState({images: [], isFetching: true, error: e ,hasError: true })
      })
      .finally(()=>{
        this.setState({loading: false})
      })
    }

    slider =() => {
      // Params
      let mainSliderSelector = '.main-slider',
      navSliderSelector = '.nav-slider',
      interleaveOffset = 0.7;
      
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
      let mainSlider =  new Swiper(mainSliderSelector, mainSliderOptions);
      
      // Navigation Slider
      let  navSliderOptions = {
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
      let navSlider =  new Swiper(navSliderSelector, navSliderOptions);
      
      // Matching sliders
      mainSlider.controller.control = navSlider;
      navSlider.controller.control = mainSlider;
    } 
    
render(){
  const { loading, hasError, error } = this.state;
  if(loading) {
    return(
      <BlogPreloader />
    )
  }
  if(hasError) {
    return(
      <ErrorPage error={error}/>
    )
  }
    return(
        <>
        <div className="swiper-container main-slider loading">
          <div className="swiper-wrapper">

          {this.state.images.map((item)=>{
            return(
              <div className="swiper-slide" key={item.id}>
                <figure className="slide-bgimg"  style={{backgroundImage: `url(${item.urls.regular})`}}>
                    <img src={item.urls.regular} className="entity-img"  alt={item.alt_description}/>
                </figure>
                <div className="content">
                    <p className="title">{item.user.name}</p>
                    <span className="caption">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</span>
                </div>
              </div>
              )
            })
          }

          </div>
          <div className="swiper-button-prev swiper-button-white"></div>
          <div className="swiper-button-next swiper-button-white"></div>
        </div>
      
        <div className="swiper-container nav-slider loading">
          <div className="swiper-wrapper" role="navigation">
              {this.state.images.map((item)=>{
                return(
                  <div className="swiper-slide" key={item.id}>
                    <figure className="slide-bgimg"  style={{backgroundImage: `url(${item.urls.small})`}}>
                        <img src={item.urls.regular} className="entity-img"  alt={item.alt_description}/>
                    </figure>
                    <div className="content">
                        <p className="title">{item.user.name}</p>
                    </div>
                  </div>
                  ) 
                })
              }

          </div>
        </div>
        </>
    );
}

}
export default BlogBody;

