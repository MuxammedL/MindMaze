import React from "react";
import {PostProvider}  from './context/PostContext.jsx';
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";


ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>

  
      <App />
    
  </BrowserRouter>
);
