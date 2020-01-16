import React from "react";
import Header from "./Header";
import MenuList from "./MenuList";

const Layout = props => {
  return (
    <>
      <Header />
      <div className="container-fluid">
        <div className="row">
          <MenuList />
          <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
            {props.children}
          </main>
        </div>
      </div>
    </>
  );
};

export default Layout;
