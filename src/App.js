import { BrowserRouter, Switch, Route } from "react-router-dom";

import SignIn from "./components/Authentication/SignIn/SignIn";

import Dashboard from "./components/Dashboard/Dashboard";
import UserList from "./components/UserList/UserList";
import UserDetail from "./components/UserList/UserDetail/UserDetail";
import IcoDistribution from "./components/IcoDistribution/IcoDistribution";
import Transactions from "./components/Transactions/Transactions";
import Profile from "./components/Profile/Profile";
import KycLists from "./components/Kyc/KycLists/KycLists";
import KycDetails from "./components/Kyc/KycDetails/KycDetails";
import BountyProgram from "./components/BountyProgram";
import TransactionDetails from "./components/Transactions/TransactionDetails/TransactionDetails";
import TermsAndCond from "./components/TermsAndCond/TermsAndCond";
import Error404 from "./components/404/Error404";

import browserRoute from "./Routes/browserRoutes";
import AuthRoute from "./components/HOC/AuthRoute";
import PrivateRoute from "./components/HOC/PrivateRoute";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <AuthRoute exact path={browserRoute.SIGNIN} component={SignIn} />

          <PrivateRoute
            exact
            path={browserRoute.DASHBOARD}
            component={Dashboard}
          />
          <PrivateRoute
            exact
            path={browserRoute.USER_LIST}
            component={UserList}
          />
          <PrivateRoute
            exact
            path={browserRoute.USER_DETAIL}
            component={UserDetail}
          />
          <PrivateRoute
            exact
            path={browserRoute.ICO_DISTRIBUTION}
            component={IcoDistribution}
          />
          <PrivateRoute
            exact
            path={browserRoute.TRANSACTIONS}
            component={Transactions}
          />
          <PrivateRoute
            exact
            path={browserRoute.KYC_LISTS}
            component={KycLists}
          />
          <PrivateRoute
            exact
            path={browserRoute.KYC_DETAILS}
            component={KycDetails}
          />

          <PrivateRoute exact path={browserRoute.PROFILE} component={Profile} />
          <PrivateRoute
            exact
            path={browserRoute.BOUNTY_PROGRAM}
            component={BountyProgram}
          />

          <PrivateRoute
            exact
            path={browserRoute.TERMS}
            component={TermsAndCond}
          />
          <PrivateRoute
            exact
            path={browserRoute.TRANSACTION_DETAILS}
            component={TransactionDetails}
          />
          <Route path="/" component={Error404} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
