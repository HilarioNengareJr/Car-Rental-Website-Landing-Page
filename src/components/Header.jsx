import React, {useState, useEffect} from 'react';
import { CarOutline, PersonOutline } from 'react-ionicons';
import './Header.css';

const Header = () => {
    const [isActive, setIsActive] = useState(false);

    const [isHeaderActive, setIsHeaderActive] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setIsHeaderActive(true);
            } else {
                setIsHeaderActive(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const toggleNavbar = () => {
        setIsActive(!isActive);
    };
    return (
        <header className={ isHeaderActive ? "header active" : "header"}>
            <div className="container">

                <div className="overlay" data-overlay=""></div>

                <a href="#" className="logo">
                    <img src="/images/logo.png" alt="logo" width={70} />
                </a>

                <nav className={isActive ? "navbar active" : "navbar"}>
                    <ul className="navbar-list">

                        <li>
                            <a href="#home" className="navbar-link" onClick={toggleNavbar}>Home</a>
                        </li>

                        <li>
                            <a href="#featured-car" className="navbar-link" onClick={toggleNavbar}>Explore cars</a>
                        </li>

                        <li>
                            <a href="#" className="navbar-link" onClick={toggleNavbar}>About us</a>
                        </li>

                        <li>
                            <a href="#blog" className="navbar-link" onClick={toggleNavbar}>Blog</a>
                        </li>

                    </ul>
                </nav>

                <div className="header-actions">

                    <div className="header-contact">
                        <a href="tel:05338502322" className="contact-link">+90-533-850-2322</a>

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
                    </a>

                    <a href="#" className="btn user-btn" aria-label="Profile">
                        <PersonOutline
                            color={'#00000'}
                            height="22px"
                            width="22px"
                            role="img" className="md hydrated" aria-label="car outline"
                        />
                    </a>

                    <button className={isActive ? "nav-toggle-btn active" : "nav-toggle-btn"} onClick={toggleNavbar}
                     aria-label="Toggle Menu">
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