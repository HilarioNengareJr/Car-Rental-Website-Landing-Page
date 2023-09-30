import React from 'react';
import { LogoFacebook, LogoInstagram, LogoTwitter, LogoLinkedin, LogoSkype, MailOutline } from 'react-ionicons';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">

                <div className="footer-top">

                    <div className="footer-brand">
                        <a href="#" className="logo">
                            <img src="./images/logo.png" alt="Ridex logo" />
                        </a>

                        <p className="footer-text">
                            
                        </p>
                    </div>

                    <ul className="footer-list">

                        <li>
                            <p className="footer-list-title">Company</p>
                        </li>

                        <li>
                            <a href="#" className="footer-link">About us</a>
                        </li>

                        <li>
                            <a href="#" className="footer-link">Pricing plans</a>
                        </li>

                        <li>
                            <a href="#" className="footer-link">Our blog</a>
                        </li>

                        <li>
                            <a href="#" className="footer-link">Contacts</a>
                        </li>

                    </ul>

                    <ul className="footer-list">

                        <li>
                            <p className="footer-list-title">Support</p>
                        </li>

                        <li>
                            <a href="#" className="footer-link">Help center</a>
                        </li>

                        <li>
                            <a href="#" className="footer-link">Ask a question</a>
                        </li>

                        <li>
                            <a href="#" className="footer-link">Privacy policy</a>
                        </li>

                        <li>
                            <a href="#" className="footer-link">Terms &amp; conditions</a>
                        </li>

                    </ul>

                    <ul className="footer-list">

                        <li>
                            <p className="footer-list-title">Neighborhoods in Harare</p>
                        </li>

                        <li>
                            <a href="#" className="footer-link">Manhattan</a>
                        </li>

                        <li>
                            <a href="#" className="footer-link">Central Harare City</a>
                        </li>

                        <li>
                            <a href="#" className="footer-link">Upper East Side</a>
                        </li>

                        <li>
                            <a href="#" className="footer-link">Queens</a>
                        </li>

                        <li>
                            <a href="#" className="footer-link">Theater District</a>
                        </li>

                        <li>
                            <a href="#" className="footer-link">Midtown</a>
                        </li>

                        <li>
                            <a href="#" className="footer-link">SoHo</a>
                        </li>

                        <li>
                            <a href="#" className="footer-link">Chelsea</a>
                        </li>

                    </ul>

                </div>

                <div className="footer-bottom">

                    <ul className="social-list">
                        <li>
                            <a href="#" className="social-link">
                                <LogoFacebook
                                    color={'#00000'}
                                    height="20px"
                                    width="20px"
                                    role="img" className="md hydrated" aria-label="car outline"
                                />
                            </a>
                        </li>
                        <li>
                            <a href="#" className="social-link">
                                <LogoInstagram
                                    color={'#00000'}
                                    height="20px"
                                    width="20px"
                                    role="img" className="md hydrated" aria-label="car outline"
                                />
                            </a>
                        </li>
                        <li>
                            <a href="#" className="social-link">
                                <LogoTwitter
                                    color={'#00000'}
                                    height="20px"
                                    width="20px"
                                    role="img" className="md hydrated" aria-label="car outline"
                                />
                            </a>
                        </li>
                        <li>
                            <a href="#" className="social-link">
                                <LogoLinkedin
                                    color={'#00000'}
                                    height="20px"
                                    width="20px"
                                    role="img" className="md hydrated" aria-label="car outline"
                                />
                            </a>
                        </li>
                        <li>
                            <a href="#" className="social-link">
                                <LogoSkype
                                    color={'#00000'}
                                    height="20px"
                                    width="20px"
                                    role="img" className="md hydrated" aria-label="car outline"
                                />
                            </a>
                        </li>
                        <li>
                            <a href="#" className="social-link">
                                <MailOutline
                                    color={'#00000'}
                                    height="20px"
                                    width="20px"
                                    role="img" className="md hydrated" aria-label="car outline"
                                />
                            </a>
                        </li>
                    </ul>

                    <p className="copyright">
                        © 2023 <a href="#">Hilario Nengare</a>. All Rights Reserved
                    </p>

                </div>

            </div>
        </footer>
    );
}

export default Footer;