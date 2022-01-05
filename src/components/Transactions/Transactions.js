import React from "react";
import { Link } from "react-router-dom";
import browserRoute from "./../../Routes/browserRoutes";
import withMainLayout from "./../HOC/withMainLayout";

const Transactions = () => {
  return (
    <div className="page-content">
      <div className="container">
        <div className="card content-area">
          <div className="card-innr">
            <div className="card-head">
              <h4 className="card-title">User Transactions</h4>
            </div>
            <table className="data-table dt-init user-tnx">
              <thead>
                <tr className="data-item data-head">
                  <th className="data-col dt-tnxno">Tranx NO</th>
                  <th className="data-col dt-token">Tokens</th>
                  <th className="data-col dt-amount">Amount</th>
                  <th className="data-col dt-usd-amount">USD Amount</th>
                  <th className="data-col dt-account">From</th>
                  <th className="data-col dt-type">
                    <div className="dt-type-text">Type</div>
                  </th>
                  <th className="data-col"></th>
                </tr>
              </thead>
              <tbody>
                <tr className="data-item">
                  <td className="data-col dt-tnxno">
                    <div className="d-flex align-items-center">
                      <div className="data-state data-state-pending">
                        <span className="d-none">Pending</span>
                      </div>
                      <div className="fake-className">
                        <span className="lead tnx-id">TNX1002</span>
                        <span className="sub sub-date">2018-08-24 10:45PM</span>
                      </div>
                    </div>
                  </td>
                  <td className="data-col dt-token">
                    <span className="lead token-amount">18,750</span>
                    <span className="sub sub-symbol">TWZ</span>
                  </td>
                  <td className="data-col dt-amount">
                    <span className="lead amount-pay">50.00</span>
                    <span className="sub sub-symbol">
                      ETH
                      <em
                        className="fas fa-info-circle"
                        data-toggle="tooltip"
                        data-placement="bottom"
                        title="1 ETH = 1250 TWZ"
                      ></em>
                    </span>
                  </td>
                  <td className="data-col dt-usd-amount">
                    <span className="lead amount-pay">245.52</span>
                    <span className="sub sub-symbol">
                      USD
                      <em
                        className="fas fa-info-circle"
                        data-toggle="tooltip"
                        data-placement="bottom"
                        title="1 ETH = 350.54 USD"
                      ></em>
                    </span>
                  </td>
                  <td className="data-col dt-account">
                    <span className="lead user-info">1F1T....4XQX</span>
                    <span className="sub sub-date">08 Jul, 18 10:20PM</span>
                  </td>
                  <td className="data-col dt-type">
                    <span
                      className="
                      dt-type-md
                      badge badge-outline badge-success badge-md tran-btn
                    "
                    >
                      Purchase
                    </span>
                  </td>
                  <td className="data-col text-right">
                    {/* <div className="relative d-inline-block d-md-none">
                      <a
                        href="#"
                        className="btn btn-light-alt btn-xs btn-icon toggle-tigger"
                      >
                        <em className="ti ti-more-alt"></em>
                      </a>
                      <div
                        className="
                        toggle-className
                        dropdown-content dropdown-content-center-left
                        pd-2x
                      "
                      >
                        <ul className="data-action-list">
                          <li>
                            <a
                              href="#"
                              className="btn btn-auto btn-primary pay-btn"
                            >
                              <span>
                                Pay
                                <span className="d-none d-xl-inline-block">
                                  Now
                                </span>
                              </span>
                              <em className="ti ti-wallet"></em>
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="btn btn-danger-alt btn-xs btn-icon"
                            >
                              <em className="ti ti-trash"></em>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div> */}
                    <ul className="data-action-list d-none d-md-inline-flex">
                      <li>
                        <a href="#" className="btn btn-auto btn-primary btn-xs">
                          <span>
                            Pay
                            <span className="d-none d-xl-inline-block">
                              Now
                            </span>
                          </span>
                          <em className="ti ti-wallet"></em>
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="btn btn-danger-alt btn-xs btn-icon"
                        >
                          <em className="ti ti-trash"></em>
                        </a>
                      </li>
                    </ul>
                  </td>
                </tr>
                {/* <!-- .data-item --> */}
                <tr className="data-item">
                  <td className="data-col dt-tnxno">
                    <div className="d-flex align-items-center">
                      <div className="data-state data-state-approved">
                        <span className="d-none">Approved</span>
                      </div>
                      <div className="fake-className">
                        <span className="lead tnx-id">TNX1002</span>
                        <span className="sub sub-date">2018-08-24 10:45PM</span>
                      </div>
                    </div>
                  </td>
                  <td className="data-col dt-token">
                    <span className="lead token-amount">18,750</span>
                    <span className="sub sub-symbol">TWZ</span>
                  </td>
                  <td className="data-col dt-amount">
                    <span className="lead amount-pay">50.00</span>
                    <span className="sub sub-symbol">
                      ETH
                      <em
                        className="fas fa-info-circle"
                        data-toggle="tooltip"
                        data-placement="bottom"
                        title="1 ETH = 1250 TWZ"
                      ></em>
                    </span>
                  </td>
                  <td className="data-col dt-usd-amount">
                    <span className="lead amount-pay">245.52</span>
                    <span className="sub sub-symbol">
                      USD
                      <em
                        className="fas fa-info-circle"
                        data-toggle="tooltip"
                        data-placement="bottom"
                        title="1 ETH = 350.54 USD"
                      ></em>
                    </span>
                  </td>
                  <td className="data-col dt-account">
                    <span className="lead user-info">1F1T....4XQX</span>
                    <span className="sub sub-date">08 Jul, 18 10:20PM</span>
                  </td>
                  <td className="data-col dt-type">
                    <span
                      className="
                      dt-type-md
                      badge badge-outline badge-success badge-md tran-btn
                    "
                    >
                      Purchase
                    </span>
                    {/* <span
                      className="
                      dt-type-sm
                      badge badge-sq badge-outline badge-success badge-md
                    "
                    >
                      P
                    </span> */}
                  </td>
                  <td className="data-col text-right">
                    <Link
                      to={browserRoute.TRANSACTION_DETAILS}
                      // data-toggle="modal"
                      // data-target="#transaction-details"
                      className="btn btn-light-alt btn-xs btn-icon"
                    >
                      <em className="ti ti-eye"></em>
                    </Link>
                  </td>
                </tr>
                {/* <!-- .data-item --> */}
                <tr className="data-item">
                  <td className="data-col dt-tnxno">
                    <div className="d-flex align-items-center">
                      <div className="data-state data-state-canceled">
                        <span className="d-none">Canceled</span>
                      </div>
                      <div className="fake-className">
                        <span className="lead tnx-id">TNX1002</span>
                        <span className="sub sub-date">2018-08-24 10:45PM</span>
                      </div>
                    </div>
                  </td>
                  <td className="data-col dt-token">
                    <span className="lead token-amount">18,750</span>
                    <span className="sub sub-symbol">TWZ</span>
                  </td>
                  <td className="data-col dt-amount">
                    <span className="lead amount-pay">50.00</span>
                    <span className="sub sub-symbol">
                      ETH
                      <em
                        className="fas fa-info-circle"
                        data-toggle="tooltip"
                        data-placement="bottom"
                        title="1 ETH = 1250 TWZ"
                      ></em>
                    </span>
                  </td>
                  <td className="data-col dt-usd-amount">
                    <span className="lead amount-pay">245.52</span>
                    <span className="sub sub-symbol">
                      USD
                      <em
                        className="fas fa-info-circle"
                        data-toggle="tooltip"
                        data-placement="bottom"
                        title="1 ETH = 350.54 USD"
                      ></em>
                    </span>
                  </td>
                  <td className="data-col dt-account">
                    <span className="lead user-info">1F1T....4XQX</span>
                    <span className="sub sub-date">08 Jul, 18 10:20PM</span>
                  </td>
                  <td className="data-col dt-type">
                    <span
                      className="
                      dt-type-md
                      badge badge-outline badge-success badge-md tran-btn
                    "
                    >
                      Purchase
                    </span>
                    {/* <span
                      className="
                      dt-type-sm
                      badge badge-sq badge-outline badge-success badge-md
                    "
                    >
                      P
                    </span> */}
                  </td>
                  <td className="data-col text-right">
                    <a
                      href={browserRoute.TRANSACTION_DETAILS}
                      className="btn btn-light-alt btn-xs btn-icon"
                    >
                      <em className="ti ti-eye"></em>
                    </a>
                  </td>
                </tr>
                {/* <!-- .data-item --> */}
                <tr className="data-item">
                  <td className="data-col dt-tnxno">
                    <div className="d-flex align-items-center">
                      <div className="data-state data-state-progress">
                        <span className="d-none">Progress</span>
                      </div>
                      <div className="fake-className">
                        <span className="lead tnx-id">TNX1002</span>
                        <span className="sub sub-date">2018-08-24 10:45PM</span>
                      </div>
                    </div>
                  </td>
                  <td className="data-col dt-token">
                    <span className="lead token-amount">18,750</span>
                    <span className="sub sub-symbol">TWZ</span>
                  </td>
                  <td className="data-col dt-amount">
                    <span className="lead amount-pay">50.00</span>
                    <span className="sub sub-symbol">
                      ETH
                      <em
                        className="fas fa-info-circle"
                        data-toggle="tooltip"
                        data-placement="bottom"
                        title="1 ETH = 1250 TWZ"
                      ></em>
                    </span>
                  </td>
                  <td className="data-col dt-usd-amount">
                    <span className="lead amount-pay">245.52</span>
                    <span className="sub sub-symbol">
                      USD
                      <em
                        className="fas fa-info-circle"
                        data-toggle="tooltip"
                        data-placement="bottom"
                        title="1 ETH = 350.54 USD"
                      ></em>
                    </span>
                  </td>
                  <td className="data-col dt-account">
                    <span className="lead user-info">1F1T....4XQX</span>
                    <span className="sub sub-date">08 Jul, 18 10:20PM</span>
                  </td>
                  <td className="data-col dt-type">
                    <span
                      className="
                      dt-type-md
                      badge badge-outline badge-success badge-md tran-btn
                    "
                    >
                      Purchase
                    </span>
                    {/* <span
                      className="
                      dt-type-sm
                      badge badge-sq badge-outline badge-success badge-md
                    "
                    >
                      P
                    </span> */}
                  </td>
                  <td className="data-col text-right">
                    <a
                      href={browserRoute.TRANSACTION_DETAILS}
                      className="btn btn-light-alt btn-xs btn-icon"
                    >
                      <em className="ti ti-eye"></em>
                    </a>
                  </td>
                </tr>
                {/* <!-- .data-item --> */}
                <tr className="data-item">
                  <td className="data-col dt-tnxno">
                    <div className="d-flex align-items-center">
                      <div className="data-state data-state-approved">
                        <span className="d-none">Approved</span>
                      </div>
                      <div className="fake-className">
                        <span className="lead tnx-id">TNX1002</span>
                        <span className="sub sub-date">2018-08-24 10:45PM</span>
                      </div>
                    </div>
                  </td>
                  <td className="data-col dt-token">
                    <span className="lead token-amount">1,050</span>
                    <span className="sub sub-symbol">TWZ</span>
                  </td>
                  <td className="data-col dt-amount">
                    <span className="lead amount-pay">0.85</span>
                    <span className="sub sub-symbol">
                      ETH
                      <em
                        className="fas fa-info-circle"
                        data-toggle="tooltip"
                        data-placement="bottom"
                        title="1 ETH = 1250 TWZ"
                      ></em>
                    </span>
                  </td>
                  <td className="data-col dt-usd-amount">
                    <span className="lead amount-pay">2.54</span>
                    <span className="sub sub-symbol">
                      USD
                      <em
                        className="fas fa-info-circle"
                        data-toggle="tooltip"
                        data-placement="bottom"
                        title="1 ETH = 350.54 USD"
                      ></em>
                    </span>
                  </td>
                  <td className="data-col dt-account">
                    <span className="lead user-info">Bounty Bonus</span>
                    <span className="sub sub-date">Campaign Name</span>
                  </td>
                  <td className="data-col dt-type">
                    <span className="dt-type-md badge badge-outline badge-info badge-md tran-btn">
                      Bonus
                    </span>
                    {/* <span
                      className="
                      dt-type-sm
                      badge badge-sq badge-outline badge-info badge-md
                    "
                    >
                      B
                    </span> */}
                  </td>
                  <td className="data-col text-right">
                    <a
                      href={browserRoute.TRANSACTION_DETAILS}
                      className="btn btn-light-alt btn-xs btn-icon"
                    >
                      <em className="ti ti-eye"></em>
                    </a>
                  </td>
                </tr>
                {/* <!-- .data-item --> */}
                <tr className="data-item">
                  <td className="data-col dt-tnxno">
                    <div className="d-flex align-items-center">
                      <div className="data-state data-state-progress">
                        <span className="d-none">Progress</span>
                      </div>
                      <div className="fake-className">
                        <span className="lead tnx-id">TNX1002</span>
                        <span className="sub sub-date">2018-08-24 10:45PM</span>
                      </div>
                    </div>
                  </td>
                  <td className="data-col dt-token">
                    <span className="lead token-amount">18,750</span>
                    <span className="sub sub-symbol">TWZ</span>
                  </td>
                  <td className="data-col dt-amount">
                    <span className="lead amount-pay">50.00</span>
                    <span className="sub sub-symbol">
                      ETH
                      <em
                        className="fas fa-info-circle"
                        data-toggle="tooltip"
                        data-placement="bottom"
                        title="1 ETH = 1250 TWZ"
                      ></em>
                    </span>
                  </td>
                  <td className="data-col dt-usd-amount">
                    <span className="lead amount-pay">245.52</span>
                    <span className="sub sub-symbol">
                      USD
                      <em
                        className="fas fa-info-circle"
                        data-toggle="tooltip"
                        data-placement="bottom"
                        title="1 ETH = 350.54 USD"
                      ></em>
                    </span>
                  </td>
                  <td className="data-col dt-account">
                    <span className="lead user-info">1F1T....4XQX</span>
                    <span className="sub sub-date">08 Jul, 18 10:20PM</span>
                  </td>
                  <td className="data-col dt-type">
                    <span
                      className="
                      dt-type-md
                      badge badge-outline badge-success badge-md tran-btn
                    "
                    >
                      Purchase
                    </span>
                    {/* <span
                      className="
                      dt-type-sm
                      badge badge-sq badge-outline badge-success badge-md
                    "
                    >
                      P
                    </span> */}
                  </td>
                  <td className="data-col text-right">
                    <a
                      href={browserRoute.TRANSACTION_DETAILS}
                      className="btn btn-light-alt btn-xs btn-icon"
                    >
                      <em className="ti ti-eye"></em>
                    </a>
                  </td>
                </tr>
                {/* <!-- .data-item --> */}
                <tr className="data-item">
                  <td className="data-col dt-tnxno">
                    <div className="d-flex align-items-center">
                      <div className="data-state data-state-canceled">
                        <span className="d-none">Canceled</span>
                      </div>
                      <div className="fake-className">
                        <span className="lead tnx-id">TNX1002</span>
                        <span className="sub sub-date">2018-08-24 10:45PM</span>
                      </div>
                    </div>
                  </td>
                  <td className="data-col dt-token">
                    <span className="lead token-amount">18,750</span>
                    <span className="sub sub-symbol">TWZ</span>
                  </td>
                  <td className="data-col dt-amount">
                    <span className="lead amount-pay">50.00</span>
                    <span className="sub sub-symbol">
                      ETH
                      <em
                        className="fas fa-info-circle"
                        data-toggle="tooltip"
                        data-placement="bottom"
                        title="1 ETH = 1250 TWZ"
                      ></em>
                    </span>
                  </td>
                  <td className="data-col dt-usd-amount">
                    <span className="lead amount-pay">245.52</span>
                    <span className="sub sub-symbol">
                      USD
                      <em
                        className="fas fa-info-circle"
                        data-toggle="tooltip"
                        data-placement="bottom"
                        title="1 ETH = 350.54 USD"
                      ></em>
                    </span>
                  </td>
                  <td className="data-col dt-account">
                    <span className="lead user-info">1F1T....4XQX</span>
                    <span className="sub sub-date">08 Jul, 18 10:20PM</span>
                  </td>
                  <td className="data-col dt-type">
                    <span
                      className="
                      dt-type-md
                      badge badge-outline badge-success badge-md tran-btn
                    "
                    >
                      Purchase
                    </span>
                    {/* <span
                      className="
                      dt-type-sm
                      badge badge-sq badge-outline badge-success badge-md
                    "
                    >
                      P
                    </span> */}
                  </td>
                  <td className="data-col text-right">
                    <a
                      href={browserRoute.TRANSACTION_DETAILS}
                      className="btn btn-light-alt btn-xs btn-icon"
                    >
                      <em className="ti ti-eye"></em>
                    </a>
                  </td>
                </tr>
                {/* <!-- .data-item --> */}
                <tr className="data-item">
                  <td className="data-col dt-tnxno">
                    <div className="d-flex align-items-center">
                      <div className="data-state data-state-progress">
                        <span className="d-none">Progress</span>
                      </div>
                      <div className="fake-className">
                        <span className="lead tnx-id">TNX1002</span>
                        <span className="sub sub-date">2018-08-24 10:45PM</span>
                      </div>
                    </div>
                  </td>
                  <td className="data-col dt-token">
                    <span className="lead token-amount">18,750</span>
                    <span className="sub sub-symbol">TWZ</span>
                  </td>
                  <td className="data-col dt-amount">
                    <span className="lead amount-pay">50.00</span>
                    <span className="sub sub-symbol">
                      ETH
                      <em
                        className="fas fa-info-circle"
                        data-toggle="tooltip"
                        data-placement="bottom"
                        title="1 ETH = 1250 TWZ"
                      ></em>
                    </span>
                  </td>
                  <td className="data-col dt-usd-amount">
                    <span className="lead amount-pay">245.52</span>
                    <span className="sub sub-symbol">
                      USD
                      <em
                        className="fas fa-info-circle"
                        data-toggle="tooltip"
                        data-placement="bottom"
                        title="1 ETH = 350.54 USD"
                      ></em>
                    </span>
                  </td>
                  <td className="data-col dt-account">
                    <span className="lead user-info">1F1T....4XQX</span>
                    <span className="sub sub-date">08 Jul, 18 10:20PM</span>
                  </td>
                  <td className="data-col dt-type">
                    <span
                      className="
                      dt-type-md
                      badge badge-outline badge-success badge-md tran-btn
                    "
                    >
                      Purchase
                    </span>
                    {/* <span
                      className="
                      dt-type-sm
                      badge badge-sq badge-outline badge-success badge-md
                    "
                    >
                      P
                    </span> */}
                  </td>
                  <td className="data-col text-right">
                    <a
                      href={browserRoute.TRANSACTION_DETAILS}
                      className="btn btn-light-alt btn-xs btn-icon"
                    >
                      <em className="ti ti-eye"></em>
                    </a>
                  </td>
                </tr>
                {/* <!-- .data-item --> */}
              </tbody>
            </table>
          </div>
          {/* <!-- .card-innr --> */}
        </div>
        {/* <!-- .card --> */}
      </div>
      {/* <!-- .container --> */}
    </div>
  );
};

export default withMainLayout(Transactions);
