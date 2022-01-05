import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import browserRoute from "../../../Routes/browserRoutes";
import withAuthLayout from "../../HOC/withAuthLayout";
import { useDispatch } from "react-redux";
import { login } from "../../../Redux/actions/actions";
import { verifyGoogleAuthCode } from "../../../Redux/actions/actions";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
// import Loader from "react-loader-spinner";
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > * + *": {
      marginLeft: theme.spacing(5),
    },
  },
}));

const SignIn = () => {
  const classes = useStyles();

  let history = useHistory();
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    role: "admin",
    // authenticator: "",
  });

  const [verificationPage, setVerificationPage] = useState({
    googlePage: false,
  });
  const [loading, setLoading] = useState(false);
  const { email, password } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(login({ formData, history, setVerificationPage, setLoading }));
    // history.push(browserRoute.DASHBOARD);
  };
  const onSubmitAuthenticator = (e) => {
    e.preventDefault();
    console.log("id------>>", auth.authentication.id);
    let user = auth.authentication.id;

    console.log(formData.authenticator);
    dispatch(
      verifyGoogleAuthCode({
        user: auth.authentication.id,
        setVerificationPage,
        verificationCode: formData.authenticator,
        history,
        setLoading,
      })
    );
  };

  return (
    <div className="page-ath-form">
      {verificationPage.googlePage ? (
        <>
          <h2 className="page-ath-heading">
            Google Authentication <small>with your TokenWiz Account</small>
          </h2>
          <form onSubmit={onSubmitAuthenticator}>
            <div className="input-item">
              <input
                type="text"
                placeholder="Authenticator Code"
                className="input-bordered"
                name="authenticator"
                value={formData.authenticator}
                onChange={(e) => onChange(e)}
                required
              />
            </div>
            <div className="d-flex justify-content-between align-items-center"></div>
            <button className="btn btn-primary btn-block" type="submit">
              Submit
              {loading ? (
                <>
                  <i
                    class="spinner-border text-light ml-3"
                    style={{ width: "20px", height: "20px" }}
                    role="status"
                  >
                    <span class="sr-only"></span>
                  </i>
                </>
              ) : null}
            </button>
          </form>
        </>
      ) : (
        <>
          <h2 className="page-ath-heading">
            Sign in <small>with your TokenWiz Account</small>
          </h2>
          <form onSubmit={onSubmit}>
            <div className="input-item">
              <input
                type="text"
                placeholder="Your Email"
                className="input-bordered"
                name="email"
                value={email}
                onChange={(e) => onChange(e)}
                required
              />
            </div>
            <div className="input-item">
              <input
                type="password"
                placeholder="Password"
                className="input-bordered"
                name="password"
                value={password}
                onChange={(e) => onChange(e)}
                required
              />
            </div>
            <div className="d-flex justify-content-between align-items-center">
              {/* <div className="input-item text-left">
            <input
              className="input-checkbox input-checkbox-md"
              id="remember-me"
              type="checkbox"
            />
            <label for="remember-me">Remember Me</label>
          </div> */}
              <div>
                <Link to={browserRoute.FORGOT_PASSWORD}>Forgot password?</Link>
                <div className="gaps-2x"></div>
              </div>
            </div>
            <button className="btn btn-primary btn-block" type="submit">
              Sign In
              {loading ? (
                <>
                  <i
                    class="spinner-border text-light ml-3"
                    style={{ width: "20px", height: "20px" }}
                    role="status"
                  >
                    <span class="sr-only"></span>
                  </i>
                </>
              ) : null}
            </button>
          </form>

          <div className="gaps-2x"></div>
          <div className="gaps-2x"></div>
        </>
      )}
    </div>
  );
};
export default withAuthLayout(SignIn);
