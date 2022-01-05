import React, { useEffect, useState } from "react";
import { Button, Modal, Col, Card, Form, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { update2FaStatus } from "../../../Redux/actions/actions";
import { loadUser } from "../../../Redux/actions/actions";
import { updateUserDetails } from "../../../Redux/actions/actions";

import { useSelector } from "react-redux";

const PersonalDataModal = ({
  showProfileUpdateModal,
  setShowProfileUpdateModal,
}) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.userDetails);
  const [userUpdated, setUserUpdated] = useState(false);
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
  const onSubmit = (e) => {
    e.preventDefault();
    formData.email = user?.email || "";
    dispatch(updateUserDetails({ formData, setUserUpdated }));
  };

  const auth = useSelector((state) => state.auth);
  const [status, setStatus] = useState(undefined);
  const [loading, setLoading] = useState(false);

  const handleClose = () => {
    setShowProfileUpdateModal(false);
  };

  const onEnable2Fa = async (e) => {
    e.preventDefault();
    dispatch(update2FaStatus({ status: true, setLoading }));
  };

  useEffect(() => {
    setStatus(auth.userDetails.is_google_authentication_on);
  }, []);

  return (
    <Modal
      size="lg"
      show={showProfileUpdateModal}
      onHide={handleClose}
      style={{ opacity: 1 }}
      centered
    >
      <Card>
        <Card.Header className="card-header-font">
          Update Profile
          <button type="button" className="close" onClick={handleClose}>
            <span className="font-18">&times;</span>
          </button>
        </Card.Header>
        <Card.Body>
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
                      placeholder={
                        fname === ""
                          ? user?.fname || "Enter First Name"
                          : "Enter First Name"
                      }
                      name="fname"
                      value={fname}
                      onChange={(e) => onChange(e)}
                      required
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
                      placeholder={
                        lname === ""
                          ? user?.lname || "Enter Last Name"
                          : "Enter Full Name"
                      }
                      name="lname"
                      value={lname}
                      onChange={(e) => onChange(e)}
                      required
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
                      placeholder={
                        contact_no === ""
                          ? user?.contact_no || "Enter Contact No."
                          : "Enter Contact No."
                      }
                      value={contact_no}
                      onChange={(e) => onChange(e)}
                      required
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
                      placeholder={
                        dob === ""
                          ? user?.dob || "Enter Date of Birth"
                          : "Enter Date of Birth"
                      }
                      value={dob}
                      onChange={(e) => onChange(e)}
                      required
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
                      placeholder={
                        nationality === ""
                          ? user?.nationality || "Enter Nationality"
                          : "Enter Nationality"
                      }
                      name="nationality"
                      value={nationality}
                      onChange={(e) => onChange(e)}
                      required
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
                      placeholder={
                        address === ""
                          ? user?.address || "Enter Address"
                          : "Enter Address"
                      }
                      value={address}
                      onChange={(e) => onChange(e)}
                      required
                    />
                  </div>
                  {/* <!-- .input-item --> */}
                </div>
                {/* <!-- .col --> */}
              </div>
              {/* <!-- .row --> */}
              <div className="gaps-1x"></div>
              {/* <!-- 10px gap --> */}
              <div className="d-sm-flex justify-content-between align-items-center">
                <button className="btn btn-primary" type="submit">
                  Update Profile
                </button>

                <div className="gaps-2x d-sm-none"></div>
                {userUpdated && (
                  <span className="text-success">
                    <em className="ti ti-check-box"></em> All Changes are saved
                  </span>
                )}
              </div>
            </form>
          </div>
        </Card.Body>
      </Card>
    </Modal>
  );
};

export default PersonalDataModal;
