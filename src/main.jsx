import { StrictMode, lazy } from "react";
import { createRoot } from "react-dom/client";

// Supports weights 100-900
import "@fontsource-variable/inter";
// Supports weights 400-700
import "@fontsource-variable/lora";
// Supports weights 200-900
import "@fontsource-variable/inconsolata";

import "./output.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
