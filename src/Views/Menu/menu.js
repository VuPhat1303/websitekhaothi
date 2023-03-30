import React, { Component } from 'react';

class Menu extends Component {
    render() {
        return (
            <div className="menu">
      <div className="container bg-danger">
        <div className="row">
          <div className="menu">
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
              <div className="container-fluid">
                <a className="navbar-brand d-none  " href="#" />
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="s">
                  <i style={{color: 'aliceblue', fontSize: '25px'}} className="bx bx-menu buttonmenu " />
                </button>
                <div className="seach-menu" role="search">
                  <a href="#"><i style={{margin: '3px 5px', fontSize: '20px', color: 'aliceblue'}} className="bx bx-search" /></a>
                </div>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className=" list-nav navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <a className="nav-link active text-white" aria-current="page" href="#">GIỚI THIỆU</a>
                    </li>
                    <li className="nav-item dropdown ">
                      <a className="nav-link dropdown-toggle text-white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"> HƯỚNG DẪN</a>
                      <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#">ĐĂNG KÍ THI</a></li>
                        <li><a className="dropdown-item" href="#">LỆ PHÍ</a></li>
                        <li><a className="dropdown-item" href="#">QUY CHẾ THI</a></li>
                      </ul>
                    </li>
                    <li className="nav-item dropdown">
                      <a className="nav-link dropdown-toggle text-white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        KỲ THI
                      </a>
                      <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#">Đánh Giá NLTA Đầu Ra 26/3</a></li>
                      </ul>
                    </li>
                    <li className="nav-item dropdown">
                      <a className="nav-link dropdown-toggle  text-white " href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">TRA CỨU</a>
                      <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#">LỊCH THI</a></li>
                        <li><a className="dropdown-item" href="#">LỆ PHÍ</a></li>
                        <li><a className="dropdown-item" href="#">ĐIỂM THI</a></li>
                      </ul>
                    </li>
                    <li className="nav-item dropdown">
                      <a className="nav-link dropdown-toggle  text-white " href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">DIỄN ĐÀN</a>
                      <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#">HỎI ĐÁP</a></li>
                        <li><a className="dropdown-item" href="#">FACEBOOK</a></li>
                        <li><a className="dropdown-item" href="#">YOUTUBE</a></li>
                      </ul>
                    </li>
                  </ul>
                  <form className="d-flex">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button style={{color:'white' , borderColor:'white' }} className="btn btn-outline-success" type="submit">Search</button> 
                    
                  </form>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
      </div>
        );
    }
}

export default Menu;