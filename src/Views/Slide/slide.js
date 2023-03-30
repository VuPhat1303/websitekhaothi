import React, { Component } from 'react';
import logoheader2 from '../../acesst/images/hub_background.jpg';
import logoheader3 from '../../acesst/images/stat.jpg';
import logoheader4 from '../../acesst/images/sv-talk.jpg';
class Slide extends Component {
    render() {
        return (
            <div className="slidecontent">
      <div className="container-fluid">
        <div className="row">
          <div id="carouselExample" className="carousel slide">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img style={{height: '600px'}} src={logoheader2} className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img style={{height: '600px'}} src={logoheader3} className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img style={{height: '600px'}} height src={logoheader4} className="d-block w-100" alt="..." />
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
      </div>
        );
    }
}

export default Slide;