import React from "react";
import { useNavigate } from "react-router-dom";

function Notfount() {
  const url = useNavigate();
  React.useEffect(() => {
    if (localStorage.getItem("token")) {
      url("/");
    }
  }, []);
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div>
        <h2>Login Page</h2>
        <button
          onClick={() => {
            localStorage.setItem("token", "This User Token");
            url(0);
          }}
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default Notfount;
