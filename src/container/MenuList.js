import React from "react";
import MenuItem from "../components/MenuItem";

function MenuList(props) {
  const { infoList } = props;
  return (
    <ul>
      {infoList.map((item) => {
        return <MenuItem item={item} key={item.id} />;
      })}
      {/* <li>
        <img src="./images/checkbox.png" alt="1" className="img" />
        <p>aa</p>
      </li>
      <li>
        <img src="./images/circle.png" alt="2" className="img" />
        <p>bb</p>
      </li>
      <li>
        <img src="./images/edit.png" alt="3" className="img" />
        <p>cc</p>
      </li>
      <li>
        <img src="./images/trash.png" alt="4" className="img" />
        <p>dd</p>
      </li> */}
    </ul>
  );
}

export default MenuList;
