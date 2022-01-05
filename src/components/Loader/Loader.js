import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

import React from "react";

export default function Loading() {
  return (
    <div
      style={{
        textAlign: "center",
        verticalAlign: "middle",
        lineHeight: "490px",
      }}
    >
      <Loader type="Oval" color="#253992" height={150} width={150} />
    </div>
  );
}
