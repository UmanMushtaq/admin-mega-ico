import React from "react";
import logo from "../../assets/images/logo.png";
import ath from "../../assets/images/ath-gfx.png";

const withAuthLayout = (WrappedComponent) => {
  const WithAuth = (props) => {
    return (
      <div className="page-ath-wrap">
        <div className="page-ath-content">
          <div className="page-ath-header">
            <a href="./" className="page-ath-logo">
              <img src={logo} alt="logo" />
            </a>
          </div>
          {/* ------------------------------------------ */}
          <WrappedComponent {...props} />
          {/* ------------------------------------------ */}
          <div className="page-ath-footer">
            <ul className="footer-links">
              <li>
                <a href="regular-page.html">Privacy Policy</a>
              </li>
              <li>
                <a href="regular-page.html">Terms</a>
              </li>
              <li>&copy; 2018 TokenWiz.</li>
            </ul>
          </div>
        </div>
        <div className="page-ath-gfx">
          <div className="w-100 d-flex justify-content-center">
            <div className="col-md-8 col-xl-5">
              <img src={ath} alt="image" />
            </div>
          </div>
        </div>
      </div>
    );
  };

  return WithAuth;
};

export default withAuthLayout;
