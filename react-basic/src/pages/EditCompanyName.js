import React from "react";

const App = props => {
  return (
    <div className="form-group">
      <input
        className="form-control"
        value={props.companyName}
        onChange={e => props.setCompanyName(e.target.value)}
      />
    </div>
  );
};

export default App;
