import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import browserRoute from "../../Routes/browserRoutes";
import withMainLayout from "../HOC/withMainLayout";
import Loader from "../Loader/Loader";
import { useDispatch } from "react-redux";
import { GetAllUsers } from "../../Redux/actions/actions";
const UserList = () => {
  let history = useHistory();
  const dispatch = useDispatch();
  const [toggleMenu, setToggleMenu] = useState(false);
  const [loading, setLoading] = useState(true);
  const [usersData, setUsersData] = useState([]);
  const toogleMenuBtn = (e) => {
    e.preventDefault();
    setToggleMenu(!toggleMenu);
  };
  useEffect(() => {
    dispatch(GetAllUsers(setUsersData, setLoading));
  }, []);

  return (
    <div className="page-content">
      <div className="container">
        <div className="card content-area">
          <div className="card-innr">
            <div className="card-head">
              <h4 className="card-title">User List</h4>
            </div>
            {loading ? (
              <>
                <Loader />
              </>
            ) : (
              <>
                <table className="data-table dt-init user-list">
                  <thead>
                    <tr className="data-item data-head">
                      <th className="data-col dt-user">User</th>
                      <th className="data-col dt-email">Email</th>
                      <th className="data-col dt-token">Tokens</th>
                      <th className="data-col dt-verify">Verified Status</th>
                      {/* <th className="data-col dt-login">Last Login</th> */}
                      <th className="data-col dt-status">
                        <div className="dt-status-text">Status</div>
                      </th>
                      <th className="data-col"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {usersData.map((user, key) => (
                      <tr className="data-item" key={key}>
                        <td className="data-col dt-user">
                          <span className="lead user-name">{user.fname}</span>
                          <span className="sub user-id">{user._id}</span>
                        </td>
                        <td className="data-col dt-email">
                          <span className="sub sub-s2 sub-email">
                            {user.email}
                          </span>
                        </td>
                        <td className="data-col dt-token">
                          <span className="lead lead-btoken">35,040</span>
                        </td>
                        <td className="data-col dt-verify">
                          <ul className="data-vr-list">
                            <li>
                              {user.is_email_verified ? (
                                <div className="data-state data-state-sm data-state-approved"></div>
                              ) : (
                                <div className="data-state data-state-sm data-state-pending"></div>
                              )}
                              Email
                            </li>
                            <li>
                              <div className="data-state data-state-sm data-state-pending"></div>
                              KYC
                            </li>
                          </ul>
                        </td>
                        {/* <td className="data-col dt-login">
                          <span className="sub sub-s2 sub-time">
                            2018-08-24 10:20 PM
                          </span>
                        </td> */}
                        <td className="data-col dt-status">
                          <span className="dt-status-md badge badge-outline badge-success badge-md tran-btn">
                            Active
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
                                    to={`${browserRoute.USER_DETAIL_BTN}${user}`}
                                  >
                                    <em className="ti ti-eye"></em> View Details
                                  </Link>
                                </li>
                                <li>
                                  <a href="#">
                                    <em className="ti ti-na"></em> Suspend
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
                  </tbody>
                </table>
              </>
            )}
          </div>
          {/* <!-- .card-innr --> */}
        </div>
        {/* <!-- .card --> */}
      </div>
      {/* <!-- .container --> */}
    </div>
  );
};

export default withMainLayout(UserList);
