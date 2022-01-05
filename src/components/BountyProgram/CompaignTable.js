import React, { Fragment, useState } from "react";
import MaterialTable from "material-table";
import { bountyProgram } from "./Languages/en";
import "./bountyProgram.scss";
import { Button } from "react-bootstrap";
import RequestBounty from "./RequestBounty";

const CompaignTable = () => {
  const [show, setShow] = useState(false);
  const [apply, setApply] = useState(false);

  const btnText = apply ? "Applied" : "Apply";
  const applyBtnVariant = apply ? "light" : "primary";
  const applybtnDisabled = apply ? true : false;

  const columns = [
    { title: "Bounty Name", field: "name" },
    { title: "Starting Period", field: "startingPeriod" },
    { title: "Ending Period", field: "endingPeriod" },
    {
      title: "Remaining Coins",
      field: "remainingCoins",
    },
    {
      title: "Total Coins",
      field: "totalCoins",
    },
    {
      title: "Pending Requests",
      field: "pendingRequests",
    },
    {
      title: "Action",
      field: "url",
      render: (rowData) => (
        <Fragment>
          <Button
            variant={applyBtnVariant}
            size="sm"
            disabled={applybtnDisabled}
            onClick={() => handleShow(rowData)}
          >
            {btnText}
          </Button>
        </Fragment>
      ),
    },
  ];
  const data = [
    {
      name: "Twitter Compaign",
      startingPeriod: "25-08-2020",
      endingPeriod: "25-09-2020",
      remainingCoins: 500,
      totalCoins: 500,
    },
    {
      name: "Instagram Compaign",
      startingPeriod: "25-08-2020",
      endingPeriod: "25-09-2020",
      remainingCoins: 500,
      totalCoins: 500,
    },
  ];

  // const onClickApply = (rowData) => {
  //   setApply(!apply);
  // };
  //Handling Confirmation Modal On Export Data of a User
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <section className="content">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="card">
              <MaterialTable
                title={bountyProgram.tableTitle}
                columns={columns}
                style={{
                  color: "#888",
                  zIndex: "0",
                }}
                data={data}
              />
              {/* <!-- /.card-body --> */}
            </div>
            {/* <!-- /.card --> */}
          </div>
          {/* ///////////////////////// */}
        </div>
      </div>
      <RequestBounty
        show={show}
        handleClose={handleClose}
        setApply={setApply}
      />
    </section>
  );
};

export default CompaignTable;
