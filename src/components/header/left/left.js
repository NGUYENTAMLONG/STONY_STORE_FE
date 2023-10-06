import React from "react";

const headerLeftStyle = {
  height: "64px",
};
const logoStyle = {
  width: "150px",
  height: "100%",
};
const logoImgStyle = {
  objectFit: "contain",
  width: "150px",
  height: "100%",
};

export default function HeaderLeft() {
  return (
    <div className="header-left" style={headerLeftStyle}>
      <div className="logo" style={logoStyle}>
        <img src="/logo.png" style={logoImgStyle} alt="Logo" />
      </div>
    </div>
  );
}
