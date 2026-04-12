import { BrowserRouter, Route, Routes } from "react-router";
import { Home, FleetDashboard, VehicleRegister, VehicleDetails } from "./pages";
import { RootLayout } from "./layouts/root/RootLayout";
import type { Vehicle } from "./types/vehicle.types";
import { useState } from "react";

export function App() {
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="/" element={<Home />} />
          <Route
            path="/cadastrar"
            element={<VehicleRegister setVehicles={setVehicles} />}
          />
          <Route path="/veiculo/:id" element={<VehicleDetails />} />
          <Route
            path="/frota"
            element={<FleetDashboard vehicles={vehicles} />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
