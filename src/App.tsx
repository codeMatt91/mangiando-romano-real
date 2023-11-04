import React from "react";
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import "./App.css";
import Layout from "./Components/Layout";
import Home from "./Components/Home";
import Restaurants from "./Components/Restaurants";
import Login from "./Components/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path="/restaurants"
            element={<Restaurants />}
          />
          <Route
            path="/login"
            element={<Login />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
