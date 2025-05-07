import React from "react";
import Slider from "react-slick";
import useStyles from "./style";


export default function Application() {
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 1500,
  };
  const textDecoration = { textDecoration: "underline" };
  const classes = useStyles();


  return (
    <div id="ungdung">
      <div className={classes.mobileApp}>
        <div className={classes.mainMaxWidth}>
          <div className="row">
            <div className="col-lg-6 ">
              <div
                className={`${classes.mobileApp__left} text-center text-lg-left`}
              >
                <div>
                  <p className={classes.textLeft}>Ứng dụng tiện lợi dành cho</p>
                  <p className={classes.textLeft}>người yêu điện ảnh</p>
                  <br />
                  <p>
                    Không chỉ đặt vé, bạn còn có thể bình luận phim, chấm điểm
                    rạp và đổi quà hấp dẫn.
                  </p>
                  <br />
                  <br />
                  <p className="py-3">
                    Tix có hai phiên bản{" "}
                    <span>
                      <a
                        href="https://itunes.apple.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={textDecoration}
                      >
                        IOS
                      </a>
                    </span>{" "}
                    và{" "}
                    <span>
                      <a
                        style={textDecoration}
                        href="https://play.google.com"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Android
                      </a>
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className={classes.mobileApp__right}>
                <img
                  className={classes.bgmobile}
                  src="/img/media/mobile.png"
                  alt="mobile"
                />
                <Slider {...settings} className={classes["slick-mobile"]}>
                  <div>
                    <img src="./img/slide/slide1.jpg" alt="" />
                  </div>
                  <div>
                    <img src="./img/slide/slide2.jpg" alt="" />
                  </div>
                  <div>
                    <img src="./img/slide/slide3.jpg" alt="" />
                  </div>
                  <div>
                    <img src="./img/slide/slide4.jpg" alt="" />
                  </div>
                  <div>
                    <img src="./img/slide/slide5.jpg" alt="" />
                  </div>
                  <div>
                    <img src="./img/slide/slide6.jpg" alt="" />
                  </div>
                  <div>
                    <img src="./img/slide/slide7.jpg" alt="" />
                  </div>
                  <div>
                    <img src="./img/slide/slide8.jpg" alt="" />
                  </div>
                  <div>
                    <img src="./img/slide/slide9.jpg" alt="" />
                  </div>
                  <div>
                    <img src="./img/slide/slide10.jpg" alt="" />
                  </div>
                  <div>
                    <img src="./img/slide/slide11.jpg" alt="" />
                  </div>
                  <div>
                    <img src="./img/slide/slide12.jpg" alt="" />
                  </div>
                  <div>
                    <img src="./img/slide/slide13.jpg" alt="" />
                  </div>
                  <div>
                    <img src="./img/slide/slide14.jpg" alt="" />
                  </div>
                  <div>
                    <img src="./img/slide/slide15.jpg" alt="" />
                  </div>
                  <div>
                    <img src="./img/slide/slide16.jpg" alt="" />
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
