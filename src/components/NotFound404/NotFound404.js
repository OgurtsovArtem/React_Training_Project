import React from 'react'
import { Link, Route } from 'react-router-dom';

import './NotFound404.css';
import Header from '../Header/Header'
// Backgrund images
import background5k from '../../images/404/mountain_reflections_5k.jpg';
import background2k from '../../images/404/04101_minimalmountains_2880x1800.jpg';
import background1280 from '../../images/404/artistic-mountains-4k-qu-1280x1024.jpg';
import backgroundPhone from '../../images/404/iPhone-Wallpaper-1080x1920.jpg';

function NotFound404() {
  return (
    <>
    <Header/>
    <div className="notFound__content">
        <h1 className='notFound__title'>404</h1>
        <h2 className='notFound__subtitle'>Page not found</h2>
        <p className='notFound__text'>I tried to catch some fog, but i mist</p>
        <Link to='/' className='notFound__button'>back to home</Link>
        <picture>
            <source srcset={background1280} media="(min-width: 525px)"></source>
            <source srcset={background2k} media="(min-width: 1280px)"></source>
            <source srcset={background5k} media="(min-width: 2881px)"></source>
            <source srcset={backgroundPhone} media="(min-width: 0px)"></source>
            <img src={background1280} className='notFound__img'  alt="Background" />
        </picture>
    </div>
    </>
  );
}

export default NotFound404; 