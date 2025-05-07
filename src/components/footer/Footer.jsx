import React from 'react'
import useStyles from './style'
const Footer = () => {
  const classes = useStyles()
  return (
    <div className={classes.footer}>
      <div className={`${classes.footer__up} row`}>
        <div className="col-6 col-md-4">
          <div className={classes.tix__text}>
            <div className="d-none d-lg-block d-xl-block">
              <p>TIX</p>
              <a target="_blank" rel="noopener noreferrer" href="https://www.cgv.vn/">FAQ</a>
              <a target="_blank" rel="noopener noreferrer" href="https://www.cgv.vn/">Brand Guidelines</a>
            </div>
            <div className="row">
              <a className="col-6 col-lg-12" target="_blank" rel="noopener noreferrer" href="https://www.cgv.vn/">Thỏa thuận sử dụng</a>
              <a className="col-6 col-lg-12" target="_blank" rel="noopener noreferrer" href="https://www.cgv.vn/">Chính sách bảo mật</a>
            </div>
          </div>
        </div>
        <div className="col-6 col-md-4 footer__company d-none d-lg-block d-xl-block">
          <p>Đối tác</p>
          <div>
            <div className={classes.company__logo}>
              <a target="_blank" rel="noopener noreferrer" href="https://www.cgv.vn/"><img src="/img/logo/cgv.png" alt="" className={classes.logo} /></a>
              <a target="_blank" rel="noopener noreferrer" href="https://www.cgv.vn/"><img src="/img/logo/bhd.png" alt="" className={classes.logo} /></a>
              <a target="_blank" rel="noopener noreferrer" href="https://www.cgv.vn/"><img src="/img/logo/galaxycine.png" alt="" className={classes.logo} /></a>
              <a target="_blank" rel="noopener noreferrer" href="https://www.cgv.vn/"><img src="/img/logo/cinestar.png" alt="" className={classes.logo} /></a>
              <a target="_blank" rel="noopener noreferrer" href="https://www.cgv.vn/"><img src="/img/logo/lotte.png" alt="" className={classes.logo} /></a>
            </div>
            <div className={classes.company__logo}>
              <a target="_blank" rel="noopener noreferrer" href="https://www.cgv.vn/"><img src="/img/logo/megags.png" alt="" className={classes.logo} /></a>
              <a target="_blank" rel="noopener noreferrer" href="https://www.cgv.vn/"><img src="/img/logo/bt.jpg" alt="" className={classes.logo} /></a>
              <a target="_blank" rel="noopener noreferrer" href="https://www.cgv.vn/"><img src="/img/logo/dongdacinema.png" alt="" className={classes.logo} /></a>
              <a target="_blank" rel="noopener noreferrer" href="https://www.cgv.vn/"><img src="/img/logo/TOUCH.png" alt="" className={classes.logo} /></a>
              <a target="_blank" rel="noopener noreferrer" href="https://www.cgv.vn/"><img src="/img/logo/cnx.jpg" alt="" className={classes.logo} /></a>
            </div>
            <div className={classes.company__logo}>
              <a target="_blank" rel="noopener noreferrer" href="https://www.cgv.vn/"><img src="/img/logo/STARLIGHT.png" alt="" className={classes.logo} /></a>
              <a target="_blank" rel="noopener noreferrer" href="https://www.cgv.vn/"><img src="/img/logo/dcine.png" alt="" className={classes.logo} /></a>
              <a target="_blank" rel="noopener noreferrer" href="https://www.cgv.vn/"><img src="/img/logo/zalopay_icon.png" alt="" className={classes.logo} /></a>
              <a target="_blank" rel="noopener noreferrer" href="https://www.cgv.vn/"><img src="/img/logo/payoo.jpg" alt="" className={classes.logo} /></a>
              <a target="_blank" rel="noopener noreferrer" href="https://www.cgv.vn/"><img src="/img/logo/vcb.png" alt="" className={classes.logo} /></a>
            </div>
            <div className={classes.company__logo}>
              <a target="_blank" rel="noopener noreferrer" href="https://www.cgv.vn/"><img src="/img/logo/AGRIBANK.png" alt="" className={classes.logo} /></a>
              <a target="_blank" rel="noopener noreferrer" href="https://www.cgv.vn/"><img src="/img/logo/VIETTINBANK.png" alt="" className={classes.logo} /></a>
              <a target="_blank" rel="noopener noreferrer" href="https://www.cgv.vn/"><img src="/img/logo/IVB.png" alt="" className={classes.logo} /></a>
              <a target="_blank" rel="noopener noreferrer" href="https://www.cgv.vn/"><img src="/img/logo/123go.png" alt="" className={classes.logo} /></a>
              <a target="_blank" rel="noopener noreferrer" href="https://www.cgv.vn/"><img src="/img/logo/laban.png" alt="" className={classes.logo} /></a>
            </div>
          </div>
        </div>
        <div className="col-6 col-md-4 d-flex text-center">
          <div className={`${classes.social__width} d-none d-lg-block d-xl-block`}>
            <p className="pb-2">MOBIL APP</p>
            <div className="footer__mobile d-flex justify-content-around">
              <a target="_blank" rel="noopener noreferrer" href="https://www.cgv.vn/"><img className={classes.logo} src="/img/media/apple-logo.png" alt="" /></a>
              <a target="_blank" rel="noopener noreferrer" href="https://www.cgv.vn/"><img className={classes.logo} src="/img/media/android-logo.png" alt="" /></a>
            </div>
          </div>
          <div className={classes.social__width}>
            <p className="d-none d-lg-block d-xl-block pb-2">SOCIAL APP</p>
            <div className={classes.footer__social}>
              <a target="_blank" rel="noopener noreferrer" href="https://www.cgv.vn/"><img className={classes.logo} src="/img/media/facebook-logo.png" alt="" /></a>
              <a target="_blank" rel="noopener noreferrer" href="https://www.cgv.vn/"><img className={classes.logo} src="/img/media/zalo-logo.png" alt="" /></a>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}

export default Footer;
