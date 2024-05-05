import React from "react";
import ReactDOM from "react-dom/client";
import Application from "./Application";
import { BrowserRouter } from "react-router-dom";
import global from './global.css'
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Application />
  </BrowserRouter>
);
