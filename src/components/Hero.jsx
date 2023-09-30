import React from "react";
import './Hero.css';

const Hero = () => {
    return (
        <section className="section hero" id="home">
        <div className="container">

          <div className="hero-content">
            <h2 className="h1 hero-title">The easy way to takeover a lease</h2>

            <p className="hero-text">
              Live in Harare, Zimbabwe!
            </p>
          </div>

          <div className="hero-banner"></div>

          <form action="" className="hero-form">

            <div className="input-wrapper">
              <label for="input-1" className="input-label">Car, model, or brand</label>

              <input type="text" name="car-model" id="input-1" className="input-field" placeholder="What car are you looking?" />
            </div>

            <div className="input-wrapper">
              <label for="input-2" className="input-label">Max. monthly payment</label>

              <input type="text" name="monthly-pay" id="input-2" className="input-field" placeholder="Add an amount in $" />
            </div>

            <div className="input-wrapper">
              <label for="input-3" className="input-label">Make Year</label>

              <input type="text" name="year" id="input-3" className="input-field" placeholder="Add a minimal make year" />
            </div>

            <button type="submit" className="btn">Search</button>

          </form>

        </div>
      </section>
    );
}

export default Hero;