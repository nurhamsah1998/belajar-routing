import React from "react";
import { useNavigate } from "react-router-dom";

function Notfount() {
  const url = useNavigate();
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
        <h2>Oops, Error 404</h2>
        <button onClick={() => url("/")}>Go to Home</button>
      </div>
    </div>
  );
}

export default Notfount;
