import React from "react";
import { ArrowForwardOutline, PeopleOutline, SpeedometerOutline, HardwareChipOutline, HeartOutline, FlashOutline } from 'react-ionicons';
import './Features.css';

const Features = () => {
  return (
    <section className="section featured-car" id="featured-car">
      <div className="container">

        <div className="title-wrapper">
          <h2 className="h2 section-title">Featured cars</h2>

          <a href="#" className="featured-car-link">
            <span>View more</span>

            <ArrowForwardOutline
              color={'var(--carolina-blue)'}
              height="25px"
              width="25px"
              role="img" className="md hydrated" aria-label="car outline"
            />
          </a>
        </div>

        <ul className="featured-car-list">

          <li>
            <div className="featured-car-card">

              <figure className="card-banner">
                <img src="/images/car-1.jpg" alt="Toyota RAV4 2023" loading="lazy" width="440" height="300" className="w-100" />
              </figure>

              <div className="card-content">

                <div className="card-title-wrapper">
                  <h3 className="h3 card-title">
                    <a href="#">Toyota RAV4</a>
                  </h3>

                  <data className="year" value="2023">2023</data>
                </div>

                <ul className="card-list">

                  <li className="card-list-item">
                    <PeopleOutline
                      color={'var(--carolina-blue)'}
                      height="25px"
                      width="25px"
                      role="img" className="md hydrated" aria-label="car outline"
                    />

                    <span className="card-item-text">4 People</span>
                  </li>

                  <li className="card-list-item">
                    <FlashOutline
                      color={'var(--carolina-blue)'}
                      height="25px"
                      width="25px"
                      role="img" className="md hydrated" aria-label="car outline"
                    />

                    <span className="card-item-text">Hybrid</span>
                  </li>

                  <li className="card-list-item">
                    <SpeedometerOutline
                      color={'var(--carolina-blue)'}
                      height="25px"
                      width="25px"
                      role="img" className="md hydrated" aria-label="car outline"
                    />

                    <span className="card-item-text">6.1km / 1-litre</span>
                  </li>

                  <li className="card-list-item">
                    <HardwareChipOutline
                      color={'var(--carolina-blue)'}

                      height="25px"
                      width="25px"
                      role="img" className="md hydrated" aria-label="car outline"
                    />
                    <span className="card-item-text">Automatic</span>
                  </li>

                </ul>

                <div className="card-price-wrapper">

                  <p className="card-price">
                    <strong>$440</strong> / month
                  </p>

                  <button className="btn fav-btn" aria-label="Add to favourite list">
                    <HeartOutline
                      color={'var(--carolina-blue)'}

                      height="25px"
                      width="25px"
                      role="img" className="md hydrated" aria-label="car outline"
                    />
                  </button>

                  <button className="btn">Rent now</button>

                </div>

              </div>

            </div>
          </li>

          <li>
            <div className="featured-car-card">

              <figure className="card-banner">
                <img src="/images/car-2.jpg" alt="BMW 3 Series 2019" loading="lazy" width="440" height="300" className="w-100" />
              </figure>

              <div className="card-content">

                <div className="card-title-wrapper">
                  <h3 className="h3 card-title">
                    <a href="#">BMW 3 Series</a>
                  </h3>

                  <data className="year" value="2019">2019</data>
                </div>

                <ul className="card-list">

                  <li className="card-list-item">
                    <PeopleOutline
                      color={'var(--carolina-blue)'}
                      height="25px"
                      width="25px"
                      role="img" className="md hydrated" aria-label="car outline"
                    />

                    <span className="card-item-text">4 People</span>
                  </li>

                  <li className="card-list-item">
                    <FlashOutline
                      color={'var(--carolina-blue)'}
                      height="25px"
                      width="25px"
                      role="img" className="md hydrated" aria-label="car outline"
                    />

                    <span className="card-item-text">Hybrid</span>
                  </li>

                  <li className="card-list-item">
                    <SpeedometerOutline
                      color={'var(--carolina-blue)'}
                      height="25px"
                      width="25px"
                      role="img" className="md hydrated" aria-label="car outline"
                    />

                    <span className="card-item-text">6.1km / 1-litre</span>
                  </li>

                  <li className="card-list-item">
                    <HardwareChipOutline
                      color={'var(--carolina-blue)'}

                      height="25px"
                      width="25px"
                      role="img" className="md hydrated" aria-label="car outline"
                    />
                    <span className="card-item-text">Automatic</span>
                  </li>

                </ul>

                <div className="card-price-wrapper">

                  <p className="card-price">
                    <strong>$350</strong> / month
                  </p>

                  <button className="btn fav-btn" aria-label="Add to favourite list">
                    <HeartOutline
                      color={'var(--carolina-blue)'}

                      height="25px"
                      width="25px"
                      role="img" className="md hydrated" aria-label="car outline"
                    />
                  </button>

                  <button className="btn">Rent now</button>

                </div>

              </div>

            </div>
          </li>

          <li>
            <div className="featured-car-card">

              <figure className="card-banner">
                <img src="/images/car-3.jpg" alt="Volkswagen T-Cross 2020" loading="lazy" width="440" height="300" className="w-100" />
              </figure>

              <div className="card-content">

                <div className="card-title-wrapper">
                  <h3 className="h3 card-title">
                    <a href="#">Volkswagen T-Cross</a>
                  </h3>

                  <data className="year" value="2020">2020</data>
                </div>

                <ul className="card-list">

                  <li className="card-list-item">
                    <PeopleOutline
                      color={'var(--carolina-blue)'}
                      height="25px"
                      width="25px"
                      role="img" className="md hydrated" aria-label="car outline"
                    />

                    <span className="card-item-text">4 People</span>
                  </li>

                  <li className="card-list-item">
                    <FlashOutline
                      color={'var(--carolina-blue)'}
                      height="25px"
                      width="25px"
                      role="img" className="md hydrated" aria-label="car outline"
                    />

                    <span className="card-item-text">Hybrid</span>
                  </li>

                  <li className="card-list-item">
                    <SpeedometerOutline
                      color={'var(--carolina-blue)'}
                      height="25px"
                      width="25px"
                      role="img" className="md hydrated" aria-label="car outline"
                    />

                    <span className="card-item-text">7.1km / 1-litre</span>
                  </li>

                  <li className="card-list-item">
                    <HardwareChipOutline
                      color={'var(--carolina-blue)'}

                      height="25px"
                      width="25px"
                      role="img" className="md hydrated" aria-label="car outline"
                    />
                    <span className="card-item-text">Automatic</span>
                  </li>

                </ul>


                <div className="card-price-wrapper">

                  <p className="card-price">
                    <strong>$400</strong> / month
                  </p>

                  <button className="btn fav-btn" aria-label="Add to favourite list">
                    <HeartOutline
                      color={'var(--carolina-blue)'}

                      height="25px"
                      width="25px"
                      role="img" className="md hydrated" aria-label="car outline"
                    />
                  </button>

                  <button className="btn">Rent now</button>

                </div>

              </div>

            </div>
          </li>

          <li>
            <div className="featured-car-card">

              <figure className="card-banner">
                <img src="/images/car-4.jpg" alt="Cadillac Escalade 2020" loading="lazy" width="440" height="300" className="w-100" />
              </figure>

              <div className="card-content">

                <div className="card-title-wrapper">
                  <h3 className="h3 card-title">
                    <a href="#">Cadillac Escalade</a>
                  </h3>

                  <data className="year" value="2020">2020</data>
                </div>

                <ul className="card-list">

                  <li className="card-list-item">
                    <PeopleOutline
                      color={'var(--carolina-blue)'}
                      height="25px"
                      width="25px"
                      role="img" className="md hydrated" aria-label="car outline"
                    />

                    <span className="card-item-text">4 People</span>
                  </li>

                  <li className="card-list-item">
                    <FlashOutline
                      color={'var(--carolina-blue)'}
                      height="25px"
                      width="25px"
                      role="img" className="md hydrated" aria-label="car outline"
                    />

                    <span className="card-item-text">Gasoline</span>
                  </li>

                  <li className="card-list-item">
                    <SpeedometerOutline
                      color={'var(--carolina-blue)'}
                      height="25px"
                      width="25px"
                      role="img" className="md hydrated" aria-label="car outline"
                    />

                    <span className="card-item-text">7.1km / 1-litre</span>
                  </li>

                  <li className="card-list-item">
                    <HardwareChipOutline
                      color={'var(--carolina-blue)'}

                      height="25px"
                      width="25px"
                      role="img" className="md hydrated" aria-label="car outline"
                    />
                    <span className="card-item-text">Manual</span>
                  </li>

                </ul>


                <div className="card-price-wrapper">

                  <p className="card-price">
                    <strong>$620</strong> / month
                  </p>

                  <button className="btn fav-btn" aria-label="Add to favourite list">
                    <HeartOutline
                      color={'var(--carolina-blue)'}

                      height="25px"
                      width="25px"
                      role="img" className="md hydrated" aria-label="car outline"
                    />
                  </button>

                  <button className="btn">Rent now</button>

                </div>

              </div>

            </div>
          </li>

          <li>
            <div className="featured-car-card">

              <figure className="card-banner">
                <img src="/images/car-5.jpg" alt="BMW 4 Series GTI 2023" loading="lazy" width="440" height="300" className="w-100" />
              </figure>

              <div className="card-content">

                <div className="card-title-wrapper">
                  <h3 className="h3 card-title">
                    <a href="#">BMW 4 Series GTI</a>
                  </h3>

                  <data className="year" value="2023">2023</data>
                </div>

                <ul className="card-list">

                  <li className="card-list-item">
                    <PeopleOutline
                      color={'var(--carolina-blue)'}
                      height="25px"
                      width="25px"
                      role="img" className="md hydrated" aria-label="car outline"
                    />

                    <span className="card-item-text">4 People</span>
                  </li>

                  <li className="card-list-item">
                    <FlashOutline
                      color={'var(--carolina-blue)'}
                      height="25px"
                      width="25px"
                      role="img" className="md hydrated" aria-label="car outline"
                    />

                    <span className="card-item-text">Gasoline</span>
                  </li>

                  <li className="card-list-item">
                    <SpeedometerOutline
                      color={'var(--carolina-blue)'}
                      height="25px"
                      width="25px"
                      role="img" className="md hydrated" aria-label="car outline"
                    />

                    <span className="card-item-text">7.1km / 1-litre</span>
                  </li>

                  <li className="card-list-item">
                    <HardwareChipOutline
                      color={'var(--carolina-blue)'}

                      height="25px"
                      width="25px"
                      role="img" className="md hydrated" aria-label="car outline"
                    />
                    <span className="card-item-text">Automatic</span>
                  </li>

                </ul>


                <div className="card-price-wrapper">

                  <p className="card-price">
                    <strong>$530</strong> / month
                  </p>

                  <button className="btn fav-btn" aria-label="Add to favourite list">
                    <HeartOutline
                      color={'var(--carolina-blue)'}

                      height="25px"
                      width="25px"
                      role="img" className="md hydrated" aria-label="car outline"
                    />
                  </button>

                  <button className="btn">Rent now</button>

                </div>

              </div>

            </div>
          </li>

          <li>
            <div className="featured-car-card">

              <figure className="card-banner">
                <img src="/images/car-6.jpg" alt="BMW 4 Series 2019" loading="lazy" width="440" height="300" className="w-100" />
              </figure>

              <div className="card-content">

                <div className="card-title-wrapper">
                  <h3 className="h3 card-title">
                    <a href="#">BMW 4 Series</a>
                  </h3>

                  <data className="year" value="2019">2019</data>
                </div>

                <ul className="card-list">

                  <li className="card-list-item">
                    <PeopleOutline
                      color={'var(--carolina-blue)'}
                      height="25px"
                      width="25px"
                      role="img" className="md hydrated" aria-label="car outline"
                    />

                    <span className="card-item-text">4 People</span>
                  </li>

                  <li className="card-list-item">
                    <FlashOutline
                      color={'var(--carolina-blue)'}
                      height="25px"
                      width="25px"
                      role="img" className="md hydrated" aria-label="car outline"
                    />

                    <span className="card-item-text">Gasoline</span>
                  </li>

                  <li className="card-list-item">
                    <SpeedometerOutline
                      color={'var(--carolina-blue)'}
                      height="25px"
                      width="25px"
                      role="img" className="md hydrated" aria-label="car outline"
                    />

                    <span className="card-item-text">7.1km / 1-litre</span>
                  </li>

                  <li className="card-list-item">
                    <HardwareChipOutline
                      color={'var(--carolina-blue)'}

                      height="25px"
                      width="25px"
                      role="img" className="md hydrated" aria-label="car outline"
                    />
                    <span className="card-item-text">Automatic</span>
                  </li>

                </ul>

                <div className="card-price-wrapper">

                  <p className="card-price">
                    <strong>$490</strong> / month
                  </p>

                  <button className="btn fav-btn" aria-label="Add to favourite list">
                    <HeartOutline
                      color={'var(--carolina-blue)'}

                      height="25px"
                      width="25px"
                      role="img" className="md hydrated" aria-label="car outline"
                    />
                  </button>

                  <button className="btn">Rent now</button>

                </div>

              </div>

            </div>
          </li>

        </ul>

      </div>
    </section>
  );
}

export default Features;