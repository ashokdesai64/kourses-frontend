import React, { Component } from 'react';
import Header from '../src/header';
import Footer from '../src/footer';
import Apicall from './services/get_course_all';
import landing_png from '../src/assets/images/landing.png';
import OwlCarousel from 'react-owl-carousel';

class home extends Component {

  render() {
    return (
      <React.Fragment>
        <Header />
        <section className="landing_sec">
          <div className="container">
            <div className="row">
              <div className="col-12 col-sm-12 col-md-12 col-lg-7">
                <div className="landing-text">
                  <h1>Learn the Skills to Land Your Dream Job</h1>
                  <p>Clear, concise and practical training with no fluff</p>
                  <a href="#text" role="button" className="btn btn-shape btn-shape-xl btn-shape-primary">Join 5000+ Happy Students</a>
                </div>
              </div>
            </div>
          </div>
          <div className="landing-sec_images">
            <img src={landing_png} alt="Landing bg" className="img-fluid" />
          </div>
        </section>
        <Apicall/>
        <section className="why-section">
          <div className="container">
            <div className="row">
              <div className="col-12 col-sm-12 col-md-12 col-lg-10 offset-lg-2">
                <div className="courses-discription">
                  <div className="section-title">
                    <h2>Why Code</h2>
                  </div>
                  <ul className="list-unstyled courses-discr_list text-left row">
                    <li className="col-12 col-sm-12 col-md-6 col-lg-6">Clear and concise training - no fluff</li>
                    <li className="col-12 col-sm-12 col-md-6 col-lg-6">Exercises and solutions</li>
                    <li className="col-12 col-sm-12 col-md-6 col-lg-6">Practical information - no useless theories</li>
                    <li className="col-12 col-sm-12 col-md-6 col-lg-6">Expert tips that make you a better coder</li>
                    <li className="col-12 col-sm-12 col-md-6 col-lg-6">Learn at your own pace - take your time</li>
                    <li className="col-12 col-sm-12 col-md-6 col-lg-6">Watch on any device, online or offline</li>
                    <li className="col-12 col-sm-12 col-md-6 col-lg-6">Unlimited access</li>
                    <li className="col-12 col-sm-12 col-md-6 col-lg-6">Certificate of completion per course</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="testimonial-sec">
          <div className="container">
            <div className="row">
              <div className="col-12 col-sm-12 col-md-12 col-lg-7 mr-auto">
                <div className="section-title">
                  <h2>Testimonial</h2>
                </div>
                <OwlCarousel className="owl-theme testimonial-carousel " items={1}   >
                  <div className="testimonial-item item">
                    <div className="testi-avatar">
                      <img src="https://kourses-codeigniter.qseksolutions.com/assets/front-end/images/avatar-testi.jpeg" className="img-fluid img-thumbnail" alt=""/>
                    </div>
                    <div className="testimonial-content">
                      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus illum alias laborum nam, fuga molestiae quidem consectetur architecto dignissimos,
                                    debitis rem saepe laboriosam fugiat ullam ducimus corrupti neque, error recusandae!</p>
                      <h4>Kaushik Barvaliya</h4>
                    </div>
                  </div>
                  <div className="testimonial-item item">
                    <div className="testi-avatar">
                      <img src="https://kourses-codeigniter.qseksolutions.com/assets/front-end/images/james.jpg" className="img-fluid img-thumbnail" alt=""/>
                    </div>
                    <div className="testimonial-content">
                      <p>Similique et facilis doloremque eum dolorem veritatis repellendus sit, corporis cupiditate
                                    officiis, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum provident tempora autem asperiores, modi quam? quos atque nulla.</p>
                      <h4>Jaimin Golakiya</h4>
                    </div>
                  </div>
                  <div className="testimonial-item item">
                    <div className="testi-avatar">
                      <img src="https://kourses-codeigniter.qseksolutions.com/assets/front-end/images/2824_20180831123921.jpg" className="img-fluid img-thumbnail" alt=""/>
                    </div>
                    <div className="testimonial-content">
                      <p>Illum provident tempora autem asperiores, Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                          modi quam? Similique et facilis doloremque eum dolorem veritatis repellendus sit, corporis cupiditate
                                        officiis, quos atque nulla.</p>
                      <h4>Jaydip Patel</h4>
                    </div>
                  </div>
                </OwlCarousel>
              </div>
            </div>
          </div>
          <div className="bg-shape right-shape">
            <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
              viewBox="0 0 600 400" style={{ enableBackground: 'new 0 0 600 400' }} xmlSpace="preserve">
                    <defs>
              <pattern id="news-item-2" patternUnits="userSpaceOnUse" width="100%" height="100%">
                  <image xlinkHref="https://kourses-codeigniter.qseksolutions.com/assets/front-end/images/testimonial-bg.jpg" />
                        </pattern>
            </defs>
              <path className="st0" d="M71,350L0,0c0,0,0,0.6,0,0l0,0h600l0,0v400l0,0H137C105,400,79,386,71,350z" style={{ fill: 'url(#news-item-2)' }} />
                </svg>

            </div>
        </section>
        <Footer />
      </React.Fragment>
    );
  }
}

export default home;


