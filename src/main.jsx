import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { CarsProvider } from "./contexts/carsContext.jsx";
import { ThemeProvider } from "./contexts/themeContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <CarsProvider>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </CarsProvider>
    </BrowserRouter>
  </StrictMode>,
);
