import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUserDetails } from "../../../Redux/actions/actions";
import PersonalDataModel from "./PersonalDataModal";
const PersonalData = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.userDetails);
  const [userUpdated, setUserUpdated] = useState(false);
  const [showProfileUpdateModal, setShowProfileUpdateModal] = useState(false); // It shows ProfileUpdate modal

  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    contact_no: "",
    dob: "",
    nationality: "",
    address: "",
  });
  const { fname, lname, contact_no, dob, nationality, address } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const popUpModal = () => {
    setShowProfileUpdateModal(true);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    formData.email = user?.email || "";
    dispatch(updateUserDetails({ formData, setUserUpdated }));
  };
  console.log("hey User ------------->>>>>>>>>>", user);

  return (
    <div className="tab-pane fade show active" id="personal-data">
      <form onSubmit={onSubmit}>
        <div className="row">
          <div className="col-md-6">
            <div className="input-item input-with-label">
              <label htmlFor="full-name" className="input-item-label">
                First Name
              </label>
              <input
                className="input-bordered"
                type="text"
                id="full-name"
                defaultValue={user?.name || ""}
                name="fname"
                disabled
                readOnly
              />
            </div>
            {/* <!-- .input-item --> */}
          </div>
          <div className="col-md-6">
            <div className="input-item input-with-label">
              <label htmlFor="full-name" className="input-item-label">
                Last Name
              </label>
              <input
                className="input-bordered"
                type="text"
                id="full-name"
                defaultValue={
                  lname === ""
                    ? user?.lname || "Enter Last Name"
                    : "Enter Full Name"
                }
                disabled
                readOnly
              />
            </div>
            {/* <!-- .input-item --> */}
          </div>
          <div className="col-md-6">
            <div className="input-item input-with-label">
              <label htmlFor="email-address" className="input-item-label">
                Email Address
              </label>
              <input
                className="input-bordered"
                type="email"
                id="email-address"
                name="email"
                defaultValue={user?.email || ""}
                disabled
                readOnly
              />
            </div>
            {/* <!-- .input-item --> */}
          </div>
          <div className="col-md-6">
            <div className="input-item input-with-label">
              <label htmlFor="mobile-number" className="input-item-label">
                Mobile Number
              </label>
              <input
                className="input-bordered"
                type="text"
                id="mobile-number"
                name="contact_no"
                defaultValue={user?.contact_no || ""}
                disabled
                readOnly
              />
            </div>
            {/* <!-- .input-item --> */}
          </div>
          <div className="col-md-6">
            <div className="input-item input-with-label">
              <label htmlFor="date-of-birth" className="input-item-label">
                Date of Birth
              </label>
              <input
                className="input-bordered date-picker-dob"
                type="date"
                id="date-of-birth"
                name="dob"
                defaultValue={user?.dob || ""}
                disabled
                readOnly
              />
            </div>
            {/* <!-- .input-item --> */}
          </div>
          {/* <!-- .col --> */}
          <div className="col-md-6">
            <div className="input-item input-with-label">
              <label htmlFor="nationality" className="input-item-label">
                Nationality
              </label>
              <input
                className="input-bordered"
                type="text"
                id="mobile-number"
                defaultValue={user?.nationality || ""}
                name="nationality"
                disabled
                readOnly
              />
            </div>{" "}
          </div>
          {/* <!-- .input-item --> */}
          <div className="col-md-6">
            <div className="input-item input-with-label">
              <label htmlFor="address" className="input-item-label">
                address
              </label>
              <input
                className="input-bordered date-picker-dob"
                type="text"
                id="address"
                name="address"
                defaultValue={user?.address || ""}
                disabled
                readOnly
              />
            </div>
            {/* <!-- .input-item --> */}
          </div>
          {/* <!-- .col --> */}
        </div>
        {/* <!-- .row --> */}
        <div className="gaps-1x"></div>
        {/* <!-- 10px gap --> */}
        {/* <div className="d-sm-flex justify-content-between align-items-center">
          <button className="btn btn-primary" type="submit">
            Update Profile
          </button>

          <div className="gaps-2x d-sm-none"></div>
          {userUpdated && (
            <span className="text-success">
              <em className="ti ti-check-box"></em> All Changes are saved
            </span>
          )}
        </div> */}
      </form>
      <button className="btn btn-primary" onClick={popUpModal}>
        Edit
      </button>
      <PersonalDataModel
        showProfileUpdateModal={showProfileUpdateModal}
        setShowProfileUpdateModal={setShowProfileUpdateModal}
      />
    </div>
  );
};

export default PersonalData;
