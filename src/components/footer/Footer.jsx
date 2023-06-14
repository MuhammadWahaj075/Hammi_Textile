import React from "react";
import post_1 from "../../assets/img/news/post-1-65x65.jpg"
import post_2 from "../../assets/img/news/post-2-65x65.jpg"

const Footer = () => {
  return (
    <footer id="footer" className="clearfix">
      <div id="footer-widgets" className="container">
        <div className="themesflat-row gutter-30">
          <div className="col span_1_of_3">
            <div className="widget widget_text">
              <div className="textwidget">
                <p>
                  <h2 style={{ color: "#fff" }}>Hammi Architecture</h2>
                </p>

                <p className="margin-bottom-15">
                  We have over 15 years of experien able to help you 24 hours a
                  day.
                </p>

                <ul>
                  <li>
                    <div className="inner">
                      <span className="fa fa-map-marker"></span>
                      <span className="text">
                        37-C Lane 01, Rahat Commercial{" "}
                        <span className="sl">Phase 6, Defence, Karachi</span>
                      </span>
                    </div>
                  </li>

                  <li>
                    <div className="inner">
                      <span className="fa fa-phone"></span>
                      <span className="text">CALL US : +92-330-202-5666</span>
                    </div>
                  </li>

                  <li className="margin-top-7">
                    <div className="inner">
                      <span className=" font-size-14 fa fa-envelope"></span>
                      <span className="text">SUPPORT@HAMMI</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div
              className="themesflat-spacer clearfix"
              data-desktop="0"
              data-mobile="0"
              data-smobile="35"
            ></div>
          </div>

          <div className="col span_1_of_3">
            <div
              className="themesflat-spacer clearfix"
              data-desktop="0"
              data-mobile="0"
              data-smobile="0"
            ></div>

            <div className="widget widget_lastest">
              <h2 className="widget-title">
                <span>RECENT POSTS</span>
              </h2>
              <ul className="lastest-posts data-effect clearfix">
                <li className="clearfix">
                  <div className="thumb data-effect-item has-effect-icon">
                    <img src={post_1} alt="Image" />
                    <div className="overlay-effect bg-color-2"></div>
                    <div className="elm-link">
                      <a href="page-blog-single.html" className="icon-2"></a>
                    </div>
                  </div>
                  <div className="text">
                    <h3>
                      <a href="page-blog-single.html">
                        SMART BUILDING WITH CONCRETE SUSTAINABLE
                      </a>
                    </h3>
                    <span className="post-date">
                      <span className="entry-date">29 June 2018</span>
                    </span>
                  </div>
                </li>
                <li className="clearfix">
                  <div className="thumb data-effect-item has-effect-icon">
                    <img src={post_2} alt="Image" />
                    <div className="overlay-effect bg-color-2"></div>
                    <div className="elm-link">
                      <a href="page-blog-single.html" className="icon-2"></a>
                    </div>
                  </div>
                  <div className="text">
                    <h3>
                      <a href="page-blog-single.html">
                        HI-TECH WOODEN HOUSE BUILT WITHOUT GLUE
                      </a>
                    </h3>
                    <span className="post-date">
                      <span className="entry-date">31 June 2018</span>
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="col span_1_of_3">
            <div
              className="themesflat-spacer clearfix"
              data-desktop="0"
              data-mobile="35"
              data-smobile="35"
            ></div>

            <div className="widget widget_tags">
              <h2 className="widget-title margin-bottom-30">
                <span>TAGS</span>
              </h2>
              <div className="tags-list">
                <a href="#">Building</a>
                <a href="#">Smart House</a>
                <a href="#">Costruction</a>
                <a href="#">Villa</a>
                <a href="#">Residential</a>
                <a href="#">Interior</a>
                <a href="#">Resort</a>
                <a href="#">Commercial</a>
              </div>
            </div>
          </div>

          <div className="col span_1_of_3">
            <div
              className="themesflat-spacer clearfix"
              data-desktop="0"
              data-mobile="35"
              data-smobile="35"
            ></div>

            <div className="widget widget_instagram">
              <h2 className="widget-title margin-bottom-30">
                <span>INSTAGRAM PHOTOS</span>
              </h2>
              <div className="instagram-wrap data-effect clearfix col3 g10">
                <div className="instagram_badge_image has-effect-icon">
                  <a href="#" target="_blank" className="data-effect-item">
                    <span className="item">
                      <img
                        src="assets/img/instagram/instagram-1-83x83.jpg"
                        alt="Image"
                      />
                    </span>
                    <div className="overlay-effect bg-color-2"></div>
                    <div className="elm-link">
                      <span className="icon-3"></span>
                    </div>
                  </a>
                </div>

                <div className="instagram_badge_image has-effect-icon">
                  <a href="#" target="_blank" className="data-effect-item">
                    <span className="item">
                      <img
                        src="assets/img/instagram/instagram-2-83x83.jpg"
                        alt="Image"
                      />
                    </span>
                    <div className="overlay-effect bg-color-2"></div>
                    <div className="elm-link">
                      <span className="icon-3"></span>
                    </div>
                  </a>
                </div>

                <div className="instagram_badge_image has-effect-icon">
                  <a href="#" target="_blank" className="data-effect-item">
                    <span className="item">
                      <img
                        src="assets/img/instagram/instagram-3-83x83.jpg"
                        alt="Image"
                      />
                    </span>
                    <div className="overlay-effect bg-color-2"></div>
                    <div className="elm-link">
                      <span className="icon-3"></span>
                    </div>
                  </a>
                </div>

                <div className="instagram_badge_image has-effect-icon">
                  <a href="#" target="_blank" className="data-effect-item">
                    <span className="item">
                      <img
                        src="assets/img/instagram/instagram-4-83x83.jpg"
                        alt="Image"
                      />
                    </span>
                    <div className="overlay-effect bg-color-2"></div>
                    <div className="elm-link">
                      <span className="icon-3"></span>
                    </div>
                  </a>
                </div>

                <div className="instagram_badge_image has-effect-icon">
                  <a href="#" target="_blank" className="data-effect-item">
                    <span className="item">
                      <img
                        src="assets/img/instagram/instagram-5-83x83.jpg"
                        alt="Image"
                      />
                    </span>
                    <div className="overlay-effect bg-color-2"></div>
                    <div className="elm-link">
                      <span className="icon-3"></span>
                    </div>
                  </a>
                </div>

                <div className="instagram_badge_image has-effect-icon">
                  <a href="#" target="_blank" className="data-effect-item">
                    <span className="item">
                      <img
                        src="assets/img/instagram/instagram-6-83x83.jpg"
                        alt="Image"
                      />
                    </span>
                    <div className="overlay-effect bg-color-2"></div>
                    <div className="elm-link">
                      <span className="icon-3"></span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
