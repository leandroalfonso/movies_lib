import React from "react";
import { Link, Outlet } from "react-router-dom";
import { useState } from "react";
import reactLogo from "./assets/react.svg";


import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  return (
    <div>
      <div className="App">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <img src="img1.jpg" alt="Imagem 1" />
            </div>
            <div className="col-md-8">
              <h1>Solidarize-se</h1>
              <hr />
              <h6>Ajude a ajudar pessoas, faça sua parte</h6>
            </div>
          </div>
        </div>

        <Outlet />
      </div>
    </div>
  );
}

export default App;
