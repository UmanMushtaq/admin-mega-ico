import React from "react";
import { Tab, Tabs } from "react-bootstrap";
import CompaignTable from "./CompaignTable";
import RequestedBounty from "./RequestedBounty";
import withMainLayout from "./../HOC/withMainLayout";

const index = () => {
  return (
    <div class="page-content">
      <div class="container">
        <div class="card">
          <Tabs defaultActiveKey="btc">
            <Tab eventKey="btc" title="Bounty Compaign">
              <CompaignTable />
            </Tab>
            <Tab eventKey="ethereum" title="Requested Bounties">
              <RequestedBounty />
            </Tab>
          </Tabs>
        </div>
        {/* <!-- .card --> */}
      </div>
      {/* <!-- .container --> */}
    </div>
    // <!-- .page-content -->
  );
};

export default withMainLayout(index);
