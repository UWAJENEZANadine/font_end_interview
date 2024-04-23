import React from "react";
import HomeLayout from "../components/HomeLayout";
import about1 from "../assets/images/14.jpg";
import about2 from "../assets/images/2.jpg";
import about3 from "../assets/images/3.jpg";
import story from "../assets/images/nadine.jpg";
import video1 from "../assets/video/Walking down a road in the mountains.mp4";
import feature1 from "../assets/images/basic_world.svg";
import feature2 from "../assets/images/basic_compass.svg";
import feature3 from "../assets/images/basic_heart.svg";
import feature4 from "../assets/images/basic_map.svg";
const Home = () => {
  return (
    <HomeLayout>
      <main className="main-about-container">
        <section className="section-about">
          <div className="u-center-text u-margin-bottom-8">
            <h2 className="headig-secondary">
              Excing tours for adventures people
            </h2>
          </div>
          <div className="row justify-content-around align-center  ">
            <div className="col-5  cols1">
              <h3 className="heading-tertiary u-margin-bottom-2">
                you are going to fall in love with this nature
              </h3>
              <p className="paragraph">
                Effective communication creates a bridge between diverse
                stakeholders who may have different cultural and organizational
                backgrounds, different levels of expertise, and different
                perspectives and interests, which impact or have an influence
                upon the project execution or outcome.
              </p>

              <h3 className="heading-tertiary u-margin-bottom-2">
                Live adventures like you never have before
              </h3>
              <p className="paragraph">
                Effective communication creates a bridge between diverse
                stakeholders who may have different cultural and organizational
                backgrounds, different levels of expertise, and different
                perspectives and interests, which impact or have an influence
                upon the project execution or outcome.
              </p>
              <a href="#" className="btn-text">
                Learn More &rarr;{" "}
              </a>
            </div>
            <div className="col-5 cols2 ">
              <div className="composition">
                <img
                  src={about1}
                  alt="image1"
                  className="composition__photo composition__photo--p1"
                />
                <img
                  src={about2}
                  alt="image2"
                  className="composition__photo composition__photo--p2"
                />
                <img
                  src={about3}
                  alt="image2"
                  className="composition__photo composition__photo--p3"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="section-features">
          <div className="row2">
            <div className="col-1-0f-4">
              <div className="feature-box ">
                <img src={feature1} className="feature-box__icon" />
                <h3 className="heading-tertiary u-margin-bottom-2">
                  explore the world
                </h3>
                <p className="feature-box__text">
                  Effective communication creates a bridge between diverse
                  stakeholders who may have different cultural
                </p>
              </div>
            </div>
            <div className="col-1-0f-4">
              <div className="feature-box ">
                <img src={feature2} className="feature-box__icon" />
                <h3 className="heading-tertiary u-margin-bottom-2">
                  Meet Me in nature
                </h3>
                <p className="feature-box__text">
                  Effective communication creates a bridge between diverse
                  stakeholders who may have different cultural.
                </p>
              </div>
            </div>
            <div className="col-1-0f-4">
              <div className="feature-box ">
                <img src={feature4} className="feature-box__icon" />
                <h3 className="heading-tertiary u-margin-bottom-2">
                  explore the world
                </h3>
                <p className="feature-box__text">
                  Effective communication creates a bridge between diverse
                  stakeholders who may have different cultural
                </p>
              </div>
            </div>
            <div className="col-1-0f-4">
              <div className="feature-box ">
                <img src={feature3} className="feature-box__icon" />
                <h3 className="heading-tertiary u-margin-bottom-2">
                  Live a health life
                </h3>
                <p className="feature-box__text">
                  Effective communication creates a bridge between diverse
                  stakeholders who may have different cultural
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="container-fluid sections-tour">
          <div className="u-center-text u-margin-bottom-8">
            <h2 className="headig-secondary">Most Popular tours</h2>
          </div>
          <div className="row">
            <div className="col">
              <div className="card1">
                <div className="card1__side card1__side--front">
                  <div className="card1__picture card1__picture--1">&nbsp;</div>
                  <h4 className="card1__heading">
                    <span className="card1__heading--span card1__heading--span-1">
                      The sea with explore
                    </span>
                  </h4>
                  <div className="card1__detail"></div>
                  <ul>
                    <li>3 day tours</li>
                    <li>up to 30 people</li>
                    <li>2 tour guides</li>
                    <li>sleep in cozy hotel</li>
                    <li>Difficulty: easy</li>
                  </ul>
                </div>
                <div className="card1__side card1__side--back card1__side--back-1">
                  <div className="card1__cta">
                    <div className="card1__price-box">
                      <p className="card1__price-only">only</p>
                      <p className="card1__price-value">$297</p>
                    </div>
                    <a href="#" className="button btn--white">
                      book now!
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card1">
                <div className="card1__side card1__side--front">
                  <div className="card1__picture card1__picture--2">&nbsp;</div>
                  <h4 className="card1__heading">
                    <span className="card1__heading--span card1__heading--span-2">
                      The forest explore
                    </span>
                  </h4>
                  <div className="card1__detail"></div>
                  <ul>
                    <li>7 day tours</li>
                    <li>up to 40 people</li>
                    <li>6 tour guides</li>
                    <li>sleep in provided teants</li>
                    <li>Difficulty: Medium</li>
                  </ul>
                </div>
                <div className="card1__side card1__side--back card1__side--back-2">
                  <div className="card1__cta">
                    <div className="card1__price-box">
                      <p className="card1__price-only">only</p>
                      <p className="card1__price-value">$497</p>
                    </div>
                    <a href="#" className="button btn--white">
                      book now!
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
            <div className="card1">
                <div className="card1__side card1__side--front">
                  <div className="card1__picture card1__picture--3">&nbsp;</div>
                  <h4 className="card1__heading">
                    <span className="card1__heading--span card1__heading--span-3">
                      The snow adventures
                    </span>
                  </h4>
                  <div className="card1__detail"></div>
                  <ul>
                    <li>9 day tours</li>
                    <li>up to 50 people</li>
                    <li>6 tour guides</li>
                    <li>sleep in provided</li>
                    <li>Difficulty: hard</li>
                  </ul>
                </div>
                <div className="card1__side card1__side--back card1__side--back-3">
                  <div className="card1__cta">
                    <div className="card1__price-box">
                      <p className="card1__price-only">only</p>
                      <p className="card1__price-value">$897</p>
                    </div>
                    <a href="#" className="button btn--white">book now!</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="u-center-text u-margin-top-big">
          <a href="#" className="button btn--green">Discover all tours</a>

          </div>
        </section>

         
        <section className="section-stories">
          <div className="bg-video">
            <video
              src={video1}
              className="bg-video__container"
              autoPlay
              muted
              loop
            ></video>
          </div>
          <div className="u-center-text u-margin-bottom-8">
            <h2 className="headig-secondary">we make people genuenly happy</h2>
          </div>
          <div className="row5">
            <div className="story">
              <figure className="story__shape">
                <img src={story} alt="image" className="story_img" />
                <figcaption className="story__caption">
                  Nadine UWAJENEZA
                </figcaption>
              </figure>

              <div className="story__text">
                <h3 className="heading-tertiary u-margin-bottom-small">
                  I had the best week ever with my family
                </h3>
                <p className="paragraph">
                  Effective communication creates a bridge between diverse
                  stakeholders who may have different cultural and
                  organizational backgrounds, different levels of expertise, and
                  different perspectives and interests, which impact or have an
                  influence upon the project execution or outcome. which impact
                  or have an influence upon the project execution or outcome.
                </p>
              </div>
            </div>
          </div>
          <div className="row5">
            <div className="story">
              <figure className="story__shape">
                <img src={story} alt="image" className="story_img" />
                <figcaption className="story__caption">
                  Nadine UWAJENEZA
                </figcaption>
              </figure>

              <div className="story__text">
                <h3 className="heading-tertiary u-margin-bottom-small">
                  Wow my life is totally copletely differet
                </h3>
                <p className="paragraph">
                  Effective communication creates a bridge between diverse
                  stakeholders who may have different cultural and
                  organizational backgrounds, different levels of expertise, and
                  different perspectives and interests, which impact or have an
                  influence upon the project execution or outcome. which impact
                  or have an influence upon the project execution or outcome.
                </p>
              </div>
            </div>
          </div>
          <div className="second-button">
            <a href="#" className="btn-text">
              Lead all stories &rarr;{" "}
            </a>
          </div>
        </section>

        <section className="section-book">
          <div className="row4">
            <div className="book">
              <div className="book__form">
                <h2 className="headig-secondary heading-form">
                  Start booking now
                </h2>

                <form action="#" className="form">
                  <div className="form__group">
                    <input
                      type="text"
                      className="form__input"
                      placeholder="full-name"
                      id="name"
                      required
                    />
                    <label for="name" className="form__label">
                      Full Name
                    </label>
                  </div>
                  <div className="form__group">
                    <input
                      type="email"
                      className="form__input"
                      placeholder="email adress"
                      id="email"
                      required
                    />
                    <label for="email" className="form__label">
                      Full Name
                    </label>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section> 
      </main>
    </HomeLayout>
  );
};
export default Home;
