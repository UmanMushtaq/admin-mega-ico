import React, { useState } from "react";
// import logoLight2x from "../../assets/images/logo-light2x.png";
import logoLight from "../../assets/images/logo-light-sm.png";
import logoSm from "../../assets/images/logo-sm.png";
import userA from "../../assets/images/user-a.jpg";
import userB from "../../assets/images/user-b.jpg";
import userC from "../../assets/images/user-c.jpg";
import browserRoute from "../../Routes/browserRoutes";
import withMainLayout from "./../HOC/withMainLayout";
import MaterialTable from "material-table";
import Chart from "./Chart";
const Dashboard = () => {
  const [showDropdown, setShowDropdown] = useState({
    profile: false,
    calculator: false,
    language: false,
    time: false,
  });

  return (
    <div className="page-user">
      <div className="page-content">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="token-statistics card card-token height-auto">
                <div className="card-innr">
                  <div className="token-balance token-balance-with-icon">
                    <div className="token-balance-icon">
                      <img src={logoLight} alt="logo" />
                    </div>
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
            </div>
            {/* <!-- .col --> */}
            <div className="col-lg-8">
              <div className="token-information card card-full-height">
                <div className="row no-gutters height-100">
                  <div className="col-md-6 text-center">
                    <div className="token-info">
                      <img
                        className="token-info-icon"
                        src={logoSm}
                        alt="logo-sm"
                      />
                      <div className="gaps-2x"></div>
                      <h1 className="token-info-head">1 ETH = 1000 TWZ</h1>
                      <h5 className="token-info-sub text-dark">
                        1 ETH = 254.05 USD
                      </h5>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="token-info bdr-tl">
                      <div>
                        <ul className="token-info-list">
                          <li>
                            <span>Token Name:</span>TokenWiz
                          </li>
                          <li>
                            <span>Ticket Symbol:</span>TWZ
                          </li>
                        </ul>
                        <a href="#" className="btn btn-primary">
                          <em className="fas fa-download mr-3"></em>Download
                          Whitepaper
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- .card --> */}
            </div>
            {/* <!-- .col --> */}
            <div className="col-lg-6">
              <div className="token-transaction card card-full-height">
                <div className="card-innr">
                  <div className="card-head has-aside">
                    <h4 className="card-title">Transaction</h4>
                    <div className="card-opt">
                      <a href="transactions.html" className="link ucap">
                        View ALL <em className="fas fa-angle-right ml-2"></em>
                      </a>
                    </div>
                  </div>
                  <table className="table">
                    <thead>
                      <tr>
                        <th>TWZ Tokens</th>
                        <th>Amount</th>
                        <th>Date</th>
                        <th></th>
                      </tr>
                      {/* <!-- tr --> */}
                    </thead>
                    {/* <!-- thead --> */}
                    <tbody>
                      <tr>
                        <td>
                          <div className="d-flex align-items-center">
                            <div className="data-state data-state-pending"></div>
                            <span className="lead">18,750</span>
                          </div>
                        </td>
                        <td>
                          <span>
                            <span className="lead">3.543</span>
                            <span className="sub">
                              ETH{" "}
                              <em
                                className="fas fa-info-circle"
                                data-toggle="tooltip"
                                data-placement="bottom"
                                data-original-title="1 ETH = 590.54 USD"
                              ></em>
                            </span>
                          </span>
                        </td>
                        <td className="d-none d-sm-table-cell tnx-date">
                          <span className="sub sub-s2">
                            2018-08-24 10:20 PM
                          </span>
                        </td>
                        <td className="tnx-type">
                          <span
                            className="
                            tnx-type-md
                            badge badge-outline badge-success badge-md tran-btn
                          "
                          >
                            Purchase
                          </span>
                        </td>
                      </tr>
                      {/* <!-- tr --> */}
                      <tr>
                        <td>
                          <div className="d-flex align-items-center">
                            <div className="data-state data-state-progress"></div>
                            <span className="lead">8,052</span>
                          </div>
                        </td>
                        <td>
                          <span>
                            <span className="lead">0.165</span>
                            <span className="sub">
                              BTC{" "}
                              <em
                                className="fas fa-info-circle"
                                data-toggle="tooltip"
                                data-placement="bottom"
                                data-original-title="1 BTC = 5450.54 USD"
                              ></em>
                            </span>
                          </span>
                        </td>
                        <td className="d-none d-sm-table-cell tnx-date">
                          <span className="sub sub-s2">
                            2018-08-24 10:20 PM
                          </span>
                        </td>
                        <td className="tnx-type">
                          <span className="tnx-type-md badge badge-outline badge-warning badge-md tran-btn">
                            Bonus
                          </span>
                        </td>
                      </tr>
                      {/* <!-- tr --> */}
                      <tr>
                        <td>
                          <div className="d-flex align-items-center">
                            <div className="data-state data-state-approved"></div>
                            <span className="lead">19,000</span>
                          </div>
                        </td>
                        <td>
                          <span>
                            <span className="lead">3.141</span>
                            <span className="sub">
                              LTC{" "}
                              <em
                                className="fas fa-info-circle"
                                data-toggle="tooltip"
                                data-placement="bottom"
                                data-original-title="1 LTC = 180.54 USD"
                              ></em>
                            </span>
                          </span>
                        </td>
                        <td className="d-none d-sm-table-cell tnx-date">
                          <span className="sub sub-s2">
                            2018-08-24 10:20 PM
                          </span>
                        </td>
                        <td className="tnx-type">
                          <span className="tnx-type-md badge badge-outline badge-warning badge-md tran-btn">
                            Bonus
                          </span>
                        </td>
                      </tr>
                      {/* <!-- tr --> */}
                    </tbody>
                    {/* <!-- tbody --> */}
                  </table>
                  {/* <!-- .table --> */}
                </div>
              </div>
            </div>
            {/* <!-- .col --> */}
            <div className="col-lg-6">
              <div className="token-sale-graph card card-full-height">
                <div className="card-innr">
                  <div className="card-head has-aside">
                    <h4 className="card-title">Tokens Sale Graph</h4>
                    <div className="card-opt">
                      <a
                        className="link ucap link-light toggle-tigger toggle-caret"
                        onClick={() =>
                          setShowDropdown({
                            time: !showDropdown.time,
                          })
                        }
                      >
                        7 Days
                      </a>
                      {showDropdown.time && (
                        <div className="toggle-className dropdown-content">
                          <ul className="dropdown-list">
                            <li>
                              <a href="#">30 days</a>
                            </li>
                            <li>
                              <a href="#">1 years</a>
                            </li>
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="chart-tokensale">
                    <Chart />
                  </div>
                </div>
              </div>
              {/* <!-- .card --> */}
            </div>
            {/* <!-- .col --> */}
            <div className="col-lg-6">
              <div className="card card-full-height">
                <div className="card-innr">
                  <div className="card-head has-aside pb-0">
                    <h4 className="card-title">Recent Users</h4>
                  </div>
                  <table className="data-table user-list">
                    <tbody>
                      <tr className="data-item">
                        <td className="data-col dt-user">
                          <div className="user-block">
                            <div className="user-photo">
                              <img src={userA} alt="" />
                            </div>
                            <div className="user-info">
                              <span className="lead user-name">
                                Abu Bin Ishtiyak
                              </span>
                              <span className="sub user-id">UD102001</span>
                            </div>
                          </div>
                        </td>
                        <td className="data-col dt-join text-right">
                          <span className="sub join-time">03 Hours ago</span>
                        </td>
                      </tr>
                      {/* <!-- .data-item --> */}
                      <tr className="data-item">
                        <td className="data-col dt-user">
                          <div className="user-block">
                            <div className="user-photo">HW</div>
                            <div className="user-info">
                              <span className="lead user-name">
                                Helena Walz
                              </span>
                              <span className="sub user-id">UD102005</span>
                            </div>
                          </div>
                        </td>
                        <td className="data-col dt-join text-right">
                          <span className="sub join-time">09 Hours ago</span>
                        </td>
                      </tr>
                      {/* <!-- .data-item --> */}
                      <tr className="data-item">
                        <td className="data-col dt-user">
                          <div className="user-block">
                            <div className="user-photo bg-secondary">SD</div>
                            <div className="user-info">
                              <span className="lead user-name">
                                Sherice Digangi
                              </span>
                              <span className="sub user-id">UD102023</span>
                            </div>
                          </div>
                        </td>
                        <td className="data-col dt-join text-right">
                          <span className="sub join-time">11 Hours ago</span>
                        </td>
                      </tr>
                      {/* <!-- .data-item --> */}
                      <tr className="data-item">
                        <td className="data-col dt-user">
                          <div className="user-block">
                            <div className="user-photo bg-danger">DS</div>
                            <div className="user-info">
                              <span className="lead user-name">
                                Darren Square
                              </span>
                              <span className="sub user-id">UD102028</span>
                            </div>
                          </div>
                        </td>
                        <td className="data-col dt-join text-right">
                          <span className="sub join-time">17 Hours ago</span>
                        </td>
                      </tr>
                      {/* <!-- .data-item --> */}
                      <tr className="data-item">
                        <td className="data-col dt-user">
                          <div className="user-block">
                            <div className="user-photo bg-warning">PR</div>
                            <div className="user-info">
                              <span className="lead user-name">
                                Patrick Reader
                              </span>
                              <span className="sub user-id">UD102037</span>
                            </div>
                          </div>
                        </td>
                        <td className="data-col dt-join text-right">
                          <span className="sub join-time">23 Hours ago</span>
                        </td>
                      </tr>
                      {/* <!-- .data-item --> */}
                    </tbody>
                  </table>
                </div>
              </div>
              {/* <!-- .card --> */}
            </div>
            {/* <!-- .col --> */}
            <div className="col-lg-6">
              <div className="card card-timeline card-full-height">
                <div className="card-innr">
                  <div className="card-head has-aside">
                    <h4 className="card-title">Notifications</h4>
                  </div>
                  <div className="timeline-wrap" id="timeline-notify">
                    <div data-simplebar="init">
                      <div className="timeline-innr">
                        <div className="timeline">
                          <div className="timeline-line"></div>
                          <div className="timeline-item">
                            <div className="timeline-time">09:30 AM</div>
                            <div className="timeline-content">
                              <p>
                                Each member have a unique TWZ referral link to
                                share with friends and family and receive a
                                bonus - 15% of the value of their contribution.
                              </p>
                            </div>
                          </div>
                          <div className="timeline-item success">
                            <div className="timeline-time">12:27 AM</div>
                            <div className="timeline-content">
                              <div className="chat-users">
                                <div className="chat-users-stack">
                                  <div className="chat-avatar circle">
                                    <img src={userA} alt="" />
                                  </div>
                                  <div className="chat-avatar circle">
                                    <img src={userB} alt="" />
                                  </div>
                                  <div className="chat-avatar circle">
                                    <img src={userC} alt="" />
                                  </div>
                                </div>
                                <span>+14</span>
                              </div>
                              <span className="timeline-content-info">
                                New User Added
                              </span>
                            </div>
                          </div>
                          <div className="timeline-item secondary">
                            <div className="timeline-time">07:45 PM</div>
                            <div className="timeline-content">
                              <a href="#" className="timeline-content-url">
                                Now You can send payment directly to our address
                                or you may pay online
                              </a>
                              <span className="timeline-content-info">
                                New Article on Blog
                              </span>
                            </div>
                          </div>
                          <div className="timeline-item secondary">
                            <div className="timeline-time">07:45 PM</div>
                            <div className="timeline-content">
                              <p>500 TWZ referral bonues added</p>
                              <span className="timeline-content-info">
                                into @Abc
                              </span>
                            </div>
                          </div>
                          <div className="timeline-item hidden success">
                            <div className="timeline-time">03:45 PM</div>
                            <div className="timeline-content">
                              <h5 className="timeline-content-title">
                                Get bonus - 15% of the value of your
                                contribution
                              </h5>
                              <span className="timeline-content-info">
                                Latest Offers
                              </span>
                            </div>
                          </div>
                          <div className="timeline-item hidden light">
                            <div className="timeline-time">02:30 PM</div>
                            <div className="timeline-content">
                              <p>
                                Each member have a unique TWZ referral link to
                                share with friends and family and receive a
                                bonus - 15% of the value of their contribution.
                              </p>
                              <span className="timeline-content-info">
                                Announcements
                              </span>
                            </div>
                          </div>
                          <div className="timeline-item hidden light">
                            <div className="timeline-time">02:30 PM</div>
                            <div className="timeline-content">
                              <p>
                                Each member have a unique TWZ referral link to
                                share with friends and family and receive a
                                bonus - 15% of the value of their contribution.
                              </p>
                              <span className="timeline-content-info">
                                Announcements
                              </span>
                            </div>
                          </div>
                          <div className="timeline-item hidden danger">
                            <div className="timeline-time">12:17 AM</div>
                            <div className="timeline-content">
                              <p>
                                You can buy our TWZ tokens using ETH, BTC, LTC
                                or USD.
                              </p>
                              <span className="timeline-content-info">
                                Announcements
                              </span>
                            </div>
                          </div>
                          <div className="timeline-item hidden primary">
                            <div className="timeline-time">09:31 AM</div>
                            <div className="timeline-content">
                              <div className="chat-users">
                                <div className="chat-users-stack">
                                  <div className="chat-avatar circle">
                                    <img src="images/user-a.jpg" alt="" />
                                  </div>
                                  <div className="chat-avatar circle">
                                    <img src="images/user-c.jpg" alt="" />
                                  </div>
                                  <div className="chat-avatar circle">
                                    <img src="images/user-b.jpg" alt="" />
                                  </div>
                                  <div className="chat-avatar circle">
                                    <img src="images/user-d.jpg" alt="" />
                                  </div>
                                </div>
                                <span>+122</span>
                              </div>
                              <span className="timeline-content-info">
                                New User Added
                              </span>
                            </div>
                          </div>
                          <div className="timeline-item hidden warning">
                            <div className="timeline-time">08:57 AM</div>
                            <div className="timeline-content">
                              <p>
                                Enter your amount, you would like to contribute
                                and calculate the amount of token you will
                                received. To get tokens please make a payment.
                                You can send payment directly to our address or
                                you may pay online. Once you paid, you will
                                receive an email about the successfull deposit.
                              </p>
                              <span className="timeline-content-info">
                                Announcements
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="timeline-load">
                      <a
                        href=""
                        className="link load-timeline"
                        data-target="timeline-notify"
                        data-show="2"
                      >
                        Load More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- .card --> */}
            </div>
          </div>
          {/* <!-- .row --> */}
        </div>
        {/* <!-- .container --> */}
      </div>
      {/* <!-- .page-content --> */}
    </div>
  );
};

export default withMainLayout(Dashboard);
