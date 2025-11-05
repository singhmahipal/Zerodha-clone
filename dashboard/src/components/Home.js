import React from "react";
import { Routes, Route } from "react-router-dom";
import { AuthProvider } from "../context/AuthContext";

import TopBar from "./TopBar";
import Dashboard from "./Dashboard";

const Home = () => {
  return (
    <AuthProvider>
      <>
        <TopBar />
        <Dashboard />
      </>
    </AuthProvider>
  );
};

export default Home;