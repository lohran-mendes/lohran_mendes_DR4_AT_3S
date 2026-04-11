import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router";
import { Home, FleetDashboard, VehicleRegister } from "./pages";
import { Header } from "./components";

const root = document.getElementById("root")!;

createRoot(root).render(
  <StrictMode>
    <BrowserRouter>
      <Header />
      <div className="root-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cadastrar" element={<VehicleRegister />} />
          <Route path="/frota" element={<FleetDashboard />} />
        </Routes>
      </div>
    </BrowserRouter>
  </StrictMode>,
);
