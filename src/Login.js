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
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          maxWidth: "60%",
        }}
      >
        <h2>Login Page</h2>
        <p>
          you need to login first. when you are logged in you will be directed
          to the home page and you cannot return to the login page, unless
          you've logged out. You do not believe? Just try it!
        </p>
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
