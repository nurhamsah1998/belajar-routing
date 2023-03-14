import React from "react";
import { Routes, Route, Link, Navigate } from "react-router-dom";
import About from "./About";
import AboutOne from "./AboutOne";
import Home from "./Home";
import Layout from "./Layout";
import Login from "./Login";
import Notfount from "./Notfount";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route
        path="/"
        element={<Layout />}
        children={
          <React.Fragment>
            <Route path="home" element={<Home />} />
            <Route path="about-one" element={<AboutOne />} />
            <Route path="about" element={<About />} />
          </React.Fragment>
        }
      />
      <Route path="alamat-tidak-ditemukan" element={<Notfount />} />
      <Route path="login" element={<Login />} />
      <Route path="*" element={<Navigate to="/alamat-tidak-ditemukan" />} />

    </Routes>
  );
}

export default App;
