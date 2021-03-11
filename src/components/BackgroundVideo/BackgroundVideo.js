import React from 'react'
import './BackgroundVideo.css'

import video_1080 from './video/1080_background.webm';
import video_2K from './video/2K_background.webm';
import video_4K from './video/4K_background.webm';
import porster from '../../images/background/video_poster.jpg'

function BackgroundVideo () {
// Добавлять ссылку на видео в зависимости от разрешения
    return(
        <video className="backgroundVideo"  autoPlay="autoplay" preload="auto" loop="loop" poster={porster}>
            <source src={video_1080} type='video/webm; codecs="vp8, vorbis" '></source>
            Тег video не поддерживается вашим браузером.
        </video>
    );
}

export default BackgroundVideo