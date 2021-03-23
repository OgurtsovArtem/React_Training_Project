import React from 'react'

import './GellarySlider.css';

import img_1 from '../../images/GellarySlider/1.jpg'
import img_2 from '../../images/GellarySlider/2.jpg'
import img_3 from '../../images/GellarySlider/3.jpg'

function GellarySlider() {
    const [ arrImg, setArrImg ] = React.useState([]);
    const [ count, setCount ] = React.useState(0);

    function loop() {
        if(count  <= arrImg.length && arrImg.length !== 0){
            setCount(count + 1);
            if (count + 1  <= arrImg.length){
                arrImg[count].classList.remove('hide'); 
            }

            if(count > 0){
                arrImg[count-1].classList.add('hide');
            }

            if (count === arrImg.length){
                setCount(1);
                arrImg[0].classList.remove('hide');
            }
        } 
    }

    React.useEffect(()=> {
        setArrImg([...document.querySelectorAll('.gellarySlider__background')]) ;
    }, [])
    React.useEffect(()=> {
        const id= setTimeout(loop, 4000);
            return () => {
            clearTimeout(id);
        };
    })
    return (
        <section className="gellarySlider">
            <div className="gellarySlider__container">
                <div className="gellarySlider__slider">
                    <img src={img_1} className="gellarySlider__background" alt="background"></img>
                    <img src={img_2} className="gellarySlider__background hide" alt="background"></img>
                    <img src={img_3}  className="gellarySlider__background hide" alt="background"></img>
                    <button className="gellarySlider__button back" onClick={loop}>
                        <div className="gellarySlider__button-arrow left"></div>
                    </button>
                    <button className="gellarySlider__button next"  onClick={loop}>
                        <div className="gellarySlider__button-arrow right"></div>
                    </button>
                </div>
            </div>
        </section>
    );
}

export default GellarySlider;