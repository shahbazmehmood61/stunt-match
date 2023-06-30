import React from "react";

function Header(props: HeaderProps) {
  const { title, logo } = props;

  return (
    <div className="header">
      <img src={logo} style={{ width: 200, margin: "0px auto" }} />
      <h3>Position: {title}</h3>
    </div>
  );
}

export default Header;

interface HeaderProps {
  title: string;
  logo: string;
}
