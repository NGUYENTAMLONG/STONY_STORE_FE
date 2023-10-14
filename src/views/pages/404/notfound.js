import React from "react";
import notfound from "../../../assets/images/exceptions/404 Error.svg";

export default function Notfound() {
  return (
    <div className="not-found-404 container">
      <img
        src={notfound}
        style={{ width: "100%", height: "100%", objectFit: "contain" }}
      />
    </div>
  );
}
