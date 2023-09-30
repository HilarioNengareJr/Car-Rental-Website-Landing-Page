import React from 'react';
import { CarOutline, PersonOutline} from 'react-ionicons';
import './Header.css';

const Header = () => {
    return (
        <header className="header" data-header="">
            <div className="container">

                <div className="overlay" data-overlay=""></div>

                <a href="#" className="logo">
                    <img src="/images/logo.png" alt="logo" width={70} />
                </a>

                <nav className="navbar" data-navbar="">
                    <ul className="navbar-list">

                        <li>
                            <a href="#home" className="navbar-link" data-nav-link="">Home</a>
                        </li>

                        <li>
                            <a href="#featured-car" className="navbar-link" data-nav-link="">Explore cars</a>
                        </li>

                        <li>
                            <a href="#" className="navbar-link" data-nav-link="">About us</a>
                        </li>

                        <li>
                            <a href="#blog" className="navbar-link" data-nav-link="">Blog</a>
                        </li>

                    </ul>
                </nav>

                <div className="header-actions">

                    <div className="header-contact">
                        <a href="tel:88002345678" className="contact-link">8 800 234 56 78</a>

                        <span className="contact-time">Mon - Sat: 9:00 am - 6:00 pm</span>
                    </div>

                    <a href="#featured-car" className="btn d-flex" aria-labelledby="aria-label-txt">
                        <CarOutline
                            color={'#00000'}
                            title={'Type of Car'}
                            height="22px"
                            width="22px"
                            role="img" className="md hydrated" aria-label="car outline"
                        />


                        <span id="aria-label-txt">Explore cars</span>
                    </a>

                    <a href="#" className="btn user-btn" aria-label="Profile">
                        <PersonOutline
                            color={'#00000'}
                            height="22px"
                            width="22px"
                            role="img" className="md hydrated" aria-label="car outline"
                        />
                    </a>

                    <button className="nav-toggle-btn" data-nav-toggle-btn="" aria-label="Toggle Menu">
                        <span className="one"></span>
                        <span className="two"></span>
                        <span className="three"></span>
                    </button>

                </div>

            </div>
        </header>
    );
}

export default Header;