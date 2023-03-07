import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./../components/Main/index"
const route = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
};

export default route;
