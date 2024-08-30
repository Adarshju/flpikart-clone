import React from "react";
import "./Nav.css";
import search_icon from "../../assets/images/search-icon.png";

const NavBar = () => {
  return (
    <div className="container-fluid bg-white">
      <div className="row m-0 p-0 d-flex flex-column justify-content-center align-items-center w-100">
        <div className=" col-xl-10 col-12 d-flex flex-column align-items-center justify-content-center nav-bar">
          <div className="d-flex align-items-center justify-content-around w-100 ">
            <div className="me-5">
              <img
                src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_exploreplus-44005d.svg"
                alt=""
              />
            </div>

            <div className="d-flex align-items-center justify-content-center  search  d-none d-md-block flex-grow-1">
              <div className="search-btn ms-2">
                <button className="border-0  ">
                  <img src={search_icon} alt="" />
                </button>
              </div>
              <div className="input">
                <input
                  style={{ backgroundColor: "rgb(220 222 225 0.58)" }}
                  className="w-100 py-1 ps-5 rounded border-0 fs-5"
                  type="text"
                  placeholder="Search For Products, Brandsand More"
                />
              </div>
            </div>
            <div className="d-flex align-items-center  ms-3 nav-menu">
              <ul className="d-flex align-items-center m-0 list-unstyled ">
                <li>
                  <div className="py-2 px-3 px-xxl-4  d-flex align-items-center profile">
                    <img
                      className="pe-2"
                      src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/profile-52e0dc.svg"
                      alt=""
                    />
                    <a
                      href=""
                      style={{ color: "rgb(0 0 0)" }}
                      className="text-decoration-none"
                    >
                      Adarsh
                    </a>
                  </div>
                </li>
                <li>
                  <div className="py-3 px-2 px-xxl-4  d-flex align-items-center">
                    <div className="img-box position-relative pe-2">
                      <h6 className="position-absolute "> 3</h6>
                      <img
                        className=""
                        src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/header_cart-eed150.svg"
                        alt=""
                      />
                    </div>

                    <a
                      href=""
                      style={{ color: "rgb(0 0 0)" }}
                      className="text-decoration-none d-none d-xxl-block"
                    >
                      Cart
                    </a>
                  </div>
                </li>
                <li className="d-none d-md-block">
                  <div className="py-3 px-2 px-xxl-4  d-flex align-items-center">
                    <img
                      className="pe-2"
                      src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/Store-9eeae2.svg"
                      alt=""
                    />
                    <a
                      href=""
                      style={{ color: "rgb(0 0 0)" }}
                      className="text-decoration-none d-none d-xxl-block"
                    >
                      Become a Seller
                    </a>
                  </div>
                </li>
                <li className="d-none d-md-block">
                  <div className=" d-flex align-items-center menu-btn">
                    <button className="p-2">
                      <img
                        src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/header_3verticalDots-ea7819.svg"
                        alt=""
                      />
                    </button>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="d-block d-md-none w-100 d-flex justify-content-center">
            <div className="sm-search w-100 position-relative">
              <div className="sm-search-icon position-absolute top-0 left-0 bottom-0 d-flex justify-content-center align-items-center">
                <button className="border-0 p-2">
                  <img src={search_icon} alt="" />
                </button>
              </div>
              <input
                className="w-100 border-0 py-1 ps-5 rounded-2"
                type="text"
                placeholder="Search For Products, Brandsand More"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
