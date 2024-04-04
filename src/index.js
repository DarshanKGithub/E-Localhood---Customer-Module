import React from "react";
import "./index.css";
import App from "./App";
import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import ReactDOM from "react-dom/client";
import { Axios } from "axios";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// const rootElement = document.getElementById('root');
// const root = createRoot(rootElement);

// const root = ReactDOM.createRoot(
//   document.getElementById("root")
// );

// root.render(
//   <BrowserRouter>
//  <App/>
//   </BrowserRouter>,
// document.getElementById('root')
// )

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
