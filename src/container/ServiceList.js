import React from "react";
import MenuItem from "../components/MenuItem";

function ServiceList(props) {
  const { service } = props;
  return (
    <div>
      {service.map((item) => {
        return <MenuItem item={item} key={item.id} />;
      })}
    </div>
  );
}

export default ServiceList;
