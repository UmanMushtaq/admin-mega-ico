import React from "react";
import Header from "../layout/Header/Header";
import Footer from "../layout/Footer/Footer";

const withMainLayout = (WrappedComponent) => {
  const WithMain = (props) => {
    return (
      <div>
        <Header />
        <WrappedComponent {...props} />
        <Footer />
      </div>
    );
  };

  return WithMain;
};

export default withMainLayout;
