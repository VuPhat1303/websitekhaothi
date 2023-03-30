import React, { Component } from 'react';
import logoheader from '../../acesst/images/_wiwn8912WI_logo-vhubnew.png';

class Footer extends Component {
    render() {
        return (
            <div className="footer text-white py-4">
      <div className="container">
        <div className="inner">
          <div className="row">
            <div className="col-lg-6 col-md-12 text-center">
              <img style={{width: '350px', height: '80px'}} src={logoheader} className="lg-ft" />
              <p>
                <strong><i className="fa fa-home" aria-hidden="true" /> Trường Đại học Văn Lang</strong>
              </p><hr />
              <p><strong>Cơ sở chính:</strong> 69/68 Đặng Thùy Trâm, P. 13, Q. Bình Thạnh, TP. HCM</p>
              <p><strong>Cơ sở 1</strong>: 45 Nguyễn Khắc Nhu, P. Cô Giang, Q.1, TP. HCM</p>
              <p><strong>Cơ sở 2</strong>: 233A Phan Văn Trị, P.11, Q. Bình Thạnh, TP. HCM</p>
              <p><strong>Ký túc xá</strong>: 160/63A-B Phan Huy Ích, P. 12, Q. Gò Vấp, TP. HCM</p>
              <strong>Điện thoại: 028.71099221- EXT: 3320</strong>
              <p />
            </div>
            <div className="text-center col-lg-6 col-md-12">
              <div className="container">
                <div>
                  <iframe style={{border: 0, width: '100%', height: '270px'}} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.789413768963!2d106.69792441513167!3d10.827421492286998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317528f4a62fce9b%3A0xc99902aa1e26ef02!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBWxINuIExhbmc!5e0!3m2!1svi!2s!4v1670586561289!5m2!1svi!2s" frameBorder={0} allowFullScreen />
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className="copyright">
            © 2023 - Bản Quyền Thuộc Trường Đại học Văn Lang
            {/* <ul class="icons" style="margin: 0">
                    <li style="list-style: none; text-decoration: none;  ">
                        <a href="#" style="font-size: 25px;" class='bx bxl-youtube'></a>
                    </li>
                    <li style=" list-style: none; text-decoration: none; color: rgb(128, 124, 124) ">
                        <a href="#" style="font-size: 25px;" class='bx bxl-facebook-square'></a>
                    </li>
                    <li style="list-style: none; text-decoration: none; ">

                        <a href="#" style="font-size: 25px;" class='bx bxs-graduation'></a>
                    </li>
                </ul> */}
            <hr />
            <a style={{textDecoration: 'none', color: 'aliceblue'}} href="#">Chính sách quyền riêng tư</a>
          </div>
        </div>
      </div>
      </div>
        );
    }
}

export default Footer;