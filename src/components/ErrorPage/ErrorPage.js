import React from 'react'

import './ErrorPage.css'

function ErrorPage (props) {
    return (
        <section className="error">
            <div className="error__container">
                <h2 className="error__title" >Error</h2>
                <p className="error__text">An error has occurred: {props.error}</p>
            </div>
        </section>
    );
}

export default ErrorPage;