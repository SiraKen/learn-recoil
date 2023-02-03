import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { RecoilRoot } from "recoil";
import routes from "./router";
import { HelmetProvider } from "react-helmet-async";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <HelmetProvider>
      <RecoilRoot>
        <RouterProvider router={routes} />
      </RecoilRoot>
    </HelmetProvider>
  </React.StrictMode>
);
