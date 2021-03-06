import React, { useState } from "react";

export default function Footer() {
  const [showDropdown, setShowDropdown] = useState({
    profile: false,
    calculator: false,
    language: false,
    time: false,
  });

  return (
    <div className="footer-bar">
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-md-8">
            <ul className="footer-links">
              <li>
                <a href="#">Whitepaper</a>
              </li>
              <li>
                <a href="faq-page.html">FAQs</a>
              </li>
              <li>
                <a href="regular-page.html">Privacy Policy</a>
              </li>
              <li>
                <a href="regular-page.html">Terms of Condition</a>
              </li>
            </ul>
          </div>
          {/* <!-- .col --> */}
          <div className="col-md-4 mt-2 mt-sm-0">
            <div
              className="
          d-flex
          justify-content-between justify-content-md-end
          align-items-center
          guttar-25px
          pdt-0-5x
          pdb-0-5x
        "
            >
              <div className="copyright-text">&copy; 2018 TokenWiz.</div>
              <div className="lang-switch relative">
                <a
                  // href="#"
                  className="lang-switch-btn toggle-tigger"
                  onClick={() =>
                    setShowDropdown({
                      profile: false,
                      calculator: false,
                      language: !showDropdown.language,
                      time: false,
                    })
                  }
                >
                  En <em className="ti ti-angle-up"></em>
                </a>
                {showDropdown.language && (
                  <div className="toggle-className dropdown-content dropdown-content-up">
                    <ul className="lang-list">
                      <li>
                        <a href="#">Fr</a>
                      </li>
                      <li>
                        <a href="#">Bn</a>
                      </li>
                      <li>
                        <a href="#">En</a>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
          {/* <!-- .col --> */}
        </div>
        {/* <!-- .row --> */}
      </div>
      {/* <!-- .container --> */}
    </div>
  );
}
