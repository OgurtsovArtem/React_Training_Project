import React from 'react';
import './Footer.css';

// СДЕЛАТЬ СОЗДАНИЯ СПИСКА МОДУЛЕМ 
function Footer() {
    return(
        <footer className="footer">
            <div className="footer__container width-control">
                <div className="footer__discription">
                    <h4 className="footer__discription-title">
                        MNTN
                    </h4>
                    <p className="footer__discription-text">
                        Get out there &amp; discover your next slope, mountain &amp; destination!
                    </p>
                    <p className="footer__discription-copyright">
                        &copy; 2021 MNTN, Inc. Terms &amp; Privacy
                    </p>
                </div>
                <div className="footer__block-container">
                    <div className="footer__block">
                        <h4 className="footer__block-title accent">
                            More on MNTN
                        </h4>
                        <nav className="footer__nav">
                            <ul className="footer__nav-ul">
                                <li className="footer__nav-li">
                                    <a href="#" className="footer__link link link-hover">
                                        About MNTN
                                    </a>
                                </li>
                                <li className="footer__nav-li">
                                    <a href="#" className="footer__link link link-hover">
                                        Contributors &amp; Writers 
                                    </a>
                                </li>
                                <li className="footer__nav-li">
                                    <a href="#" className="footer__link link link-hover">
                                        Write For Us
                                    </a>
                                </li>
                                <li className="footer__nav-li">
                                    <a href="#" className="footer__link link link-hover">
                                        Contact Us
                                    </a>
                                </li>
                                <li className="footer__nav-li">
                                    <a href="#" className="footer__link link link-hover">
                                        Privacy Policy
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className="footer__block">
                    <h4 className="footer__block-title accent">
                            More on The Blog
                        </h4>
                        <nav className="footer__nav">
                            <ul className="footer__nav-ul">
                                <li className="footer__nav-li">
                                    <a href="#" className="footer__link link link-hover">
                                        The Team
                                    </a>
                                </li>
                                <li className="footer__nav-li">
                                    <a href="#" className="footer__link link link-hover">
                                        Jobs 
                                    </a>
                                </li>
                                <li className="footer__nav-li">
                                    <a href="#" className="footer__link link link-hover">
                                        Press
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;