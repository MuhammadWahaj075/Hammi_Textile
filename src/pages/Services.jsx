import React from "react";
import { Link } from "react-router-dom";


import box_img_1 from "../assets/img/imagebox/image-box-1-370x215.jpg"
import box_img_2 from "../assets/img/imagebox/image-box-2-370x215.jpg"
import box_img_3 from "../assets/img/imagebox/image-box-3-370x215.jpg"
import box_img_4 from '../assets/img/imagebox/image-box-4-370x215.jpg'
import box_img_5 from '../assets/img/imagebox/image-box-5-370x215.jpg'
import box_img_6 from '../assets/img/imagebox/image-box-6-370x215.jpg'


const Services = () => {
  return (
    <>
      <div id="featured-title" class="featured-title clearfix">
        <div id="featured-title-inner" class="container clearfix">
          <div class="featured-title-inner-wrap">
            <div id="breadcrumbs">
              <div class="breadcrumbs-inner">
                <div class="breadcrumb-trail">
                  <Link to="/" class="trail-begin">
                    Home
                  </Link>
                  <span class="sep">|</span>
                  <span class="trail-end">Services</span>
                </div>
              </div>
            </div>
            <div class="featured-title-heading-wrap">
              <h1 class="feautured-title-heading">All Services</h1>
            </div>
          </div>
        </div>
      </div>
      <div class="row-iconbox">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div
                class="themesflat-spacer clearfix"
                data-desktop="60"
                data-mobile="60"
                data-smobile="60"
              ></div>
              <div class="themesflat-headings style-1 text-center clearfix">
                <h2 class="heading">Architecture & Interior Design</h2>
                <div class="sep has-icon width-125 clearfix">
                  <div class="sep-icon">
                    <span class="sep-icon-before sep-center sep-solid"></span>
                    <span class="icon-wrap">
                      <i class="Hammi-Architecture-icon-build"></i>
                    </span>
                    <span class="sep-icon-after sep-center sep-solid"></span>
                  </div>
                </div>
                <ul>
                  <li>
                    <b>Residences:</b> Family Homes, Multi Family Homes, Semi
                    Detached Homes, ADUs, Townhomes, apartments, Condos and all
                    other types.
                  </li>
                  <li>
                    <b>Commercial:</b> Business outlets, Retail shops, Salon &
                    Spa, Café & Restaurants.
                  </li>
                </ul>
              </div>
              <div
                class="themesflat-spacer clearfix"
                data-desktop="42"
                data-mobile="35"
                data-smobile="35"
              ></div>
            </div>
          </div>
        </div>
      </div>
      <div id="main-content" class="site-main clearfix">
        <div id="content-wrap">
          <div id="site-content" class="site-content clearfix">
            <div id="inner-content" class="inner-content-wrap">
              <div class="page-content">
                <div class="row-services">
                  <div class="container">
                    <div class="row">
                      <div class="col-md-12">
                        <div
                          class="themesflat-spacer clearfix"
                          data-desktop="81"
                          data-mobile="60"
                          data-smobile="60"
                        ></div>
                        <div
                          class="themesflat-carousel-box data-effect clearfix"
                          data-gap="30"
                          data-column="3"
                          data-column2="2"
                          data-column3="1"
                          data-auto="true"
                        >
                          <div class="owl-carousel owl-theme">
                            <div class="themesflat-image-box style-2 clearfix">
                              <div class="image-box-item">
                                <div class="inner">
                                  <div class="thumb data-effect-item">
                                    <img
                                      src={box_img_1}
                                      alt="Image"
                                    />
                                    <div class="overlay-effect bg-color-accent"></div>
                                  </div>
                                  <div class="text-wrap">
                                    <h5 class="heading">
                                      <a href="#">DESIGN-BUILD</a>
                                    </h5>
                                    <p class="letter-spacing-01">
                                      We develop and understand project
                                      expectations and then manage those needs
                                      with a design [...]
                                    </p>
                                    <div class="elm-readmore">
                                      <a href="page-services-detail.html">
                                        DETAILS
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div class="themesflat-image-box style-2 clearfix">
                              <div class="image-box-item">
                                <div class="inner">
                                  <div class="thumb data-effect-item">
                                    <img
                                      src={box_img_2}
                                      alt="Image"
                                    />
                                    <div class="overlay-effect bg-color-accent"></div>
                                  </div>
                                  <div class="text-wrap">
                                    <h5 class="heading">
                                      <a href="#">CONSTRUCTION MANAGEMENT</a>
                                    </h5>
                                    <p class="letter-spacing-01">
                                      We work closely with architects to
                                      understand the project, and ultimately
                                      develop a targeted [...]
                                    </p>
                                    <div class="elm-readmore">
                                      <a href="page-services-detail.html">
                                        DETAILS
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div class="themesflat-image-box style-2 clearfix">
                              <div class="image-box-item">
                                <div class="inner">
                                  <div class="thumb data-effect-item">
                                    <img
                                      src={box_img_3}
                                      alt="Image"
                                    />
                                    <div class="overlay-effect bg-color-accent"></div>
                                  </div>
                                  <div class="text-wrap">
                                    <h5 class="heading">
                                      <a href="#">METAL BUILDING SERVICES</a>
                                    </h5>
                                    <p class="letter-spacing-01">
                                      In the past decade alone, we have
                                      completed more than 5 million square feet
                                      of metal [...]
                                    </p>
                                    <div class="elm-readmore">
                                      <a href="page-services-detail.html">
                                        DETAILS
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div class="themesflat-image-box style-2 clearfix">
                              <div class="image-box-item">
                                <div class="inner">
                                  <div class="thumb data-effect-item">
                                    <img
                                      src={box_img_1}
                                      alt="Image"
                                    />
                                    <div class="overlay-effect bg-color-accent"></div>
                                  </div>
                                  <div class="text-wrap">
                                    <h5 class="heading">
                                      <a href="#">DESIGN-BUILD</a>
                                    </h5>
                                    <p class="letter-spacing-01">
                                      We develop and understand project
                                      expectations and then manage those needs
                                      with a design [...]
                                    </p>
                                    <div class="elm-readmore">
                                      <a href="page-services-detail.html">
                                        DETAILS
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div class="themesflat-image-box style-2 clearfix">
                              <div class="image-box-item">
                                <div class="inner">
                                  <div class="thumb data-effect-item">
                                    <img
                                      src={box_img_2}
                                      alt="Image"
                                    />
                                    <div class="overlay-effect bg-color-accent"></div>
                                  </div>
                                  <div class="text-wrap">
                                    <h5 class="heading">
                                      <a href="#">CONSTRUCTION MANAGEMENT</a>
                                    </h5>
                                    <p class="letter-spacing-01">
                                      We work closely with architects to
                                      understand the project, and ultimately
                                      develop a targeted [...]
                                    </p>
                                    <div class="elm-readmore">
                                      <a href="page-services-detail.html">
                                        DETAILS
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div class="themesflat-image-box style-2 clearfix">
                              <div class="image-box-item">
                                <div class="inner">
                                  <div class="thumb data-effect-item">
                                    <img
                                      src={box_img_3}
                                      alt="Image"
                                    />
                                    <div class="overlay-effect bg-color-accent"></div>
                                  </div>
                                  <div class="text-wrap">
                                    <h5 class="heading">
                                      <a href="#">METAL BUILDING SERVICES</a>
                                    </h5>
                                    <p class="letter-spacing-01">
                                      In the past decade alone, we have
                                      completed more than 5 million square feet
                                      of metal [...]
                                    </p>
                                    <div class="elm-readmore">
                                      <a href="page-services-detail.html">
                                        DETAILS
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          class="themesflat-spacer clearfix"
                          data-desktop="15"
                          data-mobile="15"
                          data-smobile="15"
                        ></div>
                        <div
                          class="themesflat-carousel-box data-effect clearfix"
                          data-gap="30"
                          data-column="3"
                          data-column2="2"
                          data-column3="1"
                          data-auto="true"
                        >
                          <div class="owl-carousel owl-theme">
                            <div class="themesflat-image-box style-2 clearfix">
                              <div class="image-box-item">
                                <div class="inner">
                                  <div class="thumb data-effect-item">
                                    <img
                                      src={box_img_4}
                                      alt="Image"
                                    />
                                    <div class="overlay-effect bg-color-accent"></div>
                                  </div>
                                  <div class="text-wrap">
                                    <h5 class="heading">
                                      <a href="#">METAL BUILDING SERVICES</a>
                                    </h5>
                                    <p class="letter-spacing-01">
                                      In the past decade alone, we have
                                      completed more than 5 million square feet
                                      of metal building [...]
                                    </p>
                                    <div class="elm-readmore">
                                      <a href="page-services-detail.html">
                                        DETAILS
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div class="themesflat-image-box style-2 clearfix">
                              <div class="image-box-item">
                                <div class="inner">
                                  <div class="thumb data-effect-item">
                                    <img
                                      src={box_img_5}
                                      alt="Image"
                                    />
                                    <div class="overlay-effect bg-color-accent"></div>
                                  </div>
                                  <div class="text-wrap">
                                    <h5 class="heading">
                                      <a href="#">PRECONSTRUCTION SERVICES</a>
                                    </h5>
                                    <p class="letter-spacing-01">
                                      Hammi-Architecture Construction Services
                                      provides the right resources and expertise
                                      to evaluate concepts [...]
                                    </p>
                                    <div class="elm-readmore">
                                      <a href="page-services-detail.html">
                                        DETAILS
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div class="themesflat-image-box style-2 clearfix">
                              <div class="image-box-item">
                                <div class="inner">
                                  <div class="thumb data-effect-item">
                                    <img
                                      src={box_img_6}
                                      alt="Image"
                                    />
                                    <div class="overlay-effect bg-color-accent"></div>
                                  </div>
                                  <div class="text-wrap">
                                    <h5 class="heading">
                                      <a href="#">CONCRETE STRUCTURES</a>
                                    </h5>
                                    <p class="letter-spacing-01">
                                      We employs a talented team of industry
                                      leading professionals capable of
                                      self-performing [...]
                                    </p>
                                    <div class="elm-readmore">
                                      <a href="page-services-detail.html">
                                        DETAILS
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div class="themesflat-image-box style-2 clearfix">
                              <div class="image-box-item">
                                <div class="inner">
                                  <div class="thumb data-effect-item">
                                    <img
                                      src={box_img_4}
                                      alt="Image"
                                    />
                                    <div class="overlay-effect bg-color-accent"></div>
                                  </div>
                                  <div class="text-wrap">
                                    <h5 class="heading">
                                      <a href="#">METAL BUILDING SERVICES</a>
                                    </h5>
                                    <p class="letter-spacing-01">
                                      In the past decade alone, we have
                                      completed more than 5 million square feet
                                      of metal building [...]
                                    </p>
                                    <div class="elm-readmore">
                                      <a href="page-services-detail.html">
                                        DETAILS
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div class="themesflat-image-box style-2 clearfix">
                              <div class="image-box-item">
                                <div class="inner">
                                  <div class="thumb data-effect-item">
                                    <img
                                      src={box_img_5}
                                      alt="Image"
                                    />
                                    <div class="overlay-effect bg-color-accent"></div>
                                  </div>
                                  <div class="text-wrap">
                                    <h5 class="heading">
                                      <a href="#">PRECONSTRUCTION SERVICES</a>
                                    </h5>
                                    <p class="letter-spacing-01">
                                      Hammi-Architecture Construction Services
                                      provides the right resources and expertise
                                      to evaluate concepts [...]
                                    </p>
                                    <div class="elm-readmore">
                                      <a href="page-services-detail.html">
                                        DETAILS
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div class="themesflat-image-box style-2 clearfix">
                              <div class="image-box-item">
                                <div class="inner">
                                  <div class="thumb data-effect-item">
                                    <img
                                      src={box_img_6}
                                      alt="Image"
                                    />
                                    <div class="overlay-effect bg-color-accent"></div>
                                  </div>
                                  <div class="text-wrap">
                                    <h5 class="heading">
                                      <a href="#">CONCRETE STRUCTURES</a>
                                    </h5>
                                    <p class="letter-spacing-01">
                                      We employs a talented team of industry
                                      leading professionals capable of
                                      self-performing [...]
                                    </p>
                                    <div class="elm-readmore">
                                      <a href="page-services-detail.html">
                                        DETAILS
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          class="themesflat-spacer clearfix"
                          data-desktop="45"
                          data-mobile="60"
                          data-smobile="60"
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
