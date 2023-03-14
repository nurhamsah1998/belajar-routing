import React from "react";
import { Outlet, useNavigate } from "react-router-dom";

function Layout() {
  const url = useNavigate();
  React.useEffect(() => {
    if (!localStorage.getItem("token")) {
      url("/login");
    }
  }, []);
  return (
    <div>
      <header
        style={{
          position: "sticky",
          top: 0,
          padding: "10px",
          backgroundColor: "blue",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            gap: "30px",
          }}
        >
          <button onClick={() => url("/home")}>Home</button>
          <button onClick={() => url("/about")}>About</button>
          <button
            style={{
              marginRight: "20px",
            }}
            onClick={() => url("/about-one")}
          >
            About One
          </button>
          <button
            style={{
              marginRight: "20px",
              backgroundColor: "red",
              color: "#fff",
            }}
            onClick={() => {
              localStorage.clear();
              url(0);
            }}
          >
            Log out
          </button>
        </div>
      </header>
      <div
        style={{
          height: "50vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
