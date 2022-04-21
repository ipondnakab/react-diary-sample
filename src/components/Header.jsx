import React from "react";

function Header({ title, subtitle }) {
  return (
    <div>
      <h2 style={{ fontWeight: "normal", marginBottom: "4px" }}>{title}</h2>
      <span style={{ color: "#AAA", fontSize: "12px" }}>{subtitle}</span>
      <hr></hr>
    </div>
  );
}

export default Header;
