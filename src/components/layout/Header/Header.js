import React, { useState } from "react";
import logoLight2x from "../../../assets/images/logo-light2x.png";
import browserRoute from "./../../../Routes/browserRoutes";
import { Link, useHistory } from "react-router-dom";
import { logout } from "../../../Redux/actions/actions";
import { useDispatch, useSelector } from "react-redux";

const user = JSON.parse(localStorage.getItem("userDetails"));
export default function Header() {
  const history = useHistory();
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  const [showDropdown, setShowDropdown] = useState({
    profile: false,
    calculator: false,
    language: false,
    time: false,
  });
  const [styleClass, setStyleClass] = useState("navbar");
  const [isDrawerActive, setIsDrawerActive] = useState(false);

  const onLogout = (e) => {
    e.preventDefault();
    dispatch(logout(history));
  };

  return (
    <div className="topbar-wrap my-nav">
      <div className="topbar is-sticky">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center">
            <ul className="topbar-nav d-lg-none">
              <li className="topbar-nav-item relative">
                <a className="toggle-nav" href="#">
                  <div
                    className="toggle-icon"
                    onClick={() =>
                      isDrawerActive
                        ? (setStyleClass("navbar"), setIsDrawerActive(false))
                        : (setStyleClass("navbar active"),
                          setIsDrawerActive(true))
                    }
                  >
                    <span className="toggle-line"></span>
                    <span className="toggle-line"></span>
                    <span className="toggle-line"></span>
                    <span className="toggle-line"></span>
                  </div>
                </a>
              </li>
              {/* <!-- .topbar-nav-item --> */}
            </ul>
            {/* <!-- .topbar-nav --> */}
            <Link className="topbar-logo" to={browserRoute.DASHBOARD}>
              <img src={logoLight2x} alt="logo" />
            </Link>

            <ul className="topbar-nav">
              <li className="topbar-nav-item relative">
                <span className="user-welcome d-none d-lg-inline-block">
                  Welcome! {user ? user.name : null}
                </span>
                <a
                  className="toggle-tigger user-thumb"
                  // href="#"
                  onClick={() => {
                    setShowDropdown({
                      profile: !showDropdown.profile,
                      calculator: false,
                      language: false,
                      time: false,
                    });
                  }}
                >
                  <em className="ti ti-user"></em>
                </a>
                {showDropdown.profile && (
                  <div className="toggle-className dropdown-content dropdown-content-right dropdown-arrow-right user-dropdown">
                    <>
                      <div className="user-status">
                        <h6 className="user-status-title">Token balance</h6>
                        <div className="user-status-balance">
                          12,000,000 <small>TWZ</small>
                        </div>
                      </div>
                      <ul className="user-links">
                        <li>
                          <Link to={browserRoute.PROFILE}>
                            <i className="ti ti-id-badge"></i>My Profile
                          </Link>
                        </li>
                        <li>
                          <Link to={browserRoute.ICO_DISTRIBUTION}>
                            <i className="ti ti-infinite"></i>Referral
                          </Link>
                        </li>
                        {/* <li>
                          <Link to="activity.html">
                            <i className="ti ti-eye"></i>Activity
                          </Link>
                        </li> */}
                      </ul>
                      <ul className="user-links bg-light">
                        <li>
                          <Link onClick={onLogout}>
                            <i className="ti ti-power-off"></i>Logout
                          </Link>
                        </li>
                      </ul>
                    </>
                  </div>
                )}
              </li>
              {/* <!-- .topbar-nav-item --> */}
            </ul>
            {/* <!-- .topbar-nav --> */}
          </div>
        </div>
        {/* <!-- .container --> */}
      </div>
      {/* <!-- .topbar --> */}
      <div className={styleClass}>
        <div className="container">
          <div className="navbar-innr">
            <ul className="navbar-menu">
              <li>
                <Link to={browserRoute.DASHBOARD}>
                  <em className="ikon ikon-dashboard"></em> Dashboard
                </Link>
              </li>
              <li>
                <Link to={browserRoute.USER_LIST}>
                  <em className="ikon ikon-coins"></em> User List
                </Link>
              </li>
              <li>
                <Link to={browserRoute.ICO_DISTRIBUTION}>
                  <em className="ikon ikon-distribution"></em> ICO Distribution
                </Link>
              </li>
              <li>
                <Link to={browserRoute.TRANSACTIONS}>
                  <em className="ikon ikon-transactions"></em> Transactions
                </Link>
              </li>
              <li>
                <Link to={browserRoute.BOUNTY_PROGRAM}>
                  <em className="ikon ikon-transactions"></em> Bounty Program
                </Link>
              </li>
              <li>
                <Link to={browserRoute.PROFILE}>
                  <em className="ikon ikon-user"></em> Profile
                </Link>
              </li>
            </ul>
            <ul className="navbar-btns">
              <li>
                <Link
                  to={browserRoute.KYC_LISTS}
                  className="btn btn-sm btn-outline btn-light"
                >
                  <em className="text-primary ti ti-files"></em>
                  <span>KYC Lists</span>
                </Link>
              </li>
            </ul>
          </div>
          {/* <!-- .navbar-innr --> */}
        </div>
        {/* <!-- .container --> */}
      </div>
      {/* <!-- .navbar --> */}
    </div>
  );
  {
    /* <!-- .topbar-wrap --> */
  }
}
