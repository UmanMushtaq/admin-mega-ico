import React from "react";
import withMainLayout from "../../HOC/withMainLayout";
// import { Link } from "react-router-dom";
import passportAFornt from "../../../assets/images/passport-a-fornt.jpg";
import passportABack from "../../../assets/images/passport-a-back.jpg";
import { useHistory } from "react-router";
import { useState } from "react";

const KycForm = () => {
  let history = useHistory();
  const [toggleMenu, setToggleMenu] = useState(false);

  const toogleMenuBtn = (e) => {
    e.preventDefault();
    setToggleMenu(!toggleMenu);
  };
  return (
    <>
      <div className="page-content">
        <div className="container">
          <div className="card content-area">
            <div className="card-innr">
              <div className="card-head d-flex justify-content-between align-items-center">
                <h4 className="card-title mb-0">KYC Details</h4>
                <div className="d-flex align-items-center guttar-20px">
                  <div className="flex-col d-sm-block d-none">
                    <button
                      className="btn btn-sm btn-auto btn-primary"
                      onClick={() => history.goBack()}
                    >
                      <em className="fas fa-arrow-left mr-3"></em>Back
                    </button>
                  </div>
                  <div className="flex-col d-sm-none">
                    <a
                      href="kyc-list.html"
                      className="btn btn-icon btn-sm btn-primary"
                    >
                      <em className="fas fa-arrow-left"></em>
                    </a>
                  </div>
                  <div className="relative d-inline-block">
                    <a
                      href="#"
                      className="btn btn-dark btn-sm btn-icon toggle-tigger"
                      onClick={(e) => toogleMenuBtn(e)}
                    >
                      <em className="ti ti-more-alt"></em>
                    </a>
                    <div
                      className={`${
                        toggleMenu ? null : "toggle-class"
                      } dropdown-content dropdown-content-top-left`}
                    >
                      <ul className="dropdown-list">
                        <li>
                          <a href="#">
                            <em className="ti ti-check"></em> Approve
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <em className="ti ti-na"></em> Cancel
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <em className="ti ti-trash"></em> Delete
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="gaps-1-5x"></div>
              <div className="data-details d-md-flex flex-wrap align-items-center justify-content-between">
                <div className="fake-class">
                  <span className="data-details-title">Submited By</span>
                  <span className="data-details-info">UD102001</span>
                </div>
                <div className="fake-class">
                  <span className="data-details-title">Submited On</span>
                  <span className="data-details-info">2018-08-24 10:12PM</span>
                </div>
                <div className="fake-class">
                  <span class="data-details-title">Checked By</span>
                  <span class="data-details-info">Admin</span>
                </div>
                <div className="fake-class">
                  <span className="data-details-title">Checked On</span>
                  <span className="data-details-info">2018-08-24 10:12PM</span>
                </div>
                <div className="fake-class">
                  <span className="badge badge-md badge-block badge-success ucap tran-btn">
                    Approved
                  </span>
                </div>
                <div className="gaps-2x w-100 d-none d-md-block"></div>
                <div className="w-100">
                  <span className="data-details-title">Admin Note</span>
                  <span className="data-details-info">
                    Verified by phone call
                  </span>
                </div>
              </div>
              <div className="gaps-3x"></div>
              <h6 className="card-sub-title">Personal Information</h6>
              <ul className="data-details-list">
                <li>
                  <div className="data-details-head">First Name</div>
                  <div className="data-details-des">Abu Bin</div>
                </li>
                {/* <!-- li --> */}
                <li>
                  <div className="data-details-head">Last Name</div>
                  <div className="data-details-des">Ishtiyak</div>
                </li>
                {/* <!-- li --> */}
                <li>
                  <div className="data-details-head">Email Address</div>
                  <div className="data-details-des">info(at)softnio.com</div>
                </li>
                {/* <!-- li --> */}
                <li>
                  <div className="data-details-head">Phone Number</div>
                  <div className="data-details-des">+880 01700 020203</div>
                </li>
                {/* <!-- li --> */}
                <li>
                  <div className="data-details-head">Date of Birth</div>
                  <div className="data-details-des">05 January, 1980</div>
                </li>
                {/* <!-- li --> */}
                <li>
                  <div className="data-details-head">Full Address</div>
                  <div className="data-details-des">
                    Address Line 1, Address Line 2, City Name, Zipcode.
                  </div>
                </li>
                {/* <!-- li --> */}
                <li>
                  <div className="data-details-head">Country of Residence</div>
                  <div className="data-details-des">Bangladesh</div>
                </li>
                {/* <!-- li --> */}
                <li>
                  <div className="data-details-head">Telegram Username</div>
                  <div className="data-details-des">
                    <span>
                      @icocrypto <em className="far fa-paper-plane"></em>
                    </span>
                  </div>
                </li>
                {/* <!-- li --> */}
              </ul>
              <div className="gaps-3x"></div>
              <h6 className="card-sub-title">Uploaded Documnets</h6>
              <ul className="data-details-list">
                <li>
                  <div className="data-details-head">National ID Card</div>
                  <ul className="data-details-docs">
                    <li>
                      <span className="data-details-docs-title">
                        Front Side
                      </span>
                      <div className="data-doc-item data-doc-item-lg">
                        <div className="data-doc-image">
                          <img src={passportAFornt} alt="passport" />
                        </div>
                        <ul className="data-doc-actions">
                          <li>
                            <a href="#">
                              <em className="ti ti-import"></em>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    {/* <!-- li --> */}
                    <li>
                      <span className="data-details-docs-title">Back Side</span>
                      <div className="data-doc-item data-doc-item-lg">
                        <div className="data-doc-image">
                          <img src={passportABack} alt="passport" />
                        </div>
                        <ul className="data-doc-actions">
                          <li>
                            <a href="#">
                              <em className="ti ti-import"></em>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    {/* <!-- li --> */}
                  </ul>
                </li>
                {/* <!-- li --> */}
              </ul>
            </div>
            {/* <!-- .card-innr --> */}
          </div>
          {/* <!-- .card --> */}
        </div>
        {/* <!-- .container --> */}
      </div>
      {/* <!-- .page-content --></div> */}
    </>
  );
};

export default withMainLayout(KycForm);
