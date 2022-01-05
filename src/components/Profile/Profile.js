import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProfileDetails from "./ProfileDetails/ProfileDetails";
import browserRoute from "./../../Routes/browserRoutes";
import withMainLayout from "./../HOC/withMainLayout";
import GoogleAuthentication from "./GoogleAuthentication/GoogleAuthentication";

const Profile = () => {
  return (
    <div className="page-content">
      <div className="container">
        <div className="row">
          <div className="main-content col-lg-8">
            <ProfileDetails />
            {/* <!-- .card --> */}
            <div className="content-area card">
              <GoogleAuthentication />
            </div>
            {/* <!-- .card --> */}
          </div>
          {/* <!-- .col --> */}
          <div className="aside sidebar-right col-lg-4">
            <div className="account-info card">
              <div className="card-innr">
                <h6 className="card-title card-title-sm">
                  Your Account Status
                </h6>
                <ul className="btn-grp">
                  <li>
                    <a href="#" className="btn btn-auto btn-xs btn-success">
                      Email Verified
                    </a>
                  </li>
                  <li>
                    <a href="#" className="btn btn-auto btn-xs btn-warning">
                      KYC Pending
                    </a>
                  </li>
                </ul>
                <div className="gaps-2-5x"></div>
                <h6 className="card-title card-title-sm">Receiving Wallet</h6>
                <div className="d-flex justify-content-between">
                  <span>
                    <span>0x39deb3.....e2ac64rd</span>
                    <em
                      className="fas fa-info-circle text-exlight"
                      data-toggle="tooltip"
                      data-placement="bottom"
                      title="1 ETH = 100 TWZ"
                    ></em>
                  </span>
                  <a
                    href="#"
                    data-toggle="modal"
                    data-target="#edit-wallet"
                    className="link link-ucap"
                  >
                    Edit
                  </a>
                </div>
              </div>
            </div>
            <div className="referral-info card">
              <div className="card-innr">
                <h6 className="card-title card-title-sm">Earn with Referral</h6>
                <p className="pdb-0-5x">
                  Invite your friends &amp; family and receive a
                  <strong>
                    <span className="text-primary"> bonus - 15%</span> of the
                    value of contribution.
                  </strong>
                </p>
                <div className="copy-wrap mgb-0-5x">
                  <span className="copy-feedback"></span>
                  <em className="fas fa-link"></em>
                  <input
                    type="text"
                    className="copy-address"
                    value="https://demo.themenio.com/ico?ref=7d264f90653733592"
                    disabled
                  />
                  <button
                    className="copy-trigger copy-clipboard"
                    data-clipboard-text="https://demo.themenio.com/ico?ref=7d264f90653733592"
                  >
                    <em className="ti ti-files"></em>
                  </button>
                </div>
                {/* <!-- .copy-wrap --> */}
              </div>
            </div>
            <div className="kyc-info card">
              <div className="card-innr">
                <h6 className="card-title card-title-sm">
                  Identity Verification - KYC
                </h6>
                <p>
                  To comply with regulation, participant will have to go through
                  indentity verification.
                </p>
                <p className="lead text-light pdb-0-5x">
                  You have not submitted your KYC application to verify your
                  indentity.
                </p>
                <Link
                  to={browserRoute.KYC_APPLICATION}
                  className="btn btn-primary btn-block"
                >
                  Click to Proceed
                </Link>
                <h6 className="kyc-alert text-danger">
                  * KYC verification required for purchase token
                </h6>
              </div>
            </div>
          </div>
          {/* <!-- .col --> */}
        </div>
        {/* <!-- .container --> */}
      </div>
      {/* <!-- .container --> */}
    </div>
  );
};

export default withMainLayout(Profile);
