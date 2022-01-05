import axios from "axios";
import {
  UPDATE_USER_SUCCESS,
  UPDATE_USER_ERR,
  UPDATE_PASSWORD_SUCCESS,
  UPDATE_PASSWORD_ERR,
  ENABLE_2FA_SUCCESS,
  ENABLE_2FA_ERR,
  UPDATE_2FA_STATUS_SUCCESS,
  UPDATE_2FA_STATUS_ERR,
  GET_ALL_USERS_SUCCESS,
  GET_ALL_USERS_FAIL,
} from "../Redux/actions/types";
import { profile } from "../Routes/serverRoutes";
import { KYC, users } from "../Routes/serverRoutes";
import { toast } from "react-toastify";
import browserRoute from "../Routes/browserRoutes";
import { Link, useHistory } from "react-router-dom";
// import KycTier1 from "../components/Kyc/KycApplication/KycTier1";

//alert toast
const alertToast = (error, message) => {
  if (!error) {
    toast.success(message, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  } else {
    toast.error(message, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }
};
//Update User Details
export const updateUserDetails =
  ({ formData, setUserUpdated }) =>
  (dispatch) => {
    axios
      .put(profile.UPDATE_USER_DETAILS, formData)
      .then(async (res) => {
        await dispatch({
          type: UPDATE_USER_SUCCESS, // reducers are on reducers/auth.js file
          payload: res.data,
        });
        toast.success(res.data.msg);
        setUserUpdated(true);
      })
      .catch((err) => {
        const errMsg = err?.response?.data?.msg || "Oppps, Something wrong...";

        dispatch({
          type: UPDATE_USER_ERR, // reducers are on reducers/auth.js file
        });

        toast.error(errMsg);
        setUserUpdated(false);
      });
  };

//Update Password
export const updatePassword =
  ({ formData, setFormData, initialvalues, setPasswordUpdated }) =>
  (dispatch) => {
    axios
      .put(profile.UPDATE_PASSWORD, formData)
      .then(async (res) => {
        await dispatch({
          type: UPDATE_PASSWORD_SUCCESS, // reducers are on reducers/auth.js file
          payload: res.data,
        });
        toast.success(res.data.msg);
        setPasswordUpdated(true);
        setFormData(initialvalues);
      })
      .catch((err) => {
        const errMsg = err?.response?.data?.msg || "Oppps, Something wrong...";

        dispatch({
          type: UPDATE_PASSWORD_ERR, // reducers are on reducers/auth.js file
        });

        toast.error(errMsg);
        setPasswordUpdated(false);
      });
  };

//Enable 2FA
export const enableGoogleAuth = () => (dispatch) => {
  axios
    .get(profile.ENABLE_GOOGLE_AUTH)
    .then((res) => {
      // console.log("res----->", res.data);
      dispatch({
        type: ENABLE_2FA_SUCCESS, // reducers are on reducers/auth.js file
        payload: { googleAuth: res && res.data && res.data },
      });
    })
    .catch((err) => {
      console.log(err);
      dispatch({
        type: ENABLE_2FA_ERR, // reducers are on reducers/auth.js file
      });
    });
};

// Update Google Authentication Status
export const update2FaStatus =
  ({ status, setLoading }) =>
  async (dispatch) => {
    setLoading(true);
    axios
      .put(profile.UPDATE_GOOGLE_AUTH_STATUS, { status })
      .then(async (res) => {
        console.log(res);
        await dispatch({
          type: UPDATE_2FA_STATUS_SUCCESS,
          payload: { userDetails: res.data.data },
        });
        let successMessage = res?.data?.msg || res.message;
        alertToast(false, successMessage);
        setLoading(false);
        window.location.reload();
      })
      .catch((err) => {
        setLoading(false);
        let errorMessage = err?.response?.data?.msg || err.message;
        alertToast(true, errorMessage);
        dispatch({
          type: UPDATE_2FA_STATUS_ERR,
        });
      });
  };

//Get compliance tiers status of LoggedIn user

export const GetAllUsers = (setUsersData, setLoading) => (dispatch) => {
  setLoading(true);
  axios
    .get(users.GET_ALL_USERS)
    .then((res) => {
      console.log(res);
      setLoading(false);
      setUsersData(res.data?.data);
    })
    .catch((err) => {
      setLoading(false);
      let errorMessage = err?.response?.data?.msg || err.message;
      alertToast(true, errorMessage);
      dispatch({
        type: GET_ALL_USERS_FAIL,
      });
    });
};

