import React from 'react'
import { useHistory } from 'react-router-dom'

import './BlogHeader.css'
import Button from '../Button/Button'

function BlogHeader()  {

    const history = useHistory();
    return (
        <section className="blog__header">
            <div className="blog__header-container width-control">
                <span onClick={() => history.goBack()}>
                    <Button name="Go back" className="blog__button"/>
                </span>
                <h1 className="blog__title">Blog</h1>
                <div className="blog__search-container">
                    <input type="search" placeholder="Search blog" className="blog__search-input"></input>
                    <Button name="Search" className="blog__button" />
                </div>
            </div>
        </section>
    );
}

export default BlogHeader;