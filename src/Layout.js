import React from "react";
import { Outlet, useNavigate } from "react-router-dom";

function Layout() {
  const url = useNavigate();
  return (
    <div style={{ padding: "10px" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          gap: "30px",
        }}
      >
        <button onClick={() => url("/belajar-router/home")}>home</button>
        <button onClick={() => url("/belajar-router/about")}>about</button>
        <button
          style={{
            marginRight: "20px",
          }}
          onClick={() => url("/belajar-router/about-one")}
        >
          AboutOne
        </button>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
