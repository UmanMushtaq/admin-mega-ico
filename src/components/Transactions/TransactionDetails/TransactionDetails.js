import React from "react";
import browserRoute from "../../../Routes/browserRoutes";
import withMainLayout from "../../HOC/withMainLayout";

const TransactionDetails = () => {
  return (
    <div className="page-content">
      <div className="container">
        <div className="card content-area">
          <div className="card-innr">
            <div className="card-head d-flex justify-content-between align-items-center">
              <h4 className="card-title mb-0">Transaction Details</h4>
              <a
                href={browserRoute.TRANSACTIONS}
                className="btn btn-sm btn-auto btn-primary d-sm-block d-none"
              >
                <em className="fas fa-arrow-left mr-3"></em>Back
              </a>
              <a
                href="transactions.html"
                className="btn btn-icon btn-sm btn-primary d-sm-none"
              >
                <em className="fas fa-arrow-left"></em>
              </a>
            </div>
            <div className="gaps-1-5x"></div>
            <div className="data-details d-md-flex">
              <div className="fake-className">
                <span className="data-details-title">Tranx Date</span>
                <span className="data-details-info">24 Jul, 2018 10:11PM</span>
              </div>
              <div className="fake-className">
                <span className="data-details-title">Tranx Status</span>
                <span className="badge badge-success ucap">Approved</span>
              </div>
              <div className="fake-className">
                <span className="data-details-title">Tranx Approved Note</span>
                <span className="data-details-info">
                  By <strong>Admin</strong> at 24 Jul, 2018 10:12PM
                </span>
              </div>
            </div>
            <div className="gaps-3x"></div>
            <h6 className="card-sub-title">Transaction Info</h6>
            <ul className="data-details-list">
              <li>
                <div className="data-details-head">Transaction Type</div>
                <div className="data-details-des">
                  <strong>Purchase</strong>
                </div>
              </li>
              {/* <!-- li --> */}
              <li>
                <div className="data-details-head">Payment Getway</div>
                <div className="data-details-des">
                  <strong>
                    Ethereum <small>- Offline Payment</small>
                  </strong>
                </div>
              </li>
              {/* <!-- li --> */}
              <li>
                <div className="data-details-head">Deposit From</div>
                <div className="data-details-des">
                  <strong>0xa87d264f935920005810653734156d3342d5c385</strong>
                </div>
              </li>
              {/* <!-- li --> */}
              <li>
                <div className="data-details-head">Tx Hash</div>
                <div className="data-details-des">
                  <span>
                    Tx156d3342d5c87d264f9359200xa058106537340385c87d264f93
                  </span>{" "}
                  <span></span>
                </div>
              </li>
              {/* <!-- li --> */}
              <li>
                <div className="data-details-head">Deposit To</div>
                <div className="data-details-des">
                  <span>0xa058106537340385156d3342d5c87d264f935920</span>{" "}
                  <span></span>
                </div>
              </li>
              {/* <!-- li --> */}
              <li>
                <div className="data-details-head">Details</div>
                <div className="data-details-des">Tokens Purchase</div>
              </li>
              {/* <!-- li --> */}
            </ul>
            {/* <!-- .data-details --> */}
            <div className="gaps-3x"></div>
            <h6 className="card-sub-title">Token Details</h6>
            <ul className="data-details-list">
              <li>
                <div className="data-details-head">Stage Name</div>
                <div className="data-details-des">
                  <strong>ICO Phase 3</strong>
                </div>
              </li>
              {/* <!-- li --> */}
              <li>
                <div className="data-details-head">Contribution</div>
                <div className="data-details-des">
                  <span>
                    <strong>1.000 ETH</strong>{" "}
                    <em
                      className="fas fa-info-circle"
                      data-toggle="tooltip"
                      data-placement="bottom"
                      title=""
                      data-original-title="1 ETH = 100 TWZ"
                    ></em>
                  </span>
                  <span>
                    <em
                      className="fas fa-info-circle"
                      data-toggle="tooltip"
                      data-placement="bottom"
                      title=""
                      data-original-title="1 ETH = 100 TWZ"
                    ></em>{" "}
                    $2540.65
                  </span>
                </div>
              </li>
              {/* <!-- li --> */}
              <li>
                <div className="data-details-head">Tokens Added To</div>
                <div className="data-details-des">
                  <strong>
                    UD1020001 <small>- infoicox@gmail..com</small>
                  </strong>
                </div>
              </li>
              {/* <!-- li --> */}
              <li>
                <div className="data-details-head">Token (T)</div>
                <div className="data-details-des">
                  <span>4,780.00</span>
                  <span>(4780 * 1)</span>
                </div>
              </li>
              {/* <!-- li --> */}
              <li>
                <div className="data-details-head">Bonus Tokens (B)</div>
                <div className="data-details-des">
                  <span>956.00</span>
                  <span>(956 * 1)</span>
                </div>
              </li>
              {/* <!-- li --> */}
              <li>
                <div className="data-details-head">Total Tokens</div>
                <div className="data-details-des">
                  <span>
                    <strong>5,736.00</strong>
                  </span>
                  <span>(T+B)</span>
                </div>
              </li>
              {/* <!-- li --> */}
            </ul>
            {/* <!-- .data-details --> */}
          </div>
        </div>
        {/* <!-- .card --> */}
      </div>
      {/* <!-- .container --> */}
    </div>
    // <!-- .page-content -->
  );
};

export default withMainLayout(TransactionDetails);
