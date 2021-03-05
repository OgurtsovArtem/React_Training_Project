import React from 'react'
import Header from '../components/Header/Header';
import Intro from '../components/Intro/Intro';
import InfoBlog from "../components/InfoBlog/InfoBlog";
import Footer from "../components/Footer/Footer";
import Popup from "../components/Popup/Popup"

class Main extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      active: false,
    };
    // console.log(navigator.connection.type,NetworkInformation.effectiveType)
  }
  
  activePopup = () => {
    this.setState({
      active: !this.state.active
    });
  }

  componentDidMount() {
    this.buttonOpen = document.querySelector('.button-login');
    this.buttonOpen.addEventListener('click', this.activePopup) 
  }

  componentDidUpdate(){
    console.log(this.state.active)
    this.state.active ? document.body.classList.add('fixed') : document.body.classList.remove('fixed');
  }
    // Разобраться как удалить слушатели при размонтирование компонента.
  componentWillUnmount() {
    // this.buttonOpen.removeListener('click', this.activePopup)
    // this.buttonOpen = document.querySelector('.button-login');
  }

  render(){
    return (
      <>
      <Header />
      <Intro />
      <InfoBlog />
      <Footer />
      {this.state.active && <Popup a={this.activePopup}  />}
      </>
    );
  }
}

export default Main;