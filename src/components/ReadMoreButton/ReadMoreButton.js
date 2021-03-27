import React from 'react'

import './ReadMoreButton.css'

class ReadMoreButton extends React.Component {

  render(){
    return (
        <button className="readMoreButton accent">
        <span className="readMoreButton-text">read more</span>
        <span className="readMoreButton-arrow">&rarr;</span>
        </button>
    );
  }
}

export default ReadMoreButton;

