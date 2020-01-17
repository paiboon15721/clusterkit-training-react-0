import React, { useContext } from "react";
import { companyContext } from "../../stores/company";

export default () => {
  const { companyName } = useContext(companyContext);
  return (
    <span className="navbar-brand col-sm-3 col-md-2 mr-0" href="#">
      {companyName}
    </span>
  );
};
