import React from 'react';
import './ButtonScroll.css';


class ButtonScroll extends React.Component {
    constructor() {
        super();

        this.state = {
          windowScroll: window.pageYOffset,
        };
        this.className = 'button-scroll';
    }

    componentDidMount() {
        window.addEventListener('scroll', this.scroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.scroll);
    }

    scroll = () => {
        this.setState ({
            windowScroll: [window.pageYOffset],
        });
        this.className = (this.state.windowScroll[0] > 100 ? "button-scroll button-scroll_hidden" :"button-scroll")
    }


    // Передавать ссылку на элемент который нужно прокрутить.
    activateScrolling = () => {
        if(this.props.scrollElement.current){
            let elementHeight = this.props.scrollElement.current.offsetHeight;
            window.scrollBy({
                top: elementHeight,
                behavior: 'smooth',
            });
        }
        return
    }
    render(){
        return (
            <button className={this.className} onClick={this.activateScrolling}>
            <div className="button-scroll__arrow">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </button>
          );
    }
}

export default ButtonScroll;