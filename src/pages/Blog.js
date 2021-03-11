import React from 'react'
import Header from '../components/Header/Header'

class Blog extends React.Component {

  render(){
    return (
      <>
        <Header />
        <section className="blog">
          <div className="blog__header">
            <h1 className="title">Blog</h1>
            <button className="blog__header-button">Add blog</button>
          </div>
          <div className="blog__container">
            <div className="cadr-block">
              <h3 className="card-block__title">Card title</h3>
              <div className="card-block__image">
                <img src={''} alt='cardImage'></img>
              </div>
              <div className="card-block__text">
                Some Text
              </div>
              <div className="card-block__info-container">
                <div className="card-block__date">23.03.2020</div>
                <div className="card-block__author">Steven King</div>
                <div className="card-block__likes">23Like</div>
                <a className="card-block__link">Instagramm</a>
                <a className="card-block__link">twitter</a>
                <a className="card-block__link">facebock</a>
                <button className="card-block__card-button">Read more</button>
              </div>
            </div>
          </div>
        </section>
        <h1>Blog</h1>
      </>
    );
  }
}

export default Blog;