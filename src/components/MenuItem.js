import React from "react";

function MenuItem(props) {
  const { item } = props;
  return (
    <li>
      <img src={item.src} alt="1" className="img" />
      <p>{item.title}</p>
    </li>
  );
}

export default MenuItem;
