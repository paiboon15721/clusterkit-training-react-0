import React, { useContext } from "react";
import { companyContext } from "../stores/company";

const App = () => {
  const { companyName, setCompanyName } = useContext(companyContext);
  return (
    <div className="form-group">
      <input
        className="form-control"
        value={companyName}
        onChange={e => setCompanyName(e.target.value)}
      />
    </div>
  );
};

export default App;
