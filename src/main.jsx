import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Routers from "./Routers/Routers.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div >
      <Routers></Routers>
    </div>
  </StrictMode>
);
