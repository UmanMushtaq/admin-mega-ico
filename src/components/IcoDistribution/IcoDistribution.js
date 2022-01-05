import React from "react";
import withMainLayout from "./../HOC/withMainLayout";

const IcoDistribution = () => {
  return (
    <div className="page-content">
      <div className="container">
        <div className="row">
          <div className="main-content col-lg-8">
            <div className="content-area card">
              <div className="card-innr">
                <div className="card-head">
                  <h4 className="card-title">
                    ICO Distribution, Rate &amp; Sales Info
                  </h4>
                </div>
                <div className="card-text">
                  <p>
                    To become a part of TokenWiz project, you can found all
                    details of ICO. <br className="d-none d-sm-block" />
                    You can contribute and <a href="#">buy TWZ tokens</a>.
                  </p>
                  <p>
                    You can get a quick response and chat with our team in
                    Telegram: <a href="#">htts://t.me/tokenwiz</a>
                  </p>
                </div>
                <div className="gaps-3x"></div>
                <div className="card-head">
                  <h5 className="card-title card-title-md">ICO Schedule</h5>
                </div>
                <div className="schedule-item">
                  <div className="row">
                    <div className="col-xl-5 col-md-5 col-lg-6">
                      <div className="pdb-1x">
                        <h5 className="schedule-title">
                          <span>Pre-Sale ICO</span>
                          <span className="badge badge-success ucap badge-xs">
                            Running
                          </span>
                        </h5>
                        <span>Start at Dec 02, 2018 - 11:00 AM</span>
                        <span>End at Jan 15, 2019 - 11:00 AM</span>
                      </div>
                    </div>
                    <div className="col-xl-4 col-md col-lg-6">
                      <div className="pdb-1x">
                        <h5 className="schedule-title">
                          <span>0.00080 ETH</span>
                        </h5>
                        <span>Min purchase - 0.35 ETH</span>
                        <span>Token Distribute - 250,000</span>
                      </div>
                    </div>
                    <div className="col-xl-3 col-md-3 align-self-center text-xl-right">
                      <div className="pdb-1x">
                        <span className="schedule-bonus">20% Bonus</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="schedule-item">
                  <div className="row">
                    <div className="col-xl-5 col-md-5 col-lg-6">
                      <div className="pdb-1x">
                        <h5 className="schedule-title">
                          <span>Main ICO Sale</span>
                          <span className="badge badge-disabled ucap badge-xs">
                            Upcomming
                          </span>
                        </h5>
                        <span>Start at Dec 02, 2018 - 11:00 AM</span>
                        <span>End at Jan 15, 2019 - 11:00 AM</span>
                      </div>
                    </div>
                    <div className="col-xl-4 col-md col-lg-6">
                      <div className="pdb-1x">
                        <h5 className="schedule-title">
                          <span>0.00080 ETH</span>
                        </h5>
                        <span>Min purchase - 0.35 ETH</span>
                        <span>Token Distribute - 250,000</span>
                      </div>
                    </div>
                  </div>
                </div>
                <h6 className="text-light mb-0">
                  * Time zone set in (GMT +6) Dhaka, Bangladesh
                </h6>
              </div>
            </div>
            <div className="content-area card">
              <div className="card-innr">
                <div className="card-head">
                  <h5 className="card-title card-title-md">
                    Invite your friends and family and receive free tokens
                  </h5>
                </div>
                <div className="card-text">
                  <p>
                    Each member have a unique TWZ referral link to share with
                    friends and family and receive a
                    <strong>
                      bonus - 15% of the value of their contribution
                    </strong>
                    . If any one sign-up with this link, will be added to your
                    referral program. The referral link may be used during a
                    token sales running.
                  </p>
                </div>
                <div className="referral-form">
                  <div className="d-flex justify-content-between align-items-center">
                    <h5 className="mb-0 font-bold">Referral URL</h5>
                    <a href="#" className="link link-primary link-ucap">
                      See Your referral
                    </a>
                  </div>
                  <div className="copy-wrap mgb-1-5x mgt-1-5x">
                    <span className="copy-feedback"></span>
                    <em className="fas fa-link"></em>
                    <input
                      type="text"
                      className="copy-address"
                      value="https://demo.themenio.com/tokenwiz?ref=7d264f90653733592"
                      disabled
                    />
                    <button
                      className="copy-trigger copy-clipboard"
                      data-clipboard-text="https://demo.themenio.com/tokenwiz?ref=7d264f90653733592"
                    >
                      <em className="ti ti-files"></em>
                    </button>
                  </div>
                  {/* <!-- .copy-wrap --> */}
                </div>
                <ul className="share-links">
                  <li>Share with :</li>
                  <li>
                    <a href="#">
                      <em className="fab fa-google-plus-g"></em>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <em className="fab fa-twitter"></em>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <em className="fab fa-facebook-f"></em>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <em className="fab fa-linkedin-in"></em>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* <!-- .col --> */}
          <div className="aside sidebar-right col-lg-4">
            <div className="token-statistics card card-token height-auto">
              <div className="card-innr">
                <div className="token-balance">
                  <div className="token-balance-text">
                    <h6 className="card-sub-title">Tokens Balance</h6>
                    <span className="lead">
                      120,000,000 <span>TWZ</span>
                    </span>
                  </div>
                </div>
                <div className="token-balance token-balance-s2">
                  <h6 className="card-sub-title">Your Contribution</h6>
                  <ul className="token-balance-list">
                    <li className="token-balance-sub">
                      <span className="lead">2.646</span>
                      <span className="sub">ETH</span>
                    </li>
                    <li className="token-balance-sub">
                      <span className="lead">1.265</span>
                      <span className="sub">BTC</span>
                    </li>
                    <li className="token-balance-sub">
                      <span className="lead">6.506</span>
                      <span className="sub">LTC</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="token-sales card">
              <div className="card-innr">
                <div className="card-head">
                  <h5 className="card-title card-title-sm">
                    Pre-Sale Token Sales
                  </h5>
                </div>
                <div className="token-rate-wrap row">
                  <div className="token-rate col-md-6 col-lg-12">
                    <span className="card-sub-title">TWZ Token Price</span>
                    <h4 className="font-mid text-dark">
                      1 ETH = <span>12500 TWZ</span>
                    </h4>
                  </div>
                  <div className="token-rate col-md-6 col-lg-12">
                    <span className="card-sub-title">Exchange Rate</span>
                    <span>1 ETH = 196.98 USD = 0.032 BTC</span>
                  </div>
                </div>
                <div className="token-bonus-current">
                  <div className="fake-className">
                    <span className="card-sub-title">Current Bonus</span>
                    <div className="h3 mb-0">20 %</div>
                  </div>
                  <div className="token-bonus-date">
                    End at <br />
                    10 Jan, 2019
                  </div>
                </div>
              </div>
              <div className="sap"></div>
              <div className="card-innr">
                <div className="card-head">
                  <h5 className="card-title card-title-sm">
                    Token Sales Progress
                  </h5>
                </div>
                <ul className="progress-info">
                  <li>
                    <span>Raised</span> 2,758 TWZ
                  </li>
                  <li className="text-right">
                    <span>TOTAL</span> 1,500,000 TWZ
                  </li>
                </ul>
                <div className="progress-bar">
                  <div className="progress-hcap" data-percent="83">
                    <div>
                      Hard cap <span>1,400,000</span>
                    </div>
                  </div>
                  <div className="progress-scap" data-percent="24">
                    <div>
                      Soft cap <span>40,000</span>
                    </div>
                  </div>
                  <div className="progress-percent" data-percent="28"></div>
                </div>

                <span className="card-sub-title mgb-0-5x">Sales END IN</span>
                <div className="countdown-clock" data-date="2019/02/05"></div>
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

export default withMainLayout(IcoDistribution);
