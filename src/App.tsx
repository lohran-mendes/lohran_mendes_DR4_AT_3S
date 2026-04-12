import { BrowserRouter, Route, Routes } from "react-router";
import { Home, FleetDashboard, VehicleRegister, VehicleDetails, NotFound } from "./pages";
import { RootLayout } from "./layouts/root/RootLayout";
import type { Vehicle } from "./types/vehicle.types";
import { useState } from "react";

const mockVehicles: Vehicle[] = [
  { brand: "Toyota", model: "Corolla", licensePlate: "ABC-1234" },
  { brand: "Honda", model: "Civic", licensePlate: "XYZ-5678" },
  { brand: "Ford", model: "Focus", licensePlate: "DEF-9012" },
];

export function App() {
  const [vehicles, setVehicles] = useState<Vehicle[]>(mockVehicles);

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="/" element={<Home />} />
          <Route
            path="/cadastrar"
            element={<VehicleRegister vehicles={vehicles} setVehicles={setVehicles} />}
          />
          <Route path="/veiculo/:id" element={<VehicleDetails vehicle={vehicles} />} />
          <Route
            path="/frota"
            element={<FleetDashboard vehicles={vehicles} setVehicles={setVehicles} />}
          />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
