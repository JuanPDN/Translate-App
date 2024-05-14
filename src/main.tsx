import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { AppProvider } from "./contexts/AppContext.tsx";
import { LangProvider } from "./contexts/LangContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <LangProvider>
      <AppProvider>
        <App />
      </AppProvider>
    </LangProvider>
  </React.StrictMode>
);
