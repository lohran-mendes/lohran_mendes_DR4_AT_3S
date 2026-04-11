import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router";
import { Header } from "./components";
import { Home, FleetDashboard, VehicleRegister } from "./pages";

export function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cadastrar" element={<VehicleRegister />} />
          <Route path="/frota" element={<FleetDashboard />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
