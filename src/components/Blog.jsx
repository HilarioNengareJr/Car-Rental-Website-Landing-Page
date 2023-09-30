import React from 'react';
import { PersonAddOutline, CarOutline, PersonOutline, ChatbubbleEllipsesOutline, CardOutline, TimeOutline } from 'react-ionicons';
import './Blog.css';

const Blog = () => {
    return (
        <React.Fragment>
            <section className="section get-start">
                <div className="container">

                    <h2 className="h2 section-title">Get started with 4 simple steps</h2>

                    <ul className="get-start-list">

                        <li>
                            <div className="get-start-card">

                                <div className="card-icon icon-1">
                                    <PersonAddOutline
                                        color={'var(--deep-cerise)'}
                                        height="25px"
                                        width="25px"
                                        role="img" className="md hydrated" aria-label="car outline"
                                    />
                                </div>

                                <h3 className="card-title">Create a profile</h3>

                                <p className="card-text">
                                    If you are going to use a passage of Lorem Ipsum, you need to be sure.
                                </p>

                                <a href="#" className="card-link">Get started</a>

                            </div>
                        </li>

                        <li>
                            <div className="get-start-card">

                                <div className="card-icon icon-2">
                                    <CarOutline
                                        color={'var(--carolina-blue)'}
                                        height="25px"
                                        width="25px"
                                        role="img" className="md hydrated" aria-label="car outline"
                                    />
                                </div>

                                <h3 className="card-title">Tell us what car you want</h3>

                                <p className="card-text">
                                    Various versions have evolved over the years, sometimes by accident, sometimes on purpose
                                </p>

                            </div>
                        </li>

                        <li>
                            <div className="get-start-card">

                                <div className="card-icon icon-3">
                                    <PersonOutline
                                        color={'var(--medium-sea-green)'}
                                        height="25px"
                                        width="25px"
                                        role="img" className="md hydrated" aria-label="car outline"
                                    />
                                </div>

                                <h3 className="card-title">Match with seller</h3>

                                <p className="card-text">
                                    It to make a type specimen book. It has survived not only five centuries, but also the leap into
                                    electronic
                                </p>

                            </div>
                        </li>

                        <li>
                            <div className="get-start-card">

                                <div className="card-icon icon-4">
                                    <CardOutline
                                        color={'var(--slate-blue)'}
                                        height="25px"
                                        width="25px"
                                        role="img" className="md hydrated" aria-label="car outline"
                                    />
                                </div>

                                <h3 className="card-title">Make a deal</h3>

                                <p className="card-text">
                                    There are many variations of passages of Lorem available, but the majority have suffered alteration
                                </p>

                            </div>
                        </li>

                    </ul>

                </div>
            </section>
            <section className="section blog" id="blog">
                <div className="container">

                    <h2 className="h2 section-title">Our Blog</h2>

                    <ul className="blog-list has-scrollbar">

                        <li>
                            <div className="blog-card">

                                <figure className="card-banner">

                                    <a href="#">
                                        <img src="/images/blog-1.jpg" alt="Opening of new offices of the company" loading="lazy" className="w-100" />
                                    </a>

                                    <a href="#" className="btn card-badge">Company</a>

                                </figure>

                                <div className="card-content">

                                    <h3 className="h3 card-title">
                                        <a href="#">Opening of new offices of the company</a>
                                    </h3>

                                    <div className="card-meta">

                                        <div className="publish-date">
                                            <TimeOutline
                                                color={'var(--independence)'}
                                                height="0.875rem"
                                                width="0.875rem"
                                                role="img" className="md hydrated" aria-label="car outline"
                                            />

                                            <time datetime="2022-01-14">January 14, 2022</time>
                                        </div>

                                        <div className="comments">
                                            <ChatbubbleEllipsesOutline
                                                color={'var(--independence)'}
                                                height="0.875rem"
                                                width="0.875rem"
                                                role="img" className="md hydrated" aria-label="car outline"
                                            />

                                            <data value="114">114</data>
                                        </div>

                                    </div>

                                </div>

                            </div>
                        </li>

                        <li>
                            <div className="blog-card">

                                <figure className="card-banner">

                                    <a href="#">
                                        <img src="/images/blog-2.jpg" alt="What cars are most vulnerable" loading="lazy" className="w-100" />
                                    </a>

                                    <a href="#" className="btn card-badge">Repair</a>

                                </figure>

                                <div className="card-content">

                                    <h3 className="h3 card-title">
                                        <a href="#">What cars are most vulnerable</a>
                                    </h3>

                                    <div className="card-meta">

                                        <div className="publish-date">
                                            <TimeOutline
                                                color={'var(--independence)'}
                                                height="0.875rem"
                                                width="0.875rem"
                                                role="img" className="md hydrated" aria-label="car outline"
                                            />

                                            <time datetime="2022-01-14">January 14, 2022</time>
                                        </div>

                                        <div className="comments">
                                            <ChatbubbleEllipsesOutline
                                                color={'var(--independence)'}
                                                height="0.875rem"
                                                width="0.875rem"
                                                role="img" className="md hydrated" aria-label="car outline"
                                            />

                                            <data value="114">114</data>
                                        </div>

                                    </div>

                                </div>

                            </div>
                        </li>

                        <li>
                            <div className="blog-card">

                                <figure className="card-banner">

                                    <a href="#">
                                        <img src="/images/blog-3.jpg" alt="Statistics showed which average age" loading="lazy" className="w-100" />
                                    </a>

                                    <a href="#" className="btn card-badge">Cars</a>

                                </figure>

                                <div className="card-content">

                                    <h3 className="h3 card-title">
                                        <a href="#">Statistics showed which average age</a>
                                    </h3>

                                    <div className="card-meta">

                                        <div className="publish-date">
                                            <TimeOutline
                                                color={'var(--independence)'}
                                                height="0.875rem"
                                                width="0.875rem"
                                                role="img" className="md hydrated" aria-label="car outline"
                                            />

                                            <time datetime="2022-01-14">January 14, 2022</time>
                                        </div>

                                        <div className="comments">
                                            <ChatbubbleEllipsesOutline
                                                color={'var(--independence)'}
                                                height="0.875rem"
                                                width="0.875rem"
                                                role="img" className="md hydrated" aria-label="car outline"
                                            />

                                            <data value="114">114</data>
                                        </div>

                                    </div>

                                </div>

                            </div>
                        </li>

                        <li>
                            <div className="blog-card">

                                <figure className="card-banner">

                                    <a href="#">
                                        <img src="/images/blog-4.jpg" alt="What´s required when renting a car?" loading="lazy" className="w-100" />
                                    </a>

                                    <a href="#" className="btn card-badge">Cars</a>

                                </figure>

                                <div className="card-content">

                                    <h3 className="h3 card-title">
                                        <a href="#">What´s required when renting a car?</a>
                                    </h3>

                                    <div className="card-meta">

                                        <div className="publish-date">
                                            <TimeOutline
                                                color={'var(--independence'}
                                                height="0.875rem"
                                                width="0.875rem"
                                                role="img" className="md hydrated" aria-label="car outline"
                                            />

                                            <time datetime="2022-01-14">January 14, 2022</time>
                                        </div>

                                        <div className="comments">
                                            <ChatbubbleEllipsesOutline
                                                color={'var(--independence)'}
                                                height="0.875rem"
                                                width="0.875rem"
                                                role="img" className="md hydrated" aria-label="car outline"
                                            />

                                            <data value="114">114</data>
                                        </div>

                                    </div>

                                </div>

                            </div>
                        </li>

                        <li>
                            <div className="blog-card">

                                <figure className="card-banner">

                                    <a href="#">
                                        <img src="/images/blog-5.jpg" alt="New rules for handling our cars" loading="lazy" className="w-100" />
                                    </a>

                                    <a href="#" className="btn card-badge">Company</a>

                                </figure>

                                <div className="card-content">

                                    <h3 className="h3 card-title">
                                        <a href="#">New rules for handling our cars</a>
                                    </h3>

                                    <div className="card-meta">

                                        <div className="publish-date">
                                            <TimeOutline
                                                color={'var(--independence)'}
                                                height="0.875rem"
                                                width="0.875rem"
                                                role="img" className="md hydrated" aria-label="car outline"
                                            />

                                            <time datetime="2022-01-14">January 14, 2022</time>
                                        </div>

                                        <div className="comments">
                                            <ChatbubbleEllipsesOutline
                                                color={'var(--independence)'}
                                                height="0.875rem"
                                                width="0.875rem"
                                                role="img" className="md hydrated" aria-label="car outline"
                                            />

                                            <data value="114">114</data>
                                        </div>

                                    </div>

                                </div>

                            </div>
                        </li>

                    </ul>

                </div>
            </section>
        </React.Fragment>
    );
}

export default Blog;