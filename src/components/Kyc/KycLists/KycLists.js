import React from "react";
import { Link } from "react-router-dom";
import browserRoute from "../../../Routes/browserRoutes";
import withMainLayout from "../../HOC/withMainLayout";
import passportA from "../../../assets/images/passport-a-back.jpg";
import { useState } from "react";

const KycLists = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const toogleMenuBtn = (e) => {
    e.preventDefault();
    setToggleMenu(!toggleMenu);
  };

  return (
    <>
      <div className="page-content">
        <div className="container">
          <div className="content-area card">
            <div className="card-innr">
              <div className="card-head">
                <h4 className="card-title">KYC List</h4>
              </div>
              <table className="data-table dt-init kyc-list">
                <thead>
                  <tr className="data-item data-head">
                    <th className="data-col dt-user">User</th>
                    <th className="data-col dt-doc-type">Doc Type</th>
                    <th className="data-col dt-doc-front">Documents</th>
                    <th className="data-col dt-doc-back">&nbsp;</th>
                    <th className="data-col dt-status">Status</th>
                    <th className="data-col"></th>
                  </tr>
                </thead>
                <tbody>
                  {[1, 2, 3, 4, 5].map((item) => (
                    <tr className="data-item" key={item}>
                      <td className="data-col dt-user">
                        <span className="lead user-name">Abu Bin Ishtiyak</span>
                        <span className="sub user-id">UD102001</span>
                      </td>
                      <td className="data-col dt-doc-type">
                        <span className="sub sub-s2 sub-dtype">
                          National ID Card
                        </span>
                      </td>
                      <td className="data-col dt-doc-front">
                        <a
                          href="images/passport-a-fornt.jpg"
                          className="image-popup"
                        >
                          Front Part
                        </a>{" "}
                        &nbsp; &nbsp;{" "}
                        <a href="#">
                          <em className="fas fa-download"></em>
                        </a>
                      </td>
                      <td className="data-col dt-doc-back">
                        <a
                          href="images/passport-a-back.jpg"
                          className="image-popup"
                        >
                          Back Part
                        </a>{" "}
                        &nbsp; &nbsp;{" "}
                        <a href="#">
                          <em className="fas fa-download"></em>
                        </a>
                      </td>
                      <td className="data-col dt-status">
                        <span className="dt-status-md badge badge-outline badge-success badge-md tran-btn">
                          Approved
                        </span>
                      </td>
                      <td className="data-col text-right">
                        <div className="relative d-inline-block">
                          <a
                            href="#"
                            className="btn btn-light-alt btn-xs btn-icon toggle-tigger"
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
                                <Link
                                  to={`${browserRoute.KYC_DETAILS_BTN}${item}`}
                                >
                                  <em className="ti ti-eye"></em> View Details
                                </Link>
                              </li>
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
                      </td>
                    </tr>
                  ))}

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
    </>
  );
};

export default withMainLayout(KycLists);
