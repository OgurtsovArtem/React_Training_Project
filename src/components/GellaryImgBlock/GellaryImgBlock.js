import React from 'react';
import './GellaryImgBlock.css';

// COMPONENTS
import Button from '../Button/Button';
import ErrorPage from '../ErrorPage/ErrorPage';

class GellaryImgBlock extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      images: [],
      error: null,
      hasError: false,
      newArray:[],
      minIndex: 0,
      maxIndex: 6,
      count: 6,
      buttonLock: false,
    };
    this.separator = this.separator.bind(this)
    this.separator();
  };
  static getDerivedStateFromError(error) {
    console.log(error)
    return { hasError: true };
  }
  componentDidMount(){
    const settings = `search/photos?&query=alps?&per_page=12?&page=2`
    this.apiLoader(settings)
    
  }
  componentDidUpdate(){

  }
  componentWillUnmount(){
  }
  apiLoader = (settings) => {
    const AUTH_KEY = 'AfwotE42Xf5ebUAbPBrIlUtdD53pQljeSZGqoNdTca0';
    fetch(`https://api.unsplash.com/${settings}/`,{
    headers: {
      'Authorization': `Client-ID ${AUTH_KEY}`,
      },
    })
    .then(res => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    })
    .then(res => {
      this.setState({ images: Object.values(res)[2] })
      this.separator(5)
    })
    .catch(e => {
      console.log(e);
      this.setState({images: [], error: e ,hasError: true })
    })
  }

  separator(first) {
    const { images, newArray, minIndex, maxIndex, count } = this.state;

      for(let index = minIndex; index < maxIndex && index<images.length; index ++ ){
        newArray.push(images[index])
      }
      if(maxIndex <= images.length + count){
        this.setState({
          minIndex: minIndex + count, 
          maxIndex: maxIndex + count,
        }) 
        console.log(maxIndex,images.length, this.state)
      }
  }



  render(){
    const { error, newArray } = this.state;
    if(error !== null) {
      return(
        <ErrorPage error={error}/>
      )
    }
    return (
      <section className="gellery-img-block">
        <div className="gellery-img-block__container">
          <div className="gellery-img-block__grid-container">

          {newArray.map((item)=>{
            return (
              <div className="gellery-img-block__section" key={item.id}>
                <img className="gellery-img-block__img" src={item.urls.regular} alt={item.alt_description}></img>
                <div className="gellery-img-block__hover-container">
                  <h3 className="gellery-img-block__title">{item.user.name}</h3>
                  <p className="gellery-img-block__author">{item.description || 'Some kind of custom description'}</p>
                </div>
                
              </div>
            )
          })}

          </div>
            <Button className='gellery-img-block__buttond' name='Show more' function={this.separator} />
        </div>
      </section>
    );
  }
}

export default GellaryImgBlock;

