import React from "react";
import Header from "./Header";
import MenuList from "./MenuList";

const Layout = props => {
  return (
    <>
      <Header companyName={props.companyName} />
      <div className="container-fluid">
        <div className="row">
          <MenuList />
          <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
            <div className="mt-4">{props.children}</div>
          </main>
        </div>
      </div>
    </>
  );
};

export default Layout;
