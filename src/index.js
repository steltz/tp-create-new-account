import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStateProvider from "./store/GlobalStateProvider";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStateProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} redirect>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </GlobalStateProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
