import React from 'react'

import '../components/BlogCard/BlogCard.css'
// Component
import BlogContent from '../components/BlogContent/BlogContent'
import BlogHeader from '../components/BlogHeader/BlogHeader'
import Footer from '../components/Footer/Footer'

class Blog extends React.Component {

  render(){
    return (
      <>
        <BlogHeader />
        <BlogContent />
        <Footer />
      </>
    );
  }
}

export default Blog;